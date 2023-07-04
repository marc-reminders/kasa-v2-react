import React, {useState} from "react";
import './style.scss'
import chevron from '../../asset/Vector.svg';

export default function Carousel({slides}) {

    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const previousSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    if (!Array.isArray(slides) || length <= 0) {
        return null
    }

    return (
        <div className="carousel">
            <div className="arrow__container">
                {length > 1 && (
                    <img
                        src={chevron}
                        className="left-arrow"
                        onClick={previousSlide}
                        alt="Previous Arrow"
                    />
                )}
                {length > 1 && (
                    <img
                        src={chevron}
                        className="right-arrow"
                        onClick={nextSlide}
                        alt="Next Arrow"
                    />
                )}

            </div>

            {slides.map((picture, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'}
                         key={index}
                    >
                        {index === current && (
                            <img
                                src={picture}
                                className="pictures"
                                alt="image"
                            />
                        )}
                        {index === current && length > 1 && (
                            <span className="number">
                                {current + 1}/{length}
              </span>
                        )}
                    </div>
                )
            })}
        </div>
    )

}



