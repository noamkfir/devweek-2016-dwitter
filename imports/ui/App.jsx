import React from 'react';
import DweetForm from './DweetForm';
import DweetList from './DweetList';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1>dwitter</h1>
                <main>
                    <DweetForm />
                    <DweetList />
                </main>
            </div>
        );
    }
}