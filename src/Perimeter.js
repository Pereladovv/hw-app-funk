import React from 'react';
import { useSelector } from 'react-redux'

function Perimeter() {
    const length = useSelector((state) => state.length)
    const width = useSelector((state) => state.width)
    
    function getPerimeter () {
        return parseInt(length) * parseInt(width)// вызов метода расчёта периметра
    }

    return (
        <div className='container'>
            <span>Периметр: </span>
            {getPerimeter()} м  {/* Вывод периметра */}
        </div>
    );
}

export default Perimeter;