import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {
    isLoading: true,
    currencyList: [],
  }

  componentDidMount() {
    this.getCurrencyList()
  }

  getCurrencyList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const statusCode = await response.statusCode
    console.log(statusCode)
    const data = await response.json()

    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      currencyName: eachItem.currency_name,
      currencyLogo: eachItem.currency_logo,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
    }))

    this.setState({currencyList: formattedData, isLoading: false})
  }

  render() {
    const {currencyList, isLoading} = this.state

    return (
      <div>
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          <div className="box-deco">
            <div className="inner-box">
              <h4>Coin Type</h4>
              <div className="coin-div">
                <h4 className="usd-deco">USD</h4>
                <h4>EURO</h4>
              </div>
            </div>
            {currencyList.map(eachItem => (
              <CryptocurrencyItem itemData={eachItem} key={eachItem.id} />
            ))}
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
