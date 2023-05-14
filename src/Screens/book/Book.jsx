import React from 'react'
import useBookHooks from './hooks/useBookHooks'
import SMButton from '../../components/SMButton'
import SMInput from '../../components/SMInput'
import '../../Style/Booking.css'
import bookFunction from './bookFunction'

const Book = () => {
	let { car, userId, inputs, setInputs, navigate } = useBookHooks()
	return <div className='bookNow'>
		<h1>Confirm Booking</h1>
		<div className='bookedCarImage'></div>
		<div><span className='field'>Car Name:</span>{car.car}</div>
		<div><span className='field'>Car Color:</span>{car.car_color}</div>
		<div><span className='field'>Car Model:</span>{car.car_model}</div>
		<div><span className='field'>Car Model Year:</span>{car.car_model_year}</div>
		<div><span className='field'>Car VIN:</span>{car.car_vin}</div>
		<div><span className='field'>Price:</span>{car.price}</div>
		<div><span className='field'>availability:</span>{car.availability ? 'available' : 'unavailbale'}</div>
		<div className='bookingGroup'>
			<div className='bookingInput'>
				<SMInput
					value={inputs.startLoc}
					name={'startLoc'}
					onChange={(e) => {
						setInputs((prev) => {
							prev[e.target.name] = e.target.value
							return { ...prev }
						})
					}}
					label={'Start Location'} />
			</div>
			<div className='bookingInput'>
				<SMInput
					value={inputs.endLoc}
					name={'endLoc'}
					onChange={(e) => {
						setInputs((prev) => {
							prev[e.target.name] = e.target.value
							return { ...prev }
						})
					}} label={'End Location'} />
			</div>
		</div>
		<div className='bookingGroup'>
			<div className='bookingInput'>
				<SMInput
					value={inputs.startTime}
					name={'startTime'}
					onChange={(e) => {
						setInputs((prev) => {
							prev[e.target.name] = e.target.value
							return { ...prev }
						})
					}}
					label={'Rent booking Starting Time'} />
			</div>
			<div className='bookingInput'>
				<SMInput
					value={inputs.endTime}
					name={'endTime'}
					onChange={(e) => {
						setInputs((prev) => {
							prev[e.target.name] = e.target.value
							return { ...prev }
						})
					}}
					label={'Rent booking End Time'} />
			</div>
		</div>
		<div className='bookingInput'>
			<SMInput
				value={inputs.bookingDate}
				name={'bookingDate'}
				onChange={(e) => {
					setInputs((prev) => {
						prev[e.target.name] = e.target.value
						return { ...prev }
					})
				}}
				label={'Date Of Booking'} />
		</div>
		<div className='policy'>
			<span className='field'>Cancelation Policy:</span>
			<ol>
				<li>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur officiis magni ducimus praesentium perferendis consequuntur porro corporis nostrum. Ad, adipisci! Obcaecati, nisi voluptate! Ex dolorem, laudantium incidunt maiores veniam quisquam!
				</li>
				<li>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur officiis magni ducimus praesentium perferendis consequuntur porro corporis nostrum. Ad, adipisci! Obcaecati, nisi voluptate! Ex dolorem, laudantium incidunt maiores veniam quisquam!
				</li>
				<li>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur officiis magni ducimus praesentium perferendis consequuntur porro corporis nostrum. Ad, adipisci! Obcaecati, nisi voluptate! Ex dolorem, laudantium incidunt maiores veniam quisquam!
				</li>
				<li>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur officiis magni ducimus praesentium perferendis consequuntur porro corporis nostrum. Ad, adipisci! Obcaecati, nisi voluptate! Ex dolorem, laudantium incidunt maiores veniam quisquam!
				</li>
			</ol>
		</div>
		<div className='confirmButtonHolder'>
			<SMButton
				onClick={() => {
					bookFunction(userId, {
						bookingDate: inputs.bookingDate,
						bookingStartTime: inputs.startTime,
						bookingEndTime: inputs.endTime,
						bookingStartLocation: inputs.startLoc,
						bookingEndLocation: inputs.endLoc
					}, navigate)
				}}
				label={'Confirm'}
				variant={'contained'} />
		</div>
	</div >
}

export default Book