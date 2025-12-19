import React from 'react'
import {
  Shield,
  Users,
  CreditCard,
  BookOpen,
  Mail,
  FileText,
  AlertTriangle,
  Scale,
  ArrowLeft,
} from 'lucide-react'

export default function Terms() {
  const handleGoBack = () => {
    window.location.href = '/'
    window.scrollTo(0, 0)
  }

  const sections = [
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      icon: <FileText className="w-5 h-5 sm:w-6 sm:h-6" />,
      content: `By accessing and using TownScholar's website and services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services. These terms constitute a legally binding agreement between you and TownScholar.`,
    },
    {
      id: 'services',
      title: 'Our Services',
      icon: <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />,
      content: `TownScholar provides online educational courses and related services. Our platform offers various courses designed to enhance your knowledge and skills. We reserve the right to modify, suspend, or discontinue any course or service at our discretion.`,
    },
    {
      id: 'enrollment',
      title: 'Course Enrollment & Access',
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
      content: `To enroll in our courses, you must provide accurate information and complete the payment process. Upon successful enrollment, you will receive access credentials. Course access is granted for the duration specified at the time of purchase. You are responsible for maintaining the confidentiality of your account credentials.`,
    },
    {
      id: 'payment',
      title: 'Payment Terms',
      icon: <CreditCard className="w-5 h-5 sm:w-6 sm:h-6" />,
      content: `All course fees must be paid in full before access is granted. Payments are processed securely through PayU. Prices are subject to change without notice. All payments are in Indian Rupees (INR) unless otherwise specified. Payment processing is subject to PayU's terms and conditions.`,
    },
    {
      id: 'refund',
      title: 'Refund Policy',
      icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />,
      content: `Refunds may be considered on a case-by-case basis within 7 days of purchase, provided you have accessed less than 20% of the course content. To request a refund, contact us at reach@townscholar.com with your order details and reason for the refund request.`,
    },
    {
      id: 'conduct',
      title: 'User Conduct',
      icon: <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6" />,
      content: `You agree to use our services only for lawful purposes and in accordance with these terms. You must not share your account credentials, distribute course materials without permission, engage in any activity that could harm our platform, or violate any applicable laws or regulations.`,
    },
    {
      id: 'intellectual',
      title: 'Intellectual Property',
      icon: <Scale className="w-5 h-5 sm:w-6 sm:h-6" />,
      content: `All course materials, content, and resources provided through TownScholar are our intellectual property or licensed to us. You may access and use these materials solely for personal, educational purposes. Redistribution, copying, or commercial use of our content is strictly prohibited without written consent.`,
    },
    {
      id: 'limitation',
      title: 'Limitation of Liability',
      icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />,
      content: `TownScholar provides courses and services "as is" without warranties of any kind. We are not liable for any indirect, incidental, or consequential damages arising from your use of our services. Our total liability shall not exceed the amount you paid for the specific course or service.`,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-lg border-b-2 sm:border-b-4 border-indigo-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
          {/* Back Button */}
          <div className="mb-4 sm:mb-6">
            <button
              onClick={handleGoBack}
              className="inline-flex items-center px-3 sm:px-4 py-2 text-sm sm:text-base font-medium text-indigo-600 bg-indigo-50 border border-indigo-200 rounded-lg sm:rounded-xl hover:bg-indigo-100 hover:border-indigo-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Go Back
            </button>
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center mb-4 sm:mb-6">
              {/* <div className="bg-indigo-600 p-2 sm:p-3 rounded-full mb-3 sm:mb-0 sm:mr-4">
                <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div> */}
              <h1 className="text-2xl sm:text-3xl lg:text-8xl  italic font-bold font-ibm text-gray-800 leading-tight">
                Terms & Conditions
              </h1>
            </div>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-2">
              Please read these terms carefully before using TownScholar's
              services. By using our platform, you agree to comply with these
              terms and conditions.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 font-space sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid gap-6 sm:gap-8 lg:gap-10">
          {sections.map((section, index) => (
            <div
              key={section.id}
              className="bg-white rounded-xl sm:rounded-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6 w-full">
                  <div className="bg-indigo-100 p-2 sm:p-3 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                    <div className="text-indigo-600">{section.icon}</div>
                  </div>
                  <div className="flex-1 w-full text-center sm:text-left">
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 flex flex-col items-center sm:flex-row sm:items-center">
                      <span className="bg-indigo-600 text-white rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-xs sm:text-sm font-bold mb-2 sm:mb-0 sm:mr-3">
                        {index + 1}
                      </span>
                      <span className="leading-tight">{section.title}</span>
                    </h2>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Additional Important Information */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl sm:rounded-2xl shadow-lg border border-amber-200 p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6">
              <AlertTriangle className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600 flex-shrink-0 self-start sm:mt-1" />
              <div className="w-full">
                <h3 className="text-xl sm:text-2xl font-bold text-amber-800 mb-3 sm:mb-4">
                  Important Notes
                </h3>
                <div className="space-y-2 sm:space-y-3 text-amber-700">
                  <p className="text-sm sm:text-base leading-relaxed">
                    <strong>Age Requirement:</strong> While our courses are not
                    age-restricted, users under 18 should obtain parental or
                    guardian consent before enrolling.
                  </p>
                  <p className="text-sm sm:text-base leading-relaxed">
                    <strong>Technical Requirements:</strong> You are responsible
                    for ensuring you have the necessary technology and internet
                    connection to access our courses.
                  </p>
                  <p className="text-sm sm:text-base leading-relaxed">
                    <strong>Course Completion:</strong> Course completion
                    certificates are issued based on our internal criteria and
                    completion requirements.
                  </p>
                  <p className="text-sm sm:text-base leading-relaxed">
                    <strong>Updates:</strong> We may update course content
                    periodically to ensure relevance and accuracy.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Changes and Contact Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 border border-gray-100">
              <div className="flex flex-col sm:flex-row items-start sm:items-center mb-3 sm:mb-4">
                <div className="bg-purple-100 p-2 sm:p-3 rounded-lg sm:rounded-xl mb-3 sm:mb-0 sm:mr-4">
                  <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                  Changes to Terms
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                We reserve the right to modify these Terms and Conditions at any
                time. Updated terms will be posted on this page with a revised
                effective date. Your continued use of our services constitutes
                acceptance of any changes.
              </p>
            </div>

            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 border border-gray-100">
              <div className="flex flex-col sm:flex-row items-start sm:items-center mb-3 sm:mb-4">
                <div className="bg-green-100 p-2 sm:p-3 rounded-lg sm:rounded-xl mb-3 sm:mb-0 sm:mr-4">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                  Contact Us
                </h3>
              </div>
              <div className="text-gray-600 space-y-1 sm:space-y-2">
                <p className="font-semibold text-gray-800 text-sm sm:text-base">
                  TownScholar
                </p>
                <p className="text-sm sm:text-base">Tamil Nadu, India</p>
                <p className="flex flex-col sm:flex-row sm:items-center text-sm sm:text-base">
                  <Mail className="w-4 h-4 text-green-600 mb-1 sm:mb-0 sm:mr-2" />
                  <a
                    href="mailto:reach@townscholar.com"
                    className="text-indigo-600 hover:text-indigo-800 transition-colors break-all sm:break-normal"
                  >
                    reach@townscholar.com
                  </a>
                </p>
                <p className="text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4 leading-relaxed">
                  For any questions regarding these terms or our services,
                  please don't hesitate to reach out to us.
                </p>
              </div>
            </div>
          </div>

          {/* Footer Agreement */}
          <div className="bg-gray-500 rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 text-center text-white">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 lg:mb-6">
              Agreement Acknowledgment
            </h3>
            <p className="text-base sm:text-lg lg:text-xl opacity-90 max-w-4xl mx-auto leading-relaxed px-2">
              By using TownScholar's services, you acknowledge that you have
              read, understood, and agree to be bound by these Terms and
              Conditions. Thank you for choosing TownScholar for your
              educational journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
