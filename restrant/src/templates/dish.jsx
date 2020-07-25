import React, { Component } from "react";
import DetailTop from "../components/detailTop";
import Comments from "../components/comments";
import { Divider } from "antd";
import PropTypes from "prop-types";
import axios from "../interceptor";
import "../mock/gourmet";

class Dish extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
  this.asyncDi();
  }

  shouldComponentUpdate() {
    return true;
  }

  componentDidUpdate(prevProps) {
    const {match} =this.props;
    if(prevProps.match.params.count !== match.params.count){
      this.asyncDi();
    }
  }

  asyncDi=()=>{
    const { match } = this.props;
    axios({
      method: "POST",
      url: `test.com/dish`,
      data: {
        match,
      },
    }).then((res) => {
      const { code, data } = res.data;
      if (code === "0") {
        this.setState({
          data,
        });
      }
    });
  }

  render() {
    const { match } = this.props;
    const { data } = this.state;
    console.log(match);
    return (
      <>
        <DetailTop
          type={match.params.type}
          count={match.params.count}
          data={data}
        />
        <Divider orientation="left">评论</Divider>
        <Comments />
      </>
    );
  }
}

Dish.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Dish;
