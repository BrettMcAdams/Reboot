import { Avatar } from '@material-ui/core'
import React, { forwardRef } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import './Message.css'

const Message = forwardRef(
    ( 
        { id, content: { timestamp, displayName, email, message, photo, uid } },
    ref) => {

    const user = useSelector(selectUser)

    return (
        <div ref={ref} className={`message ${user.email === email && 'message__sender'}`}> 
            <Avatar className='message__photo' src={photo}/>
            <p>{message}</p>
            <h4>{new Date(timestamp?.toDate()).toLocaleString()}</h4>
        </div>
    )
});

export default Message

// {new Date(timestamp?.toDate()).toLocaleString}
