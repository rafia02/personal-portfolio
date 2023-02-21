import React, { useContext } from 'react';
import { AuthContex } from '../../Contex/Contex';

const DetailsProject = () => {
    const { project } = useContext(AuthContex)
    const { img1, img2, img3, name, tecnology, fetures, link } = project
    console.log(project)


    return (
        <div className='mb-36 '>
            <h1 className='text-3xl font-bold text-center text-white mb-8'>{name}</h1>

            <div>


            <div className='text-white  px-20'>
                    <h1 className='text-lg'>Technology : {tecnology}</h1>
                    <h1> <p className='text-xl font-bold mt-5'> Features and functionalities: </p>
                        <ol className='list-disc px-10'>
                            {
                                fetures.map((feture, i) => <li className='my-1' key={i}>{feture}</li>)
                            }
                        </ol>
                    </h1>

                </div>
                <div className='text-center my-10'>
                    <a href={link} target="_blank" className="badge font-bold text-gray-100 badge-outline bg-yellow-600 btn btn-sm ">Live Link</a>

                </div>



                <div className='flex flex-col  md:flex-row gap-5  h-96 my-20'>
                    <div className='w-full'>
                        <img className='rounded h-full hover:scale-105  ease-in duration-500' src={img1} alt="" />
                    </div>
                    <div className='w-full h-96'>
                        <img className='rounded h-full  hover:scale-105  ease-in duration-500' src={img2} alt="" />
                    </div>
                    <div className='w-full h-96'>
                        <img className='rounded h-full  hover:scale-105  ease-in duration-500' src={img3} alt="" />
                    </div>


                </div>


                

            </div>
        </div>
    );
};

export default DetailsProject;