import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function navbar(){
    return (
        <div>
            <nav className ='navbar'>
                <div className = 'nav-container'>
                    <Link to ='/' className ='navbar-logo'>  
                        TRVL <i className='fab fa-typo3'/>
                    </div> 

            </nav>

        </div>
    )
    
}