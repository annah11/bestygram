import { useEffect, useState } from 'react';
import axios from 'axios';
import { getAccessToken } from '../services/authService';
import { w3cwebsocket as W3CWebSocket } from 'websocket';


export default function ChatPage() {
    const [chatRooms, setChatRooms] = useState([]);
    const [currentChatRoom, setCurrentChatRoom] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const client = new W3CWebSocket('ws://localhost:8000/ws/chat/');

    useEffect(() => {
        fetchChatRooms();
    }, []);

    const fetchChatRooms = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/chatrooms/', {
                headers: {
                    Authorization: `Bearer ${getAccessToken()}`,
                },
            });
            setChatRooms(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchMessages = async (chatRoomId) => {
        try {
            const response = await axios.get(`http://localhost:8000/api/chatrooms/${chatRoomId}/messages/`, {
                headers: {
                    Authorization: `Bearer ${getAccessToken()}`,
                },
            });
            setMessages(response.data);
            setCurrentChatRoom(chatRoomId);
        } catch (error) {
            console.error(error);
        }
    };

    const handleSendMessage = async () => {
        try {
            await axios.post(
                `http://localhost:8000/api/messages/`,
                { chatroom: currentChatRoom, content: newMessage },
                {
                    headers: {
                        Authorization: `Bearer ${getAccessToken()}`,
                    },
                }
            );
            setNewMessage('');
            fetchMessages(currentChatRoom);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-3 border-end">
                    <h4>Chat Rooms</h4>
                    <ul className="list-group">
                        {chatRooms.map((room) => (
                            <li
                                key={room.id}
                                className="list-group-item"
                                onClick={() => fetchMessages(room.id)}
                            >
                                {room.name}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-9">
                    <div className="chat-box">
                        <h4>Messages</h4>
                        <div className="messages">
                            {messages.map((msg) => (
                                <div key={msg.id}>
                                    <strong>{msg.sender_username}</strong>: {msg.content}
                                </div>
                            ))}
                        </div>
                        <div className="input-group mt-3">
                            <input
                                type="text"
                                className="form-control"
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                            />
                            <button className="btn btn-primary" onClick={handleSendMessage}>
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
