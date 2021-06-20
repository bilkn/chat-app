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
  position: relative;

  &::before {
    ${({ variant }) =>
      variant === "receival" ? "right: 100%;" : "left: 100%;"}
    border-bottom: 7px solid transparent;
    ${({ variant }) =>
      variant === "receival"
        ? `border-right: 7px solid ${colors.blue};`
        : `border-left: 7px solid ${colors.gray};`}
    border-top: 7px solid transparent;
    content: "";
    height: 0;
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    width: 0;
  }
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
