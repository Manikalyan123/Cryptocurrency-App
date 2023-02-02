// Write your code here
import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'

import CryptocurrencyList from '../CryptocurrenciesList'

class CryptocurrencyTracker extends Component {
  state = {list: [], isLoading: true}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = {
      currencyName: data.currency_name,
      usdValue: data.usd_value,
      euroValue: data.euro_value,
      id: data.id,
      currencyLogo: data.currency_logo,
    }
    this.setState({list: updatedData, isLoading: false})
    console.log(data)
  }

  render() {
    const {list, isLoading} = this.state
    return (
      <div className="cont">
        {isLoading ? (
          <Loader type="Rings" color="#ffffff" height={80} width={80} />
        ) : (
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="crypocurrency"
              className=""
            />
            <CryptocurrencyList List={list} />
          </div>
        )}
      </div>
    )
  }
}
export default CryptocurrencyTracker
