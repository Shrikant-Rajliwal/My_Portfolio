import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { FaGripfire } from "react-icons/fa";
import mySqlLogo from "../assets/Images/mySqlLogo.png";
import solar_secure from "../assets/Images/solar_secure.png";
import sih2 from "../assets/Images/sih2.png";
import Navbar from "./Navbar";
import Footer from "./Footer";




const Education =() =>{

    const svg1Ref = useRef()
    const round1Ref = useRef()
    const round2Ref = useRef()
    const img1Ref = useRef()
    const img2Ref = useRef()

    useGSAP(()=>{
        gsap.fromTo(svg1Ref.current,
            { y: '0%', opacity: 1 }, // Start from above the viewport
            { y: '-20%', opacity: 1, duration: 1.1 ,repeat: -1,    // Infinite loop
                yoyo: true  }
        )
    })

    useGSAP(()=>{
        gsap.fromTo(round1Ref.current,
            { x: '10%', opacity: 1 }, // Start from above the viewport
            { x: '-10%', opacity: 1, duration: 1 ,repeat: -1,    // Infinite loop
                yoyo: true  }
        )
    })
    useGSAP(()=>{
        gsap.fromTo(round2Ref.current,
            { x: '10%', opacity: 1 }, // Start from above the viewport
            { x: '-10%', opacity: 1, duration: 1 ,repeat: -1,    // Infinite loop
                yoyo: true  }
        )
    })
    useGSAP(()=>{
        gsap.fromTo(img1Ref.current,
            { rotateY: '0deg' }, // Start with no rotation
            {
              rotateY: '180deg', // End with a 180-degree rotation (flip)
              duration: 0.2, // Duration of the flip animation
              scrollTrigger: {
                trigger: img1Ref.current,
                start: "top 80%", // Adjust based on where you want the flip to start
                end: "bottom 20%", // Adjust based on where you want the flip to end
                scrub: true, // Synchronize animation with scroll position
                // markers: true, // Optional: Shows markers for debugging
              }
            }
        )
    })
    useGSAP(()=>{
        gsap.fromTo(img2Ref.current,
            { rotateY: '0deg' }, // Start with no rotation
            {
              rotateY: '180deg', // End with a 180-degree rotation (flip)
              duration: 0.2, // Duration of the flip animation
              scrollTrigger: {
                trigger: img2Ref.current,
                start: "top 80%", // Adjust based on where you want the flip to start
                end: "bottom 20%", // Adjust based on where you want the flip to end
                scrub: true, // Synchronize animation with scroll position
                // Optional: Shows markers for debugging
              }
            }
        )
    })

    return(
        <>
                    <Navbar />

            <div className="w-full h-auto bg-gray-950 ">
                <div className="w-full md:flex md:justify-center md:items-center pt-10 md:pt-16 xl:pt-32">
                <div className="flex justify-center items-center md:w-[50%]">
  <svg ref={svg1Ref} className="w-[70%] xl:w-[70%] svg" version="1.1" id="Capa_1"
       xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
       viewBox="0 0 245.827 245.827" xml:space="preserve"
       fill="#ff" stroke="#ff0000" stroke-width="1.7207890000000003">
    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
    <g id="SVGRepo_iconCarrier">
      <path className="cap" d="M223.336,148.384l-0.137-23.527l22.628-12.662L122.576,47.195L0,113.495l49.144,28.216 l0.098,16.766l0.01,1.339l0.449-0.215c-0.518,0.703-0.85,1.426-0.84,2.149c0.039,8.246,33.326,14.772,74.41,14.548 c41.064-0.215,74.302-7.122,74.273-15.349c0-0.723-0.381-1.426-0.889-2.149l0.449,0.215v-1.339l-0.088-16.834l21.309-13.258 l0.117,20.83c-2.345,1.006-3.976,3.312-3.957,6.009c0.02,3.537,2.892,6.399,6.458,6.37c3.586-0.02,6.429-2.912,6.409-6.439 C227.332,151.657,225.691,149.371,223.336,148.384z M123.241,170.621c-36.452,0.205-66.017-3.801-66.046-8.91 c-0.029-5.11,29.496-9.399,65.949-9.585c36.462-0.205,66.017,3.781,66.037,8.881 C189.209,166.098,159.703,170.426,123.241,170.621z M195.335,127.183c-4.934-5.188-22.618-18.886-72.426-18.602 c-49.877,0.264-67.336,14.128-72.211,19.394l-0.029-4.963c0,0,14.147-21.524,72.202-21.827 c58.025-0.313,72.436,21.045,72.436,21.045L195.335,127.183z M215.755,162.199l-2.511,36.433 c7.767-12.203,14.255-7.66,14.255-7.66l-0.156-28.832C218.998,165.414,215.755,162.199,215.755,162.199z"/>
    </g>
  </svg>
</div>

                        <div className="text-white text-center flex flex-col gap-4 md:w-2/3 pb-20">
                                <h1 className="text-4xl">Education</h1>
                                <h3 className="text-2xl">Basic Qualification and Certifications</h3>
                                <p className="opacity-50 lg:w-[90%]"> I am currently pursuing [Engineering] in [Computer Science] from [SSBT COET Jalgaon]. Demonstrating my commitment to continuous learning and professional development. My academic background and certifications have equipped me with a strong foundation....</p>
                        </div>

                </div>

                <h1 className="text-3xl text-center text-white my-32 lg:text-4xl">Degree Pursuing</h1>
                <div className="flex flex-col gap-10 justify-center items-center text-white pb-20 md:flex-row md:justify-evenly md:my-20 xl:gap-28">

                    <div ref={round1Ref} className=" flex justify-center items-center border-2 border-white w-36 h-36 rounded-full xl:w-48 xl:h-48">
                            <img ref={img1Ref} className="shadow-2xl shadow-yellow-300 w-14 h-20 rounded-lg object-cover	xl:h-28 xl:w-22" src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>

                    <div className=" relative flex flex-col border-2 border-white/25  bg-white/10 backdrop-filter backdrop-blur-lg shadow-lg  w-[85%] h-96 rounded  p-4 gap-2 sm:w-[60%] md:w-[50%] lg:w-[50%] xl:w-[35%] ">
                            <h1 className="text-2xl ">SSBT College of Engineering</h1>
                            <h1 className="text-2xl ">Computer Science Engineering</h1>
                            <p className="flex justify-center md:mt-10"><FaGripfire className="text-cyan-300 text-2xl mx-2" />Currently i am in the last year of Computer Engineering</p>
                            <p className="flex justify-center"><FaGripfire className="text-cyan-300 text-2xl mx-2" />My current SGPA is : 8.81 with the overall CGPA of 8.80</p>
                           <a href="https://www.sscoetjalgaon.ac.in/"><button className="absolute border-2  bg-cyan-500 shadow-lg shadow-cyan-500/50 bg-gradient-to-r text-white from-teal-400 to-blue-500  py-1  w-40 text-lg  mt-6 right-4 bottom-4">Visit Website</button></a> 

                    </div>
                
                </div>

                <h1 className="text-3xl text-center text-white my-5 lg:text-4xl">Degree Completed</h1>
                <div className="flex flex-col gap-10 justify-center items-center text-white pb-20 md:flex-row md:justify-evenly md:my-20 xl:gap-28">

                    <div ref={round2Ref} className=" flex justify-center items-center border-2 border-white w-36 h-36 rounded-full xl:w-48 xl:h-48">
                            <img ref={img2Ref} className="shadow-2xl shadow-orange-300 w-14 h-20 rounded-lg object-cover xl:h-28 xl:w-22	" src="https://images.unsplash.com/photo-1606663889134-b1dedb5ed8b7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>

                    <div className=" relative flex flex-col  border-2 border-white/25  bg-white/10 backdrop-filter backdrop-blur-lg shadow-lg w-[85%] h-96 rounded  p-4 gap-2 sm:w-[60%] md:w-[50%] lg:w-[50%] xl:w-[35%] ">
                            <h1 className="text-2xl ">M.J College</h1>
                            <h1 className="text-2xl ">12th Science</h1>
                            <p className="flex justify-center md:mt-10"><FaGripfire className="text-cyan-300 text-2xl mx-2" />Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, cum?</p>
                            <p className="flex justify-center"><FaGripfire className="text-cyan-300 text-2xl mx-2" />Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, cum?</p>
                            <a href="https://mjcollege.kces.in/"><button className="absolute border-2  bg-cyan-500 shadow-lg shadow-cyan-500/50 bg-gradient-to-r text-white from-teal-400 to-blue-500  py-1  w-40 text-lg  mt-6 right-4 bottom-4">Visit Website</button></a> 

                    </div>
                
                </div>
                        <h1 className="text-3xl text-white text-center my-20">Certificates</h1>
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 justify-items-center items-center">
    <a  href="https://drive.google.com/file/d/10zlTocZ32fhw2dM9kOqCvvtXYhEenURj/view" className="w-full h-full flex justify-center items-center"  target="_blank" >
    <div className="bg-black w-60 h-40 border-2 border-cyan-400 hover:shadow-2xl  hover:shadow-cyan-300  transition-shadow duration-500  flex flex-col items-center justify-center xl:w-[65%] xl:h-[80%]">
        <div className="bg-cyan-400 w-full h-[75%] flex items-center justify-center">
            <img className="w-3/4 h-auto object-contain" src={mySqlLogo} alt="MySQL Logo" />
        </div>
        <div className="border-t-2 border-white w-full h-[25%] text-center flex items-center justify-center ">
            <h1 className="text-xl text-white">MySQL Certification</h1>
        </div>
    </div>
    </a>
    
    <a  href="https://drive.google.com/file/d/19m62_x_FH6dgr3_7i5jwAvvkveEek4C4/view" className="w-full h-full flex justify-center items-center"  target="_blank" >
    <div className="bg-black w-60 h-40 border-2 border-green- hover:shadow-2xl  hover:shadow-green-300  transition-shadow duration-500  flex flex-col items-center justify-center  xl:w-[65%] xl:h-[80%]">
        <div className="bg-green-400 w-full h-[75%] flex items-center justify-center">
            <img className="w-3/4 h-auto object-contain" src={sih2} alt="MySQL Logo" />
        </div>
        <div className="border-t-2 border-white w-full h-[25%] text-center flex items-center justify-center">
            <h1 className="text-xl text-white">SIH Certification</h1>
        </div>
    </div>
    </a>

    <a  href="https://drive.google.com/file/d/1XOm4Pqt6kXp8AyeDw8KCGwS1AGWFgttE/view" className="w-full h-full flex justify-center items-center"  target="_blank" >
    <div className="bg-black w-60 h-40 border-2 border-orange-300 hover:shadow-2xl  hover:shadow-orange-300  transition-shadow duration-500  flex flex-col items-center justify-center  xl:w-[65%] xl:h-[80%]">
        <div className="bg-orange-300 w-full h-[75%] flex items-center justify-center">
            <img className="w-3/4 h-auto object-contain" src={solar_secure} alt="Solar Secure" />
        </div>
        <div className="border-t-2 border-white w-full h-[25%] text-center flex items-center justify-center  xl:w-[65%] xl:h-[80%]">
            <h1 className="text-xl text-white">Solar Secure</h1>
        </div>
    </div>
    </a>

    <a  href="https://drive.google.com/file/d/10zlTocZ32fhw2dM9kOqCvvtXYhEenURj/view" className="w-full h-full flex justify-center items-center"  target="_blank" >
    <div className="bg-black w-60 h-40 border-2 border-red-200 hover:shadow-2xl  hover:shadow-red-300  transition-shadow duration-500  flex flex-col items-center justify-center  xl:w-[65%] xl:h-[80%]">
        <div className="bg-red-100 w-full h-[75%] flex items-center justify-center">
            <img className="w-3/4 h-auto object-contain" src="https://classpro-profile-images.s3.amazonaws.com/data/1653/logo/logo.png?1616739472" alt="ClassPro Logo" />
        </div>
        <div className="border-t-2 border-white w-full h-[25%] text-center flex items-center justify-center">
            <h1 className="text-xl text-white">C Certification</h1>
        </div>
    </div>
    </a>


    <a  href="https://drive.google.com/file/d/11V-CB0FHpx8S-aa2uKZJAhAJTdZUryfc/view" className="w-full h-full flex justify-center items-center"  target="_blank" >
    <div className="bg-black w-60 h-40 border-2 border-red-200 hover:shadow-2xl  hover:shadow-red-300  transition-shadow duration-500  flex flex-col items-center justify-center  xl:w-[65%] xl:h-[80%]">
        <div className="bg-red-100 w-full h-[75%] flex items-center justify-center">
            <img className="w-3/4 h-auto object-contain" src="https://classpro-profile-images.s3.amazonaws.com/data/1653/logo/logo.png?1616739472" alt="ClassPro Logo" />
        </div>
        <div className="border-t-2 border-white w-full h-[25%] text-center flex items-center justify-center">
            <h1 className="text-xl text-white">C++ Certification</h1>
        </div>
    </div>
    </a>

    <a  href="https://drive.google.com/file/d/1a_F7l8-GULttXVdqE0gS8Hvr-JZDCi1d/view" className="w-full h-full flex justify-center items-center "  target="_blank" >
    <div className="bg-black w-60 h-40  border-2 border-red-200 hover:shadow-2xl  hover:shadow-red-300  transition-shadow duration-500  flex flex-col items-center justify-center  xl:w-[65%] xl:h-[80%]">
        <div className="bg-red-100 w-full h-[75%] flex items-center justify-center">
            <img className="w-3/4 h-auto object-contain" src="https://classpro-profile-images.s3.amazonaws.com/data/1653/logo/logo.png?1616739472" alt="ClassPro Logo" />
        </div>
        <div className="border-t-2 border-white w-full h-[25%] text-center flex items-center justify-center">
            <h1 className="text-xl text-white">JAVA Certification</h1>
        </div>
    </div>
    </a>
    
</div>

            </div>

            <Footer />

        </>
    )
}

export default Education;
