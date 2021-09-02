import './CanPersonBeVaccinated.css'

export function CanPersonBeVaccinated({ person }) {
  const canBeVaccinated = person.age >= 15
  
  return <p className="myClass">
    {
      canBeVaccinated ? "You can already be vaccinated" : "You still cannot be vaccinated"
    }
  </p>
}