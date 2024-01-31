import React from 'react'
import NavBar from '../../components/Navebar/NavBar'
import { useServerProvidersContext } from '../../context/ServerProvider'

function HomePage() {

    const data = useServerProvidersContext();
    console.log(data)
  return (


    <>
    <NavBar/>
    <main>
        <section>
            <div>
                <h1>home</h1>
                <p className='text-center text-[2rem] font-extrabold p-5 text-lime-600'>{data.name}</p>
            </div>
        </section>
    </main>
    </>
  )
}

export default HomePage