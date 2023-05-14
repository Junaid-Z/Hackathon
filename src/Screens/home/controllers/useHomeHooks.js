import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import filterRow from '../../../components/SMTable/functions'

const useHomeHooks = () => {
	let [filtered, setFiltered] = useState([])
	const [search, setSearch] = useState({ term: '', cat: '' })
	const [cars, setCars] = useState([])
	let navigate = useNavigate()
	console.log(search);
	let cols = [
		{ value: 'availability', displayName: 'Availability' },
		{ value: 'car', displayName: 'Car' },
		{ value: 'car_color', displayName: 'Car Color' },
		{ value: 'car_model', displayName: 'Model' },
		{ value: 'car_model_year', displayName: 'Model Year' },
		{ value: 'car_vin', displayName: 'VIN' },
		{ value: 'price', displayName: 'Price' },
	]
	useEffect(() => {
		axios.get('https://myfakeapi.com/api/cars/').then((res) => {
			console.log(res.data);
			setCars(res.data.cars);
		})
	}, [setCars])
	useEffect(() => {
		setFiltered(cars.filter((car) => filterRow(car, cols, search.term, search.cat)))
	}, [cars, search])
	return {
		cars,
		setCars,
		navigate,
		search,
		setSearch,
		filtered,
		cols
	}
}

export default useHomeHooks