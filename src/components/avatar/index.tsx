import React from 'react';
import { Container, Picture, Button } from './styles/avatar';
import {iProps} from "../../ts/interfaces";

export default function Avatar({size="50", children, ...rest }:iProps) {
  return <Container size={size} {...rest}>{children}</Container>;
}

Avatar.Picture = function AvatarPicture({ ...rest }:iProps) {
  return <Picture {...rest} />;
};

Avatar.Button = function AvatarButton({size="24", children, ...rest }:iProps) {
  return <Button size={size} {...rest}>{children}</Button>;
};


