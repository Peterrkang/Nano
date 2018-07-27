import React from "react";
import NavBar from "../navBar.js";
import { shallow, mount } from "enzyme";

describe("<NavBar />", () => {
  it("render navbar", () => {
    const navBar = shallow(<NavBar />);
    expect(navBar).toHaveLength(1);
  });

  it("stimulates view button click", () => {
    const handleSwitch = jest.fn();
    const wrapper = mount(<NavBar handleViewSwitch={handleSwitch} />);
    expect(handleSwitch).toHaveBeenCalledTimes(0);
    const viewButton = wrapper.find("i").simulate("click");
    expect(handleSwitch).toHaveBeenCalledTimes(1);
  });

  it("stimulates input change", () => {
    const handleSearch = jest.fn();
    const event = {
      target: {
        value: "abc"
      }
    };
    const wrapper = mount(<NavBar handleInputSearch={handleSearch} />);
    expect(wrapper.state().inputValue).toBe("");
    const inputValue = wrapper.find("input").simulate("change", event);
    expect(wrapper.state().inputValue).toBe("abc");
  });
});
