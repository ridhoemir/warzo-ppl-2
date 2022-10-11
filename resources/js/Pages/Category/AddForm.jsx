import React, { useState } from 'react'
import { Inertia } from '@inertiajs/inertia'
import { Head } from "@inertiajs/inertia-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function AddForm({ urlPost ,auth, errors }) {

      const [values, setValues] = useState({
        category_code: data.category_code || "",
        category_name: data.category_name || "",
      })
    
      function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
      }
    
      function handleSubmit(e) {
        e.preventDefault()
        Inertia.patch(urlPost, values)
      }
    
      return (
          <AuthenticatedLayout
            auth={auth}
            errors={errors}
            header={
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Product Category</h1>
                </div>
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
        <div className="py-6">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 bg-white border-b border-gray-200">              
                      <form className="w-full text-center" onSubmit={handleSubmit}>

                        <div className="mb-6 text-center align-content-center justify-center justify-items-center justify-self-center content-center items-center place-content-center">
                          <label htmlFor="category_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">Category Name</label>
                          {errors.category_name && <h6 className='text-red-500 text-sm'>{errors.category_name}</h6>}
                          <input type="text" id="category_name" onChange={handleChange} className="text-center m-auto w-80 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e.g Side Dish" value={values.category_name} required/>
                        </div>
                        <div className="mb-6 text-center">
                          {errors.category_code && <h6 className='text-red-500 text-sm'>{errors.category_code}</h6>}
                          <label htmlFor="category_code" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">Category Code</label>
                          <input type="text" id="category_code" onChange={handleChange} className="text-center m-auto w-80 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500" value={values.category_code} required/>
                         </div>
                         <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                      </form>
                    </div>
                </div>
            </div>
        </div>
        </AuthenticatedLayout>
      )
}
