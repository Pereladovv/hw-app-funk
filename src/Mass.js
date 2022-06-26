import React from 'react';



function Mass(props) {
    const density = 1000;
    function getMass () {
        return parseInt(props.volume) * density // вызов метода расчёта массы (плотность воды = 1000 кг/м³)
    }

    return (
        <div className='container'>
            <span>Масса:</span>
            {getMass()} кг/м³
        </div>
    );
}

export default Mass;