import React from 'react';
import FlipMove from 'react-flip-move';

import Player from './Player'

export default class PlayerList extends React.Component{
    render(){
        if(this.props.players.length===0){
            return (
            <div className = "item">
                <p className='item__message .item__message--empty '>Add your first player to get started</p>
            </div>
            );
        }else{
            return (
                <FlipMove>
                    {this.props.players.map(player=>(<Player key={player._id}  player ={player}/>))}
                </FlipMove>

  
            )
        }

    }
}

