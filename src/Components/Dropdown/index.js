import React, { useState, useRef, useEffect } from "react";

import {
  Dropdown,
  Arrow,
  SelectedValue,
  DropdownOptions,
  DropdownOption,
} from "./dropdown.styled";

import "./dropdown.scss";

const Index = ({
  options = [],
  prompt = "",
  id,
  label,
  value,
  onChange,
  ...attr
}) => {
  const [open, setOpen] = useState(false);
  // for searching
  const [query, setQuery] = useState("");

  const ref = useRef(null);

  function close(e) {
    // closing dropdown when clicked outside the dropdown component
    setOpen(e && e.target === ref.current);
  }

  function filter(options) {
    return options.filter(
      (option) => option[label].toLowerCase().indexOf(query.toLowerCase()) > -1
    );
  }

  useEffect(() => {
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  });

  function displayValue(type = "single") {
    if (query.length > 0) return query;
    switch (type) {
      case "single":
        if (value) return value[label];
      case "multi":
      // if(value)
      default:
        return "";
    }
  }

  return (
    <Dropdown>
      {/* click to open and close dropdown */}
      <div className="control" onClick={() => setOpen((prev) => !prev)}>
        <SelectedValue>
          <input
            type="text"
            ref={ref}
            placeholder={value ? value[label] : prompt}
            value={displayValue()}
            onChange={(e) => {
              setQuery(e.target.value);
              onChange(null);
            }}
            onClick={() => setOpen((prev) => !prev)}
          />
        </SelectedValue>
        <Arrow className={`arrow ${open ? "open" : null}`}></Arrow>
      </div>
      {/* list of options */}
      <DropdownOptions className={`${open ? "open" : null}`}>
        {/* single list of option */}
        {options &&
          options.length &&
          filter(options).map((option) => (
            <DropdownOption
              className={`${value === option ? "selected" : null}`}
              key={option[id]}
              onClick={() => {
                // on selecting we want the value to show not the query
                setQuery("");
                //   passing the value to the form component
                onChange(option);
                // automatically closing the dropdown
                setOpen(false);
              }}
            >
              {option[label]}
            </DropdownOption>
          ))}
      </DropdownOptions>
    </Dropdown>
  );
};

export default Index;
