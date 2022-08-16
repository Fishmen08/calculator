import React from 'react';


export class Calculator extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     input: 'start',
        //     prevInput: 'finish',
        // }
    }

    // clearAll() {
    //     this.setState({
    //         input: '',
    //         prevInput: '',
    //     })

    // }

    render() {
        return (
            <div className='inputs' id='display'>
                <p id='prevInputs'>{this.props.prevInputValue}</p>
                <p id='currentInput' placeholder='0'>{this.props.inputValue}{this.props.answerValue}</p>
            </div>
        )
    }

}