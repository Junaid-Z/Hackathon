import useHomeHooks from './controllers/useHomeHooks'
import '../../Style/CarPage.css'
import SMInput from '../../components/SMInput'
import SMSelect from '../../components/SMSelect'
import SMButton from '../../components/SMButton'
import LogOut from '../../components/LogOut'
const Home = () => {
	let { filtered, navigate, search, setSearch, cols } = useHomeHooks();
	return (<div className='home'>
		<div className="tableFilter" style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", marginBottom: "20px" }}>
			<SMInput
				type="text"
				placeholder="search"
				onChange={(e) => { setSearch((prev) => ({ ...prev, term: e.target.value })) }}
				value={search.term}
				label='Search' />
			<SMSelect
				style={{ minWidth: "200px", ml: "20px", pr: '1rem' }}
				displayEmpty={false}
				label="Search by"
				value={search.cat}
				onChange={(e) => { setSearch((prev) => ({ ...prev, cat: e.target.value })) }}
				options={[{ value: "", displayName: "All Columns" }, ...cols]}
			/>
		</div>
		<div className='carCards'>
			{filtered.map((car) => <div
				key={car.id}
				onClick={() => { navigate(`/details/${car.id}`) }}
				className='carCard'>
				<div className='carImage'>
					<img src="https://www.gannett-cdn.com/-mm-/29bd8e133ab561e957a19005a7fab827f0b38350/c=468-534-2520-1692/local/-/media/USATODAY/GenericImages/2014/08/29/1409346657000-2014-Chevrolet-CruzeRS-010-1-.jpg" alt="" />
				</div>
				<div className='carDetails'>
					<div><span>Car Name:</span>{car.car}</div>
					<div><span>Car Color:</span>{car.car_color}</div>
					<div><span>Car Model:</span>{car.car_model}</div>
					<div><span>Car Model Year:</span>{car.car_model_year}</div>
					<div><span>Car VIN:</span>{car.car_vin}</div>
					<div><span>Price:</span>{car.price}</div>
					<div><span>availability:</span>{car.availability ? 'available' : 'unavailbale'}</div>
					<SMButton
						onClick={() => { navigate(`/book/${car.id}`) }}
						label={'Book now'}
						variant={'contained'} />
				</div>
			</div>)}
		</div>
		<LogOut navigate={navigate} />
	</div>
	)
}

export default Home