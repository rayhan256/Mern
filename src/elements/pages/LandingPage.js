import React from "react";
import Header from "elements/parts/Header";
export default class LandingPage extends React.Component {
  render() {
    return (
      <>
        <Header {...this.props}></Header>
      </>
    );
  }
}
