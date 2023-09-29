import React, { useEffect, useState } from 'react'
import { Link, usePage } from '@inertiajs/inertia-react'
import format from 'date-fns/format'
import route from 'ziggy-js'
import { FiPlusCircle, FiEdit, FiTrash2 } from 'react-icons/fi'
import AdminLayout from '@/Layouts/AdminLayout'

export default function Home({ notes }: any) {
    let { flash }: any = usePage().props
    let [showMessage, setMessage] = useState(false)

    let [loading, isLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const perPage = 10

    useEffect(() => {
        if (flash.message) {
            setMessage(true)

            setTimeout(() => {
                setMessage(false)
            }, 10000)
        }

        setTimeout(() => {
            isLoading(false)
        }, 2000)
    }, [flash.message])

    const truncateDescription = (description: string) => {
        if (description.length > 30) {
            return description.substring(0, 30) + '...'
        }

        return description
    }

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
    }

    const paginatedData = notes.slice(
    (currentPage - 1) * perPage,
        currentPage * perPage
    )

    return (
    <AdminLayout title="Home Module">

    <section id="home-module-admin" className="container">
        <h1 className="text-lg font-bold mb-5">Home</h1>

        { showMessage && (
            <div className="toast z-10">
                <div className="alert alert-info">
                    <span>{ flash.message }</span>
                </div>
            </div>
        )}

        <div className="flex justify-between">
            <div className="tooltip tooltip-right" data-tip="Add Data">
                <Link href={route('admin.home.add')} className="btn btn-primary">
                    <FiPlusCircle className="text-2xl" />
                </Link>
            </div>

            <form action="">
                <div className="form-control">
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered"
                        name="search-data"
                    />
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
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            {paginatedData.map((note: any, index: any) => (
                                <tr className="hover" key={note.id}>
                                <th>{index + 1}</th>
                                <td>{note.title}</td>
                                <td>{truncateDescription(note.description)}</td>
                                <td>
                                    {note.publish === 'yes' ? (
                                        <div className="badge badge-info gap-2 font-bold hover:text-white">
                                            Yes
                                        </div>
                                        ) : (
                                        <div className="badge badge-error gap-2 font-bold hover:text-white">
                                            No
                                        </div>
                                    )}
                                </td>
                                <td>{format(new Date(note.created_at), 'dd-MM-yyyy')}</td>
                                <td className="flex gap-3">
                                    <div className="tooltip" data-tip="Edit Data">
                                        <span className="badge badge-success gap-2 p-3 hover:text-white">
                                            <FiEdit />
                                        </span>
                                    </div>

                                    <div className="tooltip" data-tip="Edit Data">
                                        <span className="badge badge-error gap-2 p-3 hover:text-white">
                                            <FiTrash2 />
                                        </span>
                                    </div>
                                </td>
                                </tr>
                            )) }
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

                    {/* Pagination */}
                    <div className="pagination">
                        {Array.from({ length: Math.ceil(notes.length / perPage) }, (_, index) => (
                            <button
                                key={index + 1}
                                onClick={() => handlePageChange(index + 1)}
                                className={`join-item btn ${currentPage === index + 1 ? 'btn-active' : ''}`}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </div>
            )}
            </div>
        </div>
    </section>

    </AdminLayout>
    )
}
