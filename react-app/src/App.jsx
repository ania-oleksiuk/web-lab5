import { useState, useEffect } from "react";
import Header from './components/Header';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const hour = new Date().getHours();
    setIsDark(hour < 7 || hour >= 21);
  }, []);

  useEffect(() => {
    document.body.className = isDark ? "dark-mode" : "";
  }, [isDark]);

  return (
    <div className={isDark ? "bg-gray-900 min-h-screen text-gray-100" : "bg-gray-100 min-h-screen text-gray-900"}>
      <Header isDark={isDark} onToggleTheme={() => setIsDark(d => !d)} />
      <main className="max-w-3xl mx-auto">
        <Education isDark={isDark} />
        <Experience isDark={isDark} />
        <Skills isDark={isDark} />
        <Reviews isDark={isDark} />
      </main>
      <Footer isDark={isDark} />
      <ContactForm isDark={isDark} />
    </div>
  );
}

export default App;
