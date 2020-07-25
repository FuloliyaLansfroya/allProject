import React, { Component } from "react";
import { Collapse, Avatar } from "antd";
import PropTypes from "prop-types";
import { UserOutlined } from "@ant-design/icons";
import axios from "../../interceptor";
import "../../mock/staff";
const { Panel } = Collapse;

class Staff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    this.asyncSta();
  }

  shouldComponentUpdate() {
    return true;
  }

  componentDidUpdate(prevProps) {
    const { match } = this.props;
    if (prevProps.match.params.identity !== match.params.identity) {
      this.asyncSta();
    }
  }

  asyncSta = () => {
    const { match } = this.props;
    axios({
      method: "POST",
      url: `test.com/staff`,
      data: {
        match,
      },
    }).then((res) => {
      const { code, data } = res.data;
      console.log(data);
      const { list } = data;
      if (code === "0") {
        this.setState({
          list,
        });
      }
    });
  };

  getIdentity = (identity) => {
    const { list } = this.state;
    if (identity === "witer") {
      return (
        <Collapse accordion>
          {list.map((item) => (
            <Panel header={item.name} key={item.id}>
              <Avatar size={64} icon={<UserOutlined />} />
              <p>{item.introduce}</p>
              <p>居住地:{item.live}</p>
              <p>电话:{item.tel}</p>
            </Panel>
          ))}
        </Collapse>
      );
    }
    if (identity === "chef") {
      return (
        <Collapse accordion>
          {list.map((item) => (
            <Panel header={item.name} key={item.id}>
              <Avatar size={64} icon={<UserOutlined />} />
              <p>{item.introduce}</p>
            </Panel>
          ))}
        </Collapse>
      );
    }
    if (identity === "master") {
      return (
        <Collapse accordion>
          {list.map((item) => (
            <Panel header={item.name} key={item.id}>
              <Avatar size={64} icon={<UserOutlined />} />
              <p>{item.introduce}</p>
            </Panel>
          ))}
        </Collapse>
      );
    }
  };

  render() {
    const { match } = this.props;
    console.log(match);
    return <>{this.getIdentity(match.params.identity)}</>;
  }
}

Staff.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Staff;
