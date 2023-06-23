import { Avatar, Button, DarkThemeToggle, Dropdown, Flowbite, Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { Toaster, toast } from 'react-hot-toast';

const Header = () => {
    const location = useLocation();

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('Successfully Sign Out');
            })
            .catch(error => {
                const onlyErrMsg = error.message.slice(22, error.message.length - 2);
                const processErrMsg = onlyErrMsg.split('-');
                for (let i = 0; i < processErrMsg.length; i++) {
                    processErrMsg[i] = processErrMsg[i].charAt(0).toUpperCase() + processErrMsg[i].slice(1);

                }
                const finalMsg = processErrMsg.join(" ");
                toast.error(finalMsg);
            });
    }
    return (
        <div>
            <Toaster
                position="top-center"
                reverseOrder={false}
                gutter={8}
                containerClassName=""
                containerStyle={{}}
                toastOptions={{
                    className: 'bg-white dark:bg-zinc-700 dark:text-white',
                    duration: 5000,
                    success: {
                        duration: 5000,
                        theme: {
                            primary: 'white',
                            secondary: 'black',
                        },
                    },
                }}
            />
            <Navbar fluid>
                <Navbar.Brand href="/home">
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Reflexlia
                    </span>
                </Navbar.Brand>
                <div className="flex md:order-2 mt-1 md:mt-0 items-center">
                    <Flowbite>
                        <DarkThemeToggle>
                        </DarkThemeToggle>
                    </Flowbite>
                    <div className='hidden md:flex'>
                        <div className={user?.uid ? 'hidden' : 'block'}>
                            <Button.Group>
                                <NavLink to="/login" state={{ from: location }} replace className={({ isActive }) => isActive ? 'text-black font-bold bg-white rounded-lg mr-1' : 'hover:bg-white text-white hover:rounded-lg hover:text-black mr-1'}>
                                    <Button className="me-2 ms-2" color="gray">
                                        <span>Login</span>
                                    </Button>
                                </NavLink>
                                <NavLink to="/signup" state={{ from: location }} replace className={({ isActive }) => isActive ? 'text-black font-bold bg-white rounded-lg mr-2' : 'hover:bg-white text-white hover:rounded-lg hover:text-black mr-2'}>
                                    <Button color="gray">
                                        <span>Signup</span>
                                    </Button>
                                </NavLink>
                            </Button.Group>
                        </div>
                    </div>
                    <div>
                        <div className='flex'>
                            <div className='mr-2 ms-2'>
                                <div className={user?.uid ? 'block' : 'hidden'}>
                                    <Dropdown
                                        arrowIcon={false}
                                        inline={true}
                                        label={<Avatar alt="User" img={user?.photoURL ? user?.photoURL : 'https://assets-prod.sumo.prod.webservices.mozgcp.net/static/default-FFA-avatar.2f8c2a0592bda1c5.png'} rounded={true} />} >
                                        <Dropdown.Header>
                                            <span className="block text-sm">
                                                {user?.displayName ? user.displayName : 'Unnamed User'}
                                            </span>
                                            <span className="block truncate text-sm font-medium">
                                                {user?.email}
                                            </span>
                                        </Dropdown.Header>
                                        <Link to="/my-reviews">
                                            <Dropdown.Item>
                                                My Reviews
                                            </Dropdown.Item>
                                        </Link>
                                        <Link to="/add-services">
                                            <Dropdown.Item>
                                                Add Services
                                            </Dropdown.Item>
                                        </Link>
                                        <Dropdown.Divider />
                                        <Link to="/profile">
                                            <Dropdown.Item>
                                                Profile Setting
                                            </Dropdown.Item>
                                        </Link>
                                        <Link to="/resetpassword">
                                            <Dropdown.Item>
                                                Reset Password
                                            </Dropdown.Item>
                                        </Link>
                                        <Dropdown.Divider />
                                        <Dropdown.Item>
                                            <button onClick={handleLogOut}>Sign Out</button>
                                        </Dropdown.Item>
                                    </Dropdown>
                                </div>
                            </div>
                            <Navbar.Toggle className='border' />
                        </div>
                    </div>
                </div>

                <div className={user?.uid ? 'hidden' : 'flex mt-3 md:hidden mx-auto'}>
                    <div className='mt-3'>
                        <Button.Group>
                            <NavLink to="/login" state={{ from: location }} replace className={({ isActive }) => isActive ? 'text-black font-bold bg-white rounded-lg mr-1' : 'hover:bg-white text-white hover:rounded-lg hover:text-black mr-1'}>
                                <Button className='border-2' color="blue">
                                    <span className='dark:text-white'>Login</span>
                                </Button>
                            </NavLink>
                            <NavLink to="/signup" state={{ from: location }} replace className={({ isActive }) => isActive ? 'text-black font-bold bg-white rounded-lg mr-2' : 'hover:bg-white text-white hover:rounded-lg hover:text-black mr-2'}>
                                <Button className='border-2' color="blue">
                                    <span className='dark:text-white'>Signup</span>

                                </Button>
                            </NavLink>
                        </Button.Group>
                    </div>
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
        </div>

    );
};

export default Header;