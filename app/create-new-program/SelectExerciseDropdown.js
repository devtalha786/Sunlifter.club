'use client';

import { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import Image from 'next/image';

const SelectExerciseDropdown = ({ label, options, placeholder,onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [dropdownPosition, setDropdownPosition] = useState(null);
    const buttonRef = useRef(null);

    const toggleDropdown = () => {
        if (!isOpen) {
            const buttonRect = buttonRef.current.getBoundingClientRect();
            setDropdownPosition({
                top: buttonRect.bottom + window.scrollY,
                left: buttonRect.left + window.scrollX,
                width: buttonRect.width,
            });
        }
        setIsOpen(!isOpen);
    };

    const selectOption = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
        if (onChange) {
            onChange({ target: { value: option } }); // Pass a consistent event-like object
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            const dropdownElement = document.getElementById('dropdown-menu');

            if (
                buttonRef.current &&
                !buttonRef.current.contains(event.target) &&
                (!dropdownElement || !dropdownElement.contains(event.target))
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <div ref={buttonRef} className="relative inline-block w-full">
                <button
                    onClick={toggleDropdown}
                    className="w-full px-5 h-[42px] sm:h-[56px] bg-white border border-[#E3E3E3] rounded-[50px] flex items-center justify-between outline-none"
                >
                    <span
                        className={`text-[14px] sm:text-[16px] leading-[30px] font-normal ${selectedOption ? 'text-black' : 'text-black/55'
                            }`}
                    >
                        {selectedOption ? selectedOption : placeholder}
                    </span>
                    <Image
                        src="/icons/arrow-down.svg"
                        alt="arrow"
                        width={24}
                        height={24}
                        className="sm:w-[22px] sm:h-[22px] w-[18px] h-[18px]"
                    />
                </button>
            </div>

            {isOpen &&
                ReactDOM.createPortal(
                    <div
                        id="dropdown-menu"
                        style={{
                            position: 'absolute',
                            top: dropdownPosition?.top || 0,
                            left: dropdownPosition?.left || 0,
                            width: dropdownPosition?.width || 'auto',
                            zIndex: 1000,
                        }}
                        className="bg-white border border-gray-300 rounded-[20px] shadow-lg"
                    >
                        <ul className="flex flex-col">
                            {options.map((option, index) => (
                                <li
                                    key={index}
                                    onClick={() => selectOption(option)}
                                    className="px-5 sm:px-[28px] text-black border-b py-2 sm:py-3 text-[14px] sm:text-[16px] last:border-b-0 first:rounded-t-[20px] last:rounded-b-[20px] hover:bg-gray-200 cursor-pointer"
                                >
                                    {option}
                                </li>
                            ))}
                        </ul>
                    </div>,
                    document.body
                )}
        </>
    );
};

export default SelectExerciseDropdown;
