import React, { useState } from 'react';
import Volume from './Volume';
import Perimeter from './Perimeter';
import Mass from './Mass';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

function Parameters() {

    const [length, setLength] = useState(0)
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)
    const [density, setDensity] = useState(0) // Плотность


    const selectorMass = useSelector((state) => state.mass)
    const selectorMassAll = useSelector((state) => state.massAll)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({ type:'SET_LENGTH', payload: length })
    });
    useEffect(() => {
        dispatch({ type:'SET_WIDTH', payload: width })
    });
    useEffect(() => {
        dispatch({ type:'SET_HEIGHT', payload: height })
    });
    useEffect(() => {
        dispatch({ type:'SET_DENSITY', payload: density })
    });

    function сhangeLength (event) {
        setLength(event.target.value);
    }
    function сhangeWidth (event) {
        setWidth(event.target.value);
    }
    function сhangeHeight (event) {
        setHeight(event.target.value);
    }
    function сhangeDensity (event) {
        setDensity(event.target.value);
    }

  return (
    <div className='wrapper'>
        <p>Длина в м: {length}</p>
        <input type="number" defaultValue={length} onChange={сhangeLength} /> 
        <p>Ширина в м: {width}</p>
        <input type="number" defaultValue={width} onChange={сhangeWidth} />
        <p>Высота в м: {height}</p>
        <input type="number" defaultValue={height} onChange={сhangeHeight} />
        <Perimeter/>
        <Volume/>
        <Mass/>

        <p className="container">Масса воды из REDUX: {selectorMass} кг</p>
        <p>Плотность в кг/м³: {density}</p>
        <input type="number" defaultValue={density} onChange={сhangeDensity} />
        <p className="container">Масса из калькулятора: {selectorMassAll} кг</p>        
    </div>

  );
}


export default Parameters;