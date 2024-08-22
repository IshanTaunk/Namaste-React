import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const err= useRouteError();
    console.log(err);
  return (<>
    <h1>Oops, something went wrong!</h1>
    <h3>{err.status} : {err.statusText}</h3>
    <h4>{err.data}</h4>
    </>
  )
}

export default Error