import { useEffect, useState } from "react"
import {HeartOutlined}  from "@ant-design/icons"
function Posts({posts, loading}) {

    if(loading){
        return <h2>Loading...</h2>
    }

    const [dogs, setGods] = useState([])

    useEffect(() => {
       const fetchPosts = async() => {
        const res = await fetch("https://dog.ceo/api/breed/hound/afghan/images")
        const data = await res.json()
        const data2 = data.message
        setGods(data2)
       };
       fetchPosts();
    },[]);
    function Hendler () {
        console.log(1233)
    }
    
  return (
    
    <div className="flex flex-wrap  items-center ">
        
        {posts.map((post) => (
                <div className="flex flex-col h-full items-center justify-center p-2 m-2  bg-gray-200" key={post.id}>
                    <img  className=" cursor-pointer" src={dogs[post.id]} alt="dogs" />
                    <div className=" flex items-center justify-center w-96 pt-3 pb-3 ">
                        <div>
                            <span className=" text-black text-3xl font-sans font-bold">{post.title.slice(0,15)}</span>
                            <span className=" text-black text-3xl font-sans font-bold">{post.title.slice(0,60)}</span>
                        </div>
                        <HeartOutlined />
                        
                    </div>
                    
                </div>
        ))}
    </div>
  )
}

export default Posts