'use client'
import Image from 'next/image';
import React, { useState } from 'react';

const FrequentlyAskedQuestions = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: 'What is SunLifter.Club?',
            answer: 'SunLifter.Club offers fitness programs from top trainers around the world, allowing users to work out from the comfort of their own space.',
        },
        {
            question: 'How can I sign up?',
            answer: 'You can sign up on our website by clicking the "Sign Up" button and following the registration process.',
        },
        {
            question: 'Is SunLift suitable for beginners?',
            answer: 'Yes, SunLifter.Club offers programs designed for all fitness levels, including beginners.',
        },
        {
            question: 'How can I create my own workout routine?',
            answer: 'SunLifter.Club provides customizable plans to create your own workout routines.',
        },
    ];

    return (
        <div className='bg-[#FEF1F2C2] px-4 lg:px-6 xl:px-10 py-12 md:pt-[100px] md:pb-[137px]'>
            <div className='max-w-[1231px] mx-auto w-full'>
                <h1 className='text-[#000000] text-center text-[24px] sm:text-[50px] lg:text-[60px] lg:leading-[70px] tracking-[-0.02em] font-workSpace font-semibold'>
                    Frequently Asked Questions
                </h1>
                <div className='mt-6 sm:mt-10 space-y-3 sm:space-y-6'>
                    {faqs.map((faq, index) => (
                        <div key={index} className='bg-[#EB334012] rounded-[10px] sm:rounded-[20px] px-3 sm:px-8 py-4 sm:py-6'>
                            <div  onClick={() => toggleFAQ(index)} className='flex items-center justify-between gap-3 cursor-pointer'>
                                <h3 className='text-black text-[16px] sm:text-[20px] sm:leading-[28px] font-normal'>
                                    {faq.question}
                                </h3>
                                <button onClick={() => toggleFAQ(index)}>
                                    <Image
                                        src={openIndex === index ? '/icons/arrow-down.svg' : '/icons/arrow-down.svg'}
                                        alt='toggle-icon'
                                        width={20}
                                        height={20}
                                    />
                                </button>
                            </div>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <p className='mt-2.5 sm:mt-5 text-black/60 text-[14px] sm:text-[18px] sm:leading-[28px] font-normal max-w-[597px]'>
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FrequentlyAskedQuestions;
