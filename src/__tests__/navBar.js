import React from "react"
import NavBar from "../navBar.js"
import { shallow } from 'enzyme'

describe('<NavBar />', () => {

  it('input is empty', () => {
    const wrapper = shallow(<NavBar />)
    const inputValueState = wrapper.state().inputValue
    expect(inputValueState).toEqual("")
  })

  it('input will change', () => {
    const wrapper = shallow(<NavBar />)
    const input = wrapper.find('input')
    input.simulate('change')
  })
})
