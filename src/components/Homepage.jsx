import React from 'react';
import millify from 'millify';
import { Link} from 'react-router-dom';
import { Stat,StatLabel, StatNumber, Text, SimpleGrid,Center,GridItem, useBreakpointValue } from '@chakra-ui/react'

import { useGetCryptosQuery } from '../services/cryptoApi';
import   Cryptocurrencies  from './Cryptocurrencies';
import  News  from './News';
import Loader from '../components/Loader';

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;
  const colSpan = useBreakpointValue({ base: 2, md : 1});
  const height = useBreakpointValue({ base: "100px", md : "70px"});
  const space = useBreakpointValue({ base: 5, md : 30});
  const column = useBreakpointValue({ base: 5, md : 5});
  const globalStatsStyle = useBreakpointValue({ base: { color :"red"}, md : { color :"black"}});
  if (isFetching) return <Loader />
  
  return (
    <>
      <Text fontSize={25} fontWeight ="bold" style={globalStatsStyle} className="heading">Global Crypto Status</Text>
      <div> <br/> <br/> </div>
      <SimpleGrid  className="global-stats" columns={column} spacing={space} bg="#2d3553" color="white" alignContent="center"
     >
      <GridItem colSpan={colSpan} height={height} > <Stat>
              <StatLabel ><Center>Total Cryptocurrencies</Center></StatLabel>
              <StatNumber ><Center>{globalStats?.total.toLocaleString(undefined, { maximumFractionDigits: 2 })}</Center></StatNumber>
            </Stat>
        </GridItem>
        <GridItem colSpan={colSpan} height={height}> <Stat>
              <StatLabel><Center>Total Exchanges</Center></StatLabel>
              <StatNumber><Center>{millify(globalStats?.totalExchanges)}</Center></StatNumber>
            </Stat>
        </GridItem>
        <GridItem colSpan={colSpan} height={height}> <Stat>
              <StatLabel><Center>Total Market Cap</Center></StatLabel>
              <StatNumber><Center>{`$${millify(globalStats.totalMarketCap)}`}</Center></StatNumber>
            </Stat>
        </GridItem>
        <GridItem colSpan={colSpan} height={height}> <Stat>
              <StatLabel><Center>Total 24h Volume</Center></StatLabel>
              <StatNumber><Center>{`$${millify(globalStats.total24hVolume)}`}</Center></StatNumber>
            </Stat>
        </GridItem>
        <GridItem colSpan={colSpan} height={height}> <Stat>
              <StatLabel><Center>Total Markets</Center></StatLabel>
              <StatNumber><Center>{millify(globalStats.totalMarkets)}</Center></StatNumber>
            </Stat>
        </GridItem>
      
      </SimpleGrid>
      <div> <br/> <br/> </div>
      <div className="home-heading-container">
        <Text fontSize={20} fontWeight ="bold" style={{ color :"Black"}}  className="home-title">Top 10 Cryptos In The World</Text>
        <Text fontSize={20} fontWeight ="bold" style={{ color :"Black"}}  className="show-more"><Link to="/cryptocurrencies">Show more</Link></Text>
      </div>
      <Cryptocurrencies simplified />
      <div> <br/> <br/> </div>
      <div className="home-heading-container">
        <Text fontSize={20} fontWeight ="bold" style={{ color :"Black"}}   className="home-title">Latest Crypto News</Text>
        <Text fontSize={20} fontWeight ="bold" style={{ color :"Black"}}  className="show-more"><Link to="/news">Show more</Link></Text>
      </div>
      <News simplified />
    </>
  );
};

export default Homepage;