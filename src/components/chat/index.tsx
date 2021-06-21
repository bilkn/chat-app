import React from "react";
import {
  Container,
  Wrapper,
  MessageBox,
  Box,
  Text,
  InnerWrapper,
  InputWrapper,
  TextInput,
  Date,
  Button,
} from "./styles/chat";
import { iProps } from "../../ts/interfaces";

function Chat({ children, ...rest }: iProps) {
  return <Container {...rest}> {children}</Container>;
}

Chat.MessageBox = function ChatMessageBox({ children, ...rest }: iProps) {
  return <MessageBox {...rest}>{children}</MessageBox>;
};

Chat.Wrapper = function ChatWrapper({ children, ...rest }: iProps) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

Chat.Box = function ChatBox({ children, ...rest }: iProps) {
  return <Box {...rest}>{children}</Box>;
};

Chat.Text = function ChatText({ children, ...rest }: iProps) {
  return <Text {...rest}>{children}</Text>;
};

Chat.InnerWrapper = function ChatInnerWrapper({ children, ...rest }: iProps) {
  return <InnerWrapper {...rest}>{children}</InnerWrapper>;
};


Chat.InputWrapper = function ChatInputWrapper({ children, ...rest }: iProps) {
  return <InputWrapper {...rest}>{children}</InputWrapper>;
};

Chat.TextInput = function ChatTextInput({ ...rest }: iProps) {
  return <TextInput {...rest} />;
};

Chat.Date = function ChatDate({ children, ...rest }: iProps) {
  return <Date {...rest}>{children}</Date>;
};

Chat.Button = function ChatButton({ children, ...rest }: iProps) {
  return <Button {...rest}>{children}</Button>;
};

export default Chat;
