import styled from "styled-components";
import { colors } from "../../../styles/variables";

interface MessageProps {
  variant?: string;
}

export const Container = styled.div``;

export const MessageBox = styled.div`
  background-color: ${({ variant }: MessageProps) =>
    variant === "receival" ? colors.blue : colors.gray};
  border-radius: 7px;
  padding: 1em;
`;

export const Wrapper = styled.div`
  padding: var(--padding-sm);

  & ${MessageBox} + ${MessageBox} {
    margin-top: 1em;
  }
`;

export const Text = styled.p``;

export const TextInput = styled.input``;

export const Date = styled.div``;

export const Button = styled.button``;
