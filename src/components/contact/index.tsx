import React from 'react'
import {Container,Wrapper, Avatar, Name, About} from "./styles/contact"
import {iProps} from "../../ts/interfaces";


function Contact({children, ...rest}:iProps) {
  return (
<Container {...rest}>{children}</Container>
  )
}

Contact.Wrapper = function ContactWrapper({children,...rest}:iProps) {
  return <Wrapper {...rest}>{children}</Wrapper>
}

Contact.Avatar = function ContactAvatar({children,...rest}:iProps) {
  return <Avatar {...rest}>{children}</Avatar>
}

Contact.Name = function ContactName({children,...rest}:iProps) {
  return <Name {...rest}>{children}</Name>
}

Contact.About = function ContactAbout({children,...rest}:iProps) {
  return <About {...rest}>{children}</About>
}

export default Contact
