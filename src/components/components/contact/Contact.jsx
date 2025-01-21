import React, { useState } from 'react';
import { 
  FaPaperPlane, 
  FaUser, 
  FaEnvelope, 
  FaComment,
  FaCheckCircle,
  FaExclamationCircle,
  FaClock
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: '',
      email: '',
      message: ''
    };

    // Name validation
    if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters long';
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    // Message validation
    if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowError(false);
    
    if (!validateForm()) {
      setShowError(true);
      return;
    }
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setShowSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      // Hide success message after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      setShowError(true);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-[var-primary] lg:py-16 sm:py-11 py-10">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-400">
            I'd love to hear from you! Send me a message and I'll respond as soon as possible.
          </p>
        </div>
        
        {showSuccess && (
          <div className="mb-6 bg-green-500 bg-opacity-10 border border-green-500 rounded-lg p-4 flex items-center text-green-500 transition-all duration-300">
            <FaCheckCircle className="h-5 w-5 mr-3" />
            <p>Thank you for your message! I'll get back to you soon.</p>
          </div>
        )}
                {showError && (
          <div className="mb-6 bg-red-500 bg-opacity-10 border border-red-500 rounded-lg p-4 flex items-center text-red-500 transition-all duration-300">
            <FaExclamationCircle className="h-5 w-5 mr-3" />
            <p>Please fix the errors in the form and try again.</p>
          </div>
        )}
        
        <form 
          onSubmit={handleSubmit}
          className="bg-gray-800 p-8 rounded-lg shadow-xl backdrop-blur-lg border border-gray-700"
        >
          <div className="space-y-6">
            <div className="relative">
              <FaUser className="absolute left-3 top-4 text-gray-400" />
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className={`w-full pl-10 pr-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 transition-all duration-300
                  ${errors.name ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'}`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div className="relative">
              <FaEnvelope className="absolute left-3 top-4 text-gray-400" />
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className={`w-full pl-10 pr-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 transition-all duration-300
                  ${errors.email ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'}`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div className="relative">
              <FaComment className="absolute left-3 top-4 text-gray-400" />
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={4}
                className={`w-full pl-10 pr-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 transition-all duration-300
                  ${errors.message ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'}`}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-blue-600 text-white py-3 rounded-lg flex items-center justify-center
                transition-all duration-300 transform hover:bg-blue-700 active:scale-95
                ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:scale-[1.02]'}`}
            >
              {isSubmitting ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                  Sending...
                </div>
              ) : (
                <div className="flex items-center">
                  <FaPaperPlane className="mr-2" />
                  Send Message
                </div>
              )}
            </button>
          </div>
        </form>

        <div className="mt-8 text-center space-y-2">
          <p className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center justify-center">
            <FaEnvelope className="mr-2" />
            shivanishukla1332@gmail.com
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Contact;