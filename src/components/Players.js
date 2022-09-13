import React, { Component } from 'react'
import { PlayerList } from '../shared/ListOfPlayers'
export default class Player extends Component {
    render() {
        return (
            <div className='container'>
                {PlayerList.map((player) => (
                    <div className='column'>
                        <div className='card'>
                            <img src={player.img} />
                            <h3>{player.name}</h3>
                            <p className='title'>{player.club}</p>
                            <p className='detail'><button>Detail</button></p>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}