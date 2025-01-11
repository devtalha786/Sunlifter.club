import React from 'react';
import SelectExerciseDropdown from './SelectExerciseDropdown';

const NewExerciseComp = ({
	part,
	handleExerciseChange,
	weekIndex,
	dayIndex,
	partIndex,
	handleDeleteExercise,
}) => {
	const typesOptions = [
		'Select Exercise 1',
		'Select Exercise 2',
		'Select Exercise 3',
	];
	return (
		<div
			className='sm:block mt-6  w-full border border-[#E9E9E9] rounded-[22px] bg-white overflow-x-auto overflow-y-visible'
			style={{
				backdropFilter: 'blur(40px)',
			}}
		>
			<table className='w-full'>
				<thead className='border-b border-[#E9E9E9] h-[72px] uppercase'>
					<tr>
						<th className='px-6 text-[#7F7F8A] text-[14px] font-medium leading-[18px] w-full max-w-[425px] text-left'>
							Exercise
						</th>
						<th className='px-6 text-[#7F7F8A] text-[14px] font-medium leading-[18px] w-full max-w-[209px] text-left'>
							Reps
						</th>
						<th className='px-6 text-[#7F7F8A] text-[14px] font-medium leading-[18px] w-full max-w-[209px] text-left'>
							Sets
						</th>
						<th className='px-6 text-[#7F7F8A] text-[14px] font-medium leading-[18px] w-full max-w-[209px] text-left'>
							Weight/Time
						</th>
						<th className='px-6 text-[#7F7F8A] text-[14px] font-medium leading-[18px] w-full max-w-[210px] text-left'>
							Rest
						</th>
						<th className='px-6 text-[#7F7F8A] text-[14px] font-medium leading-[18px] w-full max-w-[210px] text-left'>
							Actions
						</th>
					</tr>
				</thead>
				<tbody>
					{part.exercises.map((exercise, exerciseIndex) => (
						<tr key={exerciseIndex} className='h-[100px]'>
							<td className='px-6 w-full min-w-[300px] 2xl:max-w-[425px]'>
								<SelectExerciseDropdown
									label='Select exercise'
									options={typesOptions}
									placeholder='Select exercise'
									onChange={e => {
										handleExerciseChange(
											e,
											'exerciseName',
											weekIndex,
											dayIndex,
											partIndex,
											exerciseIndex
										);
									}}
								/>
							</td>
							<td className='px-6 w-full max-w-[209px]'>
								<input
									type='number'
									value={exercise.reps}
									onChange={e =>
										handleExerciseChange(
											e,
											'reps',
											weekIndex,
											dayIndex,
											partIndex,
											exerciseIndex
										)
									}
									placeholder='Reps'
									className='flex items-center px-5 border border-[#EBEBEB] w-[161px] h-[56px] rounded-[50px] text-[#292933] text-[16px] leading-[22px] font-normal'
								/>
							</td>
							<td className='px-6 w-full max-w-[209px]'>
								<input
									type='number'
									value={exercise.sets}
									onChange={e =>
										handleExerciseChange(
											e,
											'sets',
											weekIndex,
											dayIndex,
											partIndex,
											exerciseIndex
										)
									}
									placeholder='Sets'
									className='flex items-center px-5 border border-[#EBEBEB] w-[161px] h-[56px] rounded-[50px] text-[#292933] text-[16px] leading-[22px] font-normal'
								/>
							</td>
							<td className='px-6 w-full max-w-[209px]'>
								<input
									type='number'
									value={exercise.weight}
									onChange={e =>
										handleExerciseChange(
											e,
											'weight',
											weekIndex,
											dayIndex,
											partIndex,
											exerciseIndex
										)
									}
									placeholder='weight'
									className='flex items-center px-5 border border-[#EBEBEB] w-[161px] h-[56px] rounded-[50px] text-[#292933] text-[16px] leading-[22px] font-normal'
								/>
							</td>
							<td className='px-6 w-full max-w-[210px]'>
								<input
									type='number'
									value={exercise.rest}
									onChange={e =>
										handleExerciseChange(
											e,
											'rest',
											weekIndex,
											dayIndex,
											partIndex,
											exerciseIndex
										)
									}
									placeholder='Rest'
									className='flex items-center px-5 border border-[#EBEBEB] w-[161px] h-[56px] rounded-[50px] text-[#292933] text-[16px] leading-[22px] font-normal'
								/>
							</td>
							<td className='px-6 w-full min-w-[210px]'>
								<button className='text-[#EB3340] text-[16px] font-medium leading-[20px] underline underline-offset-2'>
									Copy
								</button>
								<button
									onClick={() =>
										handleDeleteExercise(
											weekIndex,
											dayIndex,
											partIndex,
											exerciseIndex
										)
									}
									className='text-[#EB3340] text-[16px] font-medium leading-[20px] underline underline-offset-2 ml-[30px]'
								>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default NewExerciseComp;
