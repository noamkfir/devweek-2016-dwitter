import React from 'react';

export default class DweetList extends React.Component {

    render() {
        return (
            <section>
                <h2>All Dweets</h2>
                <ul>
                    {
                        this.props.dweets.map((dweet, index) => {
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