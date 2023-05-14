import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { signedIn } from "../../../Firebase/FirebaseFunctions"

const useDetailHooks = () => {
    let navigate = useNavigate()
    let [car, setcar] = useState({})
    let [userId, setUserId] = useState()
    let params = useParams()
    useEffect(() => {
        axios.get(`https://myfakeapi.com/api/cars/${params.id}`).then((res) => {
            setcar(res.data.Car)
        })
    }, [params])
    useEffect(() => {
        signedIn().onAuthStateChanged((user) => {
            if (user?.uid) {
                setUserId(user.uid)
            }
            else {
                navigate('/')
            }
        })
    }, [navigate])
    return {
        car,
        userId,
        navigate
    }
}

export default useDetailHooks