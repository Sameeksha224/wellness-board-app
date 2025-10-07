import React from 'react';
import { Link } from 'react-router-dom';
import physicalWellbeingImg from '../assets/physical-wellbeing.png';

const Navbar = () =>{
    return(
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <img className='h-10 w-10 mr-2' src = {physicalWellbeingImg} alt= 'logo'></img>
                        <span className="font-bold text-xl thriving-tight">ThriveTips</span>
                    </div>
                    <div>
                        <Link 
                          to="/" 
                          className="text-blue-500 font-medium hover:text-blue-700"
                        >
                          Main Page
                        </Link>
                    </div>
                     <div>
                        <Link 
                          to="/favorites" 
                          className="text-blue-500 font-medium hover:text-blue-700"
                        >
                          Favorites
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}



export default Navbar;

