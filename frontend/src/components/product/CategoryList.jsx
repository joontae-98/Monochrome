import React from "react";
import {Col, Row} from "react-bootstrap";
import {ProductBox} from "../style/ProductStyle";

import top from "../../static/images/category/top.jpg";
import pants from "../../static/images/category/pants.jpg";
import shoes from "../../static/images/category/shoes.jpg";
import ballCap from "../../static/images/category/ball_cap.jpg";

const CategoryList = (props) => {
  return (<>
    <Row>
      <Col>
        <ProductBox src={top}/>
      </Col>
      <Col>
        <ProductBox src={pants}/>
      </Col>
      <Col>
        <ProductBox src={shoes}/>
      </Col>
      <Col>
        <ProductBox src={ballCap}/>
      </Col>
    </Row>
  </>)
}

export default CategoryList;