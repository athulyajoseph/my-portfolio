import { Navbar, Hero, About, Experience, Work, Skills, Contact } from './sections/Sections';

export default function App() {
  return (
    <>
      <a href="#about" className="skip-link">Skip to content</a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Work />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
