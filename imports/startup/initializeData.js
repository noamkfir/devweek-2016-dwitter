import { Meteor } from 'meteor/meteor';
import { Dweets } from '../api/model/Dweets';

Meteor.startup(() => {
    if(Dweets.find().count() === 0) {
        Dweets.insert({
            content: 'Nobody expects the Spanish Inquisition',
            created: new Date(),
            username: 'Ximinez'
        });
    }
});