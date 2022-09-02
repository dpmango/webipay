import React, { memo } from 'react';
import { Link, NavLink } from 'react-router-dom';
import cns from 'classnames';

import { SvgIcon, Spinner } from '@ui';
import st from './Button.module.less';

const Themes = {
  PRIMARY: 'primary',
  ACCENT: 'accent',
  BLACK: 'black',
};

const Variants = {
  DEFAULT: 'default',
  SMALL: 'small',
  BIG: 'big',
};

const ThemeClasses = {
  [Themes.PRIMARY]: st._primary,
  [Themes.ACCENT]: st._accent,
  [Themes.BLACK]: st._black,
};

const VariantClasses = {
  [Variants.DEFAULT]: null,
  [Variants.SMALL]: st._small,
  [Variants.BIG]: st._big,
};

const Button = ({
  children,
  className,
  theme,
  variant,
  type,
  outline,
  block,
  loading,
  iconLeft,
  iconRight,
  ...props
}) => {
  const classStyle = cns(
    st.btn,
    theme && ThemeClasses[theme],
    variant && VariantClasses[variant],
    outline && st._outline,
    block && st._block,
    (iconLeft || iconRight) && st._iconed,
    loading && st._loading,
    iconLeft && st._iconLeft,
    iconRight && st._iconRight,
    className,
    'btn'
  );

  if (type === 'link') {
    return (
      <Link className={classStyle} {...props}>
        {children}
      </Link>
    );
  } else {
    return (
      <button className={classStyle} type={type || 'button'} {...props}>
        {iconLeft && <SvgIcon name={iconLeft} />}

        {children}

        {loading && <Spinner theme="button" color="#FFF" />}

        {iconRight && <SvgIcon name={iconRight} />}
      </button>
    );
  }
};

export default memo(Button);
