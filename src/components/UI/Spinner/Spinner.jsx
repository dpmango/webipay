import React, { memo, useState, useContext, useMemo, createContext, useEffect } from 'react';
import cns from 'classnames';
import ClipLoader from 'react-spinners/ClipLoader';

import { Styled } from './Spinner.styles';

const Themes = {
  PRIMARY: 'primary',
  BUTTON: 'button',
};

const ThemeClasses = {
  [Themes.PRIMARY]: '_primary',
  [Themes.BUTTON]: '_button',
};

const Spinner = ({ className, theme = 'primary', color, ...props }) => {
  return (
    <Styled className={cns(theme && ThemeClasses[theme], className)}>
      <ClipLoader color={color || '#50ABFE'} loading={true} size={24} />
    </Styled>
  );
};

export default memo(Spinner);
