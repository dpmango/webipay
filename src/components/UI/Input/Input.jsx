import React, { useCallback, useMemo, useState, memo } from 'react';
import uniqueId from 'lodash/uniqueId';
import InputMask from 'react-input-mask';

import { SvgIcon } from '@ui';
import { copyToClipboard } from '@helpers';
import { Container, Wrapper, CopyButton, Label, Helper, Error } from './Input.styles';

const Input = ({
  className,
  label,
  inputRef,
  value,
  onChange,
  mask,
  error,
  helper,
  copyBtn,
  bold,
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

  const onCopyClick = useCallback(() => {
    copyToClipboard(value);
  }, [value]);

  const copyButton = useMemo(() => {
    if (copyBtn && value) {
      return (
        <CopyButton type="button" onClick={onCopyClick} title="Copy">
          <SvgIcon name="copy" />
        </CopyButton>
      );
    }

    return null;
  }, [value, copyBtn]);

  const inputProps = {
    id,
    ref: inputRef,
    value,
    onChange: onInputChange,
    ...props,
  };

  return (
    <Container style={props.style} className={className}>
      {label && (
        <Label htmlFor={id} bold={bold}>
          {label}
        </Label>
      )}

      <Wrapper error={error} bold={bold} iconed={copyBtn}>
        {props.type === 'textarea' ? (
          <textarea {...inputProps} />
        ) : mask ? (
          <InputMask mask={mask} {...inputProps} />
        ) : (
          <input {...inputProps} />
        )}

        {copyButton}

        {error ? <Error>{error}</Error> : <Helper>{helper}</Helper>}
      </Wrapper>
    </Container>
  );
};

export default memo(Input);
