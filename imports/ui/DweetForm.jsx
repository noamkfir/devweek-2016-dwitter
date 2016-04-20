import React from 'react';

export default class DweetForm extends React.Component {
    render() {
        return (
            <section>
                <h2>New Dweet</h2>
                <form>
                    <div className="field">
                        <label htmlFor="contentField">Say something completely different!</label>
                        <input id="contentField" />
                    </div>
                    <div className="commands">
                        <button type="submit">Dweet it!</button>
                    </div>
                </form>
            </section>
        );
    }
}