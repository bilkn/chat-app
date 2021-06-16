import styled from 'styled-components/macro';

export const Container = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  padding: 0.75em 1.5em;
`;

export const Name = styled.p``;

export const About = styled.p``;

export const LastMessage = styled.p`
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
