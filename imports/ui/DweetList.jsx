import React from 'react';
import moment from 'moment';

export default class DweetList extends React.Component {

    render() {
        return (
            <section>
                <h2>All Dweets</h2>
                <ul>
                    {
                        this.props.dweets.map((dweet, index) => {
                            const time = moment(dweet.created);
                            return (
                                <li key={index}>
                                    <div className="message">{dweet.content}</div>
                                    <time
                                        dateTime={dweet.created.toISOString()}
                                        title={time.format('llll')}
                                    >
                                        {time.fromNow()}
                                    </time>
                                </li>
                            );
                        })
                    }
                </ul>
            </section>
        );
    }
}