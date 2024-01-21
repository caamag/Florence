
import './slider.css';

import { useState } from 'react';

function Carousel () {

    const [slide, setSlide] = useState(1); 
    const slideClass = `slide slide${slide}`;  

    return <div className='slider'>

        <div className='slider-content'>
            <div className='slides'>
                <div className={slideClass}>
                    <p><span>"...</span>
                    texto de depoimento
                    <span>"</span></p>
                </div>

                <div className='slide'>
                    <p><span>"...</span>
                    texto de depoimento
                    <span>"</span></p>
                </div>

                <div className='slide'>
                    <p><span>"...</span>
                    ...texto de depoimento
                    <span>"</span></p>
                </div>

                <div className='slide'>
                    <p><span>"...</span>
                    ...texto de depoimento
                    <span>"</span></p>
                </div>
            </div>
        </div>

        <div className='change-slide'>
            <button onClick={() => {setSlide(1)}}></button>
            <button onClick={() => {setSlide(2)}}></button>
            <button onClick={() => {setSlide(3)}}></button>
            <button onClick={() => {setSlide(4)}}></button>
        </div>

    </div>

}; 

export default Carousel; 