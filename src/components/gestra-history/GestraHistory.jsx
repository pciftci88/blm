import React from 'react';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';
import {
    Content,
    Title,
    SubTitle,
    List,
    ListElement,
    ListElementIcon,
    Text,
    HistoryElement,
    HistoryElementYear,
    HistoryElementText,
    GestraLogoWrapper,
    GestraLogo
} from './GestraHistory.styles';

import gestraLogo from '../../images/logos/gestra-logo.jpg';

function GestraHistory() {
    const { t } = useTranslation();

    return (
        <Content>
            <Title>{t('History.title')}</Title>
            <GestraLogoWrapper>
                <GestraLogo src={gestraLogo} alt='Gestra' title='Gestra' />
            </GestraLogoWrapper>
            <SubTitle>{t('History.subTitle')}</SubTitle>
            <Text centered={true}>
                {t('History.text')}
            </Text>
            <Text centered={true}>{t('History.targetsTitle')}</Text>
            <List>
                <ListElement>
                    <ListElementIcon>{t('History.target1')}</ListElementIcon>
                </ListElement>
                <ListElement>
                    <ListElementIcon>{t('History.target2')}</ListElementIcon>
                </ListElement>
                <ListElement>
                    <ListElementIcon>{t('History.target3')}</ListElementIcon>
                </ListElement>
            </List>
            <Text centered={true}>{t('History.title2')}</Text>
            <div>
                {
                    (new Array(18).fill(null)).map((value, index) => {
                        return <HistoryElement key={uuidv4()}>
                            <HistoryElementYear>{t('History.hierarchy.' + (index + 1) + '.year')}</HistoryElementYear>
                            <HistoryElementText>{t('History.hierarchy.' + (index + 1) + '.text')}</HistoryElementText>
                        </HistoryElement>
                    })
                }
            </div>
        </Content>
    );
};

export default GestraHistory;