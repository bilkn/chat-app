import styled from 'styled-components/macro';

interface ContainerProps {
  size: string | null
}

interface ButtonProps {
  size: string | null
}

export const Container = styled.div<ContainerProps>`
  background: gray;
  border-radius: 50%;
  flex-shrink: 0;
  height: ${(props) => props.size + 'px'};
  margin-right: 1em;
  overflow: hidden;
  width: ${(props) => props.size + 'px'};
`;

export const Picture = styled.img`
  display: block;
  height: inherit;
  object-fit: cover;
  user-select: none;
  width: inherit;
`;

export const Button = styled.button<ButtonProps>`
  border-radius: 5px;
  height: ${(props) => props.size + 'px'};
  position: relative;
  transition: box-shadow 50ms;
  outline: none;
  width: ${(props) => props.size + 'px'};

  &:hover {
    box-shadow: 0 0 0 2pt #b6b6b6;
  }
  &:focus {
    box-shadow: 0 0 0 2pt #b6b6b7;
  }
`;