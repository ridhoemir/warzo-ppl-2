import React, { useState } from 'react'
import { Inertia } from '@inertiajs/inertia'
import { Head } from "@inertiajs/inertia-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function AddForm({ urlPost ,auth, errors }) {


      const [values, setValues] = useState({
        date: "",
        discount_percentage: 0,
        discount_amount: 0,
        total_amount: 0,
        paid_amount: 0,
        payment_method: "cash",
        payment_status: "done",
        note: "",
        status: "done",
        products: []
      })

      const [formValues, setFormValues] = useState([{ 
        product_name: "", 
        quantity : "",
        price : ""
      }])

      function addFormFields() {
        const newField = {
          product_name: "", 
          quantity : "",
          price : ""
        }
        setFormValues([...formValues, newField])
      }

      function removeFields (index) {
        const data = [...formValues];
        data.splice(index, 1)
        setFormValues(data)
      }
      function updateValueForDiscount() {
        const data = [...formValues]
        const discount = values.discount_percentage
        const elementSubTotal = document.getElementById("sub_total")
        const elementDiscAmount = document.getElementById("discount_amount")
        const elementTotal = document.getElementById("total")
        let totalPrice =  0
        let discountAmount =  0
        let subTotal =  0
        data.map((item) => {
          subTotal += item.quantity * item.price
        })
        discountAmount = subTotal * discount / 100
        totalPrice = subTotal - discountAmount
        elementSubTotal.innerHTML = subTotal
        elementDiscAmount.innerHTML = discountAmount
        elementTotal.innerHTML = totalPrice

        setValues({
          ...values,
          total_amount: totalPrice,
          discount_amount: discountAmount,
          paid_amount: totalPrice,
        })
      }

      function handleChange(e) {
        const key = e.target.id;
        const value = e.target.type === 'number'? Number(e.target.value) : e.target.value
        setValues(() => ({
            ...values,
            [key]: value,
        }))
      }
    
      function handleSubmit(e) {
        e.preventDefault()
        // handleUpdatePrice()
        setValues(() => ({
          ...values,
          products: formValues
        }))
        Inertia.post(urlPost, values)
      }
      


      function handleProductChange(i, e){
        let data = [...formValues]
        data[i][e.target.id] = e.target.value
        setFormValues(data)
        updateValueForDiscount()
      }

    
      return (
          <AuthenticatedLayout
            auth={auth}
            errors={errors}
            header={
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Purchase</h1>
                </div>
            }
        >
        <Head title="Dashboard" />

        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 bg-white border-b border-gray-200">
                      Add Purchase
                    </div>
                </div>
            </div>
        </div>
        <form className="w-full text-center" onSubmit={handleSubmit}>
        <div className="py-6">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 bg-white border-b border-gray-200">              

                        <div className="mb-6 text-center align-content-center justify-center justify-items-center justify-self-center content-center items-center place-content-center">
                          <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">Purchase Date</label>
                          {errors.date && <h6 className='text-red-500 text-sm'>{errors.date}</h6>}
                          <input type="date" id="date" onChange={handleChange} className="text-center m-auto w-80 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e.g Nasi Goreng" value={values.date} required/>
                        </div>
                        <div className="mb-6 text-center">
                          <label htmlFor="discount_percentage" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">Discount Percentage (%)</label>
                          {errors.discount_percentage && <h6 className='text-red-500 text-sm'>{errors.discount_percentage}</h6>}
                          <input type="number" min='0' id="discount_percentage" onChange={handleChange} className="text-center m-auto w-80 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e.g BE001" value={values.discount_percentage} required/>
                        </div>
                        <div className="mb-6 text-center">
                          <label htmlFor="note" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">Product Note</label>
                          {errors.note && <h6 className='text-red-500 text-sm'>{errors.note}</h6>}
                          <textarea id="note" onChange={handleChange} className="text-center m-auto w-80 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500" value={values.note} required/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="py-6">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 bg-white border-b border-gray-200">              
                        <h1>Add Product</h1>
                        {formValues.map((element, index) => (
                          <div key={index} className="mb-6 text-center align-content-center justify-center justify-items-center justify-self-center content-center items-center place-content-center flex">
                            <label htmlFor="product_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">Product Name</label>
                            <input type="text" id="product_name" onChange={event => handleProductChange(index,event)} className="text-center m-auto w-80 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e.g Nasi Goreng" value={element.product_name} required/>
                            
                            <label htmlFor="quantity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">Quantity</label>
                            <input type="number" min="0" id="quantity" onChange={event => handleProductChange(index,event)} className="text-center m-auto w-80 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e.g Nasi Goreng" value={element.quantity} required/>
                            
                            <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">Price</label>
                            <input type="number" min="0" id="price" onChange={event => handleProductChange(index,event)} className="text-center m-auto w-80 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e.g Nasi Goreng" value={element.price} required/>
                            {
                              index ? 
                                <button type="button"  className="button remove" onClick={() => removeFields(index)}>Remove</button> 
                              : null
                            }
                          </div>
                        ))}
                        <div className='p-6 block text-left'>
                          <h1>
                          Subtotal : <span id='sub_total'> </span>
                          </h1>
                          
                          <h1>
                          Discount Amount : <span id='discount_amount'> </span>
                          </h1> 
                          <h1>
                          Total : <span id='total'> </span>
                          </h1>
                        </div>
                        <button className="button add" type="button" onClick={() => addFormFields()}>Add</button>
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </div>
                </div>
            </div>
        </div>
        </form>
        </AuthenticatedLayout>
      )
}
