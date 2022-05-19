import styled from "styled-components";

export const Dropdown = styled.div`
  position: relative;
  color: #333;
  cursor: default;
  pointer-events: auto;
  opacity: 1;
`;

export const Control = styled.div``;

export const Arrow = styled.div`
  border-color: #999 transparent transparent;
  border-style: solid;
  border-width: 5px 5px 0;
  content: " ";
  display: block;
  height: 0;
  margin-top: 0.3rem;
  position: absolute;
  right: 10px;
  top: 14px;
  width: 0;

  &.open {
    border-color: transparent transparent #999;
    border-width: 0 5px 5px;
  }
`;

export const SelectedValue = styled.div`
  input {
    line-height: 1.5;
    font-size: 1em;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 2px;
    box-sizing: border-box;
    cursor: default;
    outline: none;
    padding: 8px 52px 8px 10px;
    transition: all 200ms ease;
    width: 100%;
  }
`;

export const DropdownOptions = styled.div`
  display: none;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
  box-sizing: border-box;
  margin-top: -1px;
  max-height: 200px;
  overflow-y: auto;
  position: absolute;
  top: 100%;
  width: 100%;
  z-index: 1000;
  -webkit-overflow-scrolling: touch;

  &.open {
    display: block;
  }
`;

export const DropdownOption = styled.div`
  box-sizing: border-box;
  color: rgba(51, 51, 51, 0.8);
  cursor: pointer;
  display: block;
  padding: 8px 10px;

  &.selected,
  &:hover {
    background-color: #f2f9fc;
    color: #333;
  }
`;
