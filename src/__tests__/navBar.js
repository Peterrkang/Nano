import React from "react";
import {render, getByPlaceholderText, fireEvent, cleanup, container} from 'react-testing-library'
import NavBar from "../navBar.js";


afterEach(cleanup)


test('handleInputChange', () => {

  const {getByPlaceholderText, container} = render(<NavBar /> );

  const input = getByPlaceholderText('Search Vendors')



});
