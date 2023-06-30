import { Button, Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { toast } from 'react-hot-toast';
import useTitle from '../../hooks/useTitle';
import { setAuthToken } from '../../api/Auth';


const SignUp = () => {
    const { providerLogin, createUser, updateUserProfile, errorMsgToast, setLoading } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    useTitle('Signup');

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(() => {
                toast.success('Successfully Sign In')
            })
            .catch(error => errorMsgToast(error));
    }

    const handleGithubSignIn = () => {
        providerLogin(githubProvider)
            .then(() => {
                toast.success('Successfully Sign In')
            })
            .catch(error => errorMsgToast(error));
    }

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photourl.value;
        const email = form.email.value;
        const password = form.password.value;
        const rePassword = form.repassword.value;

        if (password !== rePassword) {
            toast.error("Your Password Doesn't Match!")
        }
        else {
            createUser(email, password)
                .then(result => {
                    const user = result.user;
                    console.log(user);
                    setAuthToken(user);
                    form.reset();
                    handleUpdateUserProfile(name, photoUrl);
                    toast.success('Successfully Sign In');
                })
                .catch(error => errorMsgToast(error));
        }
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => {
                setLoading(false);
                toast.success('Profile Updated');
            })
            .catch(error => errorMsgToast(error));
    }
    return (
        <div className='container-fuild'>
            <div className="relative">
                <img
                    src="https://i.ibb.co/S5Zsd9v/pexels-mathew-thomas-906531.jpg"
                    className="absolute inset-0 object-cover w-full h-full"
                    alt="" />
                <div className="relative bg-gray-900 bg-opacity-75">
                    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div className="flex flex-col items-center justify-between xl:flex-row">
                            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                                    Welcome!
                                </h2>
                                <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                                    Please enter your details and signup to continue.
                                </p>
                            </div>
                            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                                <div className="bg-white dark:bg-gray-800 rounded shadow-2xl p-7 sm:p-10">
                                    <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl text-gray dark:text-white">
                                        Signup
                                    </h3>
                                    <form onSubmit={handleSignUp} className="flex flex-col gap-4">
                                        <div>
                                            <div className="mb-2 block">
                                                <Label
                                                    htmlFor="name1"
                                                    value="Your name"
                                                />
                                            </div>
                                            <TextInput
                                                id="name1"
                                                placeholder="enter your name"
                                                required
                                                type="text"
                                                name="name"
                                            />
                                        </div>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label
                                                    htmlFor="photo1"
                                                    value="Your photo (optional)"
                                                />
                                            </div>
                                            <TextInput
                                                id="photo1"
                                                placeholder="enter your photo url"
                                                type="text"
                                                name="photourl"
                                                required={false}
                                            />
                                        </div>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label
                                                    htmlFor="email1"
                                                    value="Your email"
                                                />
                                            </div>
                                            <TextInput
                                                id="email1"
                                                placeholder="enter your email"
                                                required
                                                type="email"
                                                name="email"
                                            />
                                        </div>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label
                                                    htmlFor="password1"
                                                    value="Your password"
                                                />
                                            </div>
                                            <TextInput
                                                id="password1"
                                                required
                                                type="password"
                                                name="password"
                                            />
                                        </div>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label
                                                    htmlFor="repassword1"
                                                    value="Repeat password"
                                                />
                                            </div>
                                            <TextInput
                                                id="repassword1"
                                                required
                                                type="password"
                                                name="repassword"
                                            />
                                        </div>
                                        <Button type="submit" color="success">
                                            Sign up
                                        </Button>
                                    </form>
                                    <p className='text-center label-text mt-8 dark:text-white'>Already have an account? <Link to="/login" className='font-bold'>Login</Link></p>
                                    <div>
                                        <button onClick={handleGoogleSignIn} className='flex justify-center items-center bg-indigo-500 hover:bg-indigo-600 font-semibold text-white p-2 w-full mx-auto rounded-lg mt-5'>
                                            <svg className='w-5 mr-2' fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                                                <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                                            </svg>
                                            <span>Signup with Google</span>
                                        </button>
                                        <button onClick={handleGithubSignIn} className='flex justify-center items-center hover:bg-slate-800 bg-black font-semibold text-white p-2 w-full mx-auto rounded-lg mt-2'>
                                            <svg className='w-5 mr-2' fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                                                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                                            </svg>
                                            <span>Signup with GitHub</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;