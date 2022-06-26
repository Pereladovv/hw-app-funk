import React, { useState } from 'react';
import Volume from './Volume';
import Perimeter from './Perimeter';


function Parameters() {
  // Объявление переменной состояния
/*  const [state, setState] = useState({ left: 0, top: 0, width: 100, height: 100 }); */
    const [length, setLength] = useState(120)
    const [width, setWidth] = useState(120)
    const [height, setHeight] = useState(120)
    
    function сhangeLength (event) {
      setLength(event.target.value);
    }
    function сhangeWidth (event) {
      setWidth(event.target.value);
    }
    function сhangeHeight (event) {
      setHeight(event.target.value);
    }

  return (
    <div className='Parameters'>
        <p>Длина в м: {length}</p>
        <input type="number" defaultValue={length} onChange={сhangeLength} /> 
        <p>Ширина в м: {width}</p>
        <input type="number" defaultValue={width} onChange={сhangeWidth} />
        <p>Высота в м: {height}</p>
        <input type="number" defaultValue={height} onChange={сhangeHeight} />
        
        <Perimeter length={length} width={width} /> {/* Передаём пропсами значения длины и ширины в Perimeter.js */}
        <Volume length={length} width={width} height={height}/> {/* Передаём пропсами значения длины, ширины b высоты в Volume.js */}

    </div>

  );
}


export default Parameters;