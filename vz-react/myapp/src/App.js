import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { External } from './components/external';
import { Internal } from './components/internal';
import { Inline } from './components/inline';
import { ColorsList } from './components/colors';
import { ColorsListWithKey } from './components/colorsListwithId';
import { Form } from './components/form';
import { RouteItems } from './components/route';

export class App extends Component {

  constructor() {
    super();
    this.onChangeColor = this.onChangeColor.bind(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.onChangeColorFromChild = this.onChangeColorFromChild.bind(this);
    this.state = {
      counter: 0,
      colorList: [{ name: "Red", color: "red" },
      { name: "Green", color: "green" },
      { name: "Blue", color: "blue" }]
    };
  }
  colorFlag = true;

  colorList1 = [{ name: "Red", color: "red" },
  { name: "Green", color: "green" },
  { name: "Blue", color: "blue" }];

  colorList2 = [{ name: "Pink", color: "pink" },
  { name: "Orange", color: "orange" },
  { name: "Tomato", color: "tomato" }];

  colorList = this.colorList1;

  onChangeColor() {
    this.colorFlag = !this.colorFlag;
    this.colorList = this.colorFlag ? this.colorList1 : this.colorList2;
    this.setState({ colorList: this.colorFlag ? this.colorList1 : this.colorList2 });
    // this.setState((prevState) => ({ colorList: this.colorFlag ? this.colorList1 : this.colorList2 }));
  }

  increment() {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  }

  decrement() {
    this.setState((prevState) => ({ counter: prevState.counter - 1 }));
  }

  onChangeColorFromChild(colors) {
    console.log(colors)
    // this.setState((prevState) => ({ colorList: colors }));
    this.setState({ colorList: colors });
  }
  render() {

    return (
      <div className="App">
        <External />
        <Internal />
        <Inline />
        <button onClick={this.onChangeColor}>change color</button>
        <button onClick={this.increment}>increment</button>
        <button onClick={this.decrement}>decrement</button>
        <div>{this.state.counter}</div><br />
        <ColorsList colors={this.state.colorList} onChangeColorFromChild={this.onChangeColorFromChild} />
        <ColorsListWithKey colors={this.state.colorList} onChangeColorFromChild={this.onChangeColorFromChild} />
        <br />
        <Form />
        <br />
        <RouteItems />
      </div>
    );
  }
}

// export default App;
