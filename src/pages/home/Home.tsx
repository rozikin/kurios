import React, { LegacyRef, useCallback, useEffect, useRef } from 'react'
import './Home.scss'
import Header from '../../components/header/Header'
import { FIELD_BINDER, MENU_ITEMS } from '../../constants/constants'
import { useBinder } from '../../utilities/binder'

function Home() {
  const bodyRef: LegacyRef<HTMLDivElement> = useRef(null)
  const fieldBinder = useBinder(FIELD_BINDER)

  const nilaiARef: LegacyRef<HTMLInputElement> = useRef(null)
  const nilaiBRef: LegacyRef<HTMLInputElement> = useRef(null)
  const hasilRef: LegacyRef<HTMLInputElement> = useRef(null)
  const tambahRef: LegacyRef<HTMLButtonElement> = useRef(null)
  const kurangRef: LegacyRef<HTMLButtonElement> = useRef(null)


  useEffect(() => {
    const body = bodyRef.current

    const nilaiA =  nilaiARef.current
    const nilaiB =  nilaiBRef.current
    const hasil =  hasilRef.current
    const tambah =  tambahRef.current
    const kurang =  kurangRef.current

    if(nilaiA !== null && nilaiB !== null && hasil !==null && tambah !==null && kurang !== null){
      tambah.onclick = () =>{
        hasil.value = parseInt(nilaiA.value) + parseInt(nilaiB.value)+""
      }
      kurang.onclick = () =>{
        hasil.value = parseInt(nilaiA.value) - parseInt(nilaiB.value)+""
      }
      
    }


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

        <div className="home-calculator">Ini kalkulator</div>
        <input ref={nilaiARef} className="search-bar-input-a" type="text" placeholder="Nilai A." />
        <input ref={nilaiBRef} className="search-bar-input-b" type="text" placeholder="Nilai b." />
        <button ref={tambahRef} style={{ width: '120px' }}>+</button>
        <button ref={kurangRef} style={{ width: '120px' }}>-</button>
        <input ref={hasilRef} className="search-bar-input-hasil" type="text" placeholder="Hasil." />

      </div>
    </div >
  );
}


export default Home
