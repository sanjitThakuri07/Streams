import styled from "styled-components";

export const Hamburger = styled.div`
  position: absolute;
  /* top: ${({ hamburger }) => (hamburger ? "30px" : "50%")}; */
  top: 30px;
  right: 15px;
  transform: translateY(-50%);
  height: 50%;
  cursor: pointer;
  display: none;
  &.show {
    display: block;
  }

  span {
    display: block;
    width: 25px;
    height: 2px;
    background-color: ${({ hamburger }) =>
      hamburger ? "transparent" : "#000"};
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    transition: all 0.3s;

    &::after,
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      background-color: currentColor;
      transition: all 0.3s;
    }

    &::after {
      top: ${({ hamburger }) => (hamburger ? "0" : "-8px")};
      height: 120%;
      transform: rotate(${({ hamburger }) => (hamburger ? "-135deg" : "0deg")});
    }
    &::before {
      bottom: ${({ hamburger }) => (hamburger ? "0" : "-8px")};
      height: 120%;
      transform: rotate(${({ hamburger }) => (hamburger ? "135deg" : "0deg")});
    }
  }

  &.show {
    display: block;
    visibility: visible;
    pointer-events: all;
    z-index: 500;
  }
`;

export const DropdownBox = styled.div`
  /* overflow: hidden; */
  overflow: hidden;
  @media (max-width: 768px) {
    transition: height 0.3s;
  }
`;
