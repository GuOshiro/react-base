import { useStateValue } from '../../index'
import { listLoader } from '../actions'

const useLoader = () => {
  const [{ loader }, dispatch] = useStateValue()

  const request = async (isLoading) => {
    dispatch(listLoader(isLoading))
  }

  return [loader, request]
}

export default useLoader
