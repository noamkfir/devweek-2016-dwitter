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

    render() {
        return (
            <div>
                <DweetForm />
                <DweetList dweets={this.data.dweets} />
            </div>
        );
    }
}

reactMixin(DweetContainer.prototype, ReactMeteorData);