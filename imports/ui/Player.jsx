import React from 'react';
import PropTypes from 'prop-types';
import {Players} from '../api/players'

export default class Player extends React.Component{

    render(){
        return (
            <p key={this.props.player._id}>{this.props.player.name} has {this.props.player.score} point
                <button onClick = {()=>Players.update({_id:this.props.player._id},{$inc:{score:-1}})}>-1</button>
                <button onClick = {()=>Players.update({_id:this.props.player._id},{$inc:{score:1}})}>+1</button>
                <button onClick = {()=>Players.remove({_id:this.props.player._id})}>X</button>
                </p>

            )
    }
};
Player.prototype = {
    player:PropTypes.object.isRequired
}


