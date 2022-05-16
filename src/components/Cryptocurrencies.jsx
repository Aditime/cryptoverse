import React, { useState, useEffect } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input} from 'antd';
import { useGetCryptosQuery } from '../services/cryptoApi';
import Loader from '../components/Loader';

import {  Text} from '@chakra-ui/react';

const Cryptocurrencies = ( { simplified}) => {

  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() =>{
    const filteredData 
    = cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()))
    setCryptos(filteredData);
  }, [cryptosList,searchTerm ]);

  if(isFetching) return <Loader />


  return (
    <>
    {!simplified && (
      <div className='search-crypto'>
      <Input placeholder = "Search CryptoCurrency" onChange={(e) => setSearchTerm(e.target.value)}/>
    </div>
    )}
    
    <Row gutter = {[32, 32]} className='crypto-card-container'>
    {cryptos?.map((currency) =>(
      <Col xs = {25} sm={12} lg={8} className='crypto-card' key={currency.uuid}>
        <Link to = {`/crypto/${currency.uuid}`}>
          <Card
                 title = {`${currency.rank}.${currency.name}`}
                 extra = {<img className='crypto-image' src={currency.iconUrl} alt="crypto"/>}
                 hoverable
                 >
                <p><Text fontSize={20} paddingBottom="2">Price: {millify(currency.price)}</Text></p>
                <p><Text fontSize={20} paddingBottom="2">Market Cap: {millify(currency.marketCap)}</Text></p>
                <p><Text fontSize={20} paddingBottom="2">Daily Change: {currency.change}%</Text></p>
          </Card>
        </Link>
      </Col>
    ))}

    </Row>

    </>
  );
}
;



export default Cryptocurrencies;
