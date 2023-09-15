import { ClassNames } from '@emotion/react';
import {NavLink} from 'react-router-dom';
export const NavBar = ()=>{
    return (
        <div className="flex flex-col gap-2">
        <div className=' hover:text-rgb(255, 0, 255)'>
        <NavLink to="/"> Home </NavLink>
        </div>
        <div className=' hover:text-rgb(255, 0, 255)'>
        <NavLink to="/add"> Add Note </NavLink>
        </div>
        <div className=' hover:text-rgb(255, 0, 255)'>
        <NavLink to="/view-all"> View All </NavLink>
        </div>
        
        
        {/* <br/>
       
        <br/>
       
         <NavLink to="/delete"> Delete Notes </NavLink>
        <NavLink to="/view-all"> View All </NavLink>
        <NavLink to="/search"> Search Notes </NavLink> 
        <br/>
        
        <br/> 
        */}
       
        </div>
        
    
    )
}