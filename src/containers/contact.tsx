import React from 'react'
import { Avatar, Contact } from '../components'

interface iProps {
  username:string,
  lastMessage?:string
}

function ContactContainer({username,lastMessage}:iProps) {
  return (
<Contact>
  <Contact.Wrapper>
    <Avatar><Avatar.Picture /> </Avatar>
    <div>
      <Contact.Name>{username || ""}</Contact.Name>
      {lastMessage && <Contact.LastMessage>{lastMessage}</Contact.LastMessage> }   
    </div>
    <div>
    
    <Contact.Text>8:15</Contact.Text>  </div>
  </Contact.Wrapper>
</Contact>
  )
}

export default ContactContainer
