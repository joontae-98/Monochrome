import React from "react";
import {Col, Row} from "react-bootstrap";
import {ProductBox} from "../style/ProductStyle";

import top from "../../static/images/category/top.jpg";
import pants from "../../static/images/category/pants.jpg";
import shoes from "../../static/images/category/shoes.jpg";
import ballCap from "../../static/images/category/ball_cap.jpg";

const CategoryList = (props) => {
  return (<>
    <div className={'d-flex justify-content-around'}>
      <ProductBox src={top}>
      </ProductBox>
      <ProductBox src={pants}/>
      <ProductBox src={shoes}/>
      <ProductBox src={ballCap}/>
    </div>
  </>)
}

export default CategoryList;