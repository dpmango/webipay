import React, { memo, useState, useContext, useMemo, createContext, useEffect } from 'react';
import cns from 'classnames';
import ClipLoader from 'react-spinners/ClipLoader';

import st from './Spinner.module.less';

const Themes = {
  PRIMARY: 'primary',
  BUTTON: 'button',
};

const ThemeClasses = {
  [Themes.PRIMARY]: st._primary,
  [Themes.BUTTON]: st._button,
};

const Spinner = ({ className, theme, color, ...props }) => {
  return (
    <div className={cns(st.loader, theme && ThemeClasses[theme], className)}>
      <ClipLoader color={color || '#182D78'} loading={true} size={24} />
    </div>
  );
};

export default memo(Spinner);
