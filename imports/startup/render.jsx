import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';

Meteor.startup(() => {
    render(<div>Hello, DevWeek!</div>, document.getElementById('app'));
});