import React from 'react';
import { HashRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import {
  Wrapper,
  FooterItem,
  Title,
  Paragraph,
  FooterLink,
  Copyright,
  LinkWrapper,
  ContactLink
} from './Footer.styles';

function Footer() {
  const copyrightYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Wrapper>
        <FooterItem>
          <Title>{t('Nav.about')}</Title>
          <Paragraph>{t('AboutFooter.1')}</Paragraph>
          <Paragraph>{t('AboutFooter.2')}</Paragraph>
          <Paragraph>{t('AboutFooter.3')}</Paragraph>
          <Paragraph>{t('AboutFooter.4')}</Paragraph>
        </FooterItem>
        <FooterItem>
          <Title>{t('Imprint.address')}</Title>
          <Paragraph>
            Gürselpaşa Mah.75717 Sok. No.2 A Blok Daire.23 Seyhan / ADANA<br />
            {t('Imprint.country')}
          </Paragraph>
          <Paragraph>
            <strong>{t('Links.tel')}</strong> <ContactLink href='tel:+903222563040'>+903222563040</ContactLink><br />
            <strong>WhatsApp:</strong> <ContactLink href='https://wa.me/905372073627' rel='noreferrer noopener' target='_blank'>+905372073627</ContactLink><br />
            <strong>{t('Links.general')}:</strong> <ContactLink href='mailto:info@blm-international.com' rel='noreferrer noopener' target='_blank'>info@blm-international.com</ContactLink><br />
            <strong>{t('Links.sales')}:</strong> <ContactLink href='mailto:sales@blm-int.com' rel='noreferrer noopener' target='_blank'>sales@blm-int.com</ContactLink>
          </Paragraph>
        </FooterItem>
        <FooterItem>
          <HashRouter basename="/">
            <LinkWrapper>
              <FooterLink to='/'>{t('Nav.home')}</FooterLink>
              <FooterLink to='/produkte'>{t('Nav.products')}</FooterLink>
              <FooterLink to='/markenuebersicht'>{t('Nav.brands')}</FooterLink>
              <FooterLink to='/impressum'>{t('Nav.imprint')}</FooterLink>
              <FooterLink to='/ueber-uns'>{t('Nav.about')}</FooterLink>
            </LinkWrapper>
          </HashRouter>
        </FooterItem>
      </Wrapper>
      <Copyright>&#169; {copyrightYear} BLM International Mühendislik - Benjamin Çiftçi.  {t('Copyright.1')}</Copyright>
    </React.Fragment>
  );
}

export default Footer;
