import React from 'react'
import s from './Message.module.css'

type messageDataType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: messageDataType) {
    return (
        <div className={s.message}>
            <img src={props.avatar} alt={'avatar'} className={s.message__avatar}/>
            <div className={s.angle}></div>
            <div className={s.messageBox}>
                <h1 className={s.messageBox__name}>{props.name}</h1>
                <p className={s.messageBox__message}>{props.message}</p>
                <p className={s.messageBox__messageTime}>{props.time}</p>
            </div>
        </div>
    )
}

export default Message
