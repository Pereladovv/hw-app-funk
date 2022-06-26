import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

function Volume(props) {
    const [volume, setVolume] = useState(0)
    const dispatch = useDispatch()
    function getVolume() {
        let volume = parseInt(props.length) * parseInt(props.width) * parseInt(props.height);
/*         dispatch({ type: 'volume', volume: 100}) */
        return volume // вызов метода расчёта объёма
    }

    return (
        <div className='container'>
            <span>Объём: </span>
            {getVolume()} м³  {/* Вывод объема */}
        </div>
    );
}

export default Volume;