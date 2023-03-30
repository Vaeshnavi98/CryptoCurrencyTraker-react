import './index.css'

const cryptocurrencyItem = props => {
  const {itemData} = props
  const {currencyName, currencyLogo, usdValue, euroValue} = itemData

  return (
    <li className="item-div">
      <div className="item-inner-div">
        <img src={currencyLogo} className="logo-deco" alt={currencyName} />
        <p>{currencyName}</p>
      </div>
      <div className="item-currency-div">
        <p className="usd-value">{usdValue}</p>
        <p>{euroValue}</p>
      </div>
    </li>
  )
}

export default cryptocurrencyItem
