import { useState } from "react";
import { VaccinationController } from "./components";

function App() {
  const [personIds, setPersonIds] = useState(['a'])
  
  function returnVaccinationController() {
    return (
      <VaccinationController />
    )
  }

  function addPerson() {
    const newPersonIds = [...personIds]
    newPersonIds.push('a')
    setPersonIds(newPersonIds)
  }

  return (
    <div className="App">
      {personIds.map(returnVaccinationController)}
      <button onClick={addPerson}>Add another vaccination controller</button>
    </div>
  );
}

export default App;
