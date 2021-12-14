import React, { useEffect } from 'react';
import { useNavigate, useLocation, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';

import Header from './components/Header';
import Pokemons from './pages/Pokemons';
import Pokemon from './pages/Pokemon';
import Captured from './pages/Captured';

function App() {
  const { Content } = Layout;

  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === '/') {
      navigate('/pokemons');
    }
  }, [pathname, navigate]);

  return (
    <Layout style={{ minHeight: '100vh ' }}>
      <Header />

      <Content
        style={{
          padding: '0 40px',
          marginTop: '32',
          text: 'center',
        }}
      >
        <Routes>
          <Route path="/pokemons" element={<Pokemons />} />
          <Route path="/pokemons/:slug" element={<Pokemon />} />
          <Route path="/pokemons/captured" element={<Captured />} />
        </Routes>
      </Content>
    </Layout>
  );
}

export default App;
