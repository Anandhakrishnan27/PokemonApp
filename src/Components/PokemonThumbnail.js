import React, { useState } from "react";
import Description from "./Description";
import "./PokemonThumbnail.css";

function PokemonThumbnail({ id, name, image, type, height, weight, stat1, stat2, stat3, stat4, stat5, stat6, bs1, bs2, bs3, bs4, bs5, bs6 }) {
    const [showInfo, setShowInfo] = useState(false);

    return (
        <div className="thumb-container">
            <img src={image} alt={name} />
            <div className="detail-wrapper">
                <h3>{name}</h3>
                <small>Type: {type}</small>
                <button className="info-btn" onClick={() => setShowInfo(!showInfo)}>
                    {showInfo ? 'Hide Info' : 'Show Info'}
                </button>
            </div>
            {showInfo && (
                <Description
                    heightpok={height}
                    weightpok={weight}
                    pokstat1={stat1}
                    pokstat2={stat2}
                    pokstat3={stat3}
                    pokstat4={stat4}
                    pokstat5={stat5}
                    pokstat6={stat6}
                    posbs1={bs1}
                    posbs2={bs2}
                    posbs3={bs3}
                    posbs4={bs4}
                    posbs5={bs5}
                    posbs6={bs6}
                />
            )}
        </div>
    );
}

export default PokemonThumbnail;