import React, { useState } from 'react';
import { Radio, Tag, Button } from 'antd';
import '../App.css'

function Introduction () {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <div>
        <Tag color="#ffb300">新着</Tag>
        <Tag color="#d2001e">人気</Tag>
      </div>
      <div className="introductionTitle">
        THE MONSTERS Big into Energy シリーズ ぬいぐるみペンダント
      </div>
      <div className='price'>JPY ¥2,750</div>
      <div className='deadline'>最遅出荷予定日 11 15, 2025 </div>
      <div className="introductionTitle">サイズ</div>
      <Radio.Group>
        <Radio.Button className="sizeButton">ピース</Radio.Button>
        <Radio.Button className="sizeButton">アソートボックス</Radio.Button>
      </Radio.Group>
      <div className='introductionNumber'>
        <span className="introductionTitle">数量&nbsp;</span>
        <span className='deadline'>一人あたり12(ピース)</span>
        <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
          <button onClick={handleDecrement} style={{ padding: '5px 10px', fontSize: '12px' }}>
            -
          </button>
          
          <span style={{ margin: '0 15px', fontSize: '14px', minWidth: '30px', textAlign: 'center' }}>
            {count}
          </span>
          
          <button onClick={handleIncrement} style={{ padding: '5px 10px', fontSize: '12px' }}>
            +
          </button>
        </div>
      </div>
      <Button color="default" variant="solid">
        再入荷を通知
      </Button>
    </div>
  )
}

export default Introduction
