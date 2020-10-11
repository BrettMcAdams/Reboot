import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import "./Sidebar.css";
import SearchIcon from "@material-ui/icons/Search";
import RateReviewOutlinedIcon from "@material-ui/icons/RateReviewOutlined";
import SidebarChat from './SidebarChat'
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import db, { auth } from "./firebase";


function Sidebar() {

  const user = useSelector(selectUser)
  const [chats, setChats] = useState([])

  useEffect(() => {
    db.collection('chats').onSnapshot(snapshot => {
      setChats(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data(),
      })))
    })
  }, [])

  const addChat = () => {

    const chatName = prompt('Please enter a chat name')

    if (chatName) {
      db.collection('chats').add({
        chatName: chatName,
      })
    }
  }

  return (
    <div className="sidebar">
      <div className='sidebar__header'>
        <Avatar src={user.photo} onClick={() => auth.signOut()} className='sidebar__avatar' />
        <div className="sidebar__input">
          <SearchIcon />
          <input placeholder="Search" />
        </div>

        <IconButton variant='outlined' className='sidebar__inputButton'>
          <RateReviewOutlinedIcon onClick={addChat} />
        </IconButton>
      </div>

      <div className="sidebar__chats">
        {chats.map(({ id, data: {chatName} }) => (
          <SidebarChat key={id} id={id} chatName={chatName} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
