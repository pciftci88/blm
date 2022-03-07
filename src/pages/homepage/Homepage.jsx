import React, { lazy } from 'react';

const MainSlider = lazy(() => import('../../components/main-slider/MainSlider'));
const BrandSlider = lazy(() => import('../../components/brand-slider/BrandSlider'));
const TextBlock = lazy(() => import('../../components/textblock/TextBlock'));
const GestraHistory = lazy(() => import('../../components/gestra-history/GestraHistory'));
const ProductsOverview = lazy(() => import('../../components/products-overview/ProductsOverview'));

class Homepage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <MainSlider />
        <BrandSlider />
        <TextBlock />
        <ProductsOverview />
        <GestraHistory />
      </React.Fragment>
    );
  }
}

export default Homepage;