import React, { useState, useEffect } from 'react';
import { Shield, Lock, Eye, Mail, Phone, Globe, ChevronDown, ChevronUp } from 'lucide-react';

const Privacy = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-orange-100 z-50">
        <div 
          className="h-full bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-orange-600 via-orange-500 to-orange-400 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-32">
          <div className="flex items-center justify-center mb-6 animate-fade-in">
            <Shield className="w-16 h-16 md:w-20 md:h-20 text-white opacity-90" strokeWidth={1.5} />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xl md:text-2xl text-center text-orange-50 max-w-3xl mx-auto font-light">
            Your privacy is our priority. Learn how Orange Broadband protects your personal information.
          </p>
          <div className="mt-10 flex justify-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium">Last updated: January 2026</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        
        {/* Introduction */}
        <section className="mb-16 animate-slide-up">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border-l-4 border-orange-500 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <Globe className="w-6 h-6 text-orange-600" />
              </div>
              Introduction
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Customer privacy is very important to us. This privacy policy covers all details related to our firm's 
              commitment and helps you understand how safely and securely Orange Broadband protects your personal 
              information provided during registration. We only collect information required for processing internet 
              service transactions. We promise that your information will never be revealed to external users.
            </p>
          </div>
        </section>

        {/* Information We Collect */}
        <section className="mb-16 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <button
              onClick={() => toggleSection('information')}
              className="w-full p-8 md:p-10 text-left flex items-center justify-between hover:bg-orange-50 transition-colors duration-200"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-orange-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Information We Collect</h2>
              </div>
              {activeSection === 'information' ? (
                <ChevronUp className="w-6 h-6 text-orange-600 flex-shrink-0" />
              ) : (
                <ChevronDown className="w-6 h-6 text-orange-600 flex-shrink-0" />
              )}
            </button>
            
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
              activeSection === 'information' ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="p-8 md:p-10 pt-0 border-t border-orange-100">
                <div className="space-y-6 text-gray-700">
                  <p className="text-lg leading-relaxed">
                    Orange Broadband collects details such as:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {['Name', 'Address', 'Contact Number', 'Email Address'].map((item, index) => (
                      <div key={index} className="flex items-center gap-3 p-4 bg-orange-50 rounded-xl">
                        <div className="w-2 h-2 bg-orange-500 rounded-full" />
                        <span className="font-medium text-gray-800">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-lg leading-relaxed mt-6">
                    We also collect technical information such as referred URL, internet browser name and version, 
                    operating system details to analyze traffic patterns, perform routine maintenance, and maintain 
                    site security for improving website navigation.
                  </p>
                  <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-xl mt-6">
                    <p className="text-gray-800 font-medium">
                      The information we collect remains with us only while you use our services. After service 
                      termination, your details will be deleted from our system without fail.
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed">
                    We provide access credentials (user ID and password) to ensure only authorized individuals 
                    belonging to your organization, business, or home network can access the web page governed by 
                    our terms and conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security */}
        <section className="mb-16 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <button
              onClick={() => toggleSection('security')}
              className="w-full p-8 md:p-10 text-left flex items-center justify-between hover:bg-orange-50 transition-colors duration-200"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Lock className="w-6 h-6 text-orange-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Confidential Information Sharing & Security</h2>
              </div>
              {activeSection === 'security' ? (
                <ChevronUp className="w-6 h-6 text-orange-600 flex-shrink-0" />
              ) : (
                <ChevronDown className="w-6 h-6 text-orange-600 flex-shrink-0" />
              )}
            </button>
            
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
              activeSection === 'security' ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="p-8 md:p-10 pt-0 border-t border-orange-100">
                <div className="space-y-6 text-gray-700">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-xl">
                    <p className="text-lg font-medium">
                      Orange Broadband respects customer privacy always. We do not share or sell any customer 
                      personal information to third parties for marketing or commercial purposes.
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed">
                    We undertake encryption practices to protect the confidentiality of our customers, including 
                    all personal information provided during contracting for internet/broadband services.
                  </p>
                  <div className="bg-orange-50 border border-orange-200 p-6 rounded-xl">
                    <p className="text-gray-800">
                      <strong className="text-orange-700">Important Notice:</strong> While we strive to secure 
                      your personal information, we cannot ensure complete security of data transmitted to us. 
                      We advise users to take care of their data when accessing the internet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use of Personal Information */}
        <section className="mb-16 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border-l-4 border-orange-500 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Use of Personal Information</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Orange Broadband uses your personal information for the following purposes:
            </p>
            <div className="grid gap-4">
              {[
                'Processing online transactions',
                'Providing customer service',
                'Offering marketing services and promotional information',
                'Sending newsletters and promotional emails',
                'Detecting fraudulent and illegal network activities'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors duration-200">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm font-bold">{index + 1}</span>
                  </div>
                  <span className="text-gray-800 text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cookies */}
        <section className="mb-16 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border-l-4 border-orange-500 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Site Linking via Cookies</h2>
            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                A cookie is a small data file that external websites/third parties write to your computer's hard 
                drive when you visit them, but cannot read data from your hard disk or access cookie files created 
                by other sites.
              </p>
              <div className="bg-orange-50 p-6 rounded-xl">
                <p className="text-gray-800 leading-relaxed">
                  If you prefer not to receive cookies while browsing our website, you can configure your browser 
                  to warn you before accepting cookies and refuse them when alerted. You can also disable all 
                  cookies in your browser settings, although this may limit your experience on Orange Broadband's website.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-16 animate-slide-up" style={{ animationDelay: '0.5s' }}>
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl shadow-xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-8 text-center">Questions or Suggestions?</h2>
            <p className="text-lg text-center mb-10 text-orange-50">
              If you have any questions or concerns about your internet packages or privacy, feel free to contact us:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <a href="tel:+919492143663" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 rounded-xl p-6 flex flex-col items-center gap-4 border border-white/20 group">
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-7 h-7" />
                </div>
                <div className="text-center">
                  <p className="text-sm text-orange-100 mb-1">Call Us</p>
                  <p className="font-semibold text-lg">+91 94921 43663</p>
                </div>
              </a>

              <a href="mailto:orangebroadband.mdp@gmail.com" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 rounded-xl p-6 flex flex-col items-center gap-4 border border-white/20 group">
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-7 h-7" />
                </div>
                <div className="text-center">
                  <p className="text-sm text-orange-100 mb-1">Email Us</p>
                  <p className="font-semibold text-sm break-all">orangebroadband.mdp@gmail.com</p>
                </div>
              </a>

              <a href="https://orangebroadband.com" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 rounded-xl p-6 flex flex-col items-center gap-4 border border-white/20 group">
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-7 h-7" />
                </div>
                <div className="text-center">
                  <p className="text-sm text-orange-100 mb-1">Visit Us</p>
                  <p className="font-semibold text-lg">orangebroadband.com</p>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Policy Updates */}
        <section className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border-l-4 border-orange-500 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Changes in Privacy Policy</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              If we make any changes to our privacy policy, we will update this page accordingly. Continuous use 
              of our website will help you stay informed of all policy changes. We encourage you to review this 
              page periodically to ensure you understand how Orange Broadband is protecting your information.
            </p>
          </div>
        </section>

      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-orange-400 mb-2">Orange Broadband</h3>
            <p className="text-gray-400">Your trusted internet service provider</p>
          </div>
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500">
              © {new Date().getFullYear()} Orange Broadband. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <style >{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out;
          animation-fill-mode: both;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-fade-in,
          .animate-slide-up {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Privacy;