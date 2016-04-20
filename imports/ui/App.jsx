import React from 'react';
import DweetContainer from './DweetContainer';
import { LogInButtons } from 'meteor/alt:react-accounts-ui';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1>dwitter</h1>
                <LogInButtonsDialog />
                <main>
                    <DweetContainer />
                </main>
            </div>
        );
    }
}