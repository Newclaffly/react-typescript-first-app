import React, { FC } from 'react'
import { SeriesProps } from '../interface/SeriesProps'

const List: FC<SeriesProps> = ({ seriesList }) => {
    return (
        <div className="series-list">
            {seriesList.map((series, idx) => {
                <div key={idx} className="series-item">
                    <img src={series.cover} alt="Series-cover" />
                    <p><b>{series.name}</b></p>
                    <p><b>{series.genre}</b></p>
                    <p><b>{series.seasons}</b></p>
                    <p><b>{series.imdb}</b></p>
                </div>
            })}
        </div>
    )

}

export default List