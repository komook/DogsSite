import React from 'react'
import { useState } from 'react';

function Pagination({postsPerPage, totalPosts, paginate}) {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++){
        pageNumbers.push(i);
    }
    const [activePage, setActivePage] = useState(1)

    const handlePageClick = (number) => {
        setActivePage(number)
        paginate(number)

    }
  return (
    <div>
        <nav>
            <ul className='mt-4 mb-4 flex justify-center'>
                {pageNumbers.map((number) => (
                    <li key={number} className={` bg-zinc-300  ${activePage===number ? "bg-slate-800 text-white" : ""}`}>
                        <a className='p-2 m-1' onClick={() =>{
                            handlePageClick(number); paginate(number)}} href="#">{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    </div>
  )
}

export default Pagination