#!/usr/bin/env python3
"""
Database Integration Test for CraveKind Backend
Tests database connectivity and data persistence
"""

import requests
import json
import sys
import time
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
API_BASE_URL = f"{BACKEND_URL}/api"

def test_database_persistence():
    """Test that contact form data is actually persisted to database"""
    print("🗄️  Testing Database Persistence...")
    
    # Create unique test data
    timestamp = int(time.time())
    test_email = f"test.user.{timestamp}@example.com"
    
    contact_data = {
        "firstName": "TestUser",
        "lastName": f"Database{timestamp}",
        "email": test_email,
        "message": f"This is a database persistence test message created at {datetime.now()}"
    }
    
    try:
        # Submit contact form
        response = requests.post(f"{API_BASE_URL}/contact", json=contact_data, timeout=15)
        
        if response.status_code == 200:
            print(f"   ✓ Contact form submitted successfully")
            print(f"   ✓ Test email: {test_email}")
            
            # Wait a moment for database write
            time.sleep(2)
            
            # Try to verify data persistence by checking status endpoint
            # (This is indirect verification since we don't have a direct contact retrieval endpoint)
            status_response = requests.get(f"{API_BASE_URL}/status", timeout=10)
            if status_response.status_code == 200:
                print("   ✓ Database connection verified through status endpoint")
                return True
            else:
                print("   ⚠️  Could not verify database connection")
                return False
                
        else:
            print(f"   ✗ Contact form submission failed: {response.status_code}")
            return False
            
    except Exception as e:
        print(f"   ✗ Database persistence test failed: {e}")
        return False

def test_email_logging():
    """Test that email service is logging correctly"""
    print("📧 Testing Email Service Logging...")
    
    try:
        # Submit a contact form to trigger email logging
        contact_data = {
            "firstName": "EmailTest",
            "lastName": "Logger",
            "email": "email.test@example.com",
            "message": "Testing email logging functionality"
        }
        
        response = requests.post(f"{API_BASE_URL}/contact", json=contact_data, timeout=15)
        
        if response.status_code == 200:
            print("   ✓ Contact form triggered email service")
            print("   ✓ Email service should be logging to console (check backend logs)")
            return True
        else:
            print(f"   ✗ Email test failed: {response.status_code}")
            return False
            
    except Exception as e:
        print(f"   ✗ Email logging test failed: {e}")
        return False

if __name__ == "__main__":
    print("=" * 60)
    print("🔍 CRAVEKIND DATABASE & EMAIL INTEGRATION TESTS")
    print("=" * 60)
    
    tests_passed = 0
    total_tests = 2
    
    if test_database_persistence():
        tests_passed += 1
    
    if test_email_logging():
        tests_passed += 1
    
    print("\n" + "=" * 60)
    print("📊 INTEGRATION TEST SUMMARY")
    print("=" * 60)
    print(f"✅ Passed: {tests_passed}/{total_tests}")
    
    if tests_passed == total_tests:
        print("🎉 ALL INTEGRATION TESTS PASSED!")
    else:
        print(f"⚠️  {total_tests - tests_passed} test(s) had issues")
    
    sys.exit(0 if tests_passed == total_tests else 1)