import React, { LegacyRef, useCallback, useEffect, useRef } from 'react'
import './Warehouse.scss'
import Header from '../../components/header/Header'
import { FIELD_BINDER, MENU_ITEMS } from '../../constants/constants'
import { useBinder } from '../../utilities/binder'
import Footer from '../../components/footer/Footer'

function Warehouse() {
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
    <div ref={bodyRef} className="Warehouse">
      <Header searchCallback={searcCallBack}/>
      <div style={{height: '2000px'}} >Warehouse </div>
      <Footer />
    </div >
  );
}


export default Warehouse
