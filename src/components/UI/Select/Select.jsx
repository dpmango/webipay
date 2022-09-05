import React, { useCallback, useMemo, useState, memo } from 'react';
import Select from 'react-select';
import { useTranslation } from 'react-i18next';
import cns from 'classnames';
import uniqueId from 'lodash/uniqueId';

import { SvgIcon } from '@ui';
import { Container, Overlay, Label, Wrapper } from './Select.styles';

const Themes = {
  DEFAULT: 'default',
  GHOST: 'small',
};

const ThemeClasses = {
  [Themes.DEFAULT]: null,
  [Themes.GHOST]: '_ghost',
};

const SelectComponent = ({ label, value, className, options, onChange, theme, ...props }) => {
  const { i18n } = useTranslation();
  const [menuOpened, setMenuOpened] = useState(false);

  const isRtl = useMemo(() => {
    const rtlKeys = ['ar'];
    return rtlKeys.includes(i18n.language);
  }, [i18n.language]);

  const id = useMemo(() => {
    return uniqueId();
  }, []);

  const onSelectChange = useCallback((e) => {
    if (onChange) {
      onChange(e);
    }
  }, []);

  const handleOpen = useCallback(() => {
    setMenuOpened(true);
  }, []);
  const handleClose = useCallback(() => {
    setMenuOpened(false);
  }, []);

  return (
    <Container className={cns(className, theme && ThemeClasses[theme])}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <Overlay open={menuOpened} />
      <Wrapper theme={theme}>
        <Select
          className="react-select-container"
          classNamePrefix="react-select"
          value={value}
          onChange={onSelectChange}
          onMenuOpen={handleOpen}
          onMenuClose={handleClose}
          options={options}
          isRtl={isRtl}
          {...props}
        />
      </Wrapper>
    </Container>
  );
};

export default memo(SelectComponent);
