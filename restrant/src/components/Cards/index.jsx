import React, { Component } from "react";
import { Card, Col, Row } from "antd";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const { Meta } = Card;

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  render() {
    const { list, slot, span, type } = this.props;
    return (
      <div>
        {slot}
        <Row className="site-card-wrapper" gutter={[16, 24]}>
          {list.map((value) => (
            <Col span={span} key={value.id}>
              <NavLink to={`/${type}/dish/${type}&${value.id}`}>
                <Card
                  bordered={false}
                  hoverable
                  cover={
                    <img alt="example" src={
                      type==="gourmet"?require("../../assert/1.png"):require("../../assert/1.jpg")
                    } />
                  }
                >
                  <Meta title={`${value.dishName} 价格: ${value.price}元`} description={value.introduce} />
                </Card>
              </NavLink>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

Cards.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  slot: PropTypes.object,
  span: PropTypes.number,
  type: PropTypes.string,
  id: PropTypes.number,
};
Cards.defaultProps = {
  slot: <></>,
  span: 0,
  type: "",
  id: 0,
};

export default Cards;
