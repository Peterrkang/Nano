import React, { Component } from "react";
import NavBar from "./navBar";
import vendorJSON from "./vendorJSON";
import Vendors from "./vendors";
import SocialBar from "./socialBar";
import styles from "./styles.module.css";

class App extends Component {
  state = { vendors: [], searchResult: [], listView: false };

  componentWillMount() {
    this.setState({ vendors: vendorJSON, searchResult: vendorJSON });
  }

  handleViewSwitch = () => {
    this.setState(currentState => {
      return {
        listView: !currentState.listView
      };
    });
  };

  handleInputSearch = value => {
    if (value) {
      this.setState(({ vendors }) => {
        return {
          searchResult: vendors.filter(vendor => {
            return (
              vendor.location.toLowerCase().includes(value) ||
              vendor.name.toLowerCase().includes(value) ||
              vendor.product.toLowerCase().includes(value)
            );
          })
        };
      });
    } else {
      this.setState(({ vendors }) => {
        return { searchResult: vendors };
      });
    }
  };

  render() {
    const { searchResult, listView } = this.state;
    return (
      <div className={styles.wrapper}>
        <NavBar
          handleViewSwitch={this.handleViewSwitch}
          handleInputSearch={this.handleInputSearch}
        />
        <Vendors list={searchResult} listView={listView} />
        <SocialBar />
      </div>
    );
  }
}

export default App;
