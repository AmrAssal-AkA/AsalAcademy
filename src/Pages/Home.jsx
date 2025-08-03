import React from 'react'
import photoHeader from '../assets/Header-Page/Header.jpg'
import Button from '../component/Button'


function HomeHeader () {
    return(
        <section className="bg-gray-100 py-12 px-6 flex flex-col md:flex-row items-center justify-between sm:mt-10">
        <div className="max-w-xl">
        <h2 className="text-2xl lg:text-3xl font-bold mb-4">Empower Your Education</h2>
        <p className="mb-6 text-gray-600">
            Discover top-notch educational resources that will take your learning experience to the next level.
        </p>
        <Button>Explore Courses</Button>
        </div>
        <img src={photoHeader} alt="Students learning online" className="rounded-xl mt-10 lg:mt-0 w-full max-w-md" />
    </section>

    )
}

function PrevCourses(){

    let courses = [
        {
            id: 1,
            image: "https://via.placeholder.com/150",
            title: "Introduction to Programming",
            description: "Learn the basics of programming with hands-on exercises.",
        },
        {
            id: 2,
            image: "https://via.placeholder.com/150",
            title: "Web Development Bootcamp",
            description: "Build responsive websites using HTML, CSS, and JavaScript.",
        },
        {
            id: 3,
            image: "https://via.placeholder.com/150",
            title: "Data Science Fundamentals",
            description: "Explore data analysis and visualization techniques.",
        }
    ];

    return (
        <section className='w-full bg-gray-100 mt-10 mb-5 py-5'>
            <h1 className='text-2xl font-bold ml-5'>Previous Courses</h1>
            <div className='grid grid-cols-3 gap-2 ml-2'>
                {courses.map(course => (
                    <div key={course.id} className='bg-white rounded-2xl shadow-md mt-8 p-4'>
                        <img src={course.image} alt={course.title} className='w-full h-32 object-cover rounded-t-xl' />
                        <h3 className='text-lg font-semibold mt-2'>{course.title}</h3>
                        <p className='text-gray-600'>{course.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

function Contact(){
    return (
        <section className="bg-[#fceed6] py-16 flex items-center justify-center">
        <div className="max-w-5xl w-full mx-4 grid md:grid-cols-2 gap-8 bg-opacity-90">
        {/* Contact Info */}
        <div className="flex flex-col justify-center text-black px-6">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="mb-8 text-black">
            For any questions or feedback, reach out to us. We're here to help you on your AsalAcademy journey!
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="bg-white text-[#232742] rounded-full p-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92V19a2 2 0 01-2.18 2A19.86 19.86 0 013 5.18 2 2 0 015 3h2.09a2 2 0 012 1.72c.13 1.06.37 2.09.72 3.09a2 2 0 01-.45 2.11l-1.27 1.27a16 16 0 006.58 6.58l1.27-1.27a2 2 0 012.11-.45c1 .35 2.03.59 3.09.72A2 2 0 0122 16.92z"></path></svg>
              </span>
              <div>
                <div className="font-semibold text-cyan-300">Phone</div>
                <div className="text-black text-sm">507-475-60945-6094</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="bg-white text-[#232742] rounded-full p-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16v16H4V4zm2 2v12h12V6H6zm2 2h8v8H8V8z"></path></svg>
              </span>
              <div>
                <div className="font-semibold text-cyan-300">Email</div>
                <div className="text-black text-sm">wrub7d78ioe@temporary-mail.net</div>
              </div>
            </div>
          </div>
        </div>
        {/* Contact Form */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-[#232742]">Send Message</h3>
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border-b border-gray-300 py-2 px-2 focus:outline-none focus:border-cyan-400"
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full border-b border-gray-300 py-2 px-2 focus:outline-none focus:border-cyan-400"
                required
              />
            </div>
            <div>
              <textarea
                placeholder="Type your Message..."
                className="w-full border-b border-gray-300 py-2 px-2 focus:outline-none focus:border-cyan-400"
                rows={3}
                required
              />
            </div>
            <Button type="submit" >
              Send
            </Button>
          </form>
        </div>
      </div>
    </section>
    )}

function Home() {
return (
<>
    <HomeHeader />
    <PrevCourses />
    <Contact />
</>
)
}

export default Home