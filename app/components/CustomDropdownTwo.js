'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

const CustomDropdownTwo = ({ label, options, placeholder }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const selectOption = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative inline-block w-full" ref={dropdownRef}>
            <button
                onClick={toggleDropdown}
                className="w-full px-3 sm:pl-[28px] sm:pr-[19px] h-[42px] sm:h-[62px] bg-white border border-[#E3E3E3] rounded-[50px] flex items-center justify-between outline-none"
            >
                <span
                    className={`text-[14px] sm:text-[18px] leading-[30px] font-normal ${selectedOption ? 'text-black' : 'text-black/55'
                        }`}
                >
                    {selectedOption ? selectedOption : placeholder}
                </span>
                <Image src='/icons/double-arrow.svg' alt='arrow' width={11} height={24} className='sm:h-[24px] h-[18px]' />
            </button>
            {isOpen && (
                <div className="absolute z-10 w-full mt-0.5 bg-white border border-gray-300 rounded-[20px]">
                    <ul className="flex flex-col">
                        {options.map((option, index) => (
                            <li
                                key={index}
                                onClick={() => selectOption(option)}
                                className="px-3 sm:px-[28px] text-black border-b py-2 sm:py-3 text-[14px] sm:text-[18px] last:border-b-0 first:rounded-t-[20px] last:rounded-b-[20px] hover:bg-[#dedbdb] cursor-pointer"
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};


export default CustomDropdownTwo
