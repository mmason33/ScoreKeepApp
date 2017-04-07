import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Players, calculatePlayerPostions} from './../imports/api/players';
import App from './../imports/ui/App';

Meteor.startup(() => {
  Tracker.autorun(() => {
    let players = Players.find({}, {sort: {score: -1}}).fetch();
    let postionedPlayers = calculatePlayerPostions(players);
    let title = 'Score Keep';
    let subTitle = 'Created by Michael Mason';
    ReactDOM.render(<App title={title} players={postionedPlayers}/>, document.getElementById('app'));
  });
});
