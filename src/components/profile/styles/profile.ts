import styled from "styled-components/macro";
import { colors } from "../../../styles/variables";

interface SizeProp {
  size: number | string;
}

export const Container = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  padding: var(--padding-sm);
`;

export const AvatarWrapper = styled.div`
  background: gray;
  border-radius: 50%;
  flex-shrink: 0;
  height: ${({ size }: SizeProp) => size + "px"};
  margin: auto;
  overflow: hidden;
  width: ${({ size }: SizeProp) => size + "px"};
`;

export const Avatar = styled.img`
  border-radius: inherit;
  display: block;
  height: inherit;
  object-fit: cover;
  user-select: none;
  width: inherit;
`;

export const Button = styled.button`
  height: 100%;
  position: relative;
  outline: none;
  width: 100%;
`;

export const IconContainer = styled.div`
  align-items: center;
  background-color: #6b5e5e8a;
  color: #eeeeee;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  transition: opacity 200ms;
  top: 50%;
  opacity: 0;
  width: 100%;
  &:hover {
    opacity: 1;
  }
`;

export const IconText = styled.p`
  font-size: 0.8rem;
  margin-top: 0.5em;
  max-width: 20ch;
`;

export const Text = styled.p``;

export const Input = styled.input`
  appearance: none;
  border: none;
  background: none;
  color: black;
  padding: 0.5em;
`;

export const Fieldset = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.label`
  color: orange;
  padding: 0.5em;
`;
