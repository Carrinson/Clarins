import search from '../icons/search-line.png';
import favourites from '../icons/heart-line.png';
import bag from '../icons/shopping-bag-3-line.png';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from '.././assets/image/Clarins Logo.png';

function HeaderList() {
    const location = useLocation();
    const { pathname } = location;
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
    const [visitorCount, setVisitorCount] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 1024);
        };

        window.addEventListener('resize', handleResize);

        // Simulate visitor count increment (replace with your actual logic)
        setVisitorCount(prevCount => prevCount + 1);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (!isDesktop) {
        return null; // Don't render the header on mobile/tablet
    }

    return (
        <>
            <div className="navbar">
                <div className='head'>
                    <div className='viewcount'>
                        Visitors: {visitorCount}
                    </div>
                    <header className="header">
                        <div className="Logo">
                            <img src={logo} alt="logo" className="Logo" />
                        </div>
                        <nav className="nav-icons">
                            {/* ... (Your icon links) */}
                        </nav>
                    </header>
                    <hr />
                    <nav>
                        <ul className="nav-bar">
                            <Link to='/ourproducts' className='nav-bar nav-bars' >Shop</Link>
                            <Link to='/gallery' className='nav-bar nav-bars' >Gallery</Link>
                            <Link to='/map' className='nav-bar nav-bars' >About</Link>
                            <Link to='/map' className='nav-bar nav-bars' >Contact</Link>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
}

export default HeaderList;