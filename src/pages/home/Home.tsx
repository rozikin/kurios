import React, { LegacyRef, useCallback, useEffect, useRef } from 'react'
import './Home.scss'
import Header from '../../components/header/Header'
import { FIELD_BINDER, MENU_ITEMS } from '../../constants/constants'
import { useBinder } from '../../utilities/binder'
import SliderView from '../../components/slider/view/SliderView'
import Footer from '../../components/footer/Footer'

function Home() {
  const bodyRef: LegacyRef<HTMLDivElement> = useRef(null)
  const fieldBinder = useBinder(FIELD_BINDER)



  useEffect(() => {
    const body = bodyRef.current


    if (body !== null) {
      body.onclick = () => {
        fieldBinder.dispatch()
      }
    }
  }, [fieldBinder])

  const searcCallBack = useCallback((query: string) => {
    console.log(query)
  }, [])

  return (
    <div ref={bodyRef} className="home">
      <Header searchCallback={searcCallBack} />
      <div style={{ height: '2000px' }}>

        <SliderView />

     
      </div>
      <Footer />
    </div >
  );
}


export default Home
