import React from 'react';
import reactMixin from 'react-mixin';
import { ReactMeteorData } from 'meteor/react-meteor-data';

export default class DweetList extends React.Component {
    getMeteorData() {
        return {
            dweets: [
                {
                    content: 'It\'s just a flesh wound!',
                    created: new Date()
                }
            ]
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