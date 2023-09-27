import React, { useEffect, useState } from 'react'
import format from 'date-fns/format'
import { FiPlusCircle } from 'react-icons/fi'
import AdminLayout from '@/Layouts/AdminLayout'

export default function Home({ notes }: any) {
    let [loading, isLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            isLoading(false)
        }, 2000);
    })

    const truncateDescription = (description: string) => {
        if (description.length > 30) {
            return description.substring(0, 30) + "...";
        }

        return description;
    }

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
                { loading ? (
                    <div className="text-center">
                        <span className="loading loading-spinner loading-lg"></span>
                    </div>
                    ) : (
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Publish</th>
                                    <th>Created</th>
                                </tr>
                            </thead>

                            <tbody>
                                { notes.map((note: any, index: any) => (
                                    <tr className="hover" key={note.id}>
                                        <th>{index + 1}</th>
                                        <td>{note.title}</td>
                                        <td>{truncateDescription(note.description)}</td>
                                        <td>
                                        {note.publish === 'yes' ? (
                                            <div className="badge badge-success gap-2">Yes</div>
                                        ) : (
                                            <div className="badge badge-error gap-2">No</div>
                                        )}
                                        </td>
                                        <td>{format(new Date(note.created_at), 'dd-MM-yyyy')}</td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th>No</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Publish</th>
                                    <th>Created</th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                )}
                </div>
            </div>
        </section>

        </AdminLayout>
    )
}
