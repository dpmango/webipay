import React, { useCallback, useMemo, useState, memo } from 'react';
import cns from 'classnames';
import uniqueId from 'lodash/uniqueId';
import InputMask from 'react-input-mask';

import { SvgIcon, Image } from '@ui';
import st from './Input.module.less';

const Variants = {
  DEFAULT: 'default',
  SMALL: 'small',
};

const VariantClasses = {
  [Variants.DEFAULT]: null,
  [Variants.SMALL]: st._small,
};

const Input = ({
  className,
  label,
  inputRef,
  variant,
  modifier,
  allowClear,
  value,
  onChange,
  mask,
  error,
  showError,
  cardNumber,
  ...props
}) => {
  const id = useMemo(() => {
    return uniqueId();
  }, []);

  const onInputChange = useCallback(
    (e) => {
      if (onChange) {
        onChange(e.target.value, e);
      }
    },
    [onChange]
  );

  const onCLearInput = useCallback(() => {
    if (onChange) {
      onChange('');
    }
  }, [onChange]);

  const clearIcon = useMemo(() => {
    if (allowClear && value) {
      return (
        <button type="button" onClick={onCLearInput} className={st.input_clear} title="Очистить">
          <SvgIcon name="close" />
        </button>
      );
    }

    return null;
  }, [value, allowClear]);

  const cardImage = useMemo(() => {
    if (!value) return null;

    if (Number(value.slice(0, 1)) === 4) {
      return '/img/payment/visa.png';
    } else if ([50, 56, 57, 58, 51, 52, 53, 54, 55].includes(Number(value.slice(0, 2)))) {
      return '/img/payment/mastercard.svg';
    }

    return null;
  }, [value]);

  const inputProps = {
    id,
    ref: inputRef,
    className: cns(st.input_input, allowClear && st._withClear, error && st._withError),
    value,
    onChange: onInputChange,
    ...props,
  };

  return (
    <div
      style={props.style}
      className={cns(
        st.input,
        variant && VariantClasses[variant],
        modifier && styles[`_${modifier}`],
        className
      )}>
      {label && (
        <label className={st.label} htmlFor={id}>
          {label}
        </label>
      )}

      <div className={st.input_wrapper}>
        {props.type === 'textarea' ? (
          <textarea {...inputProps} />
        ) : mask ? (
          <InputMask
            mask={mask}
            // beforeMaskedValueChange={beforeMaskedValueChange}
            {...inputProps}
          />
        ) : (
          <input {...inputProps} />
        )}

        {clearIcon}

        {cardNumber && cardImage && (
          <div className={st.cardImage}>
            <Image src={cardImage} />
          </div>
        )}

        {error && showError && <div className={st.error}>{error}</div>}
      </div>
    </div>
  );
};

export default memo(Input);
