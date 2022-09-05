import React, { useCallback, useMemo, useState, memo } from 'react';
import uniqueId from 'lodash/uniqueId';
import { useTranslation } from 'react-i18next';
import InputMask from 'react-input-mask';

import { SvgIcon } from '@ui';
import { copyToClipboard } from '@helpers';
import { Container, Wrapper, CopyButton, CopyMessage, Label, Helper, Error } from './Input.styles';

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
  const [copied, setCopied] = useState(false);
  const { t } = useTranslation('ui');

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
    copyToClipboard(value).then(() => {
      setCopied(true);
    });
  }, [value]);

  const handleMouseLeave = useCallback(() => {
    setTimeout(() => {
      setCopied(false);
    }, 300);
  }, []);

  const copyButton = useMemo(() => {
    if (copyBtn && value) {
      return (
        <CopyButton type="button" onClick={onCopyClick} onMouseLeave={handleMouseLeave}>
          <SvgIcon name="copy" />
          <CopyMessage>{t(copied ? 'copied' : 'copy')}</CopyMessage>
        </CopyButton>
      );
    }

    return null;
  }, [value, copyBtn, copied]);

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
