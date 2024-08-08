import React from 'react'
import ReactSwitch from 'react-switch'

function PassGenerator() {
    return (
        <div className='pt-8 text-center text-white font-bold'>
            <div className='flex flex-col items-center'>
                <div className='bg-purple-800 w-[350px] shadow-2xl hover:shadow-blue-800 rounded-md p-3'>
                    <div className='mb-4 flex items-center justify-between'>
                        <label>Password Length: </label>
                        <input type="number" className='w-12 bg-purple-700 pl-2' />
                    </div>
                    <div className='mb-4 flex items-center justify-between'>
                        <label>Include Uppercase:</label>
                        <ReactSwitch height={20} width={40} handleDiameter={18} />
                    </div>
                    <div className='mb-4 flex items-center justify-between'>
                        <label>Include Numbers:</label>
                        <ReactSwitch height={20} width={40} handleDiameter={18} />
                    </div>
                    <div className='mb-4 flex items-center justify-between'>
                        <label>Include Special Characters:</label>
                        <ReactSwitch height={20} width={40} handleDiameter={18} />
                    </div>
                    <button className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-600 hover:to-yellow-500 p-2 text-white font-bold rounded-md'>Generate Password</button>
                </div>
            </div>
        </div>
    )
}

export default PassGenerator