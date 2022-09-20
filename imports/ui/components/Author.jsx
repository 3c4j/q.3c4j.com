import React, {useState} from 'react';

export const Author = (props) => {
    return (
        <a className="font-bold" href={props.author.home} target="_blank">{props.author.name}</a>
    )
};
