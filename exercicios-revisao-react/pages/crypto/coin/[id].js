import Layout from '../../../components/crypto/Layouts';
import styles from '../../../styles/Coin.module.css';
const Coin = ({ coin }) => {
  return (
    <Layout>
      <div className={styles.coin__page}>
        <div className={styles.coin__container}>
          <img
            src={coin.image.large}
            alt={coin.name}
            className={styles.coin__image}
          />
          <h1 className={styles.coin__name}>
            {coin.name} ({coin.symbol})
          </h1>
          <p className={styles.coin__current}>
            R$ {coin.market_data.current_price.brl}
          </p>
        </div>
      </div>
    </Layout>
  );
};
export default Coin;
export async function getServerSideProps(context) {
  const { id } = context.query;
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}
    `);
  const data = await res.json();
  return {
    props: {
      coin: data,
    },
  };
}
