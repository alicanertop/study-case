import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { store } from './redux/store'

import { Home } from './screens'

import './styles/index.scss'

function Index() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Home />
      </Provider>
    </React.StrictMode>
  )
}

ReactDOM.render(<Index />, document.getElementById('root'))
