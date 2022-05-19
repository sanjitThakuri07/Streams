import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { BsFillCaretDownFill } from "react-icons/bs";
import "./header.scss";

import { Hamburger, DropdownBox } from "./hamburger.style.jsx";

import { routes } from "../routes";

import GoogleAuth from "../Components/GoogleAuth/GoogleAuth";

const dynamicLinks = [
  {
    id: 1,
    multi: true,
    nestedItems: [1, 2, 3],
  },
  {
    id: 1,
    multi: true,
    nestedItems: [1, 2, 3],
  },
  {
    id: 1,
    multi: true,
    nestedItems: Array(8).fill(8),
  },
  {
    id: 3,
    name: "Stream List",
    multi: false,
    link: "/",
    exact: true,
  },
];

const DropDownLinks = ({ link }) => {
  return (
    <Link to="/">
      <div className="link__image">
        <i class="fa fa-university" aria-hidden="true"></i>
      </div>
      <div className="link__text">Bank Deposit</div>
      <i class="fa fa-arrow-right" aria-hidden="true"></i>
    </Link>
  );
};

const Header = () => {
  // const [dropdownCounter, setDropdownCounter] = useState(0);
  const [active, setActive] = useState(Array(0).fill(false));

  const [hamburger, setHamburger] = useState(false);

  const [windowWidth, setWindowWidth] = useState();

  const itemsRef = useRef([]);

  const activeDropdown = (idx, length, mobile = false) => {
    const dropdownStates = Array(length).fill(false);
    if (mobile) {
      // checking if the previous state is present or not
      // if yes replacing according to their value
      if (active.length > 0) {
        dropdownStates[idx] = !active[idx];
      } else {
        // if not then override on the created array state
        dropdownStates[idx] = !dropdownStates[idx];
      }
    } else {
      dropdownStates[idx] = true;
    }
    setActive(() => dropdownStates);
  };

  const deactiveDropdown = (idx, length, mobile = false) => {
    const dropdownStates = [...active];
    dropdownStates[idx] = false;
    setActive(() => dropdownStates);
  };

  function sizeGetter() {
    setWindowWidth((prev) => window.innerWidth);
  }

  useEffect(() => {
    sizeGetter();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", sizeGetter);

    return () => {
      // remove resize listener
      window.removeEventListener("resize", sizeGetter);
    };
  }, [windowWidth]);

  // console.log(itemsRef.current[2].scrollHeight, "ss");

  return (
    <header className="header">
      <Hamburger
        className={`hamburger ${windowWidth <= 768 ? "show" : ""}`}
        onClick={() => setHamburger(!hamburger)}
        hamburger={hamburger}
        mobileMenu={windowWidth >= 768 ? "false" : "true"}
      >
        <span></span>
      </Hamburger>
      <div
        className={`navigation__box ${
          windowWidth < 768 ? "mobile-navigation" : ""
        } ${hamburger ? "active" : ""}`}
      >
        <div className="header__first-section">
          {dynamicLinks &&
            dynamicLinks.map((item, idx, arr) => {
              return item.multi ? (
                <div
                  className="dropdown-link__container"
                  onMouseEnter={
                    windowWidth <= 768
                      ? null
                      : () => activeDropdown(idx, arr.length)
                  }
                  onMouseLeave={
                    windowWidth <= 768
                      ? null
                      : () => deactiveDropdown(idx, arr.length)
                  }
                  onClick={() => activeDropdown(idx, arr.length, true)}
                >
                  <div
                    className={`dropdown-link__link links ${
                      windowWidth <= 768 ? (active[idx] ? "active" : "") : ""
                    }`}
                  >
                    <div className="text">Buy Crypto</div>
                    <BsFillCaretDownFill
                      className={`transform-icon ${
                        active[idx] ? "rotate" : ""
                      }`}
                    />
                  </div>
                  <DropdownBox
                    className={`dropdown-box ${active[idx] ? "active" : ""}`}
                    ref={(el) => (itemsRef.current[idx] = el)}
                    style={
                      active[idx]
                        ? {
                            height:
                              itemsRef &&
                              itemsRef.current[idx].scrollHeight + "px",
                          }
                        : {
                            height: "0px",
                          }
                    }
                  >
                    <div
                      className={`dropdown-box__links ${
                        item.nestedItems.length > 5 ? "dropdown-box__grid" : ""
                      }`}
                    >
                      {item.nestedItems.map((link) => {
                        return <DropDownLinks link={link} />;
                      })}
                    </div>
                  </DropdownBox>
                </div>
              ) : (
                <Link
                  to={item.link}
                  exact={item.exact}
                  className="header__link links"
                >
                  {item.name}
                </Link>
              );
            })}
        </div>
        <div className="header__second-section">
          {/* <Link className="header__link links">G</Link> */}
          <GoogleAuth></GoogleAuth>
        </div>
      </div>
    </header>
  );
};

export default Header;
