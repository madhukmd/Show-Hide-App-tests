import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    first: false,
    second: false,
  }

  firstName = () => {
    this.setState(prevState => ({first: !prevState.first}))
  }

  secondName = () => {
    this.setState(prevState => ({second: !prevState.second}))
  }

  render() {
    const {first, second} = this.state
    return (
      <div className="bgContainer">
        <h1 className="heading">Show/Hide</h1>
        <div className="box">
          <div className="Container">
            <button type="button" className="btn" onClick={this.firstName}>
              Show/Hide Firstname
            </button>
            {first && <p className="nameContainer">Joe</p>}
          </div>
          <div className="Container">
            <button type="button" className="btn" onClick={this.secondName}>
              Show/Hide Lastname
            </button>
            {second && <p className="nameContainer">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
