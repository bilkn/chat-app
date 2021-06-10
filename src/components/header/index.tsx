import React from 'react';
import {
  Container,
  Wrapper,
  Box,
  SearchBox,
  Input,
  Icon,
} from './styles/header';
import {iProps} from "../../ts/interfaces";

export default function Header({ children, ...rest }:iProps) {
  return <Container {...rest}>{children}</Container>;
}

Header.Wrapper = function HeaderWrapper({ children, ...rest }:iProps) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

Header.Box = function HeaderBox({ children, ...rest }:iProps) {
  return <Box {...rest}>{children}</Box>;
};

Header.SearchBox = function HeaderSearchBox({ children, ...rest }:iProps) {
  return <SearchBox {...rest}>{children}</SearchBox>;
};

Header.Input = function HeaderInput({ ...rest }:iProps) {
  return <Input {...rest} />;
};

Header.Icon = function HeaderIcon({ children, ...rest }:iProps) {
  return <Icon {...rest}>{children}</Icon>;
};


