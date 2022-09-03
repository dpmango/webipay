import React, { useCallback, useContext, useMemo, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';
import cns from 'classnames';

import { SvgIcon } from '@ui';
import { SessionStoreContext } from '@store';

import { Container, Wrapper, Back, Language } from './Header.styles';

const Header = observer(({ className }) => {
  const { t, i18n } = useTranslation('header');
  const uiContext = useContext(SessionStoreContext);
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/', { replace: true });
  };

  const languages = useMemo(() => {
    return [
      { value: 'en', label: 'English' },
      { value: 'bg', label: 'Bulgarian', disabled: true },
      { value: 'hr', label: 'Croatian', disabled: true },
      { value: 'cd', label: 'Czech', disabled: true },
      { value: 'da', label: 'Danish', disabled: true },
      { value: 'nl', label: 'Dutch', disabled: true },
      { value: 'es', label: 'Estonian', disabled: true },
      { value: 'fi', label: 'Finnish', disabled: true },
      { value: 'fr', label: 'French', disabled: true },
      { value: 'de', label: 'German' },
      { value: 'el', label: 'Greek', disabled: true },
      { value: 'hu', label: 'Hungarian', disabled: true },
      { value: 'it', label: 'Italian', disabled: true },
      { value: 'lv', label: 'Latvian' },
      { value: 'es', label: 'Spanish', disabled: true },
      { value: 'sw', label: 'Swedish', disabled: true },
    ];
  }, []);

  const handleLangSelect = useCallback((lang) => {
    i18n.changeLanguage(lang);
  }, []);

  return (
    <Container>
      <div className="container header">
        <Wrapper>
          <Back onClick={handleBackClick}>
            <SvgIcon name="arrow-back" />
            <span>{t('back')}</span>
          </Back>

          <Language>
            <select onChange={(e) => handleLangSelect(e.target.value)}>
              {languages.map((lang) => (
                <option value={lang.value} key={lang.value} disabled={lang.disabled}>
                  {lang.label}
                </option>
              ))}
            </select>
          </Language>
        </Wrapper>
      </div>
    </Container>
  );
});

export default Header;
