// App.scss bevat Bootstrap + mijn eigen kleuren
import './App.scss'

// Tijdelijke testpagina om te checken of Bootstrap en mijn kleuren werken
function App() {
  return (
    <div className="container py-5">
      <h1 className="text-primary">Portfolio Florian</h1>
      <p>Als de knoppen hieronder mijn eigen kleuren hebben, werkt Bootstrap met SASS.</p>
      <button className="btn btn-primary me-2">Primary</button>
      <button className="btn btn-secondary">Secondary</button>
    </div>
  )
}

export default App