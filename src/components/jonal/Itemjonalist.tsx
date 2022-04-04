import React from 'react'
import { JonalProps } from '../../interface/JonalProps'

export default function Itemjonalist(props: JonalProps) {
    const id = props.id
    const title = props.title
    const url_image = props.url_image

    return (
        <div>
            <div className="list-jonal-item" key={id}>
                <h3>{id}:{title}</h3>
                <img src={url_image} alt={title} />
            </div>
        </div>
    )
}



