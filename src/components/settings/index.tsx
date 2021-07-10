import React from "react";
import { iProps } from "../../ts/interfaces";
import {
  Container,
  Wrapper,
  List,
  Item,
  IconContainer,
  ButtonLink,
} from "./styles/settings";

function Settings({ children, ...rest }: iProps) {
  return <Container {...rest}>{children}</Container>;
}

Settings.Wrapper = function SettingsWrapper({ children, ...rest }: iProps) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

Settings.List = function SettingsList({ children, ...rest }: iProps) {
  return <List {...rest}>{children}</List>;
};

Settings.Item = function SettingsItem({ children, ...rest }: iProps) {
  return <Item {...rest}>{children}</Item>;
};

Settings.IconContainer = function SettingsIconContainer({
  children,
  ...rest
}: iProps) {
  return <IconContainer {...rest}>{children}</IconContainer>;
};

Settings.ButtonLink = function SettingsButtonLink({
  to: string,
  children,
  ...rest
}: iProps) {
  return (
    <ButtonLink to={string} {...rest}>
      {children}
    </ButtonLink>
  );
};
export default Settings;
