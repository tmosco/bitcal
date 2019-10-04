import React from 'react'

class Slider extends React.Component {
    state={
        value:2
    }

    render() {
        return (
            <div>
                <div className="range-bar">
                    <h5>Multipler</h5>
                    <span id="rangeValue"></span>
                    <button className="minus">-</button>
                    <input type="range" name="multiplier" id="" value={this.state.value} min="0" max="10" onChange={this.handleOnchange}/>
                    <div className="value">{this.state.value}</div>
                    <button className="plus">+</button>
                </div>

        </div>
        );
    }
}

export default Slider;
