import React from "react";
import { Head } from "@inertiajs/inertia-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Index({ data ,auth, errors }) {
    return (
        <AuthenticatedLayout
            auth={auth}
            errors={errors}
            header={
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Product Category</h1>
                    <a className="rounded-md border-grey border-2 p-1" href={route("category.create.form")}>Tambah Data</a>
                </div>
                // <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                //     Product Category
                // </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                          Product Category
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-3">
                        <table className="table-fixed w-full border-spacing-2">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Code</th>
                                    {/* <th>Created At</th> */}
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item) => (
                                    <tr>
                                        <td className="text-center">{item.id}</td>
                                        <td className="text-center">{item.category_name}</td>
                                        <td className="text-center">{item.category_code}</td>
                                        {/* <td>{item.created_at}</td> */}
                                        <td className="text-center">
                                            <a href={route("category.edit.form", item.id)} className="rounded-md border-grey border-2 p-1 justify-center m-1">Edit</a>
                                            <a href={route("dashboard")} className="rounded-md border-grey border-2 p-1 justify-center m-1">Edit</a>

                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
