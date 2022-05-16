import React, {useState, useEffect } from 'react';
import { Flex, Box, Text, Image, Button, Spacer } from '@chakra-ui/react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Link} from 'react-router-dom';

import { HomeOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';

import icon from '../images/coverpic.jpg';

export const Navbar = () => {
const [activeMenu, setActiveMenu] = useState(true);
const [screenSize, setScreenSize] = useState(null);

useEffect(() => {
  const handleResize = () => setScreenSize(window.innerWidth);
  window.addEventListener('resize', handleResize);
  handleResize();
  return () => window.removeEventListener('resize', handleResize);
},[]);


useEffect(() => {
  if(screenSize <768){
    setActiveMenu(false);
  }
  else{
    setActiveMenu(true);
  }
},[screenSize]);

  return (
      <div className="nav-container">
        <div className="logo-container">
          <Flex justifyContent="space-between">
              <Image src = {icon} boxSize='60px' alt='icon'/>
              <Text  className="logo"  fontSize={50} style={{ color :"white"}} >
                <Link  to = "/">RealCrypto</Link>
            </Text>
            </Flex>
            <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}>
              <MenuOutlined />
            </Button>
        </div>
        {activeMenu && (
            <List className='menu-list'>
              <ListItem >
                <Box fontSize={18}>
                <Flex justifyContent="space-between">
                  <Link  style={{ color :"white"}} to = "/"> <HomeOutlined /> Home</Link>
                  </Flex>
                </Box>
              </ListItem>

              <ListItem >
                <Box fontSize={18}>
                <Flex justifyContent="space-between">
                  <Link style={{ color :"white"}} to = "/cryptocurrencies"> <FundOutlined />  Crypto Currencies</Link>
                  </Flex>
                </Box>
              </ListItem>
              
              <ListItem >
                <Box fontSize={18}>
                <Flex justifyContent="space-between">
                  <Link style={{ color :"white"}} to = "/news"> <BulbOutlined /> News</Link>
                  </Flex>
                </Box>
              </ListItem>
            </List>
        )}
           
        </div> 
  )
};

export default Navbar;
