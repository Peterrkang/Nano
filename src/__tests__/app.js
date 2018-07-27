import React from "react";
import App from "../app";
import { shallow, mount } from "enzyme";

describe("<App />", () => {
  it("render app", () => {
    const navBar = shallow(<App />);
    expect(navBar).toHaveLength(1);
  });
});
