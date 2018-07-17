import React, { Component } from "react";
import ReactDOM from "react-dom";
import NavBar from "./navBar.js";
import testAPI from "./testAPI.js";
import Vendors from "./vendors.js";
import "./styles.css";

class App extends Component {
  state = { vendors: [], searchResult: [], listView: false };

  componentWillMount() {
    this.setState({ vendors: testAPI, searchResult: testAPI });
  }

  handleViewSwitch = () => {
    this.setState(currentState => {
      return {
        listView: !currentState.listView
      };
    });
  };

  handleInputChange = e => {
    const value = e.target.value;
    if (value) {
      this.setState(({ vendors }) => {
        return {
          searchResult: vendors.filter(vendor => {
            return Object.values(vendor.name).includes(value);
          })
        };
      });
    } else {
      this.setState(({ vendors }) => {
        return { searchResult: vendors };
      });
    }
  };

  renderFooter = () => (
    <ul>
      <li className="social">
        <a href="http://github.com/peterrkang/Nano">
          <i className="fa fa-github" />
        </a>
      </li>
      <li className="social">
        <a href="http://linkedin.com/in/peterrkang">
          <i className="fa fa-linkedin" />
        </a>
      </li>
    </ul>
  );

  render() {
    const { searchResult, listView } = this.state;
    return (
      <div className="App">
        <div className="wrapper">
          <NavBar
            handleViewSwitch={this.handleViewSwitch}
            handleInputChange={this.handleInputChange}
          />
          <Vendors list={searchResult} listView={listView} />
          {this.renderFooter()}
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
