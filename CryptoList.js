import Crypto from "./Crypto";

export default function CryptoList({filteredCrypto}) {
    return (<> {filteredCrypto.map(crypto => {
        return (
            <Crypto
                key={crypto.id}
                name={crypto.name}
                id={crypto.id}
                price={crypto.current_price}
                symbol={crypto.symbol}
                image={crypto.image}
                priceChange={crypto.price_change_percentage_24h}
            />
        )
    })} </>)
}