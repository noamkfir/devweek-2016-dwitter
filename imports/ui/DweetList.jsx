import React from 'react';
import reactMixin from 'react-mixin';
import { ReactMeteorData } from 'meteor/react-meteor-data';
import { Dweets } from '../api/model/Dweets';

export default class DweetList extends React.Component {
    getMeteorData() {
        const sort = {created: -1};
        return {
            dweets: Dweets.find({}, {sort}).fetch()
        };
    }

    render() {
        return (
            <section>
                <h2>All Dweets</h2>
                <ul>
                    {
                        this.data.dweets.map((dweet, index) => {
                            return (
                                <li key={index}>
                                    <div className="message">{dweet.content}</div>
                                    <time
                                        dateTime={dweet.created.toISOString()}>{dweet.created.toLocaleString('en-GB')}</time>
                                </li>
                            );
                        })
                    }
                </ul>
            </section>
        );
    }
}

reactMixin(DweetList.prototype, ReactMeteorData);