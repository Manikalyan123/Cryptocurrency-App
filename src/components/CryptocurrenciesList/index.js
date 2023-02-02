import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrencyList extends Component {
  Header = () => {
    ;<div className="list-header">
      <p className="list-coin-type-heading">Coin Type</p>
      <div className="usd-and-euro-values-container">
        <p className="list-coin-value-heading">USD</p>
        <p className="list-coin-value-heading">EURO</p>
      </div>
    </div>
  }

  render() {
    const {List} = this.props
    return (
      <ul className="unOrderList">
        {this.Header()}
        {List.map(each => (
          <CryptocurrencyItem each={each} key={each.id} />
        ))}
      </ul>
    )
  }
}
export default CryptocurrencyList
