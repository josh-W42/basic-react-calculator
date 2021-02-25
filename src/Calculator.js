import CalcButton from './CalcButton'
import InputGroup from 'react-bootstrap/InputGroup';
import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: null,
      value2: null,
      operation: null,
      input: 0
    }
  }

  setValue = (x) => {
    if (this.state.operation) {
      let value2 = null;
      if (this.state.value2) {
        value2 = this.state.value2 + x;
      } else {
        value2 = x;
      }
      this.setState({value2, input: value2});
    } else {
      let value1 = null;
      if (this.state.value1) {
        value1 = this.state.value1 + x;
      } else {
        value1 = x;
      }
      this.setState({value1, input: value1});
    }
  };

  calculate = value => {
    let input = null;
    switch (this.state.operation) {
      case "+":
        input = Number(this.state.value1) + Number(this.state.value2);
        break;
      case "-":
        input = Number(this.state.value1) - Number(this.state.value2);
        break;
      case "*":
        input = Number(this.state.value1) * Number(this.state.value2);
        break;
      case "/":
        input = Number(this.state.value1) / Number(this.state.value2);
        break;
      default:
        input = this.state.value2 || this.stste.value1 || 0;
        return;
    }
    this.setState({ input });
  }

  resetCalculator = () => {
    this.setState({
      value1: null,
      value2: null,
      operation: null,
      input: 0
    });
  }
  render() {
    return (
      <div className="container col-10 mt-5">
        <div className="col-4 m-2 row justify-content-between">
          <InputGroup.Text className="col-8 m-2">{this.state.input}</InputGroup.Text>
          <CalcButton className="col" value="AC" operation={this.resetCalculator} color="secondary" />
        </div>
        <div className="row m-2">
          <div className="col-4">
            <div className="row m-2 justify-content-between">
              <CalcButton className="m-2" value="1" operation={this.setValue} color="secondary" />
              <CalcButton className="m-2" value="2" operation={this.setValue} color="secondary" />
              <CalcButton className="m-2" value="3" operation={this.setValue} color="secondary" />
              <CalcButton className="m-2" value="+" operation={(operation) => this.setState({operation})} color="secondary" />
            </div>
            <div className="row m-2 justify-content-between">
              <CalcButton className="m-2" value="4" operation={this.setValue} color="secondary" />
              <CalcButton className="m-2" value="5" operation={this.setValue} color="secondary" />
              <CalcButton className="m-2" value="6" operation={this.setValue} color="secondary" />
              <CalcButton className="m-2" value="-" operation={(operation) => this.setState({operation})} color="secondary" />
            </div>
            <div className="row m-2 justify-content-between">
              <CalcButton className="m-2" value="7" operation={this.setValue} color="secondary" />
              <CalcButton className="m-2" value="8" operation={this.setValue} color="secondary" />
              <CalcButton className="m-2" value="9" operation={this.setValue} color="secondary" />
              <CalcButton className="m-2" value="*" operation={(operation) => this.setState({operation})} color="secondary" />
            </div>
            <div className="row m-2 justify-content-between">
              <CalcButton className="m-2" value="0" operation={this.setValue} color="secondary" />
              <CalcButton className="m-2" value="." operation={this.setValue} color="secondary" />
              <CalcButton className="m-2" value="=" operation={this.calculate} color="primary" />
              <CalcButton className="m-2" value="/" operation={(operation) => this.setState({operation})} color="secondary" />
            </div>
          </div>
        </div>
      </div>
    )
  }  
}


export default Calculator;