import React, {useState} from 'react';


function tagClassName(color) {
    const cns = [
        "mb-2",
        "px-2",
        "py-1",
        "text-xs",
        "mr-2",
        "rounded",
        "text-white",
        "no-underline",
        "hover:shadow",
    ]
    cns.push(color)
    return cns.join(" ")
}

export const Tags = (props) => {
    return (
        props.tags.map((tag, i) => {
            return <button className={tagClassName(tag.color)} key={i}>{tag.name}</button>
        })
    )
};
