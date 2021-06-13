import React from 'react';
import { Avatar, Contact } from '../components';
import girl1 from '../assets/girl.jpg';

interface iProps {
  username: string;
  lastMessage?: string;
}

function ContactContainer({ username, lastMessage }: iProps) {
  return (
    <Contact>
      <Contact.Wrapper>
        <Avatar>
          <Avatar.Picture src={girl1} />
        </Avatar>
        <div>
          <Contact.Name>{username || ''}</Contact.Name>
          {lastMessage && (
            <Contact.LastMessage>{lastMessage}</Contact.LastMessage>
          )}
        </div>
        <div>
          <Contact.Text>8:15</Contact.Text>
        </div>
      </Contact.Wrapper>
    </Contact>
  );
}

export default ContactContainer;
