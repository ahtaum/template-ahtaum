import React from 'react'
import route from 'ziggy-js'
import { Link } from '@inertiajs/inertia-react'

export const MainMenu = () => {
    return (
        <>
        
        <div className="navbar bg-base-100 container" id="mainmenu">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link href={route('home')}>Home</Link></li>
                        <li>
                        <a>Auth</a>
                        <ul className="p-2">
                            <li><a>Login</a></li>
                            <li><a>Register</a></li>
                        </ul>
                        </li>
                    </ul>
                </div>

                <Link href={route('home')} className="btn btn-ghost normal-case text-xl">Ahtaum</Link>
            </div>

            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href={route('home')}>Home</Link></li>
                    <li tabIndex={0}>
                        <details>
                        <summary>Auth</summary>
                        <ul className="p-2">
                            <li><a>Login</a></li>
                            <li><a>Register</a></li>
                        </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
        
        </>
    )
}
