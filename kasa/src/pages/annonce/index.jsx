import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from 'react-router-dom';
import './style.scss'
import Rating from "../../components/rating";
import Tag from "../../components/tag";
import Dropdown from "../../components/dropdown";
import Carousel from "../../components/carousel";

export default function Annonce() {

    const {id} = useParams();
    const [annonce, setAnnonce] = useState();
    const navigate = useNavigate();
    useEffect(() => {
        fetch('/data.json')
            .then(function (response) {
                return response.json();
            })
            .then((data) => {
                    let annonce = data.find((annonce) => annonce.id === id);
                    if (!annonce) {
                        navigate('/error');
                    }
                    setAnnonce(annonce)
                    console.log(id)
                    console.log(annonce)
                }
            )
        ;
    }, [])


    return (
        <>
            {annonce &&
                <div className="container">
                    <section className="annonce">
                        <div className="annonce__carousel">
                            <Carousel slides={annonce.pictures}/>
                        </div>
                        <div className="annonce__content">
                            <div className="annonce__content__title-tags">
                                <div className="annonce__title">
                                    <h1>{annonce.title}</h1>
                                    <p>{annonce.location}</p>
                                </div>

                                <div className="annonce__tags">
                                    {annonce.tags.map((tag) => (
                                        <Tag name={tag}/>
                                    ))}
                                </div>
                            </div>

                            <div className="annonce__content__rating-host">
                                <div className="annonce__rating">
                                    <Rating rating={annonce.rating}/>
                                </div>

                                <div className="annonce__host">

                                    <h2>{annonce.host.name}</h2>

                                    <img src={annonce.host.picture} alt="picture"/>
                                </div>
                            </div>
                        </div>



                        <div className="annonce__dropdowns">
                            <Dropdown
                                title="Description"
                                content={annonce.description}
                            />
                            <Dropdown
                                title="Équipements"
                                content={annonce.equipments}
                            >
                            </Dropdown>

                        </div>
                    </section>
                </div>
            }
        </>
    )
}
