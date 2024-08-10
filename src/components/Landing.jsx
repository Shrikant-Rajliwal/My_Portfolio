import react from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Education from './Education';
import Experience from './Experience';
import Project from './Project';
import Contact from './Contact';

const Landing =()=>{
    return(
        <div className='bg-gray-600 h-screen'>

            <Navbar />
            {/* <Contact /> */}
            {/* <Project /> */}
            {/* <Experience /> */}
            {/* <Education /> */}
            <Home />
        </div>
        
       
    )
}

export default Landing;