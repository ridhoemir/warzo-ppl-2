import React from "react";
import { Inertia } from '@inertiajs/inertia'
import { Head } from "@inertiajs/inertia-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Index({ data ,auth, errors }) {
    function handleDelete(e) {
        e.preventDefault()
        Inertia.delete(`/product/${e.target.id}/delete`)
    }
    return (
        <AuthenticatedLayout
            auth={auth}
            errors={errors}
            header={
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Purchases</h1>
                    <a className="rounded-md border-grey border-2 p-1" href={route("purchase.create.form")}>Tambah Data</a>
                </div>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                          Purchases 
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-3">
                        <table className="table-fixed w-full border-spacing-2">
                            <thead>
                                <tr className="m-5">
                                    <th>No</th>
                                    <th>Date</th>
                                    <th>Note</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.length > 0 && data.map((item,index) => (
                                    <tr className="m-10 h-10">
                                        <td className="text-center">{index+1}</td>
                                        <td className="text-center">{item.date}</td>
                                        <td className="text-center">{item.note}</td>
                                        {/* <td>{item.created_at}</td> */}
                                        <td className="text-center m-5">
                                            <a href={route("product.edit.form", item.id)} className="rounded-md border-grey border-2 p-1 justify-center m-2">Edit</a>
                                            <button id={item.id} type="submit" onClick={handleDelete} className="rounded-md border-grey border-2 p-1 justify-center m-2">Delete</button>

                                        </td>
                                    </tr>
                                ))}
                                {data.length === 0 && 
                                    <tr className="m-10 h-10">
                                        <td className="text-center" colSpan="4">No Data</td>
                                    </tr>
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
