import './index.css'

const InputBox = props => {
  const {sub} = props
  return (
    <div className="inp-box">
      <h1>Add New Password</h1>
      <form onSubmit={sub}>
        <div className="inp">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
            alt="website"
          />
          <input placeholder="Enter Website" type="text" id="site" />
        </div>
        <div className="inp">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
            alt="username"
          />
          <input placeholder="Enter Username" type="text" id="userN" />
        </div>
        <div className="inp">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
            alt="password"
          />
          <input placeholder="Enter Password" type="password" id="userP" />
        </div>
        <div className="button">
          <button className="addBtn" type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  )
}

export default InputBox
