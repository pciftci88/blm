import React from 'react';
import { useTranslation } from 'react-i18next';
import productOverviewImages from '../../data/productOverview';

import { Wrapper, ProductBox, ProductImage, Title, ProductWrapper, ProductTitle, MoreProductsWrapper, MoreProductsLink, MoreProductsTitle } from './ProductsOverview.styles';

function ProductsOverview() {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Title>{t('Products.title')}</Title>
      <ProductWrapper>
        {productOverviewImages.map((image) => {
          return (
            <ProductBox>
              <ProductImage src={image.src} alt={image.description} />
              <ProductTitle>{image.description}</ProductTitle>
            </ProductBox>
          )
        })}
      </ProductWrapper>
      <MoreProductsWrapper>
        <MoreProductsTitle>{t('Products.more')}</MoreProductsTitle>
        <MoreProductsLink href='https://blm-int.com' rel='noreferrer noopener' target='_blank'>{t('Products.moreButton')}</MoreProductsLink>
      </MoreProductsWrapper>


    </Wrapper>
  )
}

export default ProductsOverview;