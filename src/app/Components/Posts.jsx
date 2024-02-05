import { useEffect, useState } from "react"
function Posts({posts}) {

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
    
    
  return (
    
    <div className="flex flex-wrap ">
        
        {posts.map((post) => (
                <div className="flex flex-col justify-between p-5 m-2 border-2 " key={post.id}>
                    <img src={dogs[post.id]} alt="" />
                    <div className="w-96  ">
                        <span className="text-black text-3xl font-mono font-bold w-1">{post.title.slice(0,15)}</span>
                        <span className="text-black text-3xl font-mono font-bold">{post.title.slice(0,60)}</span>
                    </div>
                    <div className="cursor-pointer mt-5">
                        <span className="bg-sky-500/100 p-2 ">ДОБАВИТЬ</span>
                    </div>
                </div>
        ))}
    </div>
  )
}

export default Posts