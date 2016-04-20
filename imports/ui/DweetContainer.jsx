import React from 'react';
import reactMixin from 'react-mixin';
import { ReactMeteorData } from 'meteor/react-meteor-data';
import { Dweets } from '../api/model/Dweets';
import DweetForm from './DweetForm';
import DweetList from './DweetList';

export default class DweetContainer extends React.Component {
    getMeteorData() {
        const sort = {created: -1};
        return {
            dweets: Dweets.find({}, {sort}).fetch()
        };
    }
    
    addDweet(dweet) {
        dweet.creator = Meteor.userId();
        dweet.username = Meteor.user().username;
        Dweets.insert(dweet);
    }

    render() {
        return (
            <div>
                <DweetForm addDweet={this.addDweet} />
                <DweetList dweets={this.data.dweets} />
            </div>
        );
    }
}

reactMixin(DweetContainer.prototype, ReactMeteorData);