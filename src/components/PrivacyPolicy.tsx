import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="privacy-policy">
      <div className="privacy-hero">
        <div className="container">
          <h1>Privacy Policy</h1>
        </div>
      </div>

      <div className="privacy-content">
        <div className="container">
          <div className="policy-content">
            <section className="policy-section">
              <h2>1. Introduction</h2>
              <p>
                Welcome to Memory Tiles ("we," "our," or "us"). We are committed to protecting your privacy and ensuring 
                you have a positive experience with our memory training game. This Privacy Policy explains how we handle 
                information when you use our mobile application.
              </p>
              <p>
                Memory Tiles is a paid mobile game designed to improve cognitive abilities and memory skills. 
                We believe in transparency and want you to understand how we protect your privacy.
              </p>
            </section>

            <section className="policy-section">
              <h2>2. Information We Do Not Collect</h2>
              <p>
                Memory Tiles is designed with privacy in mind. We want to be clear about what we do NOT collect:
              </p>
              <ul>
                <li><strong>Personal Information:</strong> We do not collect your name, email address, phone number, or any other personal identifiers.</li>
                <li><strong>Location Data:</strong> We do not access, collect, or store your location information.</li>
                <li><strong>Payment Information:</strong> All payment processing is handled securely by Apple through the App Store. We do not have access to your payment details.</li>
              </ul>
            </section>

            <section className="policy-section">
              <h2>3. Information We May Collect</h2>
              <p>
                We may collect the following information:
              </p>
              <ul>
                <li><strong>App Store Analytics:</strong> Apple may provide us with basic, anonymous analytics about app downloads and usage, which does not identify individual users.</li>
                <li><strong>Crash Reports:</strong> If the app crashes, your device may send anonymous crash reports to Apple, which may be shared with us in an anonymized format.</li>
                <li><strong>Google Analytics Data:</strong> We use Google Analytics to collect anonymous usage data, specifically tracking when the app is first opened. This data includes device information (such as device type, operating system), app usage patterns, and advertising identifiers for ads tracking purposes. This information does not personally identify you.</li>
              </ul>
            </section>

            <section className="policy-section">
              <h2>4. How We Use Information</h2>
              <p>
                We do not collect personal information that identifies you individually. The anonymous data we collect 
                through Google Analytics and other sources is used to:
              </p>
              <ul>
                <li>Improve app performance and stability</li>
                <li>Fix bugs and technical issues</li>
                <li>Understand general usage patterns to enhance user experience</li>
                <li><strong>Advertising and Marketing:</strong> Track app usage metrics (such as first-time app opens) to measure advertising campaign effectiveness and optimize marketing strategies</li>
                <li><strong>Analytics and Insights:</strong> Generate insights about user engagement and app adoption rates</li>
              </ul>
            </section>

            <section className="policy-section">
              <h2>5. Data Storage and Security</h2>
              <p>
                <strong>Local Storage:</strong> Your game progress and settings are stored locally on your device. 
                This information never leaves your device and is not transmitted to our servers.
              </p>
              <p>
                <strong>No Servers:</strong> We do not operate any servers that store your information. 
                The game functions entirely on your device.
              </p>
              <p>
                <strong>Security:</strong> While we don't collect personal data, we implement industry-standard 
                security practices in our app development to ensure the integrity of the game.
              </p>
            </section>

            <section className="policy-section">
              <h2>6. Third-Party Services</h2>
              <p>
                <strong>Apple App Store:</strong> Our game is distributed through the Apple App Store. 
                Apple's privacy practices govern the download and payment process. Please review Apple's 
                Privacy Policy for information about how they handle your data.
              </p>
              <p>
                <strong>Google Analytics:</strong> We use Google Analytics to collect anonymous usage data 
                and track advertising metrics. Google Analytics may collect information about your device, 
                app usage patterns, and advertising interactions. This data is processed according to 
                Google's Privacy Policy. You can learn more about how Google processes data at 
                <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">https://policies.google.com/privacy</a> 
                and opt out of Google Analytics tracking through your device settings.
              </p>
            </section>

            <section className="policy-section">
              <h2>7. Children's Privacy</h2>
              <p>
                Memory Tiles is suitable for users of all ages, including children. Since we do not collect 
                personal information, we do not knowingly collect personal information from children under 13. 
                If you are a parent or guardian and believe your child has provided us with personal information, 
                please contact us immediately.
              </p>
            </section>

            <section className="policy-section">
              <h2>8. Your Rights</h2>
              <p>
                Since we do not collect personal information, there is no personal data to access, modify, 
                or delete. However, you have the right to:
              </p>
              <ul>
                <li>Delete the app and all local data by uninstalling it from your device</li>
                <li>Contact us with any privacy-related questions or concerns</li>
                <li>Request information about what data (if any) we might have access to</li>
              </ul>
            </section>

            <section className="policy-section">
              <h2>9. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. If we make significant changes, 
                we will notify users through the App Store update process. The date at the top of this 
                policy indicates when it was last updated.
              </p>
            </section>

            <section className="policy-section">
              <h2>10. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="contact-info">
                <p><strong>Email:</strong> isadukovskiy@gmail.com</p>
                <p><strong>Subject:</strong> Privacy Policy Inquiry</p>
              </div>
              <p>
                We are committed to responding to your privacy-related inquiries promptly and transparently.
              </p>
            </section>

            <section className="policy-section">
              <h2>11. Consent</h2>
              <p>
                By downloading and using Memory Tiles, you consent to this Privacy Policy. 
                If you do not agree with this policy, please do not use our app.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
