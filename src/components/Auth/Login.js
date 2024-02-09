import React from 'react'
import Axios from 'axios'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
  }

  handleLogin = async (e) => {
    e.preventDefault()
    const { username, password } = this.state
    try {
      const response = await Axios.post(
        `http://127.0.0.1:8000/api/auth/login/?username=${encodeURIComponent(
          username,
        )}&password=${encodeURIComponent(password)}`,
      )
      const accessToken = response.data.access_token
      localStorage.setItem('accessToken', accessToken)
      window.location.href = '/'
    } catch (error) {
      console.error('Login failed:', error)
    }
  }

  render() {
    const { username, password } = this.state
    return (
      <section className="hero-area">
        <div className="container">
          <div className="inner-content">
            <div className="row align-items-center hero-content">
              <div className="col-lg-12 col-md-7 col-12">
                <h2>Login</h2>
                <form onSubmit={this.handleLogin}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    value={username}
                    onChange={(e) =>
                      this.setState({ username: e.target.value })
                    }
                  />
                  <small id="passwordHelpBlock" class="form-text text-muted">
                    Your password must be 8-20 characters long, contain letters
                    and numbers, and must not contain spaces, special
                    characters, or emoji.
                  </small>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) =>
                      this.setState({ password: e.target.value })
                    }
                  />
                  <button type="submit">Login</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Login
