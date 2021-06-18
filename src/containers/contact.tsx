import React from 'react';
import { Avatar, Contact } from '../components';
import girl1 from '../assets/girl.jpg';

interface iProps {
  username: string;
  lastMessage?: any;
}

function ContactContainer({ username = '', lastMessage }: iProps) {
  return (
    <Contact>
      <Contact.Link>
        <Contact.Wrapper>
          <Avatar>
            <Avatar.Picture src={girl1} />
          </Avatar>
          <Contact.TextWrapper>
            <Contact.Name>{username}</Contact.Name>
            {lastMessage && (
              <Contact.LastMessage>{lastMessage}</Contact.LastMessage>
            )}
          </Contact.TextWrapper>
          <Contact.DateWrapper>
            <Contact.Text>8:15</Contact.Text>
          </Contact.DateWrapper>
        </Contact.Wrapper>
      </Contact.Link>
    </Contact>
  );
}

export default ContactContainer;
