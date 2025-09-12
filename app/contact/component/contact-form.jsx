"use client"

export default function ContactFormSection() {
  return (
    <div className="contact-form-section">
      {/* Header */}
      <div className="header">
        <h2>Send Us A Message</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sem magna,</p>
      </div>

      {/* Main Content */}
      <div className="content">
        {/* Left Image */}
        <div className="image-section">
          <img src="/contact/contact-form-image.png" alt="Contact us - Email and messaging" />
        </div>

        {/* Right Form */}
        <div className="form-section">
          <form>
            {/* Name Fields */}
            <div className="form-row">
              <div className="form-group">
                <label>First Name</label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" placeholder="Doe" />
              </div>
            </div>

            {/* Email and Phone */}
            <div className="form-row">
              <div className="form-group">
                <label>Email</label>
                <input type="email" />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="+1 012 3456 789" />
              </div>
            </div>

            {/* Subject Selection */}
            <div className="form-group">
              <label>Select Subject?</label>
              <div className="radio-group">
                <label className="radio-option">
                  <input type="radio" name="subject" value="general" defaultChecked />
                  <span className="radio-custom"></span>
                  General Inquiry
                </label>
                <label className="radio-option">
                  <input type="radio" name="subject" value="general2" />
                  <span className="radio-custom"></span>
                  General Inquiry
                </label>
                <label className="radio-option">
                  <input type="radio" name="subject" value="general3" />
                  <span className="radio-custom"></span>
                  General Inquiry
                </label>
              </div>
            </div>

            {/* Message */}
            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Write your message.."></textarea>
            </div>

            {/* Submit Button */}
            <div className="form-actions">
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="social-icons">
        <a href="#" className="social-icon">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
          </svg>
        </a>
        <a href="#" className="social-icon">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79 4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>
        <a href="#" className="social-icon">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </a>
        <a href="#" className="social-icon">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
      </div>

      <style jsx>{`
        .contact-form-section {
          padding: 80px 20px;
          max-width: 1200px;
          margin: 0 auto;
          background-color: #ffffff;
        }

        .header {
          text-align: center;
          margin-bottom: 60px;
        }

        .header h2 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1a365d;
          margin-bottom: 16px;
        }

        .header p {
          font-size: 1.1rem;
          color: #666;
          max-width: 600px;
          margin: 0 auto;
        }

        .content {
          display: flex;
          gap: 60px;
          align-items: flex-start;
          margin-bottom: 60px;
        }

        .image-section {
          flex: 1;
        }

        .image-section img {
          width: 100%;
          height: auto;
          border-radius: 12px;
        }

        .form-section {
          flex: 1;
          background: white;
          padding: 40px;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
        }

        .form-row {
          display: flex;
          gap: 20px;
          margin-bottom: 24px;
        }

        .form-group {
          flex: 1;
          margin-bottom: 24px;
        }

        .form-group label {
          display: block;
          font-weight: 600;
          color: #1a365d;
          margin-bottom: 8px;
          font-size: 0.95rem;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 12px 0;
          border: none;
          border-bottom: 2px solid #e2e8f0;
          background: transparent;
          font-size: 1rem;
          transition: border-color 0.3s ease;
          outline: none;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          border-bottom-color: #3182ce;
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: #a0aec0;
        }

        .form-group textarea {
          resize: vertical;
          min-height: 100px;
          font-family: inherit;
        }

        .radio-group {
          display: flex;
          gap: 30px;
          margin-top: 12px;
        }

        .radio-option {
          display: flex;
          align-items: center;
          cursor: pointer;
          font-size: 0.95rem;
          color: #4a5568;
        }

        .radio-option input[type="radio"] {
          display: none;
        }

        .radio-custom {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
          border: 2px solid #cbd5e0;
          border-radius: 50%;
          margin-right: 8px;
          position: relative;
          transition: all 0.3s ease;
          min-width: 20px;
          min-height: 20px;
          display: inline-block;
          box-sizing: border-box;
        }

        .radio-option input[type="radio"]:checked + .radio-custom {
          background-color: #1a365d;
          border-color: #1a365d;
        }

        .radio-option input[type="radio"]:checked + .radio-custom::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 8px;
          height: 8px;
          background-color: white;
          border-radius: 50%;
        }

        .form-actions {
          display: flex;
          justify-content: flex-end;
          margin-top: 32px;
        }

        .submit-btn {
          background-color: #1a365d;
          color: white;
          padding: 14px 32px;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .submit-btn:hover {
          background-color: #2c5282;
        }

        .social-icons {
          display: flex;
          justify-content: center;
          gap: 20px;
        }

        .social-icon {
          width: 50px;
          height: 50px;
          background-color: #1a365d;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-decoration: none;
          transition: transform 0.3s ease, background-color 0.3s ease;
        }

        .social-icon:hover {
          transform: translateY(-2px);
          background-color: #2c5282;
        }

        .social-icon svg {
          width: 20px;
          height: 20px;
        }

        /* Large tablets and small desktops */
        @media (max-width: 1024px) {
          .contact-form-section {
            padding: 60px 20px;
          }
          
          .content {
            gap: 40px;
          }
          
          .form-section {
            padding: 35px;
          }
        }

        /* Tablets */
        @media (max-width: 768px) {
          .contact-form-section {
            padding: 50px 15px;
          }

          .header h2 {
            font-size: 2rem;
          }
          
          .header p {
            font-size: 1rem;
            padding: 0 10px;
          }

          .content {
            flex-direction: column;
            gap: 30px;
            margin-bottom: 40px;
          }

          .form-section {
            padding: 30px 25px;
          }

          .form-row {
            flex-direction: column;
            gap: 0;
          }

          .radio-group {
            flex-wrap: wrap;
            gap: 20px;
          }

          .form-actions {
            justify-content: center;
          }
          
          .submit-btn {
            width: 100%;
            max-width: 300px;
          }
        }

        /* Mobile phones */
        @media (max-width: 480px) {
          .contact-form-section {
            padding: 40px 10px;
          }
          
          .header {
            margin-bottom: 40px;
          }

          .header h2 {
            font-size: 1.75rem;
            line-height: 1.2;
          }
          
          .header p {
            font-size: 0.95rem;
          }

          .form-section {
            padding: 25px 20px;
            border-radius: 8px;
          }
          
          .form-group label {
            font-size: 0.9rem;
          }
          
          .form-group input,
          .form-group textarea {
            font-size: 0.95rem;
            padding: 10px 0;
          }

          .radio-group {
            flex-direction: column;
            gap: 15px;
          }
          
          .radio-option {
            font-size: 0.9rem;
          }

          .submit-btn {
            padding: 12px 24px;
            font-size: 0.95rem;
            width: 100%;
          }
          
          .social-icons {
            gap: 15px;
            flex-wrap: wrap;
          }
          
          .social-icon {
            width: 45px;
            height: 45px;
          }
          
          .social-icon svg {
            width: 18px;
            height: 18px;
          }
        }

        /* Extra small screens */
        @media (max-width: 320px) {
          .contact-form-section {
            padding: 30px 8px;
          }
          
          .header h2 {
            font-size: 1.5rem;
          }
          
          .form-section {
            padding: 20px 15px;
          }
          
          .social-icon {
            width: 40px;
            height: 40px;
          }
          
          .social-icon svg {
            width: 16px;
            height: 16px;
          }
        }
      `}</style>
    </div>
  )
}
