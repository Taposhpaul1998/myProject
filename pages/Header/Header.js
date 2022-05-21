
import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { Navbar, } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebaseinit';
import './Header.css';

const Header = () => {
    const [agree, setAgree] = useState(false);
    const [user] = useAuthState(auth);
    const handelsignOut = () => {
        signOut(auth);
    }
    return (
        <Navbar className='conteiner'>

            <div className="navIcon">
                <h4>Cycle House</h4>
            </div>


            <div className={agree ? "active" : "navMenu"}>
                <Link to="/">HOME</Link>
                <a href="/home#pricing">PRICING</a>
                <a href="/home#inventory">INVENTORY</a>
                <Link to="/blog">BLOGS</Link>
                {
                    user && <>
                        <Link to="/manageitems">MANAGE ITEM</Link>
                        <Link to="/addedItem">ADD ITEM</Link>
                        <Link to="/myitems">MY ITEM</Link>
                    </>
                }
                <Link to="/signup">SIGNUP</Link>
                {
                    user ?
                        <Link to="/#" onClick={handelsignOut}>SIGN OUT</Link> :
                        <Link to="/singin">SIGNIN</Link>
                }
            </div>

            <div onClick={() => setAgree(!agree)} className='hambager-menu'>
                <div className='hambarger'></div>
                <div className='hambarger'></div>
                <div className='hambarger'></div>
            </div>

        </Navbar>
    );
};

export default Header;