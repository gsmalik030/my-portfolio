import './App.css';
import Round from './components/roundDesigns/Round';
import Home from './Home';

function App() {
  return (
    <section className="w-full h-screen font-bodyfont text-textColor bg-black relative">
      <section className="max-w-screen-2xl h-full mx-auto flex justify-center items-center">
        <Home />
      </section>
      <Round />
    </section>
  );
}

export default App;
