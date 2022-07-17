import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

function Volume() {
    const dispatch = useDispatch()
    const length = useSelector((state) => state.length)
    const width = useSelector((state) => state.width)
    const height = useSelector((state) => state.height)

    useEffect(() => {
        dispatch({ type:'SET_VOLUME', payload: getVolume() })
    });

    function getVolume() {
        return parseInt(length) * parseInt(width) * parseInt(height)
    }

    return (
        <div className='container'>
            <span>Объём: </span>
            {getVolume()} м³  
        </div>
    );
}

export default Volume;