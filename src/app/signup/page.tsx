"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from 'next/navigation';
import axios from "axios";


export default function SignupPage() {
    const route = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: ""
    })

    const [buttonDisabled, setButtonDisabled] = React.useState(false)

    const onSignup = async () => {
    }

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);



    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>signup</h1>
            <hr />
            <label htmlFor="username">username</label>
            <input className="p-2"
                type="text" id="username" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })}
                placeholder="username" />


            <label htmlFor="email">email</label>
            <input className="p-2"
                type="text" id="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="email" />

            <label htmlFor="passworf">password</label>
            <input className="p-2"
                type="text" id="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="password" />

            <button
                onClick={onSignup}
                className="p-2 border border-gray-300 text-gray-700 rounded-lg mb-4 hover:bg-gray-100 focus:outline-none focus:border-gray-600">
                {buttonDisabled ? "no signup" : "signup"}
            </button>


            <Link href={'/signup'}>visit login page</Link>
        </div>
    );

}