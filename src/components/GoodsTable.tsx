import React from "react";
import { TTableProps } from "../interfaces/types";
import "./components.css";

const Table: React.FunctionComponent<TTableProps> = ({ goods }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Артикул</th>
          <th>Наименование</th>
          <th style={{ width: 100 }}>Бренд</th>
          <th style={{ width: 70 }}>Вес</th>
          <th>Фасовка</th>
          <th style={{ width: 70 }}>Цена</th>
          <th>В наличии</th>
        </tr>
      </thead>
      <tbody>
        {goods.map((good) => (
          <tr key={good.artnumber}>
            <td>{good.artnumber}</td>
            <td>{good.name}</td>
            <td>{good.brand}</td>
            <td>{good.weight}</td>
            <td>{good.quantity}</td>
            <td>{good.price}</td>
            <td>
              <input readOnly={true} type='checkbox' id={good.artnumber} checked={Boolean(good.stock)} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { Table };
