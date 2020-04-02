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

// const DHIllustrations = styled.div`
//   .heroImg {
//   width: 100%;
//   height: 500px;
//   background-image: url("https://www.facebook.com/237041856313871/photos/p.3857657824252238/3857657824252238/");
//   background-repeat: no-repeat;
//   background-position: center;
//   background-size: cover;
//   background-attachment: fixed;
//   }
//   `