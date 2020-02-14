import React from 'react';
// React Router
import { Link } from 'react-router-dom';
// React Vis
import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    VerticalBarSeries,
    LabelSeries
} from 'react-vis'

const PlayerGraph = (props) => {

    const playerData = props.players == null || undefined ? [] : props.players

    const labelData = playerData.map((player) => ({
        x: player.name,
        y: player.searches
    }))

    const barData = playerData.map((player) => ({
        x: player.name,
        y: player.searches
    }))

    const BarSeries = VerticalBarSeries;

    return (
        <div>
            <Link to={'/'}>Home</Link>
            <XYPlot xType='ordinal' width={1500} height={1200} xDistance={1200}>
                <VerticalGridLines/>
                <HorizontalGridLines/>
                <XAxis/>
                <YAxis/>
                <BarSeries data={barData}/>
                <LabelSeries data={labelData} getLabel={d => d.name}/>
            </XYPlot>
        </div>
    )
}

export default PlayerGraph