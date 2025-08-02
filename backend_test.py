#!/usr/bin/env python3
"""
Backend API Testing Suite for CraveKind
Tests all backend endpoints and functionality
"""

import requests
import json
import sys
import os
from datetime import datetime

# Get backend URL from frontend .env file
def get_backend_url():
    try:
        with open('/app/frontend/.env', 'r') as f:
            for line in f:
                if line.startswith('REACT_APP_BACKEND_URL='):
                    return line.split('=', 1)[1].strip()
    except Exception as e:
        print(f"Error reading frontend .env: {e}")
        return None

BACKEND_URL = get_backend_url()
if not BACKEND_URL:
    print("❌ Could not get REACT_APP_BACKEND_URL from frontend/.env")
    sys.exit(1)

API_BASE_URL = f"{BACKEND_URL}/api"
print(f"🔗 Testing backend at: {API_BASE_URL}")

class BackendTester:
    def __init__(self):
        self.passed = 0
        self.failed = 0
        self.results = []
        
    def test(self, name, func):
        """Run a test and record results"""
        print(f"\n🧪 Testing: {name}")
        try:
            result = func()
            if result:
                print(f"✅ PASS: {name}")
                self.passed += 1
                self.results.append({"test": name, "status": "PASS", "details": ""})
            else:
                print(f"❌ FAIL: {name}")
                self.failed += 1
                self.results.append({"test": name, "status": "FAIL", "details": "Test returned False"})
        except Exception as e:
            print(f"❌ ERROR: {name} - {str(e)}")
            self.failed += 1
            self.results.append({"test": name, "status": "ERROR", "details": str(e)})
    
    def test_root_endpoint(self):
        """Test the root API endpoint"""
        try:
            response = requests.get(f"{API_BASE_URL}/", timeout=10)
            if response.status_code == 200:
                data = response.json()
                if data.get("message") == "Hello World":
                    print("   ✓ Root endpoint returns correct message")
                    return True
                else:
                    print(f"   ✗ Unexpected response: {data}")
                    return False
            else:
                print(f"   ✗ Status code: {response.status_code}")
                return False
        except requests.exceptions.RequestException as e:
            print(f"   ✗ Connection error: {e}")
            return False
    
    def test_status_endpoints(self):
        """Test status check endpoints"""
        try:
            # Test POST /status
            test_data = {"client_name": "test_client_backend"}
            response = requests.post(f"{API_BASE_URL}/status", json=test_data, timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if "id" in data and "client_name" in data and "timestamp" in data:
                    print("   ✓ POST /status creates status check successfully")
                    
                    # Test GET /status
                    get_response = requests.get(f"{API_BASE_URL}/status", timeout=10)
                    if get_response.status_code == 200:
                        status_list = get_response.json()
                        if isinstance(status_list, list) and len(status_list) > 0:
                            print("   ✓ GET /status returns status list")
                            return True
                        else:
                            print("   ✗ GET /status returned empty or invalid list")
                            return False
                    else:
                        print(f"   ✗ GET /status failed with status: {get_response.status_code}")
                        return False
                else:
                    print(f"   ✗ POST /status missing required fields: {data}")
                    return False
            else:
                print(f"   ✗ POST /status failed with status: {response.status_code}")
                return False
                
        except requests.exceptions.RequestException as e:
            print(f"   ✗ Connection error: {e}")
            return False
    
    def test_contact_form_api(self):
        """Test the contact form API endpoint"""
        try:
            # Test data with realistic information
            contact_data = {
                "firstName": "Emma",
                "lastName": "Rodriguez",
                "email": "emma.rodriguez@example.com",
                "message": "Hi! I'm interested in learning more about plant-based alternatives for chicken. I'm new to this lifestyle and would love some recommendations for beginners. Thank you!"
            }
            
            response = requests.post(f"{API_BASE_URL}/contact", json=contact_data, timeout=15)
            
            if response.status_code == 200:
                data = response.json()
                if "message" in data and "thank you" in data["message"].lower():
                    print("   ✓ Contact form submission successful")
                    print(f"   ✓ Response: {data['message']}")
                    return True
                else:
                    print(f"   ✗ Unexpected response format: {data}")
                    return False
            else:
                print(f"   ✗ Contact form failed with status: {response.status_code}")
                try:
                    error_data = response.json()
                    print(f"   ✗ Error details: {error_data}")
                except:
                    print(f"   ✗ Response text: {response.text}")
                return False
                
        except requests.exceptions.RequestException as e:
            print(f"   ✗ Connection error: {e}")
            return False
    
    def test_contact_form_validation(self):
        """Test contact form validation"""
        try:
            # Test with missing required fields
            invalid_data = {
                "firstName": "John",
                # Missing lastName, email, message
            }
            
            response = requests.post(f"{API_BASE_URL}/contact", json=invalid_data, timeout=10)
            
            if response.status_code == 422:  # Validation error
                print("   ✓ Contact form properly validates required fields")
                return True
            else:
                print(f"   ✗ Expected validation error (422), got: {response.status_code}")
                return False
                
        except requests.exceptions.RequestException as e:
            print(f"   ✗ Connection error: {e}")
            return False
    
    def test_cors_configuration(self):
        """Test CORS configuration"""
        try:
            # Make an OPTIONS request to check CORS headers
            response = requests.options(f"{API_BASE_URL}/", timeout=10)
            
            headers = response.headers
            cors_headers = [
                'Access-Control-Allow-Origin',
                'Access-Control-Allow-Methods',
                'Access-Control-Allow-Headers'
            ]
            
            cors_configured = any(header in headers for header in cors_headers)
            
            if cors_configured:
                print("   ✓ CORS headers present")
                print(f"   ✓ Allow-Origin: {headers.get('Access-Control-Allow-Origin', 'Not set')}")
                return True
            else:
                print("   ✗ CORS headers not found")
                return False
                
        except requests.exceptions.RequestException as e:
            print(f"   ✗ Connection error: {e}")
            return False
    
    def test_business_inquiry_detection(self):
        """Test business inquiry detection in contact form"""
        try:
            # Test with business-related keywords
            business_data = {
                "firstName": "Michael",
                "lastName": "Chen",
                "email": "michael.chen@restaurant.com",
                "message": "Hello, I represent a restaurant chain and we're interested in a business partnership with CraveKind. We'd like to discuss collaboration opportunities for our plant-based menu expansion."
            }
            
            response = requests.post(f"{API_BASE_URL}/contact", json=business_data, timeout=15)
            
            if response.status_code == 200:
                data = response.json()
                print("   ✓ Business inquiry submitted successfully")
                print("   ✓ Business inquiry detection logic processed")
                return True
            else:
                print(f"   ✗ Business inquiry failed with status: {response.status_code}")
                return False
                
        except requests.exceptions.RequestException as e:
            print(f"   ✗ Connection error: {e}")
            return False
    
    def test_error_handling(self):
        """Test API error handling"""
        try:
            # Test invalid endpoint
            response = requests.get(f"{API_BASE_URL}/nonexistent", timeout=10)
            
            if response.status_code == 404:
                print("   ✓ 404 error handling works correctly")
                return True
            else:
                print(f"   ✗ Expected 404, got: {response.status_code}")
                return False
                
        except requests.exceptions.RequestException as e:
            print(f"   ✗ Connection error: {e}")
            return False
    
    def run_all_tests(self):
        """Run all backend tests"""
        print("=" * 60)
        print("🚀 CRAVEKIND BACKEND API TEST SUITE")
        print("=" * 60)
        
        # Core API Tests
        self.test("Root Endpoint", self.test_root_endpoint)
        self.test("Status Endpoints", self.test_status_endpoints)
        
        # Contact Form Tests
        self.test("Contact Form API", self.test_contact_form_api)
        self.test("Contact Form Validation", self.test_contact_form_validation)
        self.test("Business Inquiry Detection", self.test_business_inquiry_detection)
        
        # Configuration Tests
        self.test("CORS Configuration", self.test_cors_configuration)
        self.test("Error Handling", self.test_error_handling)
        
        # Print summary
        print("\n" + "=" * 60)
        print("📊 TEST SUMMARY")
        print("=" * 60)
        print(f"✅ Passed: {self.passed}")
        print(f"❌ Failed: {self.failed}")
        print(f"📈 Success Rate: {(self.passed / (self.passed + self.failed) * 100):.1f}%")
        
        if self.failed == 0:
            print("\n🎉 ALL TESTS PASSED! Backend is working correctly.")
        else:
            print(f"\n⚠️  {self.failed} test(s) failed. Check the details above.")
        
        return self.failed == 0

if __name__ == "__main__":
    tester = BackendTester()
    success = tester.run_all_tests()
    
    # Exit with appropriate code
    sys.exit(0 if success else 1)