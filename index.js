import React from 'react';

// eslint-disable-next-line react/display-name
const DontRenderOnServer = WrappedComponent => props =>
  __CLIENT__ ? (<WrappedComponent {...props}/>) : null;

export default DontRenderOnServer;
