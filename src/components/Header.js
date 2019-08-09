import React from "react";
import { connect } from "react-redux";

class Header extends React.Component {
  render() {
    return <div />;
  }
}
const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
