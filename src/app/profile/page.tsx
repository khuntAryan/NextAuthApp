"use client"
import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Profile() {

    const onLogout = async ()=>{
        const router = useRouter()
        try {
            await axios.get("/api/users/logout")
            console.log("logut successfull")
            router.push("/login")
        } catch (error:any) {
            console.log(error.message)
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            profile page
            <p>profile of user</p>
            <hr />
            <button
            onClick={onLogout}
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
            >
                Logout
            </button>
        </div>
    )
}