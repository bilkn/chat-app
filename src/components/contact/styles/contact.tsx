import styled from 'styled-components/macro';
import { Link as ButtonLink } from 'react-router-dom';

export const Container = styled.div``;

export const Link = styled(ButtonLink)`
  color: unset;
  display: block;
  height: 100%;
  transition: background-color 200ms;
  width: 100%;

  &:hover {
    background: var(--bg-hover-gray);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  padding: var(--padding-sm);
`;

export const Name = styled.p``;

export const About = styled.p``;

export const LastMessage = styled.p`
  color: var(--gray1);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const DateWrapper = styled.div`
  display: flex;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-right: 0.5em;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const Text = styled.p`
  margin-top: auto;
`;
