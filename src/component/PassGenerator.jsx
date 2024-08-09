import React, { useCallback, useRef, useState } from 'react'
import ReactSwitch from 'react-switch'
import { FaRegCopy } from "react-icons/fa";

function PassGenerator() {
    const [password, setPassword] = useState('');
    const [passwordLength, setPasswordLength] = useState(8);
    const [includeUpperCase, setIncludeUpperCase] = useState(true);
    const [includeNumber, setIncludeNumber] = useState(true);
    const [includeSpecialChars, setIncludeSpecialChars] = useState(true);

    // const generatePass = () => {
    //     const lowerCaseChars = 'abcdefijklmnopqrstuvwxyz';
    //     const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    //     const numbers = '0123456789';
    //     const specialChars = '@#$&*';

    //     let validChars = lowerCaseChars;

    //     if (includeUpperCase) {
    //         validChars += upperCaseChars;
    //     }
    //     if (includeNumber) {
    //         validChars += numbers;
    //     }
    //     if (includeSpecialChars) {
    //         validChars += specialChars;
    //     }

    //     let generatePassword = "";
    //     for (let i = 0; i < passwordLength; i++) {
    //         const randomIndex = Math.floor(Math.random() * validChars.length);
    //         generatePassword += validChars.charAt(randomIndex);

    //     }
    //     setPassword(generatePassword);
    // }


    const generatePass = useCallback(() => {
        const lowerCaseChars = 'abcdefijklmnopqrstuvwxyz';
        const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numbers = '0123456789';
        const specialChars = '@#$&*';

        let validChars = lowerCaseChars;

        if (includeUpperCase) {
            validChars += upperCaseChars;
        }
        if (includeNumber) {
            validChars += numbers;
        }
        if (includeSpecialChars) {
            validChars += specialChars;
        }

        let generatePassword = "";
        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * validChars.length);
            generatePassword += validChars.charAt(randomIndex);

        }
        setPassword(generatePassword);

    }, [passwordLength, includeNumber, includeUpperCase, includeSpecialChars, setPassword]);

    const copyPasswordToClipboard = useCallback(() => {
        window.navigator.clipboard.writeText(password) // copy password
    }, [password])


    return (
        <div className='pt-8 text-center text-white font-bold'>
            <div className='flex flex-col items-center'>
                <div className='bg-purple-800 w-[350px] shadow-2xl hover:shadow-blue-800 rounded-md p-3'>
                    <div className='mb-4 flex gap-2 items-center justify-between'>
                        <label>Password Length: </label>
                        <input
                            value={passwordLength}
                            onChange={(e) => setPasswordLength(e.target.value)}
                            type="number" className='w-12 bg-purple-700 pl-2' />
                        <input
                            type="range"
                            min={6}
                            max={18}
                            value={passwordLength}
                            className='cursor-pointer'
                            onChange={(e) => { setPasswordLength(e.target.value) }}
                        />
                    </div>
                    <div className='mb-4 flex items-center justify-between'>
                        <label>Include Uppercase:</label>
                        <ReactSwitch checked={includeUpperCase} onChange={() => setIncludeUpperCase(!includeUpperCase)} height={20} width={40} handleDiameter={18} />
                    </div>
                    <div className='mb-4 flex items-center justify-between'>
                        <label>Include Numbers:</label>
                        <ReactSwitch checked={includeNumber} onChange={() => setIncludeNumber(!includeNumber)} height={20} width={40} handleDiameter={18} />
                    </div>
                    <div className='mb-4 flex items-center justify-between'>
                        <label>Include Special Characters:</label>
                        <ReactSwitch checked={includeSpecialChars} onChange={() => setIncludeSpecialChars(!includeSpecialChars)} height={20} width={40} handleDiameter={18} />
                    </div>
                    <button
                        onClick={generatePass}
                        className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-600 hover:to-yellow-500 p-2 text-white font-bold rounded-md'>Generate Password</button>

                    {password &&
                        <div className='flex gap-2 items-center justify-center'>
                            <p className='font-normal text-white mt-2'>Generate Password: <span className='font-bold' >{password}</span></p>
                            <button onClick={copyPasswordToClipboard}>
                                <FaRegCopy />
                            </button>
                        </div>}
                </div>
            </div>
        </div>
    )
}

export default PassGenerator