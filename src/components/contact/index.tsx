import React from 'react'
import {Container,Wrapper,Searchbox, Avatar, Name, About} from "./styles"

function Contact({children, ...rest}) {
  return (
<Container {...rest}>{children}</Container>
  )
}

Contact.Wrapper = function ContactWrapper({children,...rest}) {
  return <Wrapper {...rest}>{children}</Wrapper>
}

Contact.Avatar = function ContactAvatar({children,...rest}) {
  return <Avatar {...rest}>{children}</Avatar>
}

Contact.Name = function ContactName({children,...rest}) {
  return <Name {...rest}>{children}</Name>
}

Contact.About = function ContactAbout({children,...rest}) {
  return <About {...rest}>{children}</About>
}

export default Contact
