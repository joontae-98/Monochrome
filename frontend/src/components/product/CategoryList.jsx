import React from "react";
import {Col, Row} from "react-bootstrap";
import {ProductBox, ProductImg} from "../style/ProductStyle";

import top from "../../static/images/category/top.jpg";
import pants from "../../static/images/category/pants.jpg";
import shoes from "../../static/images/category/shoes.jpg";
import ballCap from "../../static/images/category/ball_cap.jpg";

const CategoryList = (props) => {
  return (<>
    <div className={'d-flex justify-content-between'}>
      <ProductBox>
        <ProductImg src={top}/>
      </ProductBox>
      <ProductBox>
        <ProductImg src={pants}/>
        <h2>test</h2>
      </ProductBox>
      <ProductBox>
        <ProductImg src={shoes}/>
      </ProductBox>
      <ProductBox>
        <ProductImg src={ballCap}/>
      </ProductBox>
    </div>
  </>)
}

export default CategoryList;