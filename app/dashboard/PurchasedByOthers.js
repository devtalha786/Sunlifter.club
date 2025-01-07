import Link from 'next/link';
import React from 'react'

const PurchasedByOthers = () => {
    const programs = [
        {
            name: "Intermediate Strength Program",
            type: "Strength Training",
            username: "JohnDoe",
            lastactive: "27/11/2024",
            price: "$99.99",
        },
        {
            name: "Intermediate Strength Program",
            type: "Strength Training",
            username: "JohnDoe",
            lastactive: "27/11/2024",
            price: "$99.99",
        },
        {
            name: "Intermediate Strength Program",
            type: "Strength Training",
            username: "JohnDoe",
            lastactive: "27/11/2024",
            price: "$99.99",
        },
        {
            name: "Intermediate Strength Program",
            type: "Strength Training",
            username: "JohnDoe",
            lastactive: "27/11/2024",
            price: "$99.99",
        },
    ];

    return (
        <div className='w-full'>
            <h1 className='text-[#000000] text-[24px] sm:text-[30px] md:text-[40px] lg:text-[60px] lg:leading-[75px] font-semibold tracking-[-0.02em] mb-6 md:mb-[51px]'>Purchased By Others</h1>

            <div className='max-w-[1180px] w-full'>
                {/* Desktop Design */}
                <div className="overflow-hidden md:block hidden rounded-2xl border border-[#E9E9E9]">
                    <div className="overflow-x-auto">
                        <table className="min-w-full border-collapse">
                            <thead className="border-b border-[#E9E9E9]">
                                <tr className="text-left h-[60px] lg:h-[72px] uppercase text-nowrap">
                                    <th className="px-6 text-sm font-medium text-[#7F7F8A]">NAME</th>
                                    <th className="px-6 text-sm font-medium text-[#7F7F8A]">TYPE</th>
                                    <th className="px-6 text-sm font-medium text-[#7F7F8A]">Username</th>
                                    <th className="px-6 text-sm font-medium text-[#7F7F8A]">Last Active</th>
                                    <th className="px-6 text-sm font-medium text-[#7F7F8A]">Price</th>
                                    <th className="px-6 text-sm font-medium text-[#7F7F8A]">ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {programs.map((program, index) => (
                                    <tr key={index} className="border-b border-[#E9E9E9] h-[55px] lg:h-[70px] text-nowrap">
                                        <td className="px-6 text-base text-[#292933]">{program.name}</td>
                                        <td className="px-6 text-base text-[#292933]">{program.type}</td>
                                        <td className="px-6 text-base text-[#292933]">{program.username}</td>
                                        <td className="px-6 text-base text-[#292933]">{program.lastactive}</td>
                                        <td className="px-6 text-base text-[#292933]">{program.price}</td>
                                        <td className="px-6">
                                            <Link href="/routine-preview" className='text-base font-medium underline text-[#EB3340] underline-offset-2 cursor-pointer'>View</Link>
                                            <Link href="/edit-routines" className='ml-[50px] text-base font-medium underline text-[#EB3340] underline-offset-2 cursor-pointer'>Edit</Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* Mobile Design */}
                <div className="md:hidden grid gap-4">
                    {programs.map((program, index) => (
                        <div
                            key={index}
                            className="border border-[#E9E9E9] bg-white rounded-[16px] w-full p-5"
                        >
                            <div className="flex items-start justify-between gap-3">
                                <div>
                                    <h3 className="text-[#7F7F8A] text-[12px] font-medium leading-[18px] uppercase">
                                        Name
                                    </h3>
                                    <h2 className="text-[#292933] text-[14px] leading-[22px] font-normal mt-1">
                                        {program.name}
                                    </h2>
                                </div>
                                <h2 className="text-[#292933] text-[13px] font-normal leading-[22px]">
                                    {program.duration}
                                </h2>
                            </div>
                            <div className="my-4">
                                <h3 className="text-[#7F7F8A] text-[12px] font-medium leading-[18px] uppercase">
                                    Type
                                </h3>
                                <h2 className="text-[#292933] text-[14px] leading-[22px] font-normal mt-1">
                                    {program.type}
                                </h2>
                            </div>
                            <div className="my-4">
                                <h3 className="text-[#7F7F8A] text-[12px] font-medium leading-[18px] uppercase">
                                    Username
                                </h3>
                                <h2 className="text-[#292933] text-[16px] leading-[22px] font-normal mt-1">
                                    {program.username}
                                </h2>
                            </div>
                            <div className="my-4">
                                <h3 className="text-[#7F7F8A] text-[12px] font-medium leading-[18px] uppercase">
                                    Last Active
                                </h3>
                                <h2 className="text-[#292933] text-[16px] leading-[22px] font-normal mt-1">
                                    {program.lastactive}
                                </h2>
                            </div>
                            <h2 className="text-[#292933] text-[16px] leading-[22px] font-normal mb-4">
                                {program.price}
                            </h2>
                            <div className='flex flex-col gap-4'>
                                <a
                                    href="/view"
                                    className="text-[#EB3340] underline underline-offset-2 text-[16px] font-medium leading-[20px]"
                                >
                                    View
                                </a>
                                <a
                                    href="/edit"
                                    className=" text-[#EB3340] underline underline-offset-2 text-[16px] font-medium leading-[20px]"
                                >
                                    Edit
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PurchasedByOthers