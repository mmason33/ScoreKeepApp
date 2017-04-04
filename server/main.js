import {Players} from './../imports/api/players';
import {Meteor} from 'meteor/meteor';

Meteor.startup(function() {
  Players.insert({
    name: 'Ken',
    score: '17'
  });

  console.log(Players.find().fetch() );
});
