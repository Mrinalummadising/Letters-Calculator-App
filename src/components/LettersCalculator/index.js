import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    letters: '',
  }

  onupdateInput = event => {
    const {value} = event.target

    this.setState({letters: value})
  }

  render() {
    const {letters} = this.state

    return (
      <div className="letters-app-container">
        <div className="letters-calculator-container">
          <div className="calculator-container">
            <h1 className="heading">Calculate the letters You enter</h1>
            <div className="input-phrase-container">
              <label className="label" htmlFor="phraseText">
                Enter the phrase
              </label>
              <input
                className="letters-input"
                id="phraseText"
                onChange={this.onupdateInput}
                placeholder="Enter the phrase"
                type="text"
                value={letters}
              />
            </div>
            <p className="letters-count">No.of letters: {letters.length}</p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="letters-calculator-img"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
