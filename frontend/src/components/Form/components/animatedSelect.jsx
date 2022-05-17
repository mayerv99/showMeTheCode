import React from "react";

import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

export default function AnimatedSelect({ options, placeholder, onChange }) {
  return (
    <Select
      closeMenuOnSelect={true}
      components={animatedComponents}
      options={options}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
