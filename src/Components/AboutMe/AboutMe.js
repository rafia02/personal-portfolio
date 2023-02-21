import React from 'react';
import aboutImg from '../../images/about.json'
import Lottie from "lottie-react";



const AboutMe = () => {



    return (
        <div>

            <div className="hero min-h-screen w-full ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                
                <div className='md:w-1/2'>
                <Lottie animationData={aboutImg} loop={true} />
                </div>


                    <div className='w-1/2 text-white'>
                        <h1 className="text-3xl md:text-5xl font-bold">About Me</h1>
                        <p className="py-6 font-sans ">My name is Rafia and I a Full Stack Web developer. I am much interested in developing new things which excite me a lot.</p>
                        <p>To know more about check my resume     </p>
                    
                       <div className='mt-8 mb-3'>
                       <p className='font-serif'>Email: rafiabinterashed01@gmail.com</p>

                        <p className='font-serif'>Address: Bogra,Dhaka</p>
                       </div>

                       <button className="btn  bg-yellow-600 hover:font-bold hover:text-white"> <a href='https://drive.google.com/file/d/1t0mpPodHAsRQ4iIGTt4AKmB1FkVQyd3n/view' target="_blank">Download Resume</a></button>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default AboutMe;