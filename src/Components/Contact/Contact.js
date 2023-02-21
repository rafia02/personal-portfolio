import React from 'react';
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_v9kfn0g', 'template_2u0htja', form.current, '_qF53UQ6-NADVroSX')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };



    return (
        <div className='my-10'>
            <h1 className="text-3xl text-center my-10 font-bold text-white">Contact Me</h1>
            <form  ref={form} onSubmit={sendEmail}>
                <div className='w-2/6 mx-auto  flex flex-col '>
                    <input type="text" name="to_name" placeholder="Your Name" className="input mr-20 w-full  mb-5 input-bordered bg-gray-700" />
                    <input type="text" name="from_name"  placeholder="Your Email" className="input input-bordered  w-full mb-5 bg-gray-700" />
                    <textarea name="message" className="textarea textarea-bordered  w-full bg-gray-700" placeholder="Your Message"></textarea>
                <button type='submit' className='btn  mt-5 bg-yellow-600'> Submit</button>

                </div>
               

            </form>

        </div>
    );
};

export default Contact;