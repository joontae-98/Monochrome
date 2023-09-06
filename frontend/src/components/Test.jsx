import React, {useEffect} from 'react';
import {AuthApi, goToLogin} from "../service/AuthApi";

function Test() {
  useEffect(() => {
    AuthApi.get('/test')
        .then((res) => {

        }).catch((err) => {
      goToLogin(err)
    });
  }, []);
  return (<div>
    test
  </div>)
}

export default Test;