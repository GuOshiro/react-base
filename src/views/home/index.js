import React, { useEffect } from 'react'
import useHome from '../../state/home/hooks/useHome'
import MetaTags from '../../components/MetaTags'

const Home = () => {
  const [home, setHome] = useHome();

  useEffect(() => {
    if (!home.list || home.list.length === 0) {
      setHome();
    }
  }, [home]);

  return (
    home.list ?
      (
        <>
          <MetaTags metaTags={home.list[0].metaTags} />
        </>
      )
      : ''
  )
};

export default Home
