import React, { Component } from "react";
import DetailTop from "../../components/detailTop";
import axios from "../../interceptor";

class Join extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    const match ={params:{type: "join"}}
    console.log(match);
    axios({
      method: "POST",
      url: `test.com/dish`,
      data: {
        match,
      },
    }).then((res) => {
      const { code, data } = res.data;
      console.log(data)
      if (code === "0") {
        this.setState({
          data,
        });
      }
    });
  }

  render() {
    const {data} =this.state;
    return (
      <>
        <DetailTop type="join"  data={data} />
      </>
    );
  }
}

export default Join;
