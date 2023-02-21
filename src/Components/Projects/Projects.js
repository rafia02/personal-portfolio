import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../Contex/Contex';
import fst from '../../images/fst.png'
import fst1 from '../../images/fst2.png'
import fst2 from '../../images/fst1.png'
import sec from '../../images/second.png'
import sec1 from '../../images/second1.png'
import sec2 from '../../images/second2.png'
import third from '../../images/third.png'
import third1 from '../../images/third1.png'
import third2 from '../../images/third2.png'


const Projects = () => {
    const {project, setProject} = useContext(AuthContex)


    const details = [
        {
            id: 1,
            name: 'Buy & Sell Car',
            img1: fst,
            img2: fst1,
            img3: fst2,
            link: 'https://car-resale-website.web.app/',
            tecnology: ' React, react router dom, react quarry, react hook form, firebase, jwt, tailwind css, daisy ui, express js, node js, mongodb',
            fetures: [
                'It was created by using react, react router dom, firebase, express js, mongodb, node js, tailwind, daisy ui, react query, react hook form etc.',
                'Mongodb crud operation , firebase authentication system, stripe payment system, included here.',
                ' Sellers can add a product and advertise their product and also can delete their product.',
                'Advertising products can see the home page, Admin can verify the seller and show them specifically.'
            ]
        },
        {
            id: 2,
            name: 'SR Photography',
            img1: sec,
            img2: sec1,
            img3: sec2,
            link: 'https://photography-website-3bad1.web.app/',
            tecnology: ' React, react router dom, react quarry, react hook form, firebase, jwt, tailwind css, daisy ui, express js, node js, mongodb',
            fetures: [
                'It was created by using react, react router dom, firebase authentication, express js, mongodb, node js, tailwind, daisy ui.',
                'A dashboard included here.Buyer seller and admin dashboard routes is different.',
                'Users can purchase services and review those services. Delete the review and update it.Jwt verification in server site and client site.',
                'Users can also add new services. Those are also shown on the home page.'
            ]
        },
        {
            id: 3,
            name: 'IT Education',
            img1: third,
            img2: third1,
            img3: third2,
            link: 'https://online-education-2df6b.web.app/',
            tecnology: ' React, react router dom, react quarry, react hook form, firebase, jwt, tailwind css, daisy ui, express js, node js, mongodb',
            fetures: [
                'It was created by using react, react router dom, firebase authentication, tailwind, daisy ui.',
                'Firebase authentication system , dynamic router, download pdf file, dark and white theme included here.',
                'The Private route added here, redirects to the login page. After login you can see those products.'
            ]

        }
    ]

    


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  ml-4 mt-10'>

            {
                details.map(pro => <div key={pro.id} className="card border shadow-xl">
                <figure><img  src={pro.img1} alt="" className='w-full hover:scale-105 ease-in hover:duration-300 h-52' /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {pro.name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>Technology: {pro.tecnology}</p>
                    <div className="card-actions flex justify-between items-center ">
                        <a href='https://github.com/rafia02' target="_blank" className="badge badge-outline btn btn-sm ">Github</a>

                        <Link to={`/project/${pro.id}`} onClick={()=>setProject(pro)} className="badge badge-outline btn btn-sm ">Details</Link>

                        <a href='https://car-resale-website.web.app/' target="_blank" className="badge badge-outline btn btn-sm ">Demo</a>

                    </div>
                </div>
            </div>)
            }

        </div>
    );
};

export default Projects;