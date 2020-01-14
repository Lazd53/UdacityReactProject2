import React from 'react';
import Loading from './Loading';
import SignIn from './SignIn';

const LoadAndAuth = ( {loading} ) => {
  return (
    <div>
    { loading === false ?
        <SignIn/> :
        <Loading/>
  }
    </div>
  )
}

export default LoadAndAuth
