'use client'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import React,{ useState } from 'react';
import { auth } from '../../firebaseConfig'
import { useRouter  } from "next/navigation";


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [formType, setFormType] = useState("Login");    
    const router = useRouter ();
    function SignWithEmailId(e) {
        e.preventDefault();
        if (loggedIn) {
            alert("Already LoggedIn.");
            return;
        }
        
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                alert(user.email);
                setLoggedIn(true);
                console.log(userCredential);
                router.push('/');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }
    function createUser(e) {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(userCredential);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }
    if (formType == "Login") {
        return <div>

            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your account</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={(e) => SignWithEmailId(e)}>
                        <div>
                            <label for="email" className="block text-sm/6 font-medium text-gray-900">Email address</label>
                            <div className="mt-2">
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" id="email" autocomplete="email" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label for="password" className="block text-sm/6 font-medium text-gray-900">Password</label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" id="password" autocomplete="current-password" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm/6 text-gray-500">
                        Not a member?
                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500" onClick={() => setFormType("SignUp")}>Create New User.</a>
                    </p>
                </div>
            </div>

        </div>
    }
    else {
        return <div>

            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Create User</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={(e) => createUser(e)}>
                        <div>
                            <label for="email" className="block text-sm/6 font-medium text-gray-900">Email address</label>
                            <div className="mt-2">
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" id="email" autocomplete="email" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label for="password" className="block text-sm/6 font-medium text-gray-900">Password</label>
                            </div>
                            <div className="mt-2">
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" id="password" autocomplete="current-password" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm/6 text-gray-500">
                        Already Have a member?
                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500" onClick={() => setFormType("Login")}>Login.</a>
                    </p>
                </div>
            </div>

        </div>
    }
   
}

export default Login;