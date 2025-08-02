from typing import List, Optional
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
import logging

logger = logging.getLogger(__name__)

class EmailService:
    def __init__(self):
        self.smtp_server = os.getenv("SMTP_SERVER", "smtp.gmail.com")
        self.smtp_port = int(os.getenv("SMTP_PORT", "587"))
        self.smtp_username = os.getenv("SMTP_USERNAME")
        self.smtp_password = os.getenv("SMTP_PASSWORD")
        self.from_email = os.getenv("FROM_EMAIL", "noreply@cravekind.ca")
        self.from_name = os.getenv("FROM_NAME", "CraveKind")

    def send_email(self, to_email: str, subject: str, html_content: str, text_content: Optional[str] = None) -> bool:
        """Send an email."""
        try:
            # If no SMTP credentials, log the email instead of sending
            if not self.smtp_username or not self.smtp_password:
                logger.info(f"Email Service - No SMTP credentials configured")
                logger.info(f"MOCK EMAIL SENT:")
                logger.info(f"To: {to_email}")
                logger.info(f"Subject: {subject}")
                logger.info(f"HTML Content: {html_content}")
                if text_content:
                    logger.info(f"Text Content: {text_content}")
                logger.info("=" * 50)
                return True

            msg = MIMEMultipart("alternative")
            msg["Subject"] = subject
            msg["From"] = f"{self.from_name} <{self.from_email}>"
            msg["To"] = to_email

            # Add text version
            if text_content:
                text_part = MIMEText(text_content, "plain")
                msg.attach(text_part)

            # Add HTML version
            html_part = MIMEText(html_content, "html")
            msg.attach(html_part)

            # Send email
            with smtplib.SMTP(self.smtp_server, self.smtp_port) as server:
                server.starttls()
                if self.smtp_username and self.smtp_password:
                    server.login(self.smtp_username, self.smtp_password)
                server.send_message(msg)

            logger.info(f"Email sent successfully to {to_email}")
            return True

        except Exception as e:
            logger.error(f"Failed to send email to {to_email}: {str(e)}")
            return False

    def send_verification_email(self, to_email: str, user_name: str, verification_token: str) -> bool:
        """Send email verification."""
        subject = "Welcome to CraveKind - Verify Your Email"
        
        verification_url = f"https://cravekind.ca/verify-email?token={verification_token}"
        
        html_content = f"""
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body {{ font-family: Arial, sans-serif; line-height: 1.6; color: #333; }}
                .container {{ max-width: 600px; margin: 0 auto; padding: 20px; }}
                .header {{ background-color: #16a34a; color: white; padding: 30px; text-align: center; }}
                .content {{ padding: 30px; background-color: #f8f9fa; }}
                .button {{ background-color: #16a34a; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; display: inline-block; }}
                .footer {{ text-align: center; padding: 20px; font-size: 12px; color: #666; }}
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>Welcome to CraveKind!</h1>
                    <p>Satisfy your cravings, stay kind.</p>
                </div>
                <div class="content">
                    <h2>Hi {user_name},</h2>
                    <p>Thank you for joining CraveKind! We're excited to help you discover amazing plant-based alternatives to your favorite foods.</p>
                    <p>To get started, please verify your email address by clicking the button below:</p>
                    <p style="text-align: center; margin: 30px 0;">
                        <a href="{verification_url}" class="button">Verify Email Address</a>
                    </p>
                    <p>If the button doesn't work, copy and paste this link into your browser:</p>
                    <p><a href="{verification_url}">{verification_url}</a></p>
                    <p>Once verified, you'll be able to:</p>
                    <ul>
                        <li>Save your favorite alternatives</li>
                        <li>Track your plant-based journey</li>
                        <li>Get personalized recommendations</li>
                        <li>Join our community of kind eaters</li>
                    </ul>
                </div>
                <div class="footer">
                    <p>Happy exploring!<br>The CraveKind Team</p>
                    <p>If you didn't create an account, please ignore this email.</p>
                </div>
            </div>
        </body>
        </html>
        """
        
        text_content = f"""
        Welcome to CraveKind!
        
        Hi {user_name},
        
        Thank you for joining CraveKind! Please verify your email address by clicking this link:
        {verification_url}
        
        Happy exploring!
        The CraveKind Team
        """
        
        return self.send_email(to_email, subject, html_content, text_content)

    def send_password_reset_email(self, to_email: str, user_name: str, reset_token: str) -> bool:
        """Send password reset email."""
        subject = "Reset Your CraveKind Password"
        
        reset_url = f"https://cravekind.ca/reset-password?token={reset_token}"
        
        html_content = f"""
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body {{ font-family: Arial, sans-serif; line-height: 1.6; color: #333; }}
                .container {{ max-width: 600px; margin: 0 auto; padding: 20px; }}
                .header {{ background-color: #16a34a; color: white; padding: 30px; text-align: center; }}
                .content {{ padding: 30px; background-color: #f8f9fa; }}
                .button {{ background-color: #16a34a; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; display: inline-block; }}
                .footer {{ text-align: center; padding: 20px; font-size: 12px; color: #666; }}
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>Password Reset</h1>
                </div>
                <div class="content">
                    <h2>Hi {user_name},</h2>
                    <p>We received a request to reset your CraveKind password. Click the button below to create a new password:</p>
                    <p style="text-align: center; margin: 30px 0;">
                        <a href="{reset_url}" class="button">Reset Password</a>
                    </p>
                    <p>If the button doesn't work, copy and paste this link into your browser:</p>
                    <p><a href="{reset_url}">{reset_url}</a></p>
                    <p>This link will expire in 1 hour for security reasons.</p>
                    <p>If you didn't request a password reset, please ignore this email.</p>
                </div>
                <div class="footer">
                    <p>Stay kind!<br>The CraveKind Team</p>
                </div>
            </div>
        </body>
        </html>
        """
        
        text_content = f"""
        Password Reset Request
        
        Hi {user_name},
        
        We received a request to reset your CraveKind password. Click this link to create a new password:
        {reset_url}
        
        This link will expire in 1 hour for security reasons.
        
        If you didn't request a password reset, please ignore this email.
        
        Stay kind!
        The CraveKind Team
        """
        
        return self.send_email(to_email, subject, html_content, text_content)

# Create global instance
email_service = EmailService()