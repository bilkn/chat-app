import styled from "styled-components";
import { colors, indexes, sizes } from "../../../styles/variables";
import devices from "../../../styles/devices";

interface inputProps {
  [otherProps:string]: any
}

export const Container = styled.header`
  left: 0;
  padding: 2em;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: ${indexes.nav};
  @media ${devices.mobile} {
    margin-left: ${sizes.sidebar_width};
    padding: 1em 2em;
    width: calc(100% - 90px);
  }
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const Box = styled.div`
  flex: 1;
  margin-right: 20px;
`;

export const SearchBox = styled.div`
  flex: 1;
  position: relative;
`;

export const Input = styled.input<inputProps>`
  background: ${colors.darkGray};
  border: 1px solid transparent;
  border-radius: 5px;
  color: white;
  display: inline-block;
  font-size: 1rem;
  padding: 15px 20px;
  transition-duration: 200ms;
  transition-property: border-color, box-shadow;
  transition-timing-function: ease;
  outline: none;
  width: 100%;
  &:hover {
    border-color: rgba(0, 0, 0, 0.1);
    box-shadow: 0 0 0 4px #49494917;
  }
  &:focus {
    border-color: rgb(241 85 76 / 50%);
    box-shadow: 0 0 0 4px #f1554c40;
  }
  &:focus + i {
    display: none;
  }
  ::placeholder {
    color:  #c5c5c5;
  }
`;

export const Icon = styled.i`
  display: inline-block;
  left: 10px;
  position: absolute;
  top: 7px;
`;
