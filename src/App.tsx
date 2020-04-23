import React, { useState, useEffect } from "react";
import "./App.scss";
import { Table } from "./components/GoodsTable";
import { Select } from "./components/BrandSelect";
import { Pagination } from "./components/Pagination";
import { TGood } from "./interfaces/types";
import { goods as data } from "./serviceData/goods";

const App: React.FunctionComponent = () => {
  const [goods, setGoods] = useState<TGood[]>([]);
  const [options, setOptions] = useState<string[]>([]);
  const [activeBrand, setActiveBrand] = useState<string>(`-1`);
  const [startIndex, setStartIndex] = useState<number>(0);

  useEffect(() => {
    setGoods(data);
    const options = Array.from(new Set(data.map((good) => good.brand)));
    setOptions(options);
  }, []);

  return (
    <div className='app'>
      <div className='caption'>Cool Store</div>
      <div style={{ display: `flex` }}>
        <Table
          goods={goods
            .filter((good) => activeBrand === `-1` || good.brand === activeBrand)
            .slice(startIndex, startIndex + 4)}
        />
        <div className='filter-handler'>
          <Select options={options} active={activeBrand} setActive={(value) => setActiveBrand(value)} />
          <button onClick={() => setActiveBrand(`-1`)}>Сбросить фильтры</button>
        </div>
      </div>
      <Pagination
        startIndex={startIndex}
        setStartIndex={(index: number) => setStartIndex(index)}
        count={goods.filter((good) => activeBrand === `-1` || good.brand === activeBrand).length}
      />
    </div>
  );
};

export default App;
