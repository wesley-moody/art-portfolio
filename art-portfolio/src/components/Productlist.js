import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../context";
import "./comp.css";

// import styled from 'styled-components';
// import { DHIllustrations } from "../src/dhillustrations";

export default class Productlist extends Component {
  render() {
    return (
      <div className="bg">
        <div className='py-5'>          
            <div className='container'>
              <Title name='DH' title='Illustrations' />
              <div className='row'>
                <ProductConsumer>
                  {value => {
                    return value.products.map(product => {
                      return <Product key={product.id} product={product} />;
                    });
                  }}
                </ProductConsumer>
              </div>
            </div>
          
        </div>
      </div>
    );
  }
}

