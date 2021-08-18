// Menu.styled.js
import styled from "styled-components"

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  background: white;
  height: 100vh;
  width: 100vw;
  text-align: left;
  border-right: 1px solid white;
  position: absolute;
  top: 0;
  left: 0;
  font-size: 20px;

  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.3s ease-in-out;


  .design-consultation-redirect{
    margin-top:1em;
    padding-top: 1.2em;
    text-align:center;
    padding-bottom: 1.2em;
    font-size:16px;
    text-transform:capitalize;
    background-color: #14a94b;
    color: white;
    border: none;
  }

  .logo-wrapper-menu {
    width: 100%;
    display:flex;
    justify-content:flex-end;
    svg {
      fill: black;
    height: 5em;
    width: 5em;
}
    }
  }

  .social-media-links {
    margin-top: 1em;
    margin-bottom: 1em;
  }

  .mobile-menu-link-container {
    margin-top:2em;
    /* padding-top: 3em; */
  }

  .social-media-container {
    /* margin-top: 3em; */
    /* padding-bottom: 3em; */
    .social-media-links {
      /* padding-top: 3em; */
    }
  }

  svg {
    height: 1em;
    width: 1em;
    margin-left: 10px;
    :first-child {
      margin-left: 10px;
    }
    :last-child {
      margin-right: 0;
    }
  }

  li {
    /* padding-left: 10px; */
    list-style: none;
    width: 100%;
    border-bottom: 1px solid #dbd9d2;
    padding-top:0.5em;
    padding-bottom:0.5em;
    &:last-child {
      border-bottom: none;
    }
    &*:first-child {
      padding-top: 0;
    }
    /* margin-left: 0.5em; */
  }

  ul {
    list-style: none;
  }

  .number-contact {
    margin-top: 1em;
    display: flex;
    font-size:16px;
    flex-direction: column;

    span {
      display: flex;
      align-items: center;
      width: 100%;
      color: black;
      font-weight: 500;
      img {
        margin-right: 10px;
        max-height: 1em;
        max-width: 1em;
      }
    }
  }

  a {
    text-transform: capitalize;
    cursor: pointer;
    color: black;
    font-weight: 600;
    font-size: 20px;
    text-decoration: none;
    transition: color 0.3s linear;
    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`
