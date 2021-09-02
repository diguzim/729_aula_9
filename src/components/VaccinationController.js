import { useState } from "react";
import { CanPersonBeVaccinated } from "./CanPersonBeVaccinated";
import { Input } from "./Input";

export function VaccinationController() {
  const [person, setPerson] = useState({
    name: '',
    age: 0
  })

  function onChangeName(name) {
    setPerson({
      name,
      age: person.age
    })
  }

  function onChangeAge(age) {
    setPerson({
      name: person.name,
      age
    })
  }

  return (
    <div>
      <Input type="text" value={person.name} onChangeValue={onChangeName} />
      <Input type="number" value={person.age} onChangeValue={onChangeAge} />
      <CanPersonBeVaccinated person={person} />
    </div>
  )
}