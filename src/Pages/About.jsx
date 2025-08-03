import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen bg-[#232742] flex items-center justify-center py-12">
      <div className="bg-white rounded-2xl shadow-lg max-w-5xl w-full mx-4 p-0 overflow-hidden">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Left Section */}
          <div className="flex flex-col justify-center items-center bg-white px-8 py-12">
            <h2 className="text-3xl font-serif font-bold mb-2 text-[#232742]">About Us</h2>
            <div className="w-16 h-1 bg-yellow-400 mb-6"></div>
            <img
              src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
              alt="AsalAcademy students"
              className="rounded-lg mb-6 w-full max-w-md"
            />
            <div className="bg-[#232742] text-white rounded-lg px-6 py-4 text-center font-semibold text-lg shadow-md mb-4">
              2000+ satisfied students all over the globe
            </div>
          </div>
          {/* Right Section */}
          <div className="flex flex-col justify-center px-8 py-12">
            <h3 className="font-bold text-[#232742] mb-2">
              Discover the winning platform for design, innovation, and technology at AsalAcademy.
            </h3>
            <p className="text-gray-700 mb-6">
              AsalAcademy empowers learners to master the latest technologies, build real-world skills, and connect with expert instructors. Our courses are designed for adaptability, innovation, and success in any environment. Join a global community and experience education that fits your goals.
            </p>
            <button className="flex items-center bg-yellow-400 hover:bg-yellow-500 text-[#232742] font-semibold px-6 py-2 rounded transition w-max mb-8">
              EXPLORE MORE
              <span className="ml-2 text-xl">&#8594;</span>
            </button>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <span className="text-3xl font-bold text-yellow-400">75m+</span>
                <div className="text-xs text-gray-600 mt-1">STUDENTS LEARNING</div>
              </div>
              <div className="text-center">
                <span className="text-3xl font-bold text-yellow-400">7,000+</span>
                <div className="text-xs text-gray-600 mt-1">INSTRUCTOR ONLINE</div>
              </div>
              <div className="text-center">
                <span className="text-3xl font-bold text-yellow-400">1,000+</span>
                <div className="text-xs text-gray-600 mt-1">FREE COURSES</div>
              </div>
              <div className="text-center">
                <span className="text-3xl font-bold text-yellow-400">85k+</span>
                <div className="text-xs text-gray-600 mt-1">ACTIVE COURSES</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;