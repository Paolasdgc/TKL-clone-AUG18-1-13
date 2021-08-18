import styled from "styled-components"

export const StyledBurger = styled.button`
  position: absolute;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2em;
  height: 2em;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 10;
  &:focus {
    outline: none;
  }

  button {
    background-color: #14a94b;
    padding-top: 1.4em;
    color: white;
    padding-bottom: 1.4em;
    margin-top: 1em;
  }

  .social-media-container {
    button {
      padding-left: 2em;
      padding-right: 2em;
      padding-top: 0.35em;
      padding-bottom: 0.35em;
      background-color: $green;
    }
    svg {
      height: 1.5em;
      width: 1.5em;
      fill: #241c15;
      margin-right: 1em;
    }
  }
  div {
    cursor: pointer;
    width: 30px;
    height: 0.15rem;
    background: ${({ theme, open }) => (open ? "black" : "black")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`
