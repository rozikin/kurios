import React, { LegacyRef, useCallback, useEffect, useRef } from 'react'
import './Price.scss'
import Header from '../../components/header/Header'
import { FIELD_BINDER, MENU_ITEMS } from '../../constants/constants'
import { useBinder } from '../../utilities/binder'
import Footer from '../../components/footer/Footer'

function Price() {
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
    <div ref={bodyRef} className="price">
      <Header searchCallback={searcCallBack}/>
      <div style={{height: '2000px'}} >price</div>

      <Footer />
    </div >
  );
}


export default Price
