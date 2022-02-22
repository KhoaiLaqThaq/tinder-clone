import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';

import './../../assets/css/Common.css';

function Loading() {
  const loading = useSelector(state => state.tinderCardReducer.loading);

  return (
    // <Box sx={{ display: loading ? 'flex':'none' }}></Box>
    <Box sx={{ display: 'flex' }} className="loading-process">
      <CircularProgress />
    </Box>
  )
}

export default Loading;