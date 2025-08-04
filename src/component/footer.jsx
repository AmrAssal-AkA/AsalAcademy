import react from 'react'
import { FaFacebook, FaInstagram, FaSnapchat, FaTwitter } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

import {Link} from 'react-router-dom'

const Footer = () =>{
        let Links =[
        {name : "Home" , link : "/"},
        {name : "Resources" , link : "/resources"},
        {name : "Courses" , link : "/courses" },
        {name : "About" , link : "/about"}
        ];
    return (
        <footer className='shadow-lg w-full  md:px-8 lg:px-8'>
            <div className='md:flex items-center grid md:grid-cols-3 bg-white py-4 md:px-10 px-7 justify-between'> 
            <div className='font-bold text-2xl cursor-pointer flex items-center font-stretch-normal text-gray-900'>
            <span className='text-3xl text-green-600 mr-2 pt-2 '>
                <ion-icon name="school-outline"></ion-icon>
            </span>
                AsalAcademy
            </div>
            <div >
                <ul className='md:flex md:items-center md:pb-0 pb-12   '>
                    {
                        Links.map((Links)=>(
                        <li key={Links.name} className='md:ml-8 text-xl md:my-0 my-7 active:text-green-800'>
                            <Link to={Links.link} className='text-gray-800 hover:text-gray-400 duration-500'>{Links.name}</Link>
                        </li>
                                ))
                            }
                </ul>
            </div>
            <diV>
                <h3>stay in touch</h3>
            <ul className='flex space-x-4 '>
            <li> 
            <a href='' className='text-white hover:text-3xl' ><FaFacebook className='text-blue-900'/></a></li>
            <li>
                
                <a href='' className='text-white hover:text-2xl' ><FaX className='text-black'/></a></li>
            <li><a href='' className='text-white hover:text-2xl' > <FaInstagram className='text-red-600'/></a></li>
            <li>
                
                <a href='' className='text-white hover:text-2xl' ><FaSnapchat className='text-yellow-300'/></a></li>
        </ul>
            </diV>
            </div>
            <div  className=' border-t-2'>
                    <p className=' mb-0 text-2xl text-center'>&copy; 2025 Code with AmrAssal. All Right Reserved</p>
            </div>
        </footer>
    )
}

export default Footer