import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
// import { storeProducts, detailProduct } from "../data";
import { ProductConsumer } from "../context";
// import Product from "./Product";

export default class Productlist extends Component {
  // state = {
  //   products: storeProducts
  // };
  render() {
    // console.log(this.state.artwork);
    return (
      <React.Fragment>
        <div className='py-5'>
          <div className='container'>
            <Title name='My' title='Artwork' />

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
      </React.Fragment>
      // <Product />
    );
  }
}
