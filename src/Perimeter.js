import React from 'react';


function Perimeter(props) {

    function getPerimeter () {
        return parseInt(props.length) * parseInt(props.width)// вызов метода расчёта периметра
    }

    return (
        <div className='container'>
            <span>Периметр: </span>
            {getPerimeter()} м  {/* Вывод периметра */}
        </div>
    );
}

export default Perimeter;