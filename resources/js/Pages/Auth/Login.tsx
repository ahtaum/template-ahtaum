import React from 'react'
import { Link } from '@inertiajs/inertia-react'
import route from 'ziggy-js'
import AuthLayout from '@/Layouts/AuthLayout'

export default function Login() {
  return (
    <AuthLayout title="Login">

    <section id="login-page" className="container flex justify-center items-center h-screen lg:p-0 md:p-0 p-3">

        <div className="card bg-base-100 shadow-xl lg:w-96 md:w-96 w-full">
            <div className="card-body">
                <h2 className="card-title mx-auto mb-2">Login</h2>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>

                    <input type="email" placeholder="Your Email" className="input input-bordered" name="email" />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>

                    <input type="password" placeholder="Your Password" className="input input-bordered" name="password" />
                </div>

                <div className="flex justify-between mt-5">
                    <Link href={route('home')} className="btn btn-error">Back</Link>

                    <button className="btn btn-primary">Login</button>
                </div>

                <span className="text-center mt-5">Or <a href="#" className="underline text-blue-500 font-bold">Register</a> Here</span>
            </div>
        </div>

    </section>

    </AuthLayout>
  )
}
