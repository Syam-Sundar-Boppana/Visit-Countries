import './index.css'

const VisitedCountries = props => {
  const {item, visited} = props
  const {id, imageUrl, name} = item
  const removeVisited = () => {
    visited(id)
  }

  return (
    <li className="visited-list" key={id}>
      <img className="thumbnail" src={imageUrl} alt="thumbnail" />
      <div className="visited-bottom">
        <p>{name}</p>
        <button
          className="visited-button"
          type="button"
          onClick={removeVisited}
        >
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountries
