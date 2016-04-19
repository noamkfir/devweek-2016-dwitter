import React from 'react';
import DweetList from './DweetList';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1>dwitter</h1>
                <main>
                    <section>
                        <h2>New Dweet</h2>
                    </section>
                    <DweetList />
                </main>
            </div>
        );
    }
}