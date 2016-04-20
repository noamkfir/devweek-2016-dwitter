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
            dweets: Dweets.find({}, {sort}).fetch(),
            user: Meteor.user()
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
                {
                    this.data.user
                        ? <DweetForm addDweet={this.addDweet} />
                        : <div>Sign in to dweet!</div>
                }
                <DweetList dweets={this.data.dweets} />
            </div>
        );
    }
}

reactMixin(DweetContainer.prototype, ReactMeteorData);