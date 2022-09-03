import React, { memo } from 'react';
import { Link, NavLink } from 'react-router-dom';
import cns from 'classnames';

import { SvgIcon, Spinner } from '@ui';
import { Styled } from './Button.styles';

const Themes = {
  PRIMARY: 'primary',
};

const Variants = {
  DEFAULT: 'default',
  SMALL: 'small',
  BIG: 'big',
};

const ThemeClasses = {
  [Themes.PRIMARY]: '_primary',
};

const VariantClasses = {
  [Variants.DEFAULT]: null,
  [Variants.SMALL]: '_small',
  [Variants.BIG]: '_big',
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
    theme && ThemeClasses[theme],
    variant && VariantClasses[variant],
    outline && '_outline',
    block && '_block',
    (iconLeft || iconRight) && '_iconed',
    loading && '_loading',
    iconLeft && '_iconLeft',
    iconRight && '_iconRight',
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
      <Styled className={classStyle} type={type || 'button'} {...props}>
        {iconLeft && <SvgIcon name={iconLeft} />}

        {children}

        {loading && <Spinner theme="button" color="#FFF" />}

        {iconRight && <SvgIcon name={iconRight} />}
      </Styled>
    );
  }
};

export default memo(Button);
