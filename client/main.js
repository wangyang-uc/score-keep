import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor'
import {Tracker} from 'meteor/tracker'

import {Players,calcultePlayerPosition} from '../imports/api/players'
import App from '../imports/ui/App'

Meteor.startup(function(){
    Tracker.autorun(function(){
        let players = Players.find({},{sort:{score:-1}}).fetch();
        let positionedPlayers = calcultePlayerPosition(players)
        let title ='Score Keep'
        ReactDOM.render(<App players={positionedPlayers} title={title}/>,document.getElementById('app'))
    });
});
