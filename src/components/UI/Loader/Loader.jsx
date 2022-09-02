import React, { memo, useState, useContext, useMemo, createContext, useEffect } from 'react';
import cns from 'classnames';
import BounceLoader from 'react-spinners/BounceLoader';

import { SvgIcon } from '@ui';
import { AxiosInterceptors } from '@src/services';
import { Wrapper } from './Loader.styles';

const LoaderContext = createContext();

const Loader = ({ className, ...props }) => {
  const [active, setActive] = useState(false);
  const { isLoading } = useContext(LoaderContext);

  useEffect(() => {
    const timer = setTimeout(() => setActive(isLoading), 300);

    return () => clearTimeout(timer);
  }, [isLoading, setActive]);

  return (
    <Wrapper className={cns(active && 'active')}>
      <BounceLoader color="#3F51B5" loading={true} size={100} />
    </Wrapper>
  );
};

const LoaderContextProvider = (props) => {
  const [isLoading, setLoading] = useState(false);

  // const value = useMemo(
  //   () => ({
  //     isLoading,
  //     setLoading,
  //   }),
  //   [isLoading]
  // );

  return (
    <LoaderContext.Provider value={{ isLoading, setLoading }}>
      <AxiosInterceptors>{props.children}</AxiosInterceptors>
    </LoaderContext.Provider>
  );
};

export { Loader, LoaderContext, LoaderContextProvider };
