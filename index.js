import styles from "./Crypto.module.css"
import Link from "next/link"

// For displaying certain values form the JSON form @ CoinGeko
const Crypto = ({name, id, image, key, marketcap, price, priceChange, symbol, volume}) => {
    return (
        <Link href='/Crypto/[id]' as={`/Crypto/${id}`}>
            <a>
                <div className={styles.crypto_container}>
                    <div className={styles.crypto_row}>
                        <div className={styles.crypto}>
                            <img src={image} alt={name} className={styles.crypto_img}/>
                            <h1 className={styles.crypto_h1}>{name}</h1>
                        </div>
                        <div className={styles.crypto_info}>
                            <p>£{price}</p>
                            {priceChange < 0 ? (
                                <p className={styles.crypto_red}>
                                    {priceChange.toFixed(2)}%
                                </p>
                            ):(
                                <p className={styles.crypto_green}>
                                    {priceChange.toFixed(2)}%
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default Crypto;