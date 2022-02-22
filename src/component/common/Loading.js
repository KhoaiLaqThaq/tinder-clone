import React, { useState, useEffect } from 'react';
import FadeLoader from 'react-spinners/FadeLoader';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';

import './../../assets/css/Common.css';

function Loading() {
  const loading = useSelector(state => state.tinderCardReducer.loading);
  const [color, setColor] = useState('#36d7b7');
  const [show, setShow] = useState(false);
  useEffect(() => { setShow(loading);}, [loading]);

  return ( show ? (<Box className={'loading-process'}><FadeLoader color={color} loading={loading} /></Box>) : null);
}

export default Loading;