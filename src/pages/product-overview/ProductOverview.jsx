import React, { lazy } from 'react';
import { useTranslation } from 'react-i18next';


import "@ui5/webcomponents/dist/Assets.js";
import "@ui5/webcomponents/dist/Table.js";
import "@ui5/webcomponents/dist/TableColumn.js";
import "@ui5/webcomponents/dist/TableRow.js";
import "@ui5/webcomponents/dist/TableCell.js";

import {
    Wrapper,
    ProductWrapper,
    ProductBlock,
    ProductTitle,
    ProductImagesWrapper,
    BrandsBlock,
    LogoWrapper,
    Logo,
    PumpImage,
} from './ProductOverview.styles';

import hydraulik from '../../images/products/hydraulik.jpg';
import pneumatik from '../../images/products/pneumatik.jpg';
import automatisierung from '../../images/products/automatisierung.jpg';
import motoren from '../../images/products/motoren.jpg';
import pumpen from '../../images/products/pumpen.jpg';
import airtecLogo from '../../images/logos/airtec-logo.jpg';
import dyniscoLogo from '../../images/logos/dynisco-logo.jpg';
import endressHauserLogo from '../../images/logos/endress-hauser-logo.jpg';
import haweHydraulicLogo from '../../images/logos/hawe-hydraulic-logo.jpg';
import gefaLogo from '../../images/logos/gefa-logo.jpg';
import schneiderElectricLogo from '../../images/logos/schneider-electric-logo.jpg';
import weberHydraulicsLogo from '../../images/logos/weber-hydraulics-logo.jpg';
import parkerLogo from '../../images/logos/parker-logo.jpg';
import festoLogo from '../../images/logos/festo-logo.jpg';
import skfLogo from '../../images/logos/skf-logo.jpg';
import steimelLogo from '../../images/logos/steimel-logo.jpg';
import witteLogo from '../../images/logos/witte-logo.jpg';
import teaser from '../../images/teaser/production.jpg';

const Teaser = lazy(() => import('../../components/teaser/Teaser'));
const ProductList = lazy(() => import('../../components/product-list/ProductList'));

function ProductOverview() {
    const { t } = useTranslation();

    return (
        <React.Fragment>
            <Teaser teaser={teaser} headline={t('Teaser.products')} isBackgroundWhite={true} />
            <Wrapper>
                <ProductWrapper>
                    <ProductBlock>
                        <ProductTitle>{t('Products.hydraulics')}</ProductTitle>
                        <ProductImagesWrapper>
                            <img src={hydraulik} alt={t('Products.hydraulics')} title={t('Products.hydraulics')} />
                        </ProductImagesWrapper>
                    </ProductBlock>
                    <BrandsBlock>
                        <ProductTitle>{t('Products.brands')}</ProductTitle>
                        <LogoWrapper>
                            <Logo src={haweHydraulicLogo} alt='Hawe Hydraulik Logo' title='Hawe Hydraulik Logo' />
                            <Logo src={weberHydraulicsLogo} alt='Weber Hydraulik Logo' title='Weber Hydraulik Logo' />
                            <Logo src={parkerLogo} alt='Parker Logo' title='Parker Logo' />
                        </LogoWrapper>
                    </BrandsBlock>
                </ProductWrapper>
                <ProductWrapper>
                    <ProductBlock>
                        <ProductTitle>{t('Products.pneumatics')}</ProductTitle>
                        <ProductImagesWrapper>
                            <img src={pneumatik} alt={t('Products.pneumatics')} title={t('Products.pneumatics')} />
                        </ProductImagesWrapper>
                    </ProductBlock>
                    <BrandsBlock>
                        <ProductTitle>{t('Products.brands')}</ProductTitle>
                        <LogoWrapper>
                            <Logo src={airtecLogo} alt='Airtec Logo' title='Airtec Logo' />
                            <Logo src={gefaLogo} alt='Gefa Logo' title='Gefa Logo' />
                            <Logo src={festoLogo} alt='Festo Logo' title='Festo Logo' />
                        </LogoWrapper>
                    </BrandsBlock>
                </ProductWrapper>
                <ProductWrapper>
                    <ProductBlock>
                        <ProductTitle>{t('Products.automation')}</ProductTitle>
                        <ProductImagesWrapper>
                            <img src={automatisierung} alt={t('Products.automation')} title={t('Products.automation')} />
                        </ProductImagesWrapper>
                    </ProductBlock>
                    <BrandsBlock>
                        <ProductTitle>{t('Products.brands')}</ProductTitle>
                        <LogoWrapper>
                            <Logo src={endressHauserLogo} alt='Endress Hauser Logo' title='Endress Hauser Logo' />
                            <Logo src={schneiderElectricLogo} alt='Schneider Electric Logo' title='Schneider Electric Logo' />
                            <Logo src={dyniscoLogo} alt='Dynsico Logo' title='Dynisco Logo' />
                        </LogoWrapper>
                    </BrandsBlock>
                </ProductWrapper>
                <ProductWrapper>
                    <ProductBlock>
                        <ProductTitle>{t('Products.motorspumps')}</ProductTitle>
                        <ProductImagesWrapper>
                            <img src={motoren} alt={t('Products.motors')} title={t('Products.motors')} />
                            <PumpImage src={pumpen} alt={t('Products.pumps')} title={t('Products.pumps')} />
                        </ProductImagesWrapper>
                    </ProductBlock>
                    <BrandsBlock>
                        <ProductTitle>{t('Products.brands')}</ProductTitle>
                        <LogoWrapper>
                            <Logo src={skfLogo} alt='SKF Logo' title='SKF Logo' />
                            <Logo src={steimelLogo} alt='Steimel Logo' title='Steimel Logo' />
                            <Logo src={witteLogo} alt='Witte Pumps & Technology Logo' title='Witte Pumps & Technology Logo' />
                        </LogoWrapper>
                    </BrandsBlock>
                </ProductWrapper>
            </Wrapper>
            <ProductList />
        </React.Fragment >
    );
}

export default ProductOverview;