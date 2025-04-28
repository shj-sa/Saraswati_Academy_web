import React from "react";
import hire from "../../assets/images/SHJHiring.png";
const HiringProcess = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-blue-100 opacity-20 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-yellow-100 opacity-30 rounded-tr-full"></div>

      {/* Header - Left aligned */}
      <div className="mb-12 relative z-10">
        <h2 className="text-yellow-500 text-2xl font-bold mb-1">
          Saraswati Academy
        </h2>
        <h1 className="text-4xl font-bold">
          Hiring Process <span className="text-blue-500">Workflow</span>
        </h1>
      </div>
      <img
        src={hire}
        alt="Hiring Process"
        className="w-full h-auto object-contain"
      />
      {/* Process Steps - Left aligned and more compact */}
      <div className="relative pb-8">
        {/* Timeline steps */}
        <div className="space-y-6">
          {/* Step 1 */}
          <div className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex-shrink-0">
              <div className="bg-teal-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                01
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="font-bold text-xl mb-2 text-teal-500">
                Job Requisition
              </h3>
              <div className="text-sm">
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Department heads identify staffing needs</li>
                  <li>HR creates detailed job description</li>
                  <li>Budget approval for new position</li>
                </ul>
              </div>
            </div>
            <div className="flex-shrink-0 hidden md:block">
              <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-teal-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex-shrink-0">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                02
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="font-bold text-xl mb-2 text-blue-600">Sourcing</h3>
              <div className="text-sm">
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Job posting on career site</li>
                  <li>Social media recruitment</li>
                  <li>Employee referral program</li>
                </ul>
              </div>
            </div>
            <div className="flex-shrink-0 hidden md:block">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex-shrink-0">
              <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                03
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="font-bold text-xl mb-2 text-indigo-600">
                Screening
              </h3>
              <div className="text-sm">
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Resume review process</li>
                  <li>Preliminary phone interviews</li>
                  <li>Skills assessment test</li>
                </ul>
              </div>
            </div>
            <div className="flex-shrink-0 hidden md:block">
              <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex-shrink-0">
              <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                04
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="font-bold text-xl mb-2 text-purple-600">
                Interviews
              </h3>
              <div className="text-sm">
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>First interview with HR</li>
                  <li>Technical assessment</li>
                  <li>Panel interview with department</li>
                  <li>Final interview with leadership</li>
                </ul>
              </div>
            </div>
            <div className="flex-shrink-0 hidden md:block">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex-shrink-0">
              <div className="bg-pink-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                05
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="font-bold text-xl mb-2 text-pink-500">
                Selection
              </h3>
              <div className="text-sm">
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Candidate evaluation meeting</li>
                  <li>Reference checks</li>
                  <li>Background verification</li>
                </ul>
              </div>
            </div>
            <div className="flex-shrink-0 hidden md:block">
              <div className="bg-pink-100 rounded-full w-16 h-16 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-pink-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Step 6 */}
          <div className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex-shrink-0">
              <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                06
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="font-bold text-xl mb-2 text-red-500">
                Offer & Negotiation
              </h3>
              <div className="text-sm">
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Salary package preparation</li>
                  <li>Formal offer letter</li>
                  <li>Negotiation and acceptance</li>
                </ul>
              </div>
            </div>
            <div className="flex-shrink-0 hidden md:block">
              <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Step 7 */}
          <div className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex-shrink-0">
              <div className="bg-yellow-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                07
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="font-bold text-xl mb-2 text-yellow-500">
                Onboarding
              </h3>
              <div className="text-sm">
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Pre-boarding documentation</li>
                  <li>First day orientation</li>
                  <li>Training program assignment</li>
                  <li>Integration with team</li>
                </ul>
              </div>
            </div>
            <div className="flex-shrink-0 hidden md:block">
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-yellow-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Join Our Team - Improved version */}
      <div className="mt-10 bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg shadow-sm border border-blue-100">
        <h3 className="text-2xl font-bold mb-6 text-blue-600">
          Why Join Our Team?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-1">Growth Opportunities</h4>
              <p className="text-gray-600 text-sm">
                Continuous professional development with regular training and
                advancement pathways.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-1">Supportive Culture</h4>
              <p className="text-gray-600 text-sm">
                Join a collaborative team environment focused on mutual success
                and wellbeing.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-1">Make an Impact</h4>
              <p className="text-gray-600 text-sm">
                Help shape the future of education by participating in our
                innovative teaching approach.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer note */}
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500">
          Saraswati Academy is an equal opportunity employer committed to
          diversity and inclusion.
        </p>
      </div>
    </div>
  );
};

export default HiringProcess;
