'use client'

import { useEffect, useState } from "react"
import Posts from './Posts'

function Api() {
    
    const [ posts, setPosts] = useState([])

    useEffect(() => {
       const fetchPosts = async() => {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await res.json()
        setPosts(data)
       };
       fetchPosts();
    },[]);
    return(
        <div >
            
            <Posts posts={posts}/>
        </div>
    )
}

export default Api