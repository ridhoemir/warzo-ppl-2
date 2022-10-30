import React, { useEffect, useState }  from "react";
import { Inertia } from '@inertiajs/inertia'
import { Head } from "@inertiajs/inertia-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Index({ data, urlPost, income, outcome, profit, auth, errors }) {
    // function handleDelete(e) {
    //     e.preventDefault()
    //     Inertia.delete(`/purchase/${e.target.id}/delete`)
    // }

    const [filters, setFilters] = useState({
        start_date: '',
        end_date: '',
    })

    const [cashReport, setCashReport] = useState({
        income: 0,
        outcome: 0,
        profit: 0,
    })

    useEffect(() => {
        setCashReport({
            income,
            outcome,
            profit,
        })
    })

    function handleChange(e) {
        const key = e.target.id
        const {value} = e.target

        setFilters({
          ...filters,
          [key]: value
        })

        if(key === 'start_date') {
          const element = document.getElementById('end_date')
          element.setAttribute('min', value)
        }
        
    }
    function handlefilter(e) {
      e.preventDefault()
      Inertia.post(urlPost, filters)
    }
    return (
        <AuthenticatedLayout
            auth={auth}
            errors={errors}
            header={
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Report</h1>
                    <a className="rounded-md border-grey border-2 p-1" href={route("purchase.create.form")}>Tambah Data</a>
                </div>
            }
        >
            <Head title="Report" />

            {/* <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                          Purchases 
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                          <form onSubmit={handlefilter} method="post">
                          <div className="flex flex-col">
                            <div className="flex flex-row w-auto ">
                              <div className="grow w-max m-5">
                                <label className="mt-2" htmlFor="start_date">Tanggal Awal :</label>
                                <input onChange={handleChange} className="w-full " type="date" name="start_date" id="start_date" required/>
                              </div>
                              <div className="grow h-10 w-max m-5">
                                <label className="mt-2" htmlFor="end_date">Tanggal Akhir :</label>
                                <input onChange={handleChange} className="w-full " type="date" name="end_date" id="end_date" required/>
                              </div>
                            </div>
                            <div className="text-right p-5">
                              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
                            </div>
                          </div>
                          </form>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="flex flex-col m-10">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            No
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            User
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Tanggal
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Reference 
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Total Amount
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Note
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Aksi
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {/* {data.map((item, index) => (
                                        <tr key={index}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{index + 1}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{item.name}</div>
                                            </td> 
                                            <td className="px-6 py-4 whitespace-nowrap">  
                                                <div className="text-sm text-gray-900">{item.price}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{item.qty}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{item.total}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{item.date}</div>
                                            </td> 
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                <a href={route("purchase.edit.form", item.id)} className="text-indigo-600 hover:text-indigo-900">Edit</a>
                                                <a href="#" id={item.id} onClick={handleDelete} className="text-red-600 hover:text-red-900">Delete</a>
                                            </td>
                                        </tr>
                                    ))} */}
                                    {data.length > 0 && data.map((item,index) => (
                                    <tr className={`m-10 h-10  ${item.reference.includes('PUR') ? `bg-red-200` : `bg-green-200`}`}>
                                        {/* {item.reference.includes("PUR") && } */}
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900 text-center">{index + 1}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900 text-center">{item.user.name}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-center">
                                            <div className="text-sm text-gray-900 text-center">{item.date}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-center">
                                            <div className="text-sm text-gray-900 text-center">{item.reference}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900 text-center">{item.total_amount}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900 text-center">{item.note}</div>
                                        </td>
                                            
                                        {/* <td>{item.created_at}</td> */}
                                        <td className="text-center m-5">
                                            <a href={route("purchase.edit.form", item.id)} className="rounded-md border-grey border-2 p-1 justify-center m-2">Edit</a>
                                            {/* <button id={item.id} type="submit" onClick={handleDelete} className="rounded-md border-grey border-2 p-1 justify-center m-2">Delete</button> */}

                                        </td>
                                    </tr>
                                    ))}
                                    {data.length === 0 && 
                                        <tr className="m-10 h-10">
                                            <td className="text-center" colSpan="7">No Data</td>
                                        </tr>
                                    }
                                    <tr className="m-10 h-10">
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td className="text-center px-6 py-4 whitespace-nowrap" >Total Income</td>
                                        <td className="text-center px-6 py-4 whitespace-nowrap" >{cashReport.income}</td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr className="m-10 h-10">
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td className="text-center px-6 py-4 whitespace-nowrap" >Total Outcome</td>
                                        <td className="text-center px-6 py-4 whitespace-nowrap" >{cashReport.outcome}</td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr className="m-10 h-10">
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td className="text-center px-6 py-4 whitespace-nowrap" >Total Profit</td>
                                        <td className={`text-center px-6 py-4 whitespace-nowrap ${cashReport.profit < 0 ? `text-red-500` : `text-green-500`} `} >{cashReport.profit}</td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                    </tr>
                                    {/* <tr >
                                      <td className="text-center p-5" colSpan="7">No Data</td>
                                    </tr> */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}
