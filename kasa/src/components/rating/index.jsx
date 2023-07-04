import React from "react";
import './style.scss'
import greyStar from '../../asset/star-active.svg'
import redStar from '../../asset/star-red.svg'


export default function Rating({rating}) {

    const stars = [1, 2, 3, 4, 5];

    return (
        <div className="star__content">
            {stars.map((star) =>
                rating >= star ? (
                    <img
                        key={star}
                        className="stars"
                        src={redStar}
                        alt=""
                    />
                ) : (
                    <img
                        key={star}
                        className="stars"
                        src={greyStar}
                        alt=""
                    />
                )
            )}

        </div>
    )
}
