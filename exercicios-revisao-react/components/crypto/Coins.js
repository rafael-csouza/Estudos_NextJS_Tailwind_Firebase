import Link from 'next/link';
import styles from '../../styles/Coins.module.css';
const Coins = ({
  name,
  id,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
}) => {
  return (
    <Link href={`crypto/coin/${id}`}>
      <div className={styles.coin__container}>
        <div className={styles.coin__row}>
          <div className={styles.coin}>
            <img src={image} alt={name} className={styles.coin__img} />
            <h1 className={styles.coin__h1}>{name}</h1>
            <p className={styles.coin__symbol}>{symbol}</p>
          </div>
          <div className={styles.coin__data}>
            <p className={styles.coin__price}>R$ {price}</p>
            <p className={styles.coin__volume}>${volume.toLocaleString}</p>
            {priceChange < 0 ? (
              <p className={(styles.coin__percent, styles.red)}>
                {priceChange.toFixed(2)}
              </p>
            ) : (
              <p className={(styles.coin__percent, styles.green)}>
                {priceChange.toFixed(2)}
              </p>
            )}
            <p className={styles.coin__marketcap}>
              Mkt Cap: ${marketcap.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default Coins;
