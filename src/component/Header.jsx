import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Button from "./Button"

export default function Header() {
    let Links =[
        {name : "Home" , link : "/"},
        {name : "Resources" , link : "/resources"},
        {name : "Courses" , link : "/courses" },
        {name : "About" , link : "/about" },
        ];
        let [open , setOpen] = useState(false);
return (
    <div className='shadow-md w-full fixed top-0 left-0'>
    <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7 '>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-stretch-normal text-gray-900'>
            <span className='text-3xl text-green-600 mr-2 pt-2 '>
                <ion-icon name="school-outline"></ion-icon>
            </span>
            AsalAcademy
        </div>
        <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all deration-500 ease-in ${open ? 'top-20  opecity-100' : 'top-[-459px]'} md:opecity-100 opecity-0 `}>    
        {
            Links.map((Links)=>(
            <li key={Links.name} className='md:ml-8 text-xl md:my-0 my-7 active:text-green-800'>
                <Link to={Links.link} className='text-gray-800 hover:text-gray-400 duration-500'>{Links.name}</Link>
            </li>
            ))
        }
        <Link to='login'>
        <Button>
            Login
        </Button>
        </Link>
        <Link to='register'>
        <Button>
            register
        </Button>
        </Link>
        </ul>           
    </div>
    </div>
)
}
