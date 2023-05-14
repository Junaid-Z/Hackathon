import React from 'react'
import useDetailHooks from './hooks/useDetailHooks'
import '../../Style/Details.css'
import SMButton from '../../components/SMButton'
const Detail = () => {
	let { car, navigate } = useDetailHooks()
	return (<div className='carDetailPage'>
		<div className='bookedCarImage'>
			<img src="https://www.gannett-cdn.com/-mm-/29bd8e133ab561e957a19005a7fab827f0b38350/c=468-534-2520-1692/local/-/media/USATODAY/GenericImages/2014/08/29/1409346657000-2014-Chevrolet-CruzeRS-010-1-.jpg" alt="" />
		</div>
		<div><span className='field'>Car Name:</span>{car.car}</div>
		<div><span className='field'>Car Color:</span>{car.car_color}</div>
		<div><span className='field'>Car Model:</span>{car.car_model}</div>
		<div><span className='field'>Car Model Year:</span>{car.car_model_year}</div>
		<div><span className='field'>Car VIN:</span>{car.car_vin}</div>
		<div><span className='field'>Price:</span>{car.price}</div>
		<div><span className='field'>availability:</span>{car.availability ? 'available' : 'unavailbale'}</div>
		<SMButton
			onClick={() => { navigate(`/book/${car.id}`) }}
			label={'Book now'}
			variant={'contained'} />
	</div>
	)
}

export default Detail