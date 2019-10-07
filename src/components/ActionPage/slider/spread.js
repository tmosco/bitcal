import React from "react";
import styled from "styled-components";

const Styles = styled.div`
display:flex;
display-item:center;
color:#8888;
 margin:2rem 2rem;
 .value {
    color:#000000;
     text-align:center;
}
.range-bar{
    display:flex;
    }
.symbol{
    margin:2px 2px;
}
.box{
    border: 1px solid black;
    width: 260PX;
    height: 146PX;
     padding: 4px 2px;
    margin: 10px 20px;
}
.slider{
    width:100%;
    height:50px;
    border-raduis:5px;
    background:#efefef;
    outline:none;
    cursor:pointer;

    &::-webkit-slider-thumb{
    -webkit-appearance:none;
     appearance:none;
     color:red;
     cursor:pointer;
    outline:1px solid #D4AF37;;
    -webkit-transition:.1s;
       }
    .disabled{
    pointer-events: none;
      }
    
      .wall{
          color:red;
          background-color:red;
          margin: 19px 19px;
      }
`;
const Button = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: #d4af37;
  border: 2px solid #d4af37;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: #d4af37;
    color: white;
    .disabled {
      pointer-events: none;
    }
  }
`;

class Spread extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 4,
      max_value: 10,
      min_value: 1
    };
  }

  handleOnchange = e => this.setState({ value: e.target.value });
  //   addHandler(){
  //       this.setState((e) => {
  //           return {value: this.state.value + 1}
  //       });
  //     }
  addHandler = () => {
    this.setState({ value: this.state.value + 1 });
    if (this.state.value >= 10) {
      this.setState({ value: (this.value = 10) });
    }
  };
  //   substractHandler=(e)=> this.setState({value: this.setState(e.target.value--)});
  substractHandler = () => {
    this.setState({ value: this.state.value - 1 });
    if (this.state.value <= 1) {
      this.setState({ value: (this.value = 1) });
    }
  };

  render() {
    return (
      <Styles>
        <div className="box">
          <h5>Spread</h5>
          <div className="range-bar">
            <span id="rangeValue"></span>
            <Button
              className="symbol"
              id="minus"
              onClick={this.substractHandler}
            >
              -
            </Button>
            <input
              type="range"
              name="multiplier"
              className="slider"
              id=""
              value={this.state.value}
              min={1}
              max={10}
              onChange={this.handleOnchange}
            />
            <Button className="disabled" id="plus" onClick={this.addHandler}>
              +
            </Button>
          </div>
          <div className="value">{this.state.value}</div>
        </div>
      </Styles>
    );
  }
}

export default Spread;
