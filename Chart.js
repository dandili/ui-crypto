import { Line } from "react-chartjs-2";
import React, {useEffect, useRef, useState} from "react";
import coinGecko from "./api/coinGecko";
import axios from "axios";
import { formatData } from "../utils";
import ChartDash from "./ChartDash";

const Chart = () => {
    const [crypto, setCrypto] = useState([]);
    const [pair, setPair] = useState("");
    const [price, setPrice] = useState("0.00");
    const [pastData, setPastData] = useState({});
    const websocket = useRef(null);

    let init = useRef(false);
    const apiUrl = "https://api.pro.coinbase.com";

    useEffect(() => {
        websocket.current = new WebSocket("wss://ws-feed.pro.coinbase.com");
        let crypto = [];
        const apiCall = async () => {
            await fetch(apiUrl + "/products")
                .then((res) => res.json())
                .then((data) => (crypto = data));

            let filtered = crypto.filter((pair) => {
                if (pair.quote_currency === "GBP") {
                    return pair;
                }
            });

            filtered = filtered.sort((a, b) => {
                if (a.base_currency < b.base_currency) {
                    return -1;
                }
                if (a.base_currency > b.base_currency) {
                    return 1;
                }
                return 0;
            });


            setCrypto(filtered);

            init.current = true;
        };

        apiCall();
    }, []);

    useEffect(() => {
        if (!init.current) {
            return;
        }


        let msg = {
            type: "subscribe",
            product_ids: [pair],
            channels: ["ticker"]
        };
        let jsonMsg = JSON.stringify(msg);
        websocket.current.send(jsonMsg);

        let historicalDataURL = `${apiUrl}/products/${pair}/candles?granularity=86400`;
        const fetchHistoricalData = async () => {
            let dataArr = [];
            await fetch(historicalDataURL)
                .then((res) => res.json())
                .then((data) => (dataArr = data));

            let formattedData = formatData(dataArr);
            setPastData(formattedData);
        };

        fetchHistoricalData();

        websocket.current.onmessage = (e) => {
            let data = JSON.parse(e.data);
            if (data.type !== "ticker") {
                return;
            }

            if (data.product_id === pair) {
                setPrice(data.price);
            }
        };
    }, [pair]);

    const handleSelect = (e) => {
        let unsubMsg = {
            type: "unsubscribe",
            product_ids: [pair],
            channels: ["ticker"]
        };
        let unsub = JSON.stringify(unsubMsg);

        websocket.current.send(unsub);

        setPair(e.target.value);
    };
    return (
        <div className="bg-white ml-2   shadow-sm w-8/12 border rounded-xl border-gray-100">
            <div className="border-b p-3 border-gray-100">
                <p className="font-semibold">Chart</p>
            </div>
            <div>
                <div className="dash-container">
                    {
                        <select name="currency" value={pair} onChange={handleSelect}>
                            {crypto.map((cur, idx) => {
                                return (
                                    <option key={idx} value={cur.id}>
                                        {cur.display_name}
                                    </option>
                                );
                            })}
                        </select>
                    }
                    <ChartDash price={price} data={pastData} />
                </div>
            </div>
        </div>
    )
};

export default Chart