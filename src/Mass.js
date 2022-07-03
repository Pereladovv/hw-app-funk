import React from 'react'
import { useSelector } from 'react-redux'


function Mass(props) {
    const density = 1000
    const selector = useSelector((state) => state.volume)

    function getMass () {
        return parseInt(selector) * density
    }

    return (
        <div className='container'>
            <span>Масса:</span>
            {getMass()} кг
        </div>
    );
}

export default Mass;