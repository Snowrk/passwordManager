import './index.css'
import {useEffect} from 'react'

const SavedItem = props => {
  const {siteName, userName, userPassword, onDel, show, id} = props
  const addColor = uid => {
    const randomColor = `#${Math.floor(Math.random() * 0x1000000)
      .toString(16)
      .padStart(6, 0)}`
    document.getElementById(uid).style.backgroundColor = randomColor
  }
  useEffect(() => addColor(id))
  // const randomColor = `#${Math.floor(Math.random() * 0x1000000)
  //   .toString(16)
  //   .padStart(6, 0)}`
  // document.getElementById(id).style.backgroundColor = randomColor
  return (
    <li className="box">
      <div className="profile-pic" id={id}>
        {siteName[0].toUpperCase()}
      </div>
      <div className="details">
        <p>{siteName}</p>
        <p>{userName}</p>
        {show ? (
          <p>{userPassword}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
          />
        )}
      </div>
      <button
        className="btn"
        type="button"
        data-testid="delete"
        onClick={() => onDel(id)}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default SavedItem
