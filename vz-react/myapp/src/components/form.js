import React, { Component } from 'react';

export class Form extends Component {

    constructor() {
        super();
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChangeText = this.onChangeText.bind(this);
        this.onCheckChanged = this.onCheckChanged.bind(this);
        this.state = {
            textVal: '',
            checkboxVal: false
        }

    }

    onFormSubmit(ev) {
        const formVal = {
            text: this.state.textVal,
            check: this.state.checkboxVal
        }
        console.log(formVal)
        ev.preventDefault();
    }

    onCheckChanged(ev) {
        this.setState({ checkboxVal: ev.target.checked })
    }

    onChangeText(ev) {
        this.setState({ textVal: ev.target.value })
    }

    render() {
        return (
            <form>
                <input type="input" value={this.state.textVal} onChange={this.onChangeText} />
                <input type="checkbox" checked={this.state.checkboxVal} onChange={this.onCheckChanged} />
                <button type="submit" checked={this.onFormSubmit} onClick={this.onFormSubmit}>Submit</button>
            </form>
        );
    }
}
