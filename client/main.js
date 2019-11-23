import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker'

import {Players} from '../imports/api/players'
const renderPlayers = function(playersList){
    return playersList.map(player=>(
    <p key={player._id}>{
        player.name} has {player.score} point
        <button onClick = {()=>Players.update({_id:player._id},{$inc:{score:-1}})}>-1</button>
        <button onClick = {()=>Players.update({_id:player._id},{$inc:{score:1}})}>+1</button>
        <button onClick = {()=>Players.remove({_id:player._id})}>X</button>
        </p>
    ))
}
const handleSubmit = function(e){
    e.preventDefault();
    let playName = e.target.playName.value;
    if(playName){
        e.target.playName.value = '';
        Players.insert({
            name:playName,
            score: 0

        })
    }
};
Meteor.startup(function(){
    Tracker.autorun(function(){
        let players = Players.find().fetch();

        let title = 'Score Keep';
        let name = 'Alex';
        let jsx = (
            <div>
                <h1>{title}</h1>
                <p>{name}</p>
                {renderPlayers(players)}
                <form onSubmit = {handleSubmit}>
                    <input type="text" name="playName" placeholder = 'Player Name'/>
                    <button>Add Player</button>
                </form>
            </div>
        );
        ReactDOM.render(jsx,document.getElementById('app'))
    });
});
