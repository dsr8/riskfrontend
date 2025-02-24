import React from "react";

const Slider = ({
  min = 0,
  max = 100,
  value=0,
  defaultValue,
  onValueChange,
  ...rest
}) => {
  return (
    <div>
      <input
        type="range"
        min={min}
        max={max}
        defaultValue={defaultValue}
        onChange={({ target: { value } }) => onValueChange(value)}
        {...rest}
      />
      {/* <p>Value: {defaultValue}</p> */}
    </div>
  );
};

export default Slider;