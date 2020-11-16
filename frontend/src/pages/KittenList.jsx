import React from 'react';
import { Link } from 'react-router-dom';
import { getKittens } from '../api';

import "./kitten-list.scss";

export function KittenList({}) {
    const kittens = getKittens();

    return (
        <div>
            <h1>Kittens!</h1>
            <ul className="kitten-list">
                {kittens.map(({id, url, comment}) => <li className="kitten-list__item" key={id}>
                    <h3>{comment || "[No Commment]"}</h3>
                    <img src={url} style={{ maxWidth: "5rem" }} /><br />
                    <Link className="kitten-list__link" to={`/kittens/${id}`}>See it BIGGER! (maybe?)</Link>
                </li>)}
                {kittens.length === 0 && <h3>There are no kittens here. <Link to="/">Go get some!</Link></h3>}
            </ul>
        </div>
    )
}