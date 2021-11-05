import React, { LegacyRef, useCallback, useEffect, useRef } from 'react'
import './Shop.scss'
import Header from '../../components/header/Header'
import { FIELD_BINDER, MENU_ITEMS } from '../../constants/constants'
import { useBinder } from '../../utilities/binder'

function Shop() {
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
    <div ref={bodyRef} className="shop">
      <Header searchCallback={searcCallBack}/>
      <div style={{height: '2000px'}}>shop </div>
    </div >
  );
}


export default Shop
