import React from "react";
import { Header } from "../components";
import { ChatContainer, ChatInputContainer, ContactContainer } from "../containers";
import ProfileContainer from "../containers/profile";

function Home() {
  return (
    <>
      <Header>
        {/* <Header.SearchBox>
          <Header.Input
            type="search"
            placeholder="Search for messages or contacts"
          />
        </Header.SearchBox> */}
      </Header>
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
