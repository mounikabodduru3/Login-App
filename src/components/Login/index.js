// Write your code here

import './index.css'

const Login = props => {
  const {login} = props

  return (
    <button className="loginBtn" onClick={login}>
      Login
    </button>
  )
}

export default Login
