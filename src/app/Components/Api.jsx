'use client'

import { useEffect, useState } from "react"
import Posts from './Posts'
import  Paginatione  from "./Pagination"

function Api() {
    
    const [ posts, setPosts]  = useState([])
    const [ loading, setLoading ] = useState(false)
    const [ currentPage, setCurrentPage ] = useState(1)
    const [ postsPerPage ] = useState(12)

    useEffect(() => {
       const fetchPosts = async() => {
        setLoading(true)
        const res = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await res.json()
        setPosts(data)
        setLoading(false)
       };
       fetchPosts();
    },[]);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    console.log(paginate)
    return(
        <div >
            
            <Posts posts={currentPosts} loading={loading}/>
            <Paginatione postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
        </div>
    )
}

export default Api