import React, { useState } from 'react';
import { Image } from 'antd';
import '../App.css'

function ImageGallery () {
  const pictures = [{
    src: "src/assets/20250422_091913_284240____6_____1200x1200.jpg"
  }, {
    src: "src/assets/20250422_091913_427360____3_____1200x1200.jpg"
  }, {
    src: "src/assets/20250422_091913_429614____7_____1200x1200.jpg"
  }, {
    src: "src/assets/20250422_091913_592227____4_____1200x1200.jpg"
  }, {
    src: "src/assets/20250422_091913_967169____5_____1200x1200.jpg"
  }]
  const [index, setIndex] = useState(0)
  const handleClick = (i) => {
    setIndex(i)
  }
  return (
    <div className='imageGalleryWrapper'>
      <div className='shortCutWrapper'>
        {pictures.map((item, index) => (
          <img
            className='shortcut'
            preview={false}
            src={item.src}
            onClick={() => handleClick(index)}
            key={index}
          />
        ))}
      </div>
        <Image
          width={300}
          height={300}
          src={pictures[index].src}
        />
    </div>
  )
}

export default ImageGallery






