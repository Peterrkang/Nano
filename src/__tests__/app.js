import React from "react";
import {render, cleanup} from 'react-testing-library'
import App from '../app'

test('mounts', () => {
  const container = render(<App />)
})
