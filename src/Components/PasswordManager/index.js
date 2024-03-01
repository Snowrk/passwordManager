import {Component} from 'react'
import {v4} from 'uuid'
import './index.css'
import InputBox from '../InputBox'
import SavedItem from '../SavedItem'

class PasswordManager extends Component {
  state = {
    passwordList: [],
    searchText: '',
    show: false,
  }

  check = () => {
    this.setState(prevState => ({show: !prevState.show}))
  }

  change = event => {
    this.setState({searchText: event.target.value})
  }

  onDel = id => {
    this.setState(prevState => {
      const newList = prevState.passwordList.filter(item => item.id !== id)
      return {passwordList: newList}
    })
  }

  sub = event => {
    event.preventDefault()
    this.setState(prevState => {
      const sName = document.getElementById('site').value
      const uName = document.getElementById('userN').value
      const pass = document.getElementById('userP').value
      console.log(sName, uName, pass)
      document.getElementById('site').value = ''
      document.getElementById('userN').value = ''
      document.getElementById('userP').value = ''
      const obj = {
        id: v4(),
        siteName: sName,
        userName: uName,
        userPassword: pass,
      }
      return {passwordList: [...prevState.passwordList, obj]}
    })
  }

  render() {
    console.log(this.state)
    const {passwordList, searchText, show} = this.state
    const filteredList = passwordList.filter(item =>
      item.siteName.toLowerCase().includes(searchText.toLowerCase()),
    )
    const count = filteredList.length
    return (
      <div className="bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
        />
        <div className="bg-1">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password manager"
          />
          <InputBox sub={this.sub} />
        </div>
        <div className="bg-2">
          <div className="header">
            <h1>Your Passwords</h1>
            <p className="cnt">{count}</p>
            <div className="search">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
              />
              <input
                type="search"
                className="sch"
                placeholder="Search"
                onChange={this.change}
              />
            </div>
          </div>
          <hr />
          <div className="show">
            <input
              type="checkbox"
              checked={show}
              onClick={this.check}
              className="checkbox"
              id="ch"
            />
            <label htmlFor="ch">Show passwords</label>
          </div>
          {filteredList.length > 0 ? (
            <ul className="container">
              {filteredList.map(item => (
                <SavedItem
                  siteName={item.siteName}
                  userName={item.userName}
                  userPassword={item.userPassword}
                  key={item.id}
                  onDel={this.onDel}
                  show={show}
                  id={item.id}
                />
              ))}
            </ul>
          ) : (
            <div className="noPass">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
              />
              <p>No Passwords</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default PasswordManager
