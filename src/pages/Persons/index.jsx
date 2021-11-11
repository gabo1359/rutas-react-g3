import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { list } from '../../actions/persons/list'
import { lista } from '../../actions/Mascotas/list'

const Persons = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(list())
  }, [dispatch])

  useEffect(() => {
    dispatch(lista())
  }, [dispatch])

  const person = useSelector((store) => store.person)
  
  const mascota = useSelector((store) => store.mascota)
  console.log(mascota)

  return (
    <>
      <div>
      Persons:
      <ul>
        {!person.loading && person.data.length > 0 ?
          person.data.map((d) => (
            <li>{`${d.nombres} ${d.apellidos}`}</li>
          ))
        : <h4>Loading ..!</h4>}
      </ul>
      </div>
          <div>
          Mascotas:
          <ul>
        {!mascota.loading && mascota.data.length > 0 ?
          mascota.data.map((d) => (
            <li>{`${d}`}</li>
          ))
        : <h4>Loading ..!</h4>}
      </ul>
        </div>
    </>
  )
}

export default Persons
