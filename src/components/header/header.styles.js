import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 40px;
    padding-bottom: 15px;
    border-bottom: 1px solid #ddd;

    @media (max-width: 1020px) {
        flex-direction: column;
    }
`;

export const Navi = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    font-family: 'Roboto';
    text-transform: uppercase;

    @media (max-width: 1020px) {
        width: 100%;
        margin: 20px 0;
        justify-content: center;
        flex-wrap: wrap;
        align-items: center;
        height: 60px;
    }
`;

export const NaviItem = styled(Link)`
    color: #777;
    text-decoration: none;
    font-size: 16px;

    &:hover {
        color: #333;
        cursor: pointer;
    }
    
    @media (max-width: 1020px) {
        padding: 0 10px;
    }
`;

export const Logo = styled.img`
    max-width: 80px;
`;

export const ContactLink = styled.a`
    color: #fff;
    text-decoration: none;
`;
