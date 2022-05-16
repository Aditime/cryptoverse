import React, { useState, useEffect } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input} from 'antd';
import { useGetCryptosQuery } from '../services/cryptoApi';
import Loader from '../components/Loader';

import {  Text} from '@chakra-ui/react';

const CryptoAnalysis = () => {
  return (
    <div>Crypto Analysis</div>
  )
}

export default CryptoAnalysis;