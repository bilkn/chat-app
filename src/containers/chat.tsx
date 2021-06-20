import React from "react";
import { Chat } from "../components";

function ChatContainer() {
  return (
    <Chat>
      <Chat.Wrapper>
        <Chat.MessageBox>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ut
          fugit quam provident non sunt optio facere sit autem voluptatibus.
        </Chat.MessageBox>
        <Chat.MessageBox variant="receival">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ut
          fugit quam provident non sunt optio facere sit autem voluptatibus.
        </Chat.MessageBox>
        <Chat.MessageBox>
          I'm good thanks. I wanted to talk to you about the invoice for the
          project we worked on with David.
        </Chat.MessageBox>
        <Chat.MessageBox variant="receival">
          Ah, yes. I'll get right on it.
        </Chat.MessageBox>
        <Chat.MessageBox variant="receival">
          Also, how is the development of the website going - I heard launch was
          December. Any Updates on that? How's Julius?
        </Chat.MessageBox>
      </Chat.Wrapper>
    </Chat>
  );
}

export default ChatContainer;
