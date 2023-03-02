import React from 'react'

const TodoList = () => {
  return (
    <div className='mt-10 shadow-md shadow-gray-300 p-8 rounded-md'>
        <p className='text-center font-bold text-lg mb-4'>Todo List</p>
        <form className='flex justify-center mb-10'>
            <input type="text" placeholder="Enter Todo" className="text-xl text-orange-800 placeholder-orange-400 py-2 px-5 bg-orange-100 rounded-l-full outline-orange-300" />
            <button type="submit" className="text-xl text-orange-100 placeholder-orange-400 py-2 pr-5 pl-4 bg-orange-500 rounded-r-full">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                </svg>
            </button>
        </form>
        <div className="max-h-80 overflow-y-auto">
                <table id="todo_table" className="table w-full">
                    <thead>
                        <tr>
                            <th className="text-center px-1 py-2 bg-orange-500 text-orange-100 rounded-tl-xl">#</th>
                            <th className="text-left px-1 py-2 bg-orange-500 text-orange-100">Details</th>
                            <th className=" px-1 py-2 bg-orange-500 text-orange-100 rounded-tr-xl">Action</th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr className=" bg-orange-50 transition duration-300">
                            <td className="text-center  px-1 py-2 text-orange-800">Goldy</td>
                            <td className=" px-1 py-2 text-orange-800">King</td>
                            <td className="text-center  px-1 py-2 text-orange-800 flex gap-3 justify-center">
                                <button className="text-orange-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>  
    </div>
  )
}

export default TodoList