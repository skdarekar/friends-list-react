import React from 'react';
// import FaTrashO from 'react-icons/lib/fa/trash-o'
import { AiFillDelete } from "react-icons/ai";
import { BsStar, BsStarFill } from "react-icons/bs";
const Friend = ({ friend, removeFriend, startFriend }) => {
    return (
        <div className="friend">
            <div className="friend-content">
                <strong>
                    {friend.name}
                </strong>
                <span>is your friend</span>
            </div>
            <div>
                <button
                    onClick={(e) => { startFriend(e, friend) }}
                    className="btn fav">
                    <span><BsStar /></span>
                </button>
                <button
                    onClick={(e) => { removeFriend(e, friend) }}
                    className="btn trash">
                    <span><AiFillDelete /></span>
                </button>
            </div>
        </div>
    )
}

export default Friend;