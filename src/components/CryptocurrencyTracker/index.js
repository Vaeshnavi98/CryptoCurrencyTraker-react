import './index.css'

import CryptocurrencyList from '../CryptocurrenciesList'

const CryptocurrencyTracker = () => (
  <div className="main-div">
    <h1 className="main-heading">Cryptocurrency Tracker</h1>
    <img
      src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
      className="img-deco"
      alt="cryptocurrency"
    />
    <CryptocurrencyList />
  </div>
)

export default CryptocurrencyTracker
