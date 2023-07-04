import React, {useState} from "react";
import './style.scss';
import Chevron from '../../asset/icon1.svg';

export default function Dropdown({title, content}) {
    const [toggle, setToggle] = useState(false);

    return (
        <section className="dropdown">
            <div onClick={() => setToggle(!toggle)} className="dropdown__visible">
                <h2 className="dropdown__visible__title">{title}</h2>
                <img className={toggle ? 'icon rotate' : 'icon'} src={Chevron} alt="chevron"/>
            </div>
            <div className={toggle ? 'dropdown__toggle animated' : 'dropdown__toggle'}>
                {Array.isArray(content) ? (
                    <div>
                        {content.map((equipement, index) => (
                            <div className="dropdown__toggle__text" key={index}>{equipement}</div>
                        ))}
                    </div>
                ) : (
                    <p className="dropdown__toggle__text">{content}</p>
                )}
            </div>
        </section>
    )
}
