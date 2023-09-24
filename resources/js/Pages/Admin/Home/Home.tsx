import React from 'react'
import { FiPlusCircle } from 'react-icons/fi'
import AdminLayout from '@/Layouts/AdminLayout'

export default function Home() {
    return (
        <AdminLayout title="Home Module">
        
        <section id="home-module-admin" className="container">
            <h1 className="text-lg font-bold mb-5">Home</h1>

            <div className="flex justify-between">
                <div className="tooltip tooltip-right" data-tip="Add Data">
                    <a href="#" className="btn btn-primary"><FiPlusCircle className="text-2xl" /></a>
                </div>

                <form action="">
                    <div className="form-control">
                        <input type="text" placeholder="Type here" className="input input-bordered" name="search-data" />
                    </div>
                </form>
            </div>

            <div className="card bg-base-100 shadow-xl my-8">
                <div className="card-body">
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th></th> 
                                    <th>Name</th> 
                                    <th>Job</th> 
                                    <th>company</th> 
                                    <th>location</th> 
                                    <th>Last Login</th> 
                                    <th>Favorite Color</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr className="hover">
                                    <th>1</th> 
                                    <td>Cy Ganderton</td> 
                                    <td>Quality Control Specialist</td> 
                                    <td>Littel, Schaden and Vandervort</td> 
                                    <td>Canada</td> 
                                    <td>12/16/2020</td> 
                                    <td>Blue</td>
                                </tr>
                                <tr className="hover">
                                    <th>2</th> 
                                    <td>Hart Hagerty</td> 
                                    <td>Desktop Support Technician</td> 
                                    <td>Zemlak, Daniel and Leannon</td> 
                                    <td>United States</td> 
                                    <td>12/5/2020</td> 
                                    <td>Purple</td>
                                </tr>
                                <tr className="hover">
                                    <th>3</th> 
                                    <td>Brice Swyre</td> 
                                    <td>Tax Accountant</td> 
                                    <td>Carroll Group</td> 
                                    <td>China</td> 
                                    <td>8/15/2020</td> 
                                    <td>Red</td>
                                </tr>
                                <tr className="hover">
                                    <th>4</th> 
                                    <td>Marjy Ferencz</td> 
                                    <td>Office Assistant I</td> 
                                    <td>Rowe-Schoen</td> 
                                    <td>Russia</td> 
                                    <td>3/25/2021</td> 
                                    <td>Crimson</td>
                                </tr>
                                <tr className="hover">
                                    <th>5</th> 
                                    <td>Yancy Tear</td> 
                                    <td>Community Outreach Specialist</td> 
                                    <td>Wyman-Ledner</td> 
                                    <td>Brazil</td> 
                                    <td>5/22/2020</td> 
                                    <td>Indigo</td>
                                </tr>
                            </tbody> 
                            <tfoot>
                                <tr>
                                    <th></th> 
                                    <th>Name</th> 
                                    <th>Job</th> 
                                    <th>company</th> 
                                    <th>location</th> 
                                    <th>Last Login</th> 
                                    <th>Favorite Color</th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </section>

        </AdminLayout>
    )
}
