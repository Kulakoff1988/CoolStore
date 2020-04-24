import React, { Fragment } from "react";
import "./components.css";
import { TSelectProps } from "../interfaces/types";

const Select: React.FunctionComponent<TSelectProps> = ({ options, setActive, active }) => {
  const handlerOnChange = (e: React.FormEvent<HTMLSelectElement>) => setActive(e.currentTarget.value);

  return (
    <select name='brand' id='brand' onChange={handlerOnChange} value={active}>
      <option value={`-1`}>Все</option>
      {options.map((option) => (
        <Fragment key={option}>
          <option value={option}>{option}</option>
        </Fragment>
      ))}
    </select>
  );
};

export { Select };
