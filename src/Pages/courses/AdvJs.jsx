import React from "react";

function AdvJs() {
  return (
    <div className="bg-gray-50 min-h-screen py-8 px-2 md:px-0 mt-15">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-yellow-500 text-xl">★</span>
              <span className="font-semibold text-lg">5.0</span>
              <span className="text-gray-500 text-sm">(876 reviews)</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Advanced JavaScript</h1>
            <p className="text-gray-600 mb-4">
              Deep dive into ES6+, async programming, closures, prototypes, and advanced JavaScript concepts to master modern web development.
            </p>
            <ul className="grid grid-cols-2 gap-2 mb-6 text-sm">
              <li className="flex items-center gap-2 text-green-600"><span>✔</span> Comprehensive Curriculum</li>
              <li className="flex items-center gap-2 text-green-600"><span>✔</span> Expert Instructors</li>
              <li className="flex items-center gap-2 text-green-600"><span>✔</span> Hands-On Projects</li>
              <li className="flex items-center gap-2 text-green-600"><span>✔</span> Career-Ready Skills</li>
            </ul>
            <div className="flex gap-4">
              <button className="bg-green-500 hover:bg-transparent hover:text-black hover:border-2 border-green-400 text-white font-semibold px-6 py-2 rounded transition">Enroll Now</button>
              <button className="border border-green-500 text-green-500 font-semibold px-6 py-2 rounded hover:bg-orange-50 transition">See Curriculum</button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-xs">
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80"
                alt="Advanced JavaScript Course"
                className="rounded-xl w-full h-48 object-cover"
              />
              <button className="absolute inset-0 flex items-center justify-center">
                <span className="bg-white bg-opacity-80 rounded-full p-3 shadow-lg">
                  <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <polygon points="7,5 15,10 7,15" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mt-10 border-b border-gray-200 pb-2 overflow-x-auto">
          <button className="text-green-500 font-semibold border-b-2 border-green-500 pb-2 px-2">Overview</button>
          <button className="text-gray-500 hover:text-green-500 transition pb-2 px-2">Course Info</button>
          <button className="text-gray-500 hover:text-green-500 transition pb-2 px-2">Download Material</button>
          <button className="text-gray-500 hover:text-green-500 transition pb-2 px-2">Testimonials</button>
          <button className="text-gray-500 hover:text-green-500 transition pb-2 px-2">Pricing</button>
          <button className="text-gray-500 hover:text-green-500 transition pb-2 px-2">FAQ</button>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-10 mt-8">
          {/* Learning Objectives */}
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-3">Learning Objectives</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Master ES6+ features: arrow functions, destructuring, spread/rest, and modules.</li>
              <li>Understand closures, scope, and the JavaScript execution context.</li>
              <li>Work with asynchronous JavaScript: callbacks, promises, async/await.</li>
              <li>Explore prototypes, inheritance, and the JavaScript object model.</li>
              <li>Apply advanced array and object manipulation techniques.</li>
              <li>Build and debug complex applications using modern JS tools.</li>
            </ul>
            {/* Course Overview */}
            <h3 className="text-lg font-semibold mt-8 mb-2">Course Overview</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>JavaScript Fundamentals Refresher</li>
              <li>Deep Dive into ES6+ Syntax</li>
              <li>Closures, Scope & Execution Context</li>
              <li>Asynchronous Programming (Promises, async/await)</li>
              <li>Prototypes & Inheritance</li>
              <li>Advanced Functions & Patterns</li>
              <li>Project: Build a Modern JS App</li>
            </ul>
          </div>
          {/* Stack & Details */}
          <div className="w-full md:w-72 flex-shrink-0">
            <h2 className="text-xl font-bold mb-3">Stack</h2>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">JavaScript</span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">ES6+</span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">Node.js</span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">Async/Await</span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">Promises</span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">Git</span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">Debugging</span>
            </div>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 20h5v-2a4 4 0 00-3-3.87"></path><path d="M9 20H4v-2a4 4 0 013-3.87"></path><circle cx="12" cy="7" r="4"></circle></svg>
                98 Total Enrolled
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 textgreen-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"></path></svg>
                Intermediate/Advanced
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 20h5v-2a4 4 0 00-3-3.87"></path><path d="M9 20H4v-2a4 4 0 013-3.87"></path><circle cx="12" cy="7" r="4"></circle></svg>
                Full-Time: 8 weeks
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3"></path><circle cx="12" cy="12" r="10"></circle></svg>
                Completion Certificate
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><text x="12" y="16" textAnchor="middle" fontSize="10" fill="currentColor">8/30</text></svg>
                8/30 Seats Free
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdvJs;