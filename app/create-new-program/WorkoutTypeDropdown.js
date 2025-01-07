'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

const WorkoutTypeDropdown = ({ label, options, placeholder }) => {
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
        <div className="mt-2 relative inline-block w-full" ref={dropdownRef}>
            <button
                onClick={toggleDropdown}
                className="w-full px-4 sm:px-5 h-[42px] sm:h-[50px] bg-white rounded-[60px] flex items-center justify-between outline-none"
            >
                <span
                    className={`text-[14px] sm:text-[16px] leading-[30px] font-normal ${selectedOption ? 'text-black' : 'text-black/55'
                        }`}
                >
                    {selectedOption ? selectedOption : placeholder}
                </span>
                <Image src='/icons/arrow-down.svg' alt='arrow' width={24} height={24} className='w-[18px] h-[18px] sm:w-[20px] sm:h-[20px]' />
            </button>
            {isOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-[20px]">
                    <ul className="flex flex-col">
                        {options.map((option, index) => (
                            <li
                                key={index}
                                onClick={() => selectOption(option)}
                                className="px-3 sm:px-5 text-black border-b py-2 sm:py-3 text-[14px] sm:text-[16px] last:border-b-0 first:rounded-t-[20px] last:rounded-b-[20px] hover:bg-[#dedbdb] cursor-pointer"
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

export default WorkoutTypeDropdown;
