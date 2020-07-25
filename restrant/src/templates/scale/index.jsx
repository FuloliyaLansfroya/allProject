import React, { Component } from "react";
import PropTypes from "prop-types";
import Dish from '../dish'

class Scale extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  render() {
    const { match } = this.props;
    return (
      <>
        <Dish match={match} />
      </>
    );
  }
}

Scale.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};
export default Scale;
