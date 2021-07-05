import React from "react";
import {
  ChatContainer,
  ChatInputContainer,
  ContactContainer,
  ProfileContainer,
  HeaderContainer
} from "../containers";

function Home() {
  return (
    <>
      <HeaderContainer /> 
      <main>
        <ProfileContainer />
        {/*  <ChatContainer /> */}
        {/*   <ContactContainer
          username="Paolo Sabatella"
          lastMessage="Yes I've been loving to lorem ipsum."
        />
        <ContactContainer
          username="Paolo Sabatella"
          lastMessage="Yes I've been loving to lorem ipsum."
        />
        <ContactContainer
          username="Paolo Sabatella"
          lastMessage="Yes I've been loving to lorem ipsum."
        />
        <ContactContainer
          username="Paolo Sabatella"
          lastMessage="Yes I've been loving to lorem ipsum."
        />
        <ContactContainer
          username="Paolo Sabatella"
          lastMessage="Yes I've been loving to lorem ipsum."
        /> */}
      </main>
      <ChatInputContainer />
    </>
  );
}

export default Home;
