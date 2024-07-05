import {Component} from 'react'

import './index.css'

const HEADS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const TAILS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossResultImage: HEADS_IMG_URL,
    headsCount: 0,
    tailsCount: 0,
  }

  onClickButton = () => {
    const {headsCount, tailsCount} = this.state
    const toss = Math.floor(Math.random() * 2)

    let tossImage = ''
    let newHeadsCount = headsCount
    let newTailsCount = tailsCount

    if (toss === 0) {
      tossImage = HEADS_IMG_URL
      newHeadsCount += 1
    } else {
      tossImage = TAILS_IMG_URL
      newTailsCount += 1
    }
    this.setState({
      tossResultImage: tossImage,
      headsCount: newHeadsCount,
      tailsCount: newTailsCount,
    })
  }

  render() {
    const {tossResultImage, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="main-heading">Coin Toss Game</h1>
          <p className="sub-heading">Heads (or) Tails </p>
          <img src={tossResultImage} alt="toss result" className="image" />
          <button className="btn" type="button" onClick={this.onClickButton}>
            Toss Coin
          </button>
          <div className="count-container">
            <p className="text">Total:{totalCount} </p>
            <p className="text">Heads:{headsCount} </p>
            <p className="text">Tails:{tailsCount} </p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
