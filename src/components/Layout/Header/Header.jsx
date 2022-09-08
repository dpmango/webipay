import React, { useCallback, useContext, useMemo, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';

import { SvgIcon, Select } from '@ui';
import { SessionStoreContext } from '@store';
import { Container, Wrapper, Back, Logo, Language } from './Header.styles';
import logo from '@assets/img/logo.png';
import logo2x from '@assets/img/logo@2x.png';

const Header = observer(({ className }) => {
  const { t, i18n } = useTranslation('header');
  const sessionContext = useContext(SessionStoreContext);

  const handleBackClick = () => {
    sessionContext.resetSession();
  };

  const languages = useMemo(() => {
    return [
      { value: 'en', label: 'English' },
      { value: 'ar', label: 'Arabic' },
      // { value: 'bg', label: 'Bulgarian', disabled: true },
      // { value: 'hr', label: 'Croatian', disabled: true },
      // { value: 'cd', label: 'Czech', disabled: true },
      // { value: 'da', label: 'Danish', disabled: true },
      // { value: 'nl', label: 'Dutch', disabled: true },
      // { value: 'et', label: 'Estonian', disabled: true },
      // { value: 'fi', label: 'Finnish', disabled: true },
      // { value: 'fr', label: 'French', disabled: true },
      { value: 'de', label: 'German' },
      // { value: 'el', label: 'Greek', disabled: true },
      // { value: 'hu', label: 'Hungarian', disabled: true },
      // { value: 'it', label: 'Italian', disabled: true },
      { value: 'lv', label: 'Latvian' },
      // { value: 'es', label: 'Spanish', disabled: true },
      // { value: 'sw', label: 'Swedish', disabled: true },
    ];
  }, []);

  const handleLangSelect = useCallback((lang) => {
    i18n.changeLanguage(lang.value);
  }, []);

  const selectedLang = useMemo(() => {
    return languages.find((lang) => lang.value === i18n.language);
  }, [i18n.language, languages]);

  return (
    <Container>
      <div className="container">
        <Wrapper>
          <Back onClick={handleBackClick}>
            <SvgIcon name="arrow-back" />
            <span>{t('back')}</span>
          </Back>

          <Logo>
            <img src={logo} srcSet={`${logo2x} 2x`} alt="logo" />
          </Logo>

          <Language>
            <Select
              theme="ghost"
              value={selectedLang}
              options={languages}
              maxMenuHeight={512}
              isSearchable={false}
              onChange={handleLangSelect}></Select>
          </Language>
        </Wrapper>
      </div>
    </Container>
  );
});

export default Header;
