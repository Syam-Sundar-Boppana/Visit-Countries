import './index.css'

const CountryItem = props => {
  const {item, changeVisit} = props
  const {id, name, isVisited} = item
  const visitClicked = () => {
    changeVisit(id)
  }

  return (
    <li key={id}>
      <div className="list-container">
        <p className="item">{name}</p>
        {isVisited ? (
          <p className="para">Visited</p>
        ) : (
          <button className="button" type="button" onClick={visitClicked}>
            Visit
          </button>
        )}
      </div>
      <hr />
    </li>
  )
}

export default CountryItem
