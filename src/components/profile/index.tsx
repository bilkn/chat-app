import React from "react";
import {
  Container,
  Wrapper,
  AvatarWrapper,
  Avatar,
  Text,
  IconContainer,
  Input,
  Button,
  IconText,
  Label,
} from "./styles/profile";

import { iProps } from "../../ts/interfaces";

interface imgProps {
  children?: JSX.Element | JSX.Element[] | Element | string | undefined;
  [otherProps: string]: any;
  src: string;
}

function Profile({ children, ...rest }: iProps) {
  return <Container {...rest}>{children}</Container>;
}

Profile.Wrapper = function ProfileWrapper({ children, ...rest }: iProps) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

Profile.AvatarWrapper = function ProfileAvatarWrapper({
  size = 170,
  children,
  ...rest
}: iProps) {
  return (
    <AvatarWrapper size={size} {...rest}>
      {children}
    </AvatarWrapper>
  );
};

Profile.Avatar = function ProfileAvatar({ children, ...rest }: imgProps) {
  return <Avatar {...rest}>{children}</Avatar>;
};

Profile.Text = function ProfileText({ children, ...rest }: iProps) {
  return <Text {...rest}>{children}</Text>;
};

Profile.Button = function ProfileButton({ children, ...rest }: iProps) {
  return <Button {...rest}>{children}</Button>;
};

Profile.IconContainer = function ProfileIconContainer({ children, ...rest }: iProps) {
  return <IconContainer {...rest}>{children}</IconContainer>;
};

Profile.Input = function ProfileInput({ children, ...rest }: iProps) {
  return <Input {...rest} />;
};

Profile.IconText = function ProfileIconText({ children, ...rest }: iProps) {
  return <IconText {...rest}>{children}</IconText>;
};

Profile.Label = function ProfileLabel({ children, ...rest }: iProps) {
  return <Label {...rest}>{children}</Label>;
};

export default Profile;
