const Card = (props) => {
  return (
    <div className="container">
      <div className="bio">
        <h3 className="user-name">{props.name || 'no name prop given'}</h3>
        <p>{props.about || 'no about prop given'}</p>
      </div>
    </div>  
  )
}

export default Card