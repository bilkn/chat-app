import styled from "styled-components/macro";
import { colors } from "../../../styles/variables";

interface MessageProps {
  receival?: boolean;
}

export const Container = styled.div`
  position: relative;
`;

export const Box = styled.div`
  display: flex;
`;

export const MessageBox = styled.div`
  background-color: ${({ receival }: MessageProps) =>
    receival ? colors.blue : colors.gray};
  border-radius: 7px;
  padding: 1em;
  position: relative;

  &::before {
    ${({ receival }) => (receival ? "right: 100%;" : "left: 100%;")}
    border-bottom: 7px solid transparent;
    ${({ receival }) =>
      receival
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

export const InnerWrapper = styled.div`
  background-color: ${colors.darkGray};
  border-radius: 7px;
  display: flex;
  overflow: hidden;
`;

export const Text = styled.p``;

export const InputWrapper = styled.div`
  background-color: ${colors.blue};
  bottom: 0;
  left: 0;
  padding: var(--padding-sm);
  position: fixed;
  overflow: hidden;
  width: 100%;
`;

export const TextInput = styled.input`
  background-color: inherit;
  border: none;
  color: white;
  font-size: 1rem;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

export const Date = styled.div``;

export const Button = styled.button`
  background-color: transparent;
  color: ${colors.white};
  padding: 0.6em;
`;
