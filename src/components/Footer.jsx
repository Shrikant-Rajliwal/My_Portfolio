import react from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Footer = ()=>{
    return(
        <>
            <div className='flex flex-col justify-center gap-4 items-center bg-black text-white py-4'>
                <p className='text-xl'>2024 My Portfolio.</p>
                <div className="flex gap-2 sm:gap-4 text-3xl">
                    <p className='text-xl'>You can find me here :</p>
                                <a target="_blank" href="https://github.com/Shrikant-Rajliwal"><FaGithub className='text-white' /></a>
                                <a target="_blank" href="https://www.linkedin.com/in/shrikant-rajliwal-260b85254/"><FaLinkedin className="text-blue-600" /></a>
                                <a target="_blank" href="https://www.instagram.com/shrikant_rajliwal/"> <FaInstagram  className="text-red-500" /></a>
                            
                </div>
                
            </div>
        </>
    )
}

export default Footer;