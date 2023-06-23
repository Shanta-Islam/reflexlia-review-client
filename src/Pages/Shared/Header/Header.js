import { Button, DarkThemeToggle, Flowbite, Navbar } from 'flowbite-react';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar fluid>
            <Navbar.Brand href="/home">
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Reflexlia
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Flowbite >
                    <DarkThemeToggle className='border' />
                </Flowbite>
                <Link to="/login">
                    <Button className='me-2 ms-2' color="gray">
                        Login
                    </Button>
                </Link>
                <Link to="/signup">
                    <Button color="gray">
                        Signup
                    </Button>
                </Link>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link>
                    <NavLink className={({ isActive }) => isActive ? 'text-blue-600 font-bold' : 'hover:text-blue-800'} to="/home">
                        Home
                    </NavLink>
                </Navbar.Link>
                <Navbar.Link>
                    <NavLink className={({ isActive }) => isActive ? 'text-blue-600 font-bold' : 'hover:text-blue-800'} to="/about">
                        About
                    </NavLink>
                </Navbar.Link>
                <Navbar.Link>
                    <NavLink className={({ isActive }) => isActive ? 'text-blue-600 font-bold' : 'hover:text-blue-800'} to="/services">
                        Services
                    </NavLink>
                </Navbar.Link>
                <Navbar.Link>
                    <NavLink className={({ isActive }) => isActive ? 'text-blue-600 font-bold' : 'hover:text-blue-800'} to="/blog">
                        Blog
                    </NavLink>
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;