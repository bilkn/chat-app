import React from "react";
import { Header } from "../components";
import { ChatContainer, ChatInput, ContactContainer } from "../containers";

function Home() {
  return (
    <>
      <Header>
        <Header.SearchBox>
          <Header.Input
            type="search"
            placeholder="Search for messages or contacts"
          />
        </Header.SearchBox>
      </Header>
      <main>
        {/*  <ChatContainer /> */}
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
        />
        <ContactContainer
          username="Paolo Sabatella"
          lastMessage="Yes I've been loving to lorem ipsum."
        />
      </main>
      <ChatInput />
    </>
  );
}

export default Home;
