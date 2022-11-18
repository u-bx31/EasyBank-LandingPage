import NavBar from './component/NavBar'
import Hero from './component/Hero'
function App() {
  return (
    <div className="App">
      <header className="App-Nav">
        <NavBar />
      </header>
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;
