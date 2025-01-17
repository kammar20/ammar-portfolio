import About from './components/About';
import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';

export default function App() {
  return (
    <main className="max-w-[900px] mx-auto px-4">
      <Header />
      <About />
      <Skills />
      <Projects />
    </main>
  );
}
