import React from 'react'
import { PlayerList } from '../shared/ListOfPlayers'
import { useState, useContext } from 'react'
import { ThemeContext } from './ThemeContext'
export default function Players() {
    const [player, setPlayer] = useState([])
    const [popup, setPopup] = useState(false);
    const { theme } = useContext(ThemeContext)
    var element = document.getElementById("popup1");
    console.log(element);
    if (popup) {
        if (element !== null)
            element.className = "overlay";
    } else {
        if (element !== null)
            element.className = "hide-pop-up";
    }

    return (
        <div>
            <div className='container' id={theme.containerID}>
                {PlayerList.map((player) => (
                    <div className='column' key={player.id}>
                        <div className='card'>
                            <img src={player.img} alt='' />
                            <h3>{player.name}</h3>
                            <p className='title'></p>
                            <button className='detail' onClick={() => { setPlayer(player); setPopup(!popup); }}>
                                <a href='#popup1' id='openPopUp'>Detail</a>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div id='popup1'>
                <div className='popup'>
                    <img src={player.img} alt="A popup" />
                    <h2>{player.name}</h2>
                    <a className='close' href='#close' onClick={() => { setPopup(!popup); }}>x</a>
                    <div className='content'>
                        {player.info}
                    </div>
                </div>
            </div>
        </div>
    )
}