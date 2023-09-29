import React, { useState } from 'react'
import AdminLayout from '@/Layouts/AdminLayout'
import { Link, usePage } from '@inertiajs/inertia-react'
import route from 'ziggy-js'
import { Inertia } from '@inertiajs/inertia'

export default function Add() {
    let { errors }: any = usePage().props
    let [formData, setFormData] = useState({
        title: '',
        description: '',
        publish: 'yes',
    })

    let [loading, setLoading] = useState(false)

    let handleChange = (e: any) => {
        let { name, value } = e.target

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    let handleSubmit = (e: any) => {
        e.preventDefault()

        try {
            Inertia.post(route("admin.home.store"), formData, {
                forceFormData: true,
                onProgress: () => {
                    setLoading(true)
                },
                onFinish: () => {
                    setLoading(false)
                },
                onSuccess: () => {
                    formData.title = ""
                    formData.description = ""
                    setLoading(false)
                }
            })
        } catch (error: any) {
            alert(error.message)
            setLoading(false)
        }
    }

    return (
        <AdminLayout title="Add Data">

        <section id="add-data-home" className="container">
            <h1 className="text-lg font-bold mb-5">Add Data</h1>

            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>

                            <input type="text" placeholder="Type here" className="input input-bordered" name="title" value={formData.title} onChange={handleChange} />
                            { errors.title &&
                                <span className="text-red-500 font-bold mt-3">{ errors.title }</span>
                            }
                        </div>

                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>

                            <textarea className="textarea textarea-bordered" placeholder="Bio" name="description" value={formData.description} onChange={handleChange}></textarea>
                            { errors.description &&
                                <span className="text-red-500 font-bold mt-3">{ errors.description }</span>
                            }
                        </div>

                        <div className="form-control mb-8">
                            <label className="label">
                                <span className="label-text">Publish?</span>
                            </label>

                            <select className="select select-bordered" name="publish" value={formData.publish} onChange={handleChange}>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>

                        <div className="flex justify-between">
                            <Link href={route("admin.home")} className="btn btn-error">Back</Link>

                            <button type="submit" className="btn btn-primary">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>

        </AdminLayout>
    )
}
