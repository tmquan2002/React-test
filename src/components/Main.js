import React, { Component } from 'react'
import { PlayerList } from '../shared/ListOfPlayers'
import Players from './Players';
export class Main extends Component {
    constructor() {
        super();
        this.state = {
            players: PlayerList
        };
    }
    render() {
        return <Players players={this.state.players} />
    }
}
export default Main
