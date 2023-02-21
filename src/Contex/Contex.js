import React, { createContext, useState } from 'react';

export const  AuthContex = createContext()
const Contex = ({children}) => {
    const [project, setProject] = useState({})


    const info ={project, setProject}
    return (
        <div>   
            <AuthContex.Provider value={info}>
                {children}
            </AuthContex.Provider>
        </div>
    );
};

export default Contex;