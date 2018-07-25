import React from 'react'
import ReactDOM from 'react-dom'
import App from '../app'

test('mounts', () => {
  const container = document.createElement('div')
  ReactDOM.render(<App />, container)
})
