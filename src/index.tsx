import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store/store'
import App from './App'

const Base = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(<Base />, document.getElementById('root'))
