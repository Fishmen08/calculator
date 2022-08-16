import {Calculator} from './state';
import './App.css';
import { Buttons } from './buttons';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '0',
      prevInput: '',
      answer: ''
    }

    this.clearAll = this.clearAll.bind(this);
    this.zero = this.zero.bind(this);
    this.one = this.one.bind(this);
    this.two = this.two.bind(this);
    this.three = this.three.bind(this);
    this.four = this.four.bind(this);
    this.five = this.five.bind(this);
    this.six = this.six.bind(this);
    this.seven = this.seven.bind(this);
    this.eight = this.eight.bind(this);
    this.nine = this.nine.bind(this);
    this.plus = this.plus.bind(this);
    this.times = this.times.bind(this);
    this.equals = this.equals.bind(this);
    this.divide = this.divide.bind(this);
    this.decimal = this.decimal.bind(this);
    this.minus = this.minus.bind(this);
  }

  clearAll() {
    this.setState({
      input: '0',
      prevInput: '',
      answer: ''
    })
  }

  decimal() {
    if (this.state.input === '0') {
      this.setState({
        input: '0.'
      })
      return;
    }
    if (this.state.input.includes('.')) {
      return;
    }
    this.setState(state => ({
      input: state.input + '.'
    }))
  }

  zero() {
    if (this.state.input === '0') {
        return;
    }
    this.setState(state => ({
      input: state.input + '0',
      answer: ''
    }))
  }

  one() {
    if (this.state.input === '0') {
        this.setState({
          input: '1'
        })
        return;
    }
    this.setState(state => ({
      input: state.input + '1',
      answer: ''
    }))
  }

  two() {
    if (this.state.input === '0') {
        this.setState({
          input: '2'
        })
        return;
    }
    this.setState(state => ({
      input: state.input + '2',
      answer: ''
    }))
  }

  three() {
    if (this.state.input === '0') {
        this.setState({
          input: '3'
        })
        return;
    }
    this.setState(state => ({
      input: state.input + '3',
      answer: ''
    }))
  }

  four() {
    if (this.state.input === '0') {
        this.setState({
          input: '4'
        })
        return;
    }
    this.setState(state => ({
      input: state.input + '4',
      answer: ''
    }))
  }

  five() {
    if (this.state.input === '0') {
        this.setState({
          input: '5'
        })
        return;
    }
    this.setState(state => ({
      input: state.input + '5',
      answer: ''
    }))
  }

  six() {
    if (this.state.input === '0') {
        this.setState({
          input: '6'
        })
        return;
    }
    this.setState(state => ({
      input: state.input + '6',
      answer: ''
    }))
  }

  seven() {
    if (this.state.input === '0') {
        this.setState({
          input: '7'
        })
        return;
    }
    this.setState(state => ({
      input: state.input + '7',
      answer: ''
    }))
  }

  eight() {
    if (this.state.input === '0') {
        this.setState({
          input: '8'
        })
        return;
    }
    this.setState(state => ({
      input: state.input + '8',
      answer: ''
    }))
  }

  nine() {
    if (this.state.input === '0') {
        this.setState({
          input: '9'
        })
        return;
    }
    this.setState(state => ({
      input: state.input + '9',
      answer: ''
    }))
  }

  plus() {
    if (this.state.input === '0' && this.state.prevInput === '') {
      return;
    }
    if (this.state.prevInput !== '' && this.state.input === '0') {
      let prev = this.state.prevInput.slice(0, (this.state.prevInput.length -1));
      this.setState({
        prevInput: prev + '+'
      })
      return;
    }
    if (this.state.prevInput === ''){
    this.setState(state => ({
      prevInput: state.input + '+',
      input: '0',
    }))
    return;
  }
    this.setState(state => ({
      prevInput: state.prevInput + state.input + '+',
      input: '0',
      answer: ''
    }))
  }

  minus() {
    if (this.state.input === '0' && this.state.prevInput === '') {
      return;
    }
    if (this.state.prevInput !== '' && this.state.input === '0') {
      let prev = this.state.prevInput.slice(0, (this.state.prevInput.length -1));
      this.setState({
        prevInput: prev + '-'
      })
      return;
    }
    if (this.state.prevInput === ''){
    this.setState(state => ({
      prevInput: state.input + '-',
      input: '0',
    }))
    return;
  }
    this.setState(state => ({
      prevInput: state.prevInput + state.input + '-',
      input: '0',
      answer: ''
    }))
  }

  times() {
    if (this.state.input === '0' && this.state.prevInput === '') {
      return;
    }
    if (this.state.prevInput !== '' && this.state.input === '0') {
      let prev = this.state.prevInput.slice(0, (this.state.prevInput.length -1));
      this.setState({
        prevInput: prev + '*'
      })
      return;
    }
    if (this.state.prevInput === ''){
      this.setState(state => ({
        prevInput: state.input + '*',
        input: '0',
        
      }))
      return;
    }
      this.setState(state => ({
        prevInput: state.prevInput + state.input + '*',
        input: '0',
        answer: ''
      }))
    }

  divide() {
    if (this.state.input === '0' && this.state.prevInput === '') {
      return;
    }
    if (this.state.prevInput !== '' && this.state.input === '0') {
      let prev = this.state.prevInput.slice(0, (this.state.prevInput.length -1));
      this.setState({
        prevInput: prev + '/'
      })
      return;
    }
    if (this.state.prevInput === ''){
      this.setState(state => ({
        prevInput: state.input + '/',
        input: '0',
      }))
      return;
    }
      this.setState(state => ({
        prevInput: state.prevInput + state.input + '/',
        input: '0',
        answer: ''
      }))
    }

  equals() {
    
    // if (this.state.prevInput[this.state.prevInput.length -1] === '/' || this.state.prevInput[this.state.prevInput.length -1] === '-' || this.state.prevInput[this.state.prevInput.length -1] === '+' || this.state.prevInput[this.state.prevInput.length -1] === '*' && this.state.input === '0') {
    //   let prev = this.state.prevInput.slice(0, (this.state.prevInput.length -1));
    //   let answer = eval(`${prev} + ${this.state.input}`)
    //   this.setState({
    //     prevInput: prev,
    //     answer: answer,
    //     input: ''
    //   })
    //   return;
    // }
    let answer = eval(`${this.state.prevInput} + ${this.state.input}`)
    this.setState(state => ({
      prevInput: state.prevInput + state.input,
      input: '',
      answer: answer
    }))
    console.log(answer)
    return;
  }

  render() {
  return (
    <div className="App">
      <div className='calculator'>
        <div className='screen'>
          <Calculator 
            inputValue={this.state.input}
            prevInputValue={this.state.prevInput}
            answerValue={this.state.answer} />
        </div>
        <Buttons 
          clearAll={this.clearAll}
          zero={this.zero}
          one={this.one}
          two={this.two}
          three={this.three}
          four={this.four}
          five={this.five}
          six={this.six}
          seven={this.seven}
          eight={this.eight}
          nine={this.nine}
          plus={this.plus}
          equals={this.equals}
          times={this.times}
          divide={this.divide}
          decimal={this.decimal}
          minus={this.minus}
          />
          
      </div>
    </div>
  );
}
}

export default App;
