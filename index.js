import Sidebar from './components/Sidebar'
import CryptoList from "./components/CryptoList";
import Card from "./components/Card";
import React from "react";
import Chart from "./components/Chart";
import TradingViewWidget from 'react-tradingview-widget';

export default function Home({filteredCrypto}) {
    return (
    <div>
      <div className="flex w-screen h-screen" >
        <Sidebar/>
        <div className="w-screen">
            <div className="flex shadow-sm bg-gray-50  p-4 justify-between  ">
                <div className="flex space-x-3  ">
                    <p className="text-gray-400">Welcome</p>
                    <p>Daniele!</p>
                </div>
            </div>
            <div className=" bg-gradient-to-r from-gray-100 to-gray-50 h-full " >
                <div className="flex   p-4 space-x-3">
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </div>
                <div className="flex ml-3 mt-6">
                    <Chart />

                    <div className="bg-white  w-4/12 rounded-xl border border-gray-100 mr-4">
                        <div className="border-b p-3 border-gray-100">
                            <p className="font-semibold">Watchlist </p>
                        </div>
                        <div className="flex flex-col items-center p-3 overflow-y-scroll">
                            <CryptoList filteredCrypto={filteredCrypto}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
    const result = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=9&page=1&sparkline=false')
    const filteredCrypto = await result.json()
    return {
        props: {
            filteredCrypto
        }
    }
}