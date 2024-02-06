import { useEffect, useState } from "react"
import {HeartOutlined}  from "@ant-design/icons"
import { Modal } from 'antd';
function Posts({posts, loading}) {

    const showModal = (e) => {
        setIsModalOpen(true);
        setCurrentValue(e)
      };
      const handleCancel = () => {
        setIsModalOpen(false);
      };

    if(loading){
        return <h2>Loading...</h2>
    }

    const [dogs, setGods] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [ currentValue, setCurrentValue] = useState([]);
    useEffect(() => {
       const fetchPosts = async() => {
        const res = await fetch("https://dog.ceo/api/breed/hound/afghan/images")
        const data = await res.json()
        const data2 = data.message
        setGods(data2)
       };
       fetchPosts();
    },[]);
    function Hendler (props) {
        console.log(props)
    }
    console.log(currentValue)
  return (
    
    <div className="flex flex-wrap  items-center ">
        <Modal  footer={false} width={600} title="Photo" open={isModalOpen} onCancel={handleCancel}>
            <div className="flex items-center flex-col">
                <img  src={dogs[currentValue.id]} alt="" />
                <div className=" mt-5 flex justify-between items-center  text-black text-1xl font-sans font-bold">
                    <div>
                        {currentValue.title}
                        {currentValue.body}
                    </div>
                    <HeartOutlined style={{ fontSize: '36px', paddingLeft: '10px', cursor: "pointer"}}/>
                </div>
            </div>
            
        </Modal>
        {posts.map((post) => (
                <div className="flex flex-col h-full items-center justify-center p-2 m-2  bg-gray-200" key={post.id}>
                    
                    <img onClick={() => (showModal(post))} className=" cursor-pointer ease-in duration-300 hover:opacity-80" src={dogs[post.id]} alt="dogs" />
                    <div className=" flex items-center justify-center w-96 pt-3 pb-3 ">
                        <div>
                            <span className=" text-black text-3xl font-sans font-bold">{post.title.slice(0,15)}</span>
                            <span className=" text-black text-3xl font-sans font-bold">{post.title.slice(0,60)}</span>
                        </div>
                        <HeartOutlined style={{ fontSize: '36px', paddingLeft: '10px', cursor: "pointer"}}/>
                        
                    </div>
                    
                </div>
        ))}
    </div>
  )
}

export default Posts