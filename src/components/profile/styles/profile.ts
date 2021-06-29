import styled from "styled-components/macro";

interface SizeProp {
  size: number | string;
}

export const Container = styled.div``;

export const Wrapper = styled.div`
  display: flex;
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

export const Text = styled.p``;

export const Input = styled.input``;

export const Label = styled.label``;
