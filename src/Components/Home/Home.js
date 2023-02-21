import React, { useRef } from 'react';
import img from '../../images/bg2.png'
import Projects from '../Projects/Projects';
import { Typewriter } from 'react-simple-typewriter'
import Lottie from "lottie-react";
import coddingAnimation from '../../images/codding.json'

const Home = () => {
    const componentRef = useRef();
    return (
        <div>
            <div className='mb-20'>
                    <div className=" flex flex-col gap-5 lg:flex-row">

                        <div className='md:w-1/2 mb-8'>

                        <Lottie animationData={coddingAnimation} loop={true} />


                        {/* <img src={img} className="max-w-md rounded-lg shadow-2xl" /> */}

                        </div>
                        <div className='text-white text-center md:text-left  md:w-1/2 '>
                            <h1 className="text-2xl font-bold">Hi There</h1>
                            <h1 className="text-4xl font-bold mt-2 ">I'M 
                                <span className='ml-2 text-yellow-400' style={{ fontWeight: 'bold' }}>
                                   
                                    <Typewriter
                                        words={['FRONT END WEB DEVELOPER','MERN STACK WEB DEVELOPER']}
                                        loop={5}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                        
                                    />
                                </span>
                            </h1>
                            <p className="py-6"></p>

                            <a target="_blank" href='https://drive.google.com/file/d/1t0mpPodHAsRQ4iIGTt4AKmB1FkVQyd3n/view?usp=sharing' download > <button className="btn bg-yellow-600 text-gray-100 font-bold ">Download Resume</button></a>
                        </div>
                    </div>
    
            </div>


            <div className='mb-20'>
                <Projects></Projects>
            </div>

        </div>
    );
};

export default Home;