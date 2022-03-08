import React, { lazy } from 'react';
import { useTranslation } from 'react-i18next';

import {
  Wrapper,
  ContentBlock,
  ContentBlockTitle,
  NamesParagraph,
  ContactLink
} from './Impressum.styles';

import teaser from '../../images/teaser/impressum.jpg';
import linkedInLogo from '../../images/logos/linkedin-logo.jpg';

const Teaser = lazy(() => import('../../components/teaser/Teaser'));

function Impressum() {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Teaser teaser={teaser} headline={t('Nav.imprint')} />
      <Wrapper>
        <ContentBlock>
          <ContentBlockTitle>{t('Imprint.address')}</ContentBlockTitle>
          <p>
            Gürselpaşa Mah.75717 Sok. No.2 A Blok Daire.23 Seyhan / ADANA<br />
            {t('Imprint.country')}
          </p>
        </ContentBlock>
        <ContentBlock>
          <ContentBlockTitle>{t('Imprint.contact')}</ContentBlockTitle>
          <p>{t('Imprint.opening')}</p>
          <p>
            <strong>{t('Links.tel')}</strong> +903222563040<br />
            <strong>WhatsApp:</strong> +905438645502<br />
            <strong>{t('Links.general')}:</strong> <ContactLink href='mailto:info@blm-international.com' rel='noreferrer noopener' target='_blank'>info@blm-international.com</ContactLink><br />
            <strong>{t('Links.sales')}:</strong> <ContactLink href='mailto:sales@blm-int.com' rel='noreferrer noopener' target='_blank'>sales@blm-int.com</ContactLink>
          </p>
        </ContentBlock>
        <ContentBlock>
          <NamesParagraph>
            <strong>{t('Imprint.director')}:</strong>&nbsp;Benjamin Çiftçi
          </NamesParagraph>
          <NamesParagraph>
            <strong>{t('Imprint.programming')}:</strong>&nbsp;Philipp Çiftçi
            <a href='https://www.linkedin.com/in/philipp-ciftci-geb-deinert-b14538182/' target='_blank' rel='noopener noreferrer'>
              <img src={linkedInLogo} alt='LinkedIn Philipp Ciftci' />
            </a>
          </NamesParagraph>
        </ContentBlock>
      </Wrapper>
    </React.Fragment>
  );
}

export default Impressum;