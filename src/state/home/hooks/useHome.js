import { useStateValue } from '../../index'
import { loadHome } from '../queries'
import { listHome } from '../actions'
import useLoader from '../../loader/hooks/useLoader'

const useHome = () => {
  const [{ home }, dispatch] = useStateValue()
  const [load, setLoad] = useLoader();

  const request = async () => {
    setLoad(true)

    const response = await loadHome();
    if (response) {
      dispatch(listHome(response))
    } else {
      const err = []
      dispatch(listHome(err))
    }
    setLoad(false)
  }

  return [home, request]
}

export default useHome
