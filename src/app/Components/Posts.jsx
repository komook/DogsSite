import "../styles/posts.css"

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

    const styleSet = () => {

    }
    const [dogs, setGods] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [ currentValue, setCurrentValue] = useState([]);
    const [style, setStyle] = useState(false);
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
    
    <div className="container">
        <Modal  footer={false} width={600} title="Photo" open={isModalOpen} onCancel={handleCancel}>
            <div className="modal-container">
                <img  src={dogs[currentValue.id]} alt="" />
                <div className="modal-text">
                    <div>
                        {currentValue.title}
                        {currentValue.body}
                    </div>
                    <HeartOutlined onClick={`color: '#08c' : ' '`} style={{ fontSize: '36px', paddingLeft: '10px', cursor: "pointer", }}/>
                </div>
            </div>
            
        </Modal>
        {posts.map((post) => (
                <div className="posts-container" key={post.id}>
                    
                    <img onClick={() => (showModal(post))} className="posts-modal" src={dogs[post.id]} alt="dogs" />
                    <div className="posts-wrapper ">
                        <div>
                            <span className="posts-text">{post.title.slice(0,15)}</span>
                            <span className="posts-text">{post.title.slice(0,60)}</span>
                        </div>
                        <HeartOutlined onClick={styleSet}  style={{ fontSize: '36px', paddingLeft: '10px', cursor: "pointer", }}/>
                        
                    </div>
                    
                </div>
        ))}
    </div>
  )
}

export default Posts