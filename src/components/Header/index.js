import React from 'react';
import { Layout, Menu } from 'antd';
import { useLocation, Link } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const { Header } = Layout;

  return (
    <Header style={{ background: '#fff' }}>
      <Menu mode="horizontal" selectedKeys={[location.pathname]}>
        <Menu.Item key="/pokemons">
          <Link to="/pokemons">Pokemons</Link>
        </Menu.Item>
        <Menu.Item key="/pokemons/captured">
          <Link to="/pokemons/captured">Captured</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Header;
