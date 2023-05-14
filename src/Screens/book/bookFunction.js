import { setData } from "../../Firebase/FirebaseFunctions"

const bookFunction = (userId, data, navigate) => {
    setData('Users/' + userId + '/bookings', data)
    navigate('/home')
}

export default bookFunction