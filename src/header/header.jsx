
import { Link, NavLink } from 'react-router-dom';
import './header.css';


export function Header() {

    return (
        <div>
            <div className="main-header">
                <div className='row'>
                    <div className='col-4'>
                        <img
                            src="https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_640.png"
                            alt="logo"
                            className="header-logo-image"
                        />
                        <span className="header-website-name">FindDubai</span>
                    </div>
                    <div className='col-4'></div>


                    
                    <div className='col-4'>
                        <ul className='menu' >
                            <li className='menu-li'>My Profile
                                <ul className='sub-menu'>
                                    <Link to={"/create-profile"} className="nav-link">
                                        <li>Create New Profile</li>
                                    </Link>
                                    <br></br>
                                    <Link to={"/profile-list"} className="nav-link">
                                        <li>Edit Profile
                                        </li>
                                    </Link>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}




