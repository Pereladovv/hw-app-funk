import React from 'react';
import Mass from './Mass';

function Volume(props) {


    function getVolume() {
        let volume = parseInt(props.length) * parseInt(props.width) * parseInt(props.height);
        /* Здесь перед return надо отправить данные в REDUX */
        return volume // вызов метода расчёта объёма
    }

    return (
        <div className='container'>
            <span>Объём: </span>
            {getVolume()} м  {/* Вывод периметра */}
            <Mass volume={getVolume()}/>
        </div>
    );
}

export default Volume;