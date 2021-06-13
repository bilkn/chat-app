import React from 'react'
import {Container,Wrapper, Name, About,TextWrapper,Text,LastMessage} from "./styles/contact"
import {iProps} from "../../ts/interfaces";


function Contact({children, ...rest}:iProps) {
  return (
<Container {...rest}>{children}</Container>
  )
}

Contact.Wrapper = function ContactWrapper({children,...rest}:iProps) {
  return <Wrapper {...rest}>{children}</Wrapper>
}

Contact.Name = function ContactName({children,...rest}:iProps){
  return <Name {...rest}>{children}</Name>
}

Contact.About = function ContactAbout({children,...rest}:iProps) {
  return <About {...rest}>{children}</About>
}

Contact.TextWrapper = function ContactTextWrapper({children,...rest}:iProps) {
  return <TextWrapper {...rest}>{children}</TextWrapper>
}

Contact.Text = function ContactText({children,...rest}:iProps) {
  return <Text {...rest}>{children}</Text>
}

Contact.LastMessage = function ContactLastMessage({children,...rest}:iProps) {
  return <LastMessage {...rest}>{children}</LastMessage>
}

export default Contact
