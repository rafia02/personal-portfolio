import React from 'react';
import Lottie from "lottie-react";
import comming from '../../images/commingsoon.json'

const Blog = () => {
    return (
        <div className='flex justify-center items-center h-auto h-96' >
           <Lottie animationData={comming} loop={true} />  
        </div>

    );
};

export default Blog;