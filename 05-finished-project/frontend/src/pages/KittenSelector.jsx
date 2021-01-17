import React from 'react';
import { storeKitten } from '../api';

import "./kitten-selector";

const MIN_SIZE = 200;
const MAX_SIZE = 1000;

function getRandomSize() {
    const size = Math.ceil((Math.random() * MAX_SIZE - MIN_SIZE)) + MIN_SIZE;
    return size;
}

const initialWidth = getRandomSize("iw");
const initialHeight = getRandomSize("ih");

function getKittenUrl(width, height) {
    return `http://placekitten.com/${width}/${height}`;
}


export function KittenSelector({ }) {
    const [width, setWidth] = React.useState(initialWidth);
    const [height, setHeight] = React.useState(initialHeight);
    const [comment, setComment] = React.useState("");
    const [kittenUrl, setKittenUrl] = React.useState("");

    React.useEffect(() => {
        const kittenUrl = getKittenUrl(width, height);
        setKittenUrl(kittenUrl);
    }, [width, height])

    function onNo(e) {
        e.preventDefault();
        setWidth(getRandomSize());
        setHeight(getRandomSize());
        setComment("");
    }

    function onYes(e) {
        e.preventDefault();
        const payload = {
            url: kittenUrl,
            comment: comment
        }

        storeKitten(payload);
        setWidth(getRandomSize());
        setHeight(getRandomSize());
        setComment("");
    }

    return (
        <div className="selector">
            <h1>Do you like this kitten?</h1>
            <img src={kittenUrl} />
            <br />
            <form onSubmit={onYes}>
                <input type="hidden" value={kittenUrl} name="url" /><br />
                <label><span style={{ display: "none" }}>Comment</span>
                    <input type="text" name="comment" placeholder="Comment" value={comment} onChange={(e) => setComment(e.target.value)} />
                </label>
                <br />
                <input className="selector-button selector-button--green" type="submit" value="Yes! <3" />
                <button className="selector-button selector-button--red" onClick={onNo}>No, yuck :(</button>
            </form>
        </div>
    )
}