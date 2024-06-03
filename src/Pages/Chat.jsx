import './Chat.css'
import { useState } from "react"

function Chat() {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    const handleNewMessageChange = (event) => {
        setNewMessage(event.target.value);
    };

    const handleSendMessage = () => {
        if (newMessage.trim() === '') return;

        const updatedMessages = [...messages, newMessage];
        setMessages(updatedMessages);
        setNewMessage('');
    };

    return (
        <>
            <div className="container min-h-screen min-w-full bg-gray-600    pt-12  ">
                <div className=" w-1/5 min-h-full m-auto  border-black border-x-4 border-y-4  rounded-3xl bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN-HlEqgVOsZK0F0zSLy9By4RhC-ZwmBKFRQ&s')]">
                    <div className="h-4 w-4 border-black border-4 rounded-full absolute ml-28 z-10 mt-2 bg-black"></div>
                    <div className=" min-w-full rounded-t-3xl border-t-0 min-h-12 backdrop-blur-sm bg-transparent p-2 flex justify-between ">
                        <div className=" w-12 h-12 bg-cover bg-center border-black border-4 rounded-full      bg-[url('https://github.com/Asad7922/whats-app-chat-dp-pic/blob/main/images%20(18).jpg?raw=true')]"><p className="text-2xl font-semibold pl-12 pt-2 text-white">User</p></div>
                        <div className="pt-2 text-xl text-white flex gap-6 w-16">
                            <span><i className="bi bi-camera-video"></i></span>
                            <span><i className="bi bi-telephone"></i></span>
                        </div>
                    </div>
                    {/* meassage-area */}
                    <div className="w-full h-96      overflow-y-auto overflow-hidden chat-box">
                        <div className="p-2 space-y-2">
                            <div className="flex justify-start ">
                                <div className="flex-1 overflow-y-auto">
                                    {messages.map((message, index) => (
                                        <div key={index} className="flex justify-end mb-2 shadow">
                                            <div className=" text-white rounded-lg p-2 backdrop-blur-lg">
                                                {message}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <form >
                        <input required type="text" placeholder="Type your message..." className="w-56 h-full   border-gray-200 rounded-b-2xl p-2   mt-4  focus:outline-none backdrop-blur-xl bg-transparent text-white" value={newMessage}
          onChange={handleNewMessageChange} />
                        <button className='text-white ml-2 ' onClick={handleSendMessage}><i className="bi bi-send"></i></button>
                    </form>
                </div>




            </div>
        </>
    )
}

export default Chat




