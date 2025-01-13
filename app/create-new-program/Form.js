'use client';
import React, { useState } from 'react';
import WorkoutTypeDropdown from './WorkoutTypeDropdown';
import { IoIosArrowForward } from 'react-icons/io';
import NewExerciseComp from './NewExerciseComp';
import { createNewProgram } from '../store/program/programThunk';
import { useDispatch, useSelector } from 'react-redux';
import { ImSpinner8 } from 'react-icons/im';
import toast from 'react-hot-toast';

const Form = () => {
	const dispatch = useDispatch();
	const { uid } = useSelector(state => state?.user);
	const { isLoading } = useSelector(state => state?.program);
	const typesOptions = [
		'Select Exercise 1',
		'Select Exercise 2',
		'Select Exercise 3',
	];
	const [program, setProgram] = useState({
		name: '',
		workoutType: '',
		description: '',
		price: '',
		email: '',
		notes: '',
		isPrivate: false,
		weeks: [
			{
				weekName: 'Week 1',
				days: [
					{
						dayName: 'Day 1',
						notes: '',
						parts: [
							{
								partName: 'Part 1',
								exercises: [
									{
										exerciseName: '',
										reps: '',
										sets: '',
										weight: '',
										rest: '',
									},
								],
							},
						],
					},
				],
			},
		],
	});
	const handleChange = (e, field, weekIndex, dayIndex, partIndex) => {
		const { value, type, checked } = e.target;
		if (type === 'checkbox') {
			setProgram({ ...program, isPrivate: checked });
		} else if (weekIndex !== undefined) {
			const updatedWeeks = [...program.weeks];
			if (dayIndex !== undefined) {
				if (partIndex !== undefined) {
					updatedWeeks[weekIndex].days[dayIndex].parts[partIndex][
						field
					] = value;
				} else {
					updatedWeeks[weekIndex].days[dayIndex][field] = value;
				}
			} else {
				updatedWeeks[weekIndex][field] = value;
			}
			setProgram({ ...program, weeks: updatedWeeks });
		} else {
			setProgram({ ...program, [field]: value });
		}
	};

	const addWeek = () => {
		const newWeek = {
			weekName: `Week ${program.weeks.length + 1}`,
			days: [],
		};
		setProgram({ ...program, weeks: [...program.weeks, newWeek] });
	};

	const addDay = weekIndex => {
		const updatedWeeks = [...program.weeks];
		updatedWeeks[weekIndex].days.push({
			dayName: `Day ${updatedWeeks[weekIndex].days.length + 1}`,
			notes: '',
			parts: [],
		});
		setProgram({ ...program, weeks: updatedWeeks });
	};

	const addPart = (weekIndex, dayIndex) => {
		const updatedWeeks = [...program.weeks];
		updatedWeeks[weekIndex].days[dayIndex].parts.push({
			partName: `Part ${
				updatedWeeks[weekIndex].days[dayIndex].parts.length + 1
			}`,
			exercises: [],
		});
		setProgram({ ...program, weeks: updatedWeeks });
	};
	const addExercise = (weekIndex, dayIndex, partIndex) => {
		const updatedWeeks = [...program.weeks];
		updatedWeeks[weekIndex].days[dayIndex].parts[partIndex].exercises.push({
			exerciseName: '',
			reps: '',
			sets: '',
			weight: '',
			rest: '',
		});
		setProgram({ ...program, weeks: updatedWeeks });
	};

	const handleExerciseChange = (
		e,
		field,
		weekIndex,
		dayIndex,
		partIndex,
		exerciseIndex
	) => {
		const { value } = e.target;
		const updatedWeeks = [...program.weeks];

		// Update the specific field of the exercise
		updatedWeeks[weekIndex].days[dayIndex].parts[partIndex].exercises[
			exerciseIndex
		][field] = value;

		// Update the state with the modified weeks array
		setProgram({ ...program, weeks: updatedWeeks });
	};

	const handleWorkoutTypeChange = type => {
		// Update the workoutType state here
		setProgram({ ...program, workoutType: type });
	};
	// Delete Exercise
	const handleDeleteExercise = (
		weekIndex,
		dayIndex,
		partIndex,
		exerciseIndex
	) => {
		const updatedWeeks = [...program.weeks];
		updatedWeeks[weekIndex].days[dayIndex].parts[
			partIndex
		].exercises.splice(exerciseIndex, 1);
		setProgram({ ...program, weeks: updatedWeeks });
	};

	// Delete Part
	const handleDeletePart = (weekIndex, dayIndex, partIndex) => {
		const updatedWeeks = [...program.weeks];
		updatedWeeks[weekIndex].days[dayIndex].parts.splice(partIndex, 1);
		setProgram({ ...program, weeks: updatedWeeks });
	};

	// Delete Day
	const handleDeleteDay = (weekIndex, dayIndex) => {
		const updatedWeeks = [...program.weeks];
		updatedWeeks[weekIndex].days.splice(dayIndex, 1);
		setProgram({ ...program, weeks: updatedWeeks });
	};

	// Delete Week
	const handleDeleteWeek = weekIndex => {
		const updatedWeeks = [...program.weeks];
		updatedWeeks.splice(weekIndex, 1);
		setProgram({ ...program, weeks: updatedWeeks });
	};

	const handleSubmit = () => {
		if (
			program.name &&
			program.email &&
			program.price &&
			program.description &&
			program.workoutType &&
			program.notes
		) {
			dispatch(createNewProgram({ ...program, createdBy: uid }));
		} else {
			toast.error('All fields must be filled out!');
		}
	};

	return (
		<div>
			<div className='flex items-center sm:flex-row flex-col gap-3 sm:gap-[26px] w-full'>
				<div className='w-full flex-1'>
					<label className='text-[#212529] text-[14px] sm:text-[16px] font-medium leading-[20px]'>
						Program Name:
					</label>
					<input
						type='text'
						placeholder='Enter Program name'
						value={program.name}
						onChange={e => handleChange(e, 'name')}
						className='mt-2 w-full h-[48px] sm:h-[50px] rounded-[24px] bg-white sm:rounded-[60px] outline-none px-4 sm:px-5 text-black placeholder:text-[#868E96] text-[14px] sm:text-[16px] font-normal'
					/>
				</div>
				<div className='w-full flex-1'>
					<label className='text-[#212529] text-[14px] sm:text-[16px] font-medium leading-[20px]'>
						Workout type
					</label>
					<WorkoutTypeDropdown
						label='Select Types'
						options={typesOptions}
						placeholder='Select Types'
						onChange={handleWorkoutTypeChange}
					/>
				</div>
			</div>
			<div className='mt-6 w-full flex items-start flex-col gap-2'>
				<label className='text-[#212529] text-[14px] sm:text-[16px] font-medium leading-[20px]'>
					Program Description:
				</label>
				<textarea
					placeholder='Write Program Descrption'
					value={program.description}
					onChange={e => handleChange(e, 'description')}
					className='w-full outline-none rounded-[20px] resize-none h-[110px] sm:h-[186px] p-4 sm:p-5 text-black placeholder:text-[#868E96] text-[14px] sm:text-[16px] leading-[20px] font-normal'
				/>
			</div>

			{/* Week & Day & Part */}
			<div className='mt-6 sm:mt-[50px] flex flex-col gap-3 sm:gap-[26px]'>
				{program.weeks.map((week, weekIndex) => (
					<div key={weekIndex} className='mt-6'>
						<div className='flex sm:items-center sm:flex-row flex-col gap-3 sm:gap-[30px]'>
							<input
								type='text'
								value={week.weekName}
								onChange={e =>
									handleChange(e, 'weekName', weekIndex)
								}
								placeholder='Week 1'
								className='w-full max-w-[1224px] h-[48px] sm:h-[50px] rounded-[24px] bg-white sm:rounded-[60px] outline-none px-4 sm:px-5 text-black placeholder:text-[#868E96] text-[14px] sm:text-[16px] font-normal'
							/>
							<div className='flex items-center gap-3 sm:gap-[30px]'>
								<button
									onClick={() => addDay(weekIndex)}
									className='text-[#EB3340] text-[14px] sm:text-[16px] font-medium leading-[20px] underline underline-offset-2 text-nowrap'
								>
									Add Day
								</button>
								<button className='text-[#EB3340] text-[14px] sm:text-[16px] font-medium leading-[20px] underline underline-offset-2 text-nowrap'>
									Copy Week
								</button>
								<button
									onClick={() => handleDeleteWeek(weekIndex)}
									className='text-[#EB3340] text-[14px] sm:text-[16px] font-medium leading-[20px] underline underline-offset-2 text-nowrap'
								>
									Delete Week
								</button>
							</div>
						</div>

						{week.days.map((day, dayIndex) => (
							<div key={dayIndex} className='mt-4'>
								<div className='flex sm:items-center sm:flex-row flex-col gap-3 sm:gap-[30px]'>
									<input
										type='text'
										value={day.dayName}
										onChange={e =>
											handleChange(
												e,
												'dayName',
												weekIndex,
												dayIndex
											)
										}
										placeholder='Day 1'
										className='w-full max-w-[1224px] h-[48px] sm:h-[50px] rounded-[24px] bg-white sm:rounded-[60px] outline-none px-4 sm:px-5 text-black placeholder:text-[#868E96] text-[14px] sm:text-[16px] font-normal'
									/>
									<div className='flex items-center gap-3 sm:gap-[30px]'>
										<button
											onClick={() =>
												addPart(weekIndex, dayIndex)
											}
											className='text-[#EB3340] text-[14px] sm:text-[16px] font-medium leading-[20px] underline underline-offset-2 text-nowrap mr-[12px]'
										>
											Add Part
										</button>
										<button className='text-[#EB3340] text-[14px] sm:text-[16px] font-medium leading-[20px] underline underline-offset-2 text-nowrap mr-[12px]'>
											Copy Day
										</button>
										<button
											onClick={() =>
												handleDeleteDay(
													weekIndex,
													dayIndex
												)
											}
											className='text-[#EB3340] text-[14px] sm:text-[16px] font-medium leading-[20px] underline underline-offset-2 text-nowrap'
										>
											Delete Day
										</button>
									</div>
								</div>

								{day.parts.map((part, partIndex) => (
									<div key={dayIndex} className='mt-4'>
										<div className='flex sm:items-center sm:flex-row flex-col gap-3 sm:gap-[30px]'>
											<input
												type='text'
												value={part.partName}
												onChange={e =>
													handleChange(
														e,
														'partName',
														weekIndex,
														dayIndex,
														partIndex
													)
												}
												placeholder='Part 1'
												className='w-full max-w-[1224px] h-[48px] sm:h-[50px] rounded-[24px] bg-white sm:rounded-[60px] outline-none px-4 sm:px-5 text-black placeholder:text-[#868E96] text-[14px] sm:text-[16px] font-normal'
											/>
											<div className='flex items-center gap-3 sm:gap-[30px]'>
												<button
													onClick={() =>
														addExercise(
															weekIndex,
															dayIndex,
															partIndex
														)
													}
													className='text-[#EB3340] text-[14px] sm:text-[16px] font-medium leading-[20px] underline underline-offset-2 text-nowrap mr-[12px]'
												>
													Add Exercise
												</button>
												<button className='text-[#EB3340] text-[14px] sm:text-[16px] font-medium leading-[20px] underline underline-offset-2 text-nowrap mr-[12px]'>
													Copy Part
												</button>
												<button
													onClick={() =>
														handleDeletePart(
															weekIndex,
															dayIndex,
															partIndex
														)
													}
													className='text-[#EB3340] text-[14px] sm:text-[16px] font-medium leading-[20px] underline underline-offset-2 text-nowrap'
												>
													Delete Part
												</button>
											</div>
										</div>

										<NewExerciseComp
											part={part}
											handleExerciseChange={
												handleExerciseChange
											}
											weekIndex={weekIndex}
											dayIndex={dayIndex}
											partIndex={partIndex}
											handleDeleteExercise={
												handleDeleteExercise
											}
										/>
									</div>
								))}
								<div className='mt-8 flex flex-col gap-2'>
									<label className='text-[#212529] text-[14px] sm:text-[16px] font-medium leading-[20px]'>
										Day Notes:
									</label>
									<textarea
										value={day.notes}
										onChange={e =>
											handleChange(
												e,
												'notes',
												weekIndex,
												dayIndex
											)
										}
										placeholder='Add notes for this day...'
										className='w-full outline-none rounded-2xl sm:rounded-[20px] resize-none h-[110px] sm:h-[186px] px-5 py-[15px] sm:p-5 text-black placeholder:text-[#868E96] text-[14px] sm:text-[16px] leading-[20px] font-normal'
									/>
								</div>
							</div>
						))}
					</div>
				))}
			</div>

			{/* <ExerciseTable /> */}

			<div className='mt-5 sm:mt-6 flex items-center gap-3 sm:gap-6'>
				<button
					onClick={addWeek}
					className='bg-[#EB3340] w-[106px] sm:w-[158px] h-[39px] sm:h-[56px] rounded-[43px] text-white text-[14px] sm:text-[18px] sm:leading-[20px] font-normal sm:font-medium'
				>
					Add Week
				</button>
			</div>

			<div className='mt-6 sm:mt-[50px] flex items-start md:flex-row flex-col gap-6'>
				<div className='w-full flex flex-col gap-3 flex-1'>
					<label className='text-[#212529] text-[14px] sm:text-[16px] font-medium leading-[20px]'>
						Price:
					</label>
					<input
						type='number'
						value={program.price}
						onChange={e => handleChange(e, 'price')}
						placeholder='Enter Price'
						className=' w-full h-[48px] sm:h-[50px] rounded-[60px] bg-white sm:rounded-[60px] outline-none px-5 text-black placeholder:text-[#868E96] text-[14px] sm:text-[16px] font-normal'
					/>
				</div>

				<div className='w-full flex flex-col gap-3 flex-1'>
					<label className='text-[#212529] text-[14px] sm:text-[16px] font-medium leading-[20px]'>
						Share this routine with (Email)
					</label>
					<input
						type='text'
						value={program.email}
						onChange={e => handleChange(e, 'email')}
						placeholder='Enter email address to share with...'
						className='w-full h-[48px] sm:h-[50px] rounded-[60px] bg-white sm:rounded-[60px] outline-none px-5 text-black placeholder:text-[#868E96] text-[14px] sm:text-[16px] font-normal'
					/>
					<div className='mt-[14px] flex items-start gap-1.5 sm:gap-2.5'>
						<input
							checked={program.isPrivate}
							onChange={e =>
								setProgram({
									...program,
									isPrivate: e.target.checked,
								})
							}
							type='checkbox'
							className='ui-checkbox mt-0.5 min-w-[18px]'
						/>
						<p className='text-[#212529] text-[14px] sm:text-[16px] leading-[20px] font-medium'>
							Make this routine private{' '}
							<span className='text-[#EB3340]'>
								(only visible to you)
							</span>
						</p>
					</div>
				</div>
			</div>

			<div className='mt-6 sm:mt-5 flex flex-col gap-2 mb-5 sm:mb-6 md:mb-10 lg:mb-[50px]'>
				<label className='text-[#212529] text-[14px] sm:text-[16px] font-medium leading-[20px]'>
					Program notes:
				</label>
				<textarea
					placeholder='Write notes here...'
					value={program.notes}
					onChange={e => handleChange(e, 'notes')}
					className='w-full outline-none rounded-2xl sm:rounded-[20px] resize-none h-[110px] sm:h-[186px] px-5 py-[15px] sm:p-5 text-black placeholder:text-[#868E96] text-[14px] sm:text-[16px] leading-[20px] font-normal'
				/>
			</div>

			<button
				onClick={handleSubmit}
				disabled={isLoading}
				className='bg-[#EB3340] w-[161px] sm:w-[236px] h-[39px] sm:h-[56px] rounded-[43px] text-white text-[14px] sm:text-[18px] sm:leading-[20px] font-normal sm:font-medium flex items-center gap-1 justify-center'
			>
				{isLoading ? (
					<ImSpinner8 className='spinning-icon' />
				) : (
					<>
						Create Program{' '}
						<IoIosArrowForward className='text-[16px] sm:text-[18px]' />
					</>
				)}
			</button>
		</div>
	);
};

export default Form;
