import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

function Mass(props) {
    const densityOfWater = 1000
    const volume = useSelector((state) => state.volume)
    const density = useSelector((state) => state.density)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({ type:'SET_MASS', payload: getMassOfWater() })
    });
    useEffect(() => {
        dispatch({ type:'SET_MASS_ALL', payload: getMassAll() })
    });

    function getMassOfWater () {
        return parseInt(volume) * densityOfWater
    }
    function getMassAll () {
        return parseInt(volume) * density
    }

    return (
        <div className='container'>
            <span>Масса:</span>
            {getMassOfWater()} кг

        </div>
    );
}

export default Mass;