import React from 'react';

export default class DweetForm extends React.Component {
    constructor() {
        super();
        this.state = {content: ''};
    }

    handleContentChange(e) {
        const content = e.target.value;
        this.setState({content});
    }

    handleSubmit(e) {
        e.preventDefault();

        const created = new Date();
        const {content} = this.state;
        const dweet = {content, created};
        this.props.addDweet(dweet);

        this.setState({content: ''});
    }

    render() {
        return (
            <section>
                <h2>New Dweet</h2>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="field">
                        <label htmlFor="contentField">Say something completely different!</label>
                        <input
                            id="contentField"
                            value={this.state.content}
                            onChange={this.handleContentChange.bind(this)}
                        />
                    </div>
                    <div className="commands">
                        <button type="submit">Dweet it!</button>
                    </div>
                </form>
            </section>
        );
    }
}