import React from "react";

function IntroInReact() {
  return (
    <div className="bg-gray-50 min-h-screen py-8 px-2 md:px-0 md:mt-15 sm:mt-10">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-yellow-500 text-xl">★</span>
              <span className="font-semibold text-lg">5.0</span>
              <span className="text-gray-500 text-sm">(1,024 reviews)</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Introduction to React</h1>
            <p className="text-gray-600 mb-4">
              Dive into the fundamentals of React, learn to build interactive UIs, and master component-based development for modern web applications.
            </p>
            <ul className="grid grid-cols-2 gap-2 mb-6 text-sm">
              <li className="flex items-center gap-2 text-green-600"><span>✔</span> Comprehensive Curriculum</li>
              <li className="flex items-center gap-2 text-green-600"><span>✔</span> Expert Instructors</li>
              <li className="flex items-center gap-2 text-green-600"><span>✔</span> Hands-On Projects</li>
              <li className="flex items-center gap-2 text-green-600"><span>✔</span> Career-Ready Skills</li>
            </ul>
            <div className="flex gap-4">
              <button className="bg-green-600 hover:text-black hover:bg-transparent hover:border-2 text-white font-semibold px-6 py-2 rounded transition cursor-pointer">Enroll Now</button>
              <button className="border border-green-500  text-green-500 font-semibold px-6 py-2 rounded hover:bg-green-50 transition cursor-pointer">See Curriculum</button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-xs">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80"
                alt="React Course"
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
              <li>Understand React fundamentals: components, props, and state.</li>
              <li>Build interactive and reusable UI components.</li>
              <li>Manage application state using hooks and context.</li>
              <li>Integrate APIs and handle asynchronous data.</li>
              <li>Apply best practices for scalable and maintainable code.</li>
              <li>Deploy React applications to the web.</li>
            </ul>
            {/* Course Overview */}
            <h3 className="text-lg font-semibold mt-8 mb-2">Course Overview</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Introduction to Web Technologies</li>
              <li>React Components & JSX</li>
              <li>State, Props, and Events</li>
              <li>Hooks (useState, useEffect, etc.)</li>
              <li>Routing with React Router</li>
              <li>Project: Build a Portfolio Website</li>
            </ul>
          </div>
          {/* Stack & Details */}
          <div className="w-full md:w-72 flex-shrink-0">
            <h2 className="text-xl font-bold mb-3">Stack</h2>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">HTML</span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">CSS</span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">JavaScript</span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">React</span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">Node.js</span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">Git</span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">REST APIs</span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">Express</span>
            </div>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 20h5v-2a4 4 0 00-3-3.87"></path><path d="M9 20H4v-2a4 4 0 013-3.87"></path><circle cx="12" cy="7" r="4"></circle></svg>
                136 Total Enrolled
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"></path></svg>
                All Levels
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 20h5v-2a4 4 0 00-3-3.87"></path><path d="M9 20H4v-2a4 4 0 013-3.87"></path><circle cx="12" cy="7" r="4"></circle></svg>
                Full-Time: 12 weeks
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3"></path><circle cx="12" cy="12" r="10"></circle></svg>
                Completion Certificate
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><text x="12" y="16" textAnchor="middle" fontSize="10" fill="currentColor">14/50</text></svg>
                14/50 Seats Free
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroInReact;