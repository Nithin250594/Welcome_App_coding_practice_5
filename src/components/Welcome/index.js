// Write your code here

import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {text: 'Subscribe'}

  subscribeButton = () => {
    this.setState(prev =>
      prev.text === 'Subscribe' ? {text: 'Subscribed'} : {text: 'Subscribe'},
    )
  }

  render() {
    const {text} = this.state

    return (
      <div className="welcome-bg">
        <h1 className="welcome-title"> Welcome</h1>
        <p className="welcome-para"> Thank you! Happy Learning</p>
        <button
          className="button-style"
          type="button"
          onClick={this.subscribeButton}
        >
          {text}
        </button>
      </div>
    )
  }
}

export default Welcome
