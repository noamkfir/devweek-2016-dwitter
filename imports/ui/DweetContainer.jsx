import React from 'react';
import DweetForm from './DweetForm';
import DweetList from './DweetList';

export default class DweetContainer extends React.Component {
    render() {
        return (
            <div>
                <DweetForm />
                <DweetList />
            </div>
        );
    }
}