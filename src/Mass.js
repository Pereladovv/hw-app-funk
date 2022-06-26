import React from 'react';
import { useSelector } from 'react-redux' /* Хук "useSelector" Забирает данные из REDUX  */


function Mass(props) {
    const density = 1000;
    const stateVolume = useSelector((state) => state)

    function getMass () {
        console.log(stateVolume.volume)
        return parseInt(stateVolume.volume) * density // вызов метода расчёта массы (плотность воды = 1000 кг/м³)
    }

    return (
        <div className='container'>
            <span>Масса:</span>
            {getMass()} кг
        </div>
    );
}

export default Mass;