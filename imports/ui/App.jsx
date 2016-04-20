import React from 'react';
import DweetContainer from './DweetContainer';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1>dwitter</h1>
                <main>
                    <DweetContainer />
                </main>
            </div>
        );
    }
}