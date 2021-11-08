import React, { LegacyRef, useCallback, useEffect, useRef } from 'react'
import './Combed.scss'
import Header from '../../components/header/Header'
import { FIELD_BINDER, MENU_ITEMS } from '../../constants/constants'
import { useBinder } from '../../utilities/binder'
import Footer from '../../components/footer/Footer'

function Combed() {
    const bodyRef: LegacyRef<HTMLDivElement>= useRef(null)
  const fieldBinder = useBinder(FIELD_BINDER)


  useEffect(()=> {
    const body = bodyRef.current

    if(body !== null){
      body.onclick = () =>{
        fieldBinder.dispatch()
      }
    }
  },[fieldBinder])

  const searcCallBack = useCallback((query: string)=>{
    console.log(query)
  },[])

  return (
    <div ref={bodyRef} className="combed">
      <Header searchCallback={searcCallBack}/>
      <div style={{height: '2000px'}}>ckombed</div>

      <Footer />
    </div >
  );
}


export default Combed
