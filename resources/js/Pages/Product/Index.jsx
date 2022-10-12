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
                    <h1 className="text-2xl font-bold">Product</h1>
                    <a className="rounded-md border-grey border-2 p-1" href={route("product.create.form")}>Tambah Data</a>
                </div>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                          Product 
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
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Code</th>
                                    <th>Price</th>
                                    <th>Cost</th>
                                    <th>Quantity</th>
                                    <th>Category</th>
                                    {/* <th>Created At</th> */}
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.length > 0 && data.map((item) => (
                                    <tr className="m-10 h-10">
                                        <td className="text-center">{item.id}</td>
                                        <td className="text-center">{item.product_name}</td>
                                        <td className="text-center">{item.product_code}</td>
                                        <td className="text-center">{item.product_price}</td>
                                        <td className="text-center">{item.product_cost}</td>
                                        <td className="text-center">{item.product_quantity}</td>
                                        <td className="text-center">{item.category.category_name}</td>
                                        {/* <td>{item.created_at}</td> */}
                                        <td className="text-center m-5">
                                            <a href={route("product.edit.form", item.id)} className="rounded-md border-grey border-2 p-1 justify-center m-2">Edit</a>
                                            <button id={item.id} type="submit" onClick={handleDelete} className="rounded-md border-grey border-2 p-1 justify-center m-2">Delete</button>

                                        </td>
                                    </tr>
                                ))}
                                {data.length === 0 && 
                                    <tr className="m-10 h-10">
                                        <td className="text-center" colSpan="8">No Data</td>
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
