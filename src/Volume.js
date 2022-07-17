import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'


function Volume(props) {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({ type:'SET_VOLUME', payload: getVolume() })
    });

    function getVolume() {
        return parseInt(props.length) * parseInt(props.width) * parseInt(props.height)
    }

    return (
        <div className='container'>
            <span>Объём: </span>
            {getVolume()} м³  
        </div>
    );
}

export default Volume;