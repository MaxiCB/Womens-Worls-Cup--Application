import React from 'react';
// Router
import { Link } from 'react-router-dom';
// Reactstrap
import { Table } from 'reactstrap';

const PlayerList = (props) => {

    return (
        <div>
            <Link to={'/graph'}>Graph</Link>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    {props.players.map((item) => {
                        return <tr><th>{item.id}</th><td>{item.name}</td><td>{item.country}</td></tr>
                    })}
                </tbody>
            </Table>
        </div>
    )
}

export default PlayerList