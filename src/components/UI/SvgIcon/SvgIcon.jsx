import React, { useState, memo, useEffect } from 'react';
import cns from 'classnames';

import { Styled } from './SvgIcon.styles';

const SvgIcon = ({ name, clearColors = true }) => {
  const [viewBox, setViewBox] = useState('0 0 0 0');
  const [width, setWidth] = useState('1em');
  const [icon, setIcon] = useState(undefined);

  useEffect(() => {
    try {
      const iconRaw = require(`@assets/icons/${name}.svg?raw`);
      // parse from DOM
      const parser = new DOMParser();
      const svg = parser.parseFromString(iconRaw, 'image/svg+xml');
      const viewBox = svg.querySelector('svg').getAttribute('viewBox');
      let body = svg.querySelector('svg').innerHTML;

      if (clearColors) {
        body = body.replace(/fill="([^"]+)"/g, '').replace(/stroke="([^"]+)"/g, '');
      }

      // calculate
      // const body = iconRaw.replace(/<svg[^>]+>/g, '').replace('</svg>', '');
      const size = viewBox.split(' ').slice(2);

      if (size.length === 2) {
        const ratio = `${(size[0] / size[1]).toFixed(2)}em`;

        setWidth(ratio);
        setViewBox(viewBox);
        setIcon(body);
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.warn('error loading svg icon', err);
    }
  }, []);

  return icon ? (
    <Styled
      style={{ width: width }}
      viewBox={viewBox}
      className={`svg-icon--${name}`}
      preserveAspectRatio="none"
      dangerouslySetInnerHTML={{ __html: icon }}
    />
  ) : null;
};

export default memo(SvgIcon);
