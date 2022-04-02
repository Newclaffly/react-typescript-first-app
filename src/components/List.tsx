import React, { FC } from 'react'
import { SeriesProps } from '../interface/SeriesProps'


const List: FC<SeriesProps> = ({ seriesList }) => (
    <div className="series-list">
        {seriesList.map((series, idx) =>
            <div className="series-item">
                <div key={idx} className="series-item">
                    <img src={series.cover} alt="Series-cover" />
                    <p>{series.name}</p>
                    <p>{series.genre}</p>
                    <p>{series.seasons}</p>
                    <p>{series.imdb}</p>
                </div>
            </div>
        )}
    </div>
)

export default List