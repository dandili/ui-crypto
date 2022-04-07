import React from 'react'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import SyncAltIcon from '@material-ui/icons/SyncAlt';
import LayersIcon from '@material-ui/icons/Layers';


const Sidebar = () => {
    return (
        <div className="md:w-3/12 w-6/12">
            <div className=" border-b py-3 mt-1 flex justify-around ">
                <p className="text-xl  font-semibold">Dashboard</p>
                <p>|</p>
                <p className="text-gray-400 text-lg">Cryptocurrency</p>
            </div>
            <div className="p-4 space-y-14">
                <div className="space-y-4" >
                    <h1 className="text-gray-400">Menu</h1>
                    <div className="">
                        <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
                            <DonutLargeIcon className=" text-gray-300" />
                            <p className=" "  >Dashboard</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
                            <SyncAltIcon className="text-gray-300" />
                            <p className="text-gray-600  " >Analysis</p>
                        </div>
                    </div>

                </div>
                <div className="space-y-6" >
                    <h1 className="text-gray-400">Account   </h1>
                    <div className="">
                        <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
                            <LayersIcon className="text-gray-300" />
                            <p className="text-gray-600  " >Sign Out</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Sidebar
