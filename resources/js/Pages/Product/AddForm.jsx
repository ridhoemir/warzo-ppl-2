import React, { useState } from 'react'
import { Inertia } from '@inertiajs/inertia'
import { Head } from "@inertiajs/inertia-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function AddForm({ urlPost, categories ,auth, errors }) {

      const [values, setValues] = useState({
        product_code: "",
        product_name: "",
        product_note: "",
        product_quantity: 0,
        product_cost: 0,
        category_id: 0,
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
        Inertia.post(urlPost, values)
      }
    
      return (
          <AuthenticatedLayout
            auth={auth}
            errors={errors}
            header={
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Product</h1>
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
        <div className="py-6">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 bg-white border-b border-gray-200">              
                      <form className="w-full text-center" onSubmit={handleSubmit}>

                        <div className="mb-6 text-center align-content-center justify-center justify-items-center justify-self-center content-center items-center place-content-center">
                          <label htmlFor="product_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">Product Name</label>
                          {errors.product_name && <h6 className='text-red-500 text-sm'>{errors.product_name}</h6>}
                          <input type="text" id="product_name" onChange={handleChange} className="text-center m-auto w-80 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e.g Nasi Goreng" value={values.product_name} required/>
                        </div>
                        <div className="mb-6 text-center">
                          <label htmlFor="product_code" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">Product Code</label>
                          {errors.product_code && <h6 className='text-red-500 text-sm'>{errors.product_code}</h6>}
                          <input type="text" id="product_code" onChange={handleChange} className="text-center m-auto w-80 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e.g BE001" value={values.product_code} required/>
                        </div>
                        <div className="mb-6 text-center">
                          <label htmlFor="product_quantity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">Product Quantity</label>
                          {errors.product_quantity && <h6 className='text-red-500 text-sm'>{errors.product_quantity}</h6>}
                          <input type="number" id="product_quantity" onChange={handleChange} className="text-center m-auto w-80 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500" value={values.product_quantity} required/>
                        </div>
                        <div className="mb-6 text-center">
                          <label htmlFor="product_cost" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">Product Cost</label>
                          {errors.product_cost && <h6 className='text-red-500 text-sm'>{errors.product_cost}</h6>}
                          <input type="number" id="product_cost" onChange={handleChange} className="text-center m-auto w-80 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500" value={values.product_cost} required/>
                        </div>
                        <div className="mb-6 text-center">
                          <label htmlFor="product_price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">Product Price</label>
                          {errors.product_price && <h6 className='text-red-500 text-sm'>{errors.product_price}</h6>}
                          <input type="number" id="product_price" onChange={handleChange} className="text-center m-auto w-80 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500" value={values.product_price} required/>
                        </div>
                        <div className="mb-6 text-center">
                          <label htmlFor="category_id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">Category</label>
                          {errors.category_id && <h6 className='text-red-500 text-sm'>{errors.category_id}</h6>}
                          {categories.length > 0 && 
                          <select name="category_id" id="category_id" onChange={handleChange}>
                            <option disabled>Select Category</option>
                            {categories.length > 0 &&  categories.map((category) => (
                              <option value={category.id}>{category.category_name}</option>
                            ))}
                          </select>
                          }
                          {categories.length === 0 && 
                          <select name="category_id" id="category_id" disabled>
                            <option value="">No Category</option>
                          </select>
                          }
                        </div>
                        <div className="mb-6 text-center">
                          <label htmlFor="product_note" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">Product Note</label>
                          {errors.product_note && <h6 className='text-red-500 text-sm'>{errors.product_note}</h6>}
                          <textarea id="product_note" onChange={handleChange} className="text-center m-auto w-80 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500" value={values.product_note} required/>
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
