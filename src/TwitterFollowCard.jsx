import { useState } from "react"; //Es un hook

export function TwitterFollowCard ({userName, name, initialIsFollowing}){
    const avatar = `https://unavatar.io/${userName}`;

    /*
    VERSIÓN LARGA
    
    const state = useState(false); //Devuelve un array de dos posiciones
    //En la primera posición tenemos el valor del estado
    const isFollowing = state[0];
    //En la segunda posición tenemos una función que nos va a permitir actualizar el estado para la nueva versión
    const setIsFollowing = state[1];*/

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing); //es lo mismo que las 3 líneas de arriba

    const text = isFollowing ? "Siguiendo" : "Seguir";
    const buttonClassName = isFollowing ? "tw-followCard-button is-following" : "tw-followCard-button";

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return(
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img className="tw-followCard-avatar" src={avatar} alt="Imagen de Perfil" />
                <div className="tw-followCard-info">
                    <strong>{name}</strong>
                    <span className="tw-followCard-infoUserName">@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}