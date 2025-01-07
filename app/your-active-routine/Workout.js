import React from 'react'

const Workout = () => {
    const workoutData = [
        {
            exercise: 'Deadlift',
            reps: 10,
            sets: 2,
            weight: 'Bodyweight',
            rest: '30s',
            status: 'Complete & Rest',
        },
        {
            exercise: 'Squats',
            reps: 10,
            sets: 2,
            weight: 'Bodyweight',
            rest: '30s',
            status: 'Complete & Rest',
        }
    ];

    const warmUpData = [
        {
            exercise: 'Dynamic Stretching',
            reps: 10,
            sets: 2,
            weight: 'Bodyweight',
            rest: '30s',
            status: 'Complete',
        },
        {
            exercise: 'Dynamic Stretching',
            reps: 10,
            sets: 2,
            weight: 'Bodyweight',
            rest: '30s',
            status: 'Complete & Rest',
        }
    ];

    return (
        <div>
            <h1 className='text-[#000000] text-[16px] md:text-[20px] lg:text-[24px] leading-[30px] font-medium mb-2.5 md:mb-6 lg:mb-10'><span className='text-[#EB3340]'>Week 1</span> - Foundation and Form</h1>
            <div className='flex sm:items-center justify-between sm:flex-row flex-col gap-6'>
                <h2 className='text-[#000000] text-[16px] md:text-[20px] lg:text-[24px] leading-[30px] font-medium'><span className='text-[#EB3340]'>Day 1</span> - Compound and Movements</h2>
                <div className='bg-[#447728] px-4 h-[34px] rounded-[50px] w-fit flex items-center justify-center sm:pt-0.5 gap-2.5 text-[#F9F9F9] text-[14px] leading-[17.5px] font-normal'><span className='min-w-[5px] min-h-[5px] rounded-full bg-white mb-[1px]'></span>Complete 04/09/2024</div>
            </div>
            {/* Warm up Desktop Design */}
            <div className='mt-6 sm:mt-10 sm:block hidden'>
                <h2 className='flex items-center gap-2.5 text-[#000000] text-[16px] sm:text-[20px] leading-[25px] font-normal'><span className='min-w-[5px] min-h-[5px] rounded-full bg-black mb-[-1px]'></span> Warm up</h2>
                <div className='mt-12'>
                    <div
                        className="max-w-[1232px] sm:block hidden w-full border border-[#E9E9E9] rounded-[22px] bg-white overflow-x-auto overflow-y-visible"
                        style={{ backdropFilter: "blur(40px)" }}
                    >
                        <table className="w-full">
                            <thead className="border-b border-[#E9E9E9] h-[72px] uppercase">
                                <tr>
                                    <th className="px-6 text-[#7F7F8A] text-[14px] font-medium leading-[18px] min-w-[319px] text-left">Exercise</th>
                                    <th className="px-6 text-[#7F7F8A] text-[14px] font-medium leading-[18px] min-w-[201px] text-left">Reps</th>
                                    <th className="px-6 text-[#7F7F8A] text-[14px] font-medium leading-[18px] min-w-[160px] text-left">Sets</th>
                                    <th className="px-6 text-[#7F7F8A] text-[14px] font-medium leading-[18px] min-w-[209px] text-left">Weight/Time</th>
                                    <th className="px-6 text-[#7F7F8A] text-[14px] font-medium leading-[18px] min-w-[131px] text-left">Rest</th>
                                    <th className="px-6 text-[#7F7F8A] text-[14px] font-medium leading-[18px] w-full text-left">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="h-[80px] border-b border-[#E9E9E9]">
                                    <td className="px-6 min-w-[319px]">
                                        <h2 className="text-[#292933] text-[16px] leading-[22px] font-normal">Dynamic Stretching</h2>
                                    </td>
                                    <td className="px-6 min-w-[201px]">
                                        <h2 className="text-[#292933] text-[16px] leading-[22px] font-normal">10</h2>
                                    </td>
                                    <td className="px-6 min-w-[160px]">
                                        <h2 className="text-[#292933] text-[16px] leading-[22px] font-normal">02</h2>
                                    </td>
                                    <td className="px-6 min-w-[209px]">
                                        <h2 className="text-[#292933] text-[16px] leading-[22px] font-normal">Bodyweight</h2>
                                    </td>
                                    <td className="px-6 min-w-[131px]">
                                        <h2 className="text-[#292933] text-[16px] leading-[22px] font-normal">30s</h2>
                                    </td>
                                    <td className="px-6 w-full text-nowrap">
                                        <div className='bg-[#DBFFC8] px-4 h-[34px] rounded-[50px] w-fit flex items-center justify-center pt-0.5 gap-2.5 text-[#447728] text-[14px] leading-[17.5px] font-normal'><span className='min-w-[5px] min-h-[5px] rounded-full bg-[#447728] mb-[1px]'></span>Complete</div>
                                    </td>
                                </tr>
                                <tr className="h-[80px]">
                                    <td className="px-6 min-w-[319px]">
                                        <h2 className="text-[#292933] text-[16px] leading-[22px] font-normal">Dynamic Stretching</h2>
                                    </td>
                                    <td className="px-6 min-w-[201px]">
                                        <h2 className="text-[#292933] text-[16px] leading-[22px] font-normal">10</h2>
                                    </td>
                                    <td className="px-6 min-w-[160px]">
                                        <h2 className="text-[#292933] text-[16px] leading-[22px] font-normal">02</h2>
                                    </td>
                                    <td className="px-6 min-w-[209px]">
                                        <h2 className="text-[#292933] text-[16px] leading-[22px] font-normal">Bodyweight</h2>
                                    </td>
                                    <td className="px-6 min-w-[131px]">
                                        <h2 className="text-[#292933] text-[16px] leading-[22px] font-normal">30s</h2>
                                    </td>
                                    <td className="px-6 w-full text-nowrap">
                                        <button className="text-[#EB3340] text-[16px] font-medium leading-[20px] underline underline-offset-2">Complete & Rest</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Warm up Mobile Design */}
            <div className='space-y-6'>
                {warmUpData.map((warmUp, index) => (
                    <div key={index} className='mt-6 block sm:hidden bg-white w-full rounded-[10px] py-6 px-3'>
                        <h2 className='flex items-center gap-2.5 text-[#000000] text-[16px] leading-[20px] font-normal'>
                            <span className='min-w-[5px] min-h-[5px] rounded-full bg-black mb-[-1px]'></span> Warm up
                        </h2>
                        <div className='mt-6'>
                            <h2 className='text-[#7F7F8A] text-[14px] leading-[18px] font-medium uppercase mb-1.5'>Exercise</h2>
                            <h2 className='text-[#292933]/60 text-[14px] font-normal leading-[17.5px]'>{warmUp.exercise}</h2>
                        </div>
                        <div className='mt-5 mb-6 flex items-start overflow-x-auto'>
                            <div className='pr-5 border-r border-[#D9D9D9]'>
                                <h2 className='text-[#7F7F8A] text-[14px] leading-[18px] font-medium uppercase mb-2.5'>Reps</h2>
                                <h2 className='text-black/60 text-[14px] leading-[17.5px] font-normal'>{warmUp.reps}</h2>
                            </div>
                            <div className='px-5 border-r border-[#D9D9D9]'>
                                <h2 className='text-[#7F7F8A] text-[14px] leading-[18px] font-medium uppercase mb-2.5'>Sets</h2>
                                <h2 className='text-black/60 text-[14px] leading-[17.5px] font-normal'>{warmUp.sets}</h2>
                            </div>
                            <div className='px-5 border-r border-[#D9D9D9]'>
                                <h2 className='text-[#7F7F8A] text-[14px] leading-[18px] font-medium uppercase mb-2.5'>Weight</h2>
                                <h2 className='text-black/60 text-[14px] leading-[17.5px] font-normal'>{warmUp.weight}</h2>
                            </div>
                            <div className='pl-5'>
                                <h2 className='text-[#7F7F8A] text-[14px] leading-[18px] font-medium uppercase mb-2.5'>Rest</h2>
                                <h2 className='text-black/60 text-[14px] leading-[17.5px] font-normal'>{warmUp.rest}</h2>
                            </div>
                        </div>
                        <div className='mt-6'>
                            <h2 className='text-[#7F7F8A] text-[14px] leading-[18px] font-medium uppercase mb-1.5'>Status</h2>
                            {warmUp.status === 'Complete' ? (
                                <div className='bg-[#DBFFC8] w-[112px] h-[34px] rounded-[50px] flex items-center justify-center gap-2.5 text-[#447728] text-[14px] leading-[17.5px] font-normal'>
                                    <span className='min-w-[5px] min-h-[5px] rounded-full bg-[#447728] mb-[1px]'></span>Complete
                                </div>
                            ) : (
                                <button className='text-[#EB3340] text-[14px] font-medium leading-[17.5px] underline underline-offset-2'>
                                    Complete & Rest
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>


            {/* Main Workout Desktop Design */}
            <div className='mt-[52px] mb-10 sm:block hidden'>
                <h2 className='mb-8 flex items-center gap-2.5 text-[#000000] text-[16px] sm:text-[20px] leading-[25px] font-normal'><span className='min-w-[5px] min-h-[5px] rounded-full bg-black mb-[-1px]'></span> Main Workout</h2>
                <div
                    className="max-w-[1232px] sm:block hidden w-full border border-[#E9E9E9] rounded-[22px] bg-white overflow-x-auto overflow-y-visible"
                    style={{ backdropFilter: "blur(40px)" }}
                >
                    <table className="w-full">
                        <thead className="border-b border-[#E9E9E9] h-[72px] uppercase">
                            <tr>
                                <th className="px-6 text-[#7F7F8A] text-[14px] font-medium leading-[18px] min-w-[319px] text-left">Exercise</th>
                                <th className="px-6 text-[#7F7F8A] text-[14px] font-medium leading-[18px] min-w-[201px] text-left">Reps</th>
                                <th className="px-6 text-[#7F7F8A] text-[14px] font-medium leading-[18px] min-w-[160px] text-left">Sets</th>
                                <th className="px-6 text-[#7F7F8A] text-[14px] font-medium leading-[18px] min-w-[209px] text-left">Weight/Time</th>
                                <th className="px-6 text-[#7F7F8A] text-[14px] font-medium leading-[18px] min-w-[131px] text-left">Rest</th>
                                <th className="px-6 text-[#7F7F8A] text-[14px] font-medium leading-[18px] w-full text-left">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className=" border-b border-[#E9E9E9]">
                                <td className="px-6 min-w-[319px]">
                                    <h2 className="text-[#292933] text-[16px] leading-[22px] font-normal">Dynamic Stretching</h2>
                                </td>
                                <td className="px-6 min-w-[201px]">
                                    <h2 className="text-[#292933] text-[16px] leading-[22px] font-normal">10</h2>
                                </td>
                                <td className="px-6 min-w-[160px]">
                                    <h2 className="text-[#292933] text-[16px] leading-[22px] font-normal">02</h2>
                                </td>
                                <td className="px-6 min-w-[209px] py-[15px]">
                                    <h2 className="text-[#292933] text-[16px] leading-[22px] font-normal">75kg</h2>
                                    <h2 className='text-[#9E9E9E] text-[14px] leading-[23px] font-normal'>Per side: 25kg, 10kg</h2>
                                    <h2 className='text-[#9E9E9E] text-[14px] leading-[23px] font-normal'>Bar: 20kg | Total: 75kg</h2>
                                </td>
                                <td className="px-6 min-w-[131px]">
                                    <h2 className="text-[#292933] text-[16px] leading-[22px] font-normal">30s</h2>
                                </td>
                                <td className="px-6 w-full text-nowrap">
                                    <button className="text-[#EB3340] text-[16px] font-medium leading-[20px] underline underline-offset-2">Complete & Rest</button>
                                </td>
                            </tr>
                            <tr className="h-[80px]">
                                <td className="px-6 min-w-[319px]">
                                    <h2 className="text-[#292933] text-[16px] leading-[22px] font-normal">Dynamic Stretching</h2>
                                </td>
                                <td className="px-6 min-w-[201px]">
                                    <h2 className="text-[#292933] text-[16px] leading-[22px] font-normal">10</h2>
                                </td>
                                <td className="px-6 min-w-[160px]">
                                    <h2 className="text-[#292933] text-[16px] leading-[22px] font-normal">02</h2>
                                </td>
                                <td className="px-6 min-w-[209px]">
                                    <h2 className="text-[#292933] text-[16px] leading-[22px] font-normal">Bodyweight</h2>
                                </td>
                                <td className="px-6 min-w-[131px]">
                                    <h2 className="text-[#292933] text-[16px] leading-[22px] font-normal">30s</h2>
                                </td>
                                <td className="px-6 w-full text-nowrap">
                                    <button className="text-[#EB3340] text-[16px] font-medium leading-[20px] underline underline-offset-2">Complete & Rest</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Main Workout Mobile Design */}
            <div className='space-y-6 mb-6'>
                {workoutData.map((workout, index) => (
                    <div key={index} className='mt-6 block sm:hidden bg-white w-full rounded-[10px] py-6 px-3'>
                        <h2 className='flex items-center gap-2.5 text-[#000000] text-[16px] leading-[20px] font-normal'>
                            <span className='min-w-[5px] min-h-[5px] rounded-full bg-black mb-[-1px]'></span>
                            Main Workout
                        </h2>
                        <div className='mt-6'>
                            <h2 className='text-[#7F7F8A] text-[14px] leading-[18px] font-medium uppercase mb-1.5'>Exercise</h2>
                            <h2 className='text-[#292933]/60 text-[14px] font-normal leading-[17.5px]'>{workout.exercise}</h2>
                        </div>
                        <div className='mt-5 mb-6 flex items-start overflow-x-auto'>
                            <div className='pr-5 border-r border-[#D9D9D9]'>
                                <h2 className='text-[#7F7F8A] text-[14px] leading-[18px] font-medium uppercase mb-2.5'>Reps</h2>
                                <h2 className='text-black/60 text-[14px] leading-[17.5px] font-normal'>{workout.reps}</h2>
                            </div>
                            <div className='px-5 border-r border-[#D9D9D9]'>
                                <h2 className='text-[#7F7F8A] text-[14px] leading-[18px] font-medium uppercase mb-2.5'>Sets</h2>
                                <h2 className='text-black/60 text-[14px] leading-[17.5px] font-normal'>{workout.sets}</h2>
                            </div>
                            <div className='px-5 border-r border-[#D9D9D9]'>
                                <h2 className='text-[#7F7F8A] text-[14px] leading-[18px] font-medium uppercase mb-2.5'>Weight</h2>
                                <h2 className='text-black/60 text-[14px] leading-[17.5px] font-normal'>{workout.weight}</h2>
                            </div>
                            <div className='pl-5'>
                                <h2 className='text-[#7F7F8A] text-[14px] leading-[18px] font-medium uppercase mb-2.5'>Rest</h2>
                                <h2 className='text-black/60 text-[14px] leading-[17.5px] font-normal'>{workout.rest}</h2>
                            </div>
                        </div>
                        <div className='mt-6'>
                            <h2 className='text-[#7F7F8A] text-[14px] leading-[18px] font-medium uppercase mb-1.5'>Status</h2>
                            <button className='text-[#EB3340] text-[14px] font-medium leading-[17.5px] underline underline-offset-2'>
                                {workout.status}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <textarea placeholder='Add notes for this day...' className='w-full max-w-[1202px] border border-[#E3E3E3] rounded-2xl sm:rounded-[20px] resize-none h-[110px] sm:h-[186px] px-5 py-[15px] sm:p-5 text-black placeholder:text-[#868E96] text-[14px] outline-none sm:text-[16px] font-normal leading-[20px]' />
            <button className='mt-6 sm:mt-8 lg:mt-11 bg-[#EB3340] rounded-[43px] w-[212px] sm:w-[277px] h-[39px] sm:h-[56px] text-white text-[14px] sm:text-[18px] leading-[20px] font-medium'>Mark day as completed</button>
        </div>
    )
}

export default Workout