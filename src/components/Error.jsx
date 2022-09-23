import React from 'react'
import {TbFaceIdError} from 'react-icons/tb'
import { useLocation } from 'react-router-dom'

export const MessageComponent = ({error}) => {
  const location = useLocation()

  return (
    <div className="Message">
        <TbFaceIdError className="message__icon"/>
        <p>Ups.. {error.message} . Try again later !</p>
        <button onClick={e => location('/')}>home page</button>
    </div>
  )
}

export default MessageComponent
