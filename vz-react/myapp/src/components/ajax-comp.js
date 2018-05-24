import React, { Component } from 'react';
import axios from "axios";

export class AjaxComp extends Component {

    constructor() {
        super();
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChangeText = this.onChangeText.bind(this);
        this.state = {
            url: '',
        }

    }
    onChangeText(ev) {
        this.setState({ url: ev.target.value })
    }
    onFormSubmit(ev) {
        axios.get(this.state.url).then((resp) => {
            console.log(resp.data);
        }).catch((err) => {
            console.log(err);
        });
        ev.preventDefault();
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.url} onChange={this.onChangeText} />
                <button onClick={this.onFormSubmit}>Submit</button>
            </div>
        );
    }
}
