import "../styles/pagination.css"

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
            <ul className='container'>
                {pageNumbers.map((number) => (
                    <li key={number} className={` color-text  ${activePage===number ? "color-active" : ""}`}>
                        <a className='link' onClick={() =>{
                            handlePageClick(number); paginate(number)}} href="#">{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    </div>
  )
}

export default Pagination