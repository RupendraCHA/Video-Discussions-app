import React from 'react'
import { MdCall } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const ChatButton = () => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/videoCall")
    }

  return (
    <div className='fixed right-4 md:right-40 bottom-4 z-50' style={{maxWidth: "1100px"}}>
        <button onClick={handleClick} className='bg-blue-500 text-white rounded-full p-3 shadow-lg hover:bg-blue-700 focus:outline-none
            focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray
        '>
            <MdCall className='w-7 h-7'/>
        </button>
    </div>
  )
}

export default ChatButton