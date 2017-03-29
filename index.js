import React from 'react';

// This is verbose to ensure the displayName of the HOC is `dontRenderOnServer`
const DontRenderOnServer = WrappedComponent => {
  const dontRenderOnServer = props => __CLIENT__ ? (<WrappedComponent {...props}/>) : null;
  return dontRenderOnServer;
}

export default DontRenderOnServer;
