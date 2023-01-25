import React, { useContext, useEffect, useState } from "react";

import "./SelectType.css";

import { Context } from "../../../context";

const SelectType = ({ title = "tipni tanlang", options }) => {
  const { setSelectValue } = useContext(Context);
  const [value, setValue] = useState();
  console.log(options)

  function handleChange(e) {
    setValue(e.target.value);
  }

  useEffect(() => {
    setSelectValue(value);
  }, [value]);
  return (
    <div className="select-type">
      <span>{title}</span>
      <select onChange={handleChange}>
        <option value="" hidden>
          tanlang
        </option>
        {options?.length > 0 ? (
          options.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)
        ) : (
          <option>Yuklanmoqda ...</option>
        )}
      </select>
    </div>
  );
}


export default SelectType;


