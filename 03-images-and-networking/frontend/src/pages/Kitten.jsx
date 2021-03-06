import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { deleteKitten, getKitten } from '../api';

export function Kitten({}) {
    const params = useParams("/kittens/:id");
    const [kitten, setKitten] = React.useState({});

    React.useEffect(() => {
        getKitten(params.id).then(setKitten);
    }, []);

    function removeKitten() {
        deleteKitten(params.id).then(() => {
            window.location = "/kittens";
        });
    }

    return (
        <div>
            <h1>Kitten!</h1>
            <div>{kitten.comment}</div>
            <img src={kitten.url} />
            <br />
            <button className="selector-button selector-button--red" onClick={removeKitten}>I don't like this kitten any more :(</button>
        </div>
    )
}