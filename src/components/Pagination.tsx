import React, { useState, useEffect } from "react";
import { TPaginationProps } from "../interfaces/types";

const Pagination: React.FunctionComponent<TPaginationProps> = ({ count, setStartIndex, startIndex }) => {
  const [page, setPage] = useState<number>(0);

  const numbers = new Array(Math.ceil(count / 4)).fill(null).map((el, i) => i + 1);

  const handlerOnClickNext = () => {
    setPage(page + 1);
    setStartIndex(startIndex + 4);
  };
  const handlerOnClickPrevious = () => {
    setPage(page - 1);
    setStartIndex(startIndex - 4);
  };
  const handlerOnClickPage = (pageNumber: number) => {
    setPage(pageNumber);
    setStartIndex(pageNumber * 4);
  };

  useEffect(() => {
    if (startIndex > count) {
      const page = Math.ceil(count / 4) - 1;
      setPage(page);
      setStartIndex(page * 4);
    }
  }, [count]);

  return (
    <div className='pagination'>
      <div className={`button ${page === 0 && `inactive`}`} onClick={handlerOnClickPrevious}>
        Предыдущая
      </div>
      {numbers.map((number, i) => (
        <div key={number} className={`button ${number === page + 1 && `active`}`} onClick={() => handlerOnClickPage(i)}>
          {number}
        </div>
      ))}
      <div className={`button ${page === numbers.length - 1 && `inactive`}`} onClick={handlerOnClickNext}>
        Следующая
      </div>
    </div>
  );
};

export { Pagination };
