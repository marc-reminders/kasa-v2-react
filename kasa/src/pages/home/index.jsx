import React, {useEffect, useState} from "react";
import BannerHome from "../../components/bannerHome";
import Thumb from "../../components/thumb";
import './style.scss';


export default function Home() {

    const [annonces, setAnnonces] = useState();

    useEffect(() => {
        fetch('/data.json')
            .then(function (response) {
                return response.json();
            })
            .then((data) => {
                    setAnnonces(data);
                }
            )
        ;
    }, [])

    return (
        <div className="main__content">
            <BannerHome/>
            {annonces && (
                <div className="container">
                    {annonces.map((annonce) => (
                        <Thumb key={annonce.id}
                               link={`/annonce/${annonce.id}`}
                               title={annonce.title}
                               cover={annonce.cover}>
                        </Thumb>
                    ))}
                </div>
            )}
        </div>

    )
}
