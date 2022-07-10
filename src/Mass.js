import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'


function Mass(props) {
    const density = 1000
    const selector = useSelector((state) => state.volume)
/* _________________________________________________________________________ */
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({ type:'SET_MASS', payload: getMass() })
    });
/* _________________________________________________________________________ */
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