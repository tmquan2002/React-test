import React, { Component } from 'react'
import { FilmList } from '../shared/ListOfFilms'
import Films from './Films';
export class Main extends Component {
    constructor() {
        super();
        this.state = {
            players: FilmList
        };
    }
    render() {
        return <Films films={this.state.films} />
    }
}
export default Main
