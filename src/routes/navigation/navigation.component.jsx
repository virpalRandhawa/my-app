import { Fragment } from 'react';
import {Outlet, Link} from 'react-router-dom';

import {ReactComponent as CrwnLogo} from '../../assests/crown.svg';


import './navigation.styles.scss';

const Navigation = () => {
  return(
   <Fragment>
    <div className='navigation'>
        <Link className='logo-container' to='/'>
       <CrwnLogo className='logo'/> 
        </Link>
        {/* nav-links-Container contain whole Nav Links */}
        <div className='nav-links-container'>
            <Link className='nav-link' to='/shop'>
            SHOP
            </Link>
            {/* sign-in link to path */}
            <Link className='nav-link' to='/sign-in'>
            SIGN IN
            </Link>
        </div>    
    </div>
    <Outlet />
   </Fragment>
  )
}

export default Navigation;








