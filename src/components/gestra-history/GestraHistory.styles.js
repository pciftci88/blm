import styled from 'styled-components';

export const Content = styled.div`
    border-top: 1px solid #ddd;
    padding: 20px 0;
    margin: 0 40px;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h2`
    align-self: center;
    font-weight: bold;
    font-size: 23px;
    text-transform: uppercase;
`;

export const SubTitle = styled.h3`
    align-self: center;
    margin: 20px 0;
    text-transform: uppercase;
    text-align: center;
`;

export const List = styled.ul`
    counter-reset: li;
    margin: 10px 0;

    @media (min-width: 1020px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const ListElement = styled.li`
    display: list-item;
    text-align: -webkit-match-parent;

    @media (min-width: 1020px) {
        min-width: 490px;
    }

    &:hover {
        background: #eee;

        &:before {
            transform: rotate(360deg);
        }
    }
`;

export const ListElementIcon = styled.span`
    position: relative;
    display: block;
    padding: .4em .4em .4em 2em;
    margin: .5em 0;
    background: #f4f4f4;
    color: #444;
    text-decoration: none;
    border-radius: .3em;
    transition: all .3s ease-out;

    &:before {
        color: #fff;
        counter-increment: li;
        content: counter(li);
        position: absolute;
        left: -1.3em;
        top: 50%;
        margin-top: -1.3em;
        background: #191970;
        height: 2.5em;
        width: 2.5em;
        line-height: 2em;
        border: .3em solid #fff;
        text-align: center;
        font-weight: bold;
        -moz-border-radius: 2em;
        -webkit-border-radius: 2em;
        border-radius: 2em;
        -webkit-transition: all .3s ease-out;
        -moz-transition: all .3s ease-out;
        -ms-transition: all .3s ease-out;
        -o-transition: all .3s ease-out;
        transition: all .3s ease-out;
    }
    
`;

export const Text = styled.p`
    margin: 5px 0;
    text-align: ${props => props.centered ? 'center' : 'left'};
    line-height: 24px;
`;

export const HistoryWrapper = styled.div`

`;

export const HistoryElement = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0;
    padding-bottom: 10px;
    &:not(:last-child) {
        border-bottom: 1px solid #ddd;
    };
`;

export const HistoryElementYear = styled.h3`
    font-size: 24px;
    font-weight: 700;
    font-style: italic;
`;

export const HistoryElementText = styled.p`
    text-align: center;
`;