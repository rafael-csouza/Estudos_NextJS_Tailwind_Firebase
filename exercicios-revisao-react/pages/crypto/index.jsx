import { useState } from 'react';
import CoinList from '../../components/crypto/CoinList.js';
import Layout from '../../components/crypto/Layouts.js';
import Searchbar from '../../components/crypto/SearchBar.js';

export default function Index({ cryptoDados }) {
  console.log(cryptoDados);

  const [procura, setProcura] = useState('');

  const filtroProcura = cryptoDados.filter((coin) =>
    coin.name.toLowerCase().includes(procura.toLowerCase())
  );

  const handleChange = (e) => {
    e.preventDefault();
    setProcura(e.target.value.toLowerCase());
  };

  return (
    <Layout>
      <h1>Bilet - Top 10 Crypto Preços</h1>
      <Searchbar type='text' placeholder='Procura' onChange={handleChange} />
      <CoinList coinsData={filtroProcura} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=10&page=1&sparkline=false'
  );
  const cryptoDados = await res.json();
  return {
    props: {
      cryptoDados,
    },
    revalidate: 300,
  };
};
