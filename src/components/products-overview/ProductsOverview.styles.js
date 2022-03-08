import styled from 'styled-components';

export const ProductBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;

  @media(min-width: 1020px) {
    min-width: 450px;
  }
`;

export const ProductTitle = styled.h3`
  font-size: 18px;
  max-width: 300px;
  margin: 10px auto 0 auto;
  text-align: center;
`;

export const ProductImage = styled.img`
  max-height: 400px;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Title = styled.h2`
  align-self: center;
  font-weight: bold;
  font-size: 23px;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

export const Wrapper = styled.div`
  padding: 20px 0;
  border-top: 1px solid #ddd;
  display: flex;
  flex-direction: column;
`;

export const MoreProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MoreProductsLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 20px;
  padding: 12px 60px;
  background-color: #0d6ed1;
  border-radius: 3px;
  border: 6px solid #ffc300;

  @media(min-width: 1020px) {
    font-size: 18px;
    padding: 15px 90px;
  }
`;

export const MoreProductsTitle = styled.h3`
  font-size: 22px;
  margin: 20px 0;
`;