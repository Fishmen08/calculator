import React from 'react';

export class Buttons extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='buttons'>
          {/* Line 1 */}
          <button id='clear' className='line1' onClick={(this.props.clearAll)}>CLEAR</button>
          <button id='divide' className='line1' onClick={this.props.divide}>/</button>
          <button id='multiply' className='line1' onClick={this.props.times}>X</button>
          {/* Line 2 */}
          <button className='line2' id='seven' onClick={this.props.seven}>7</button>
          <button className='line2' id='eight' onClick={this.props.eight}>8</button>
          <button className='line2' id='nine' onClick={this.props.nine}>9</button>
          <button className='line2' id='subtract' onClick={this.props.minus}>-</button>
          {/* Line 3 */}
          <button className='line3' id='four' onClick={this.props.four}>4</button>
          <button className='line3' id='five' onClick={this.props.five}>5</button>
          <button className='line3' id='six' onClick={this.props.six}>6</button>
          <button className='line3' id='add' onClick={this.props.plus}>+</button>
          {/* Line 4 */}
          <button className='line4' id='one' onClick={this.props.one}>1</button>
          <button className='line4' id='two' onClick={this.props.two}>2</button>
          <button className='line4' id='three' onClick={this.props.three}>3</button>
          {/* Line 5 */}
          <button className='line5' id='zero' onClick={this.props.zero}>0</button>
          <button className='line5' id='decimal' onClick={this.props.decimal}>.</button>
          <button className='line5' id='equals' onClick={this.props.equals}>=</button>
        </div>
        )
    }
}