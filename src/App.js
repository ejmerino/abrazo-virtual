import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [quote, setQuote] = useState(''); // Estado para almacenar la frase motivadora

  const quotes = [
    "La vida tiene altibajos, pero siempre hay algo por lo que sonreír. 🌟",
    "Cada día es una nueva oportunidad para comenzar de nuevo. 🌱",
    "No te rindas, las grandes cosas llevan tiempo. ⏳",
    "Tú eres más fuerte de lo que piensas. 💪",
    "La felicidad no es un destino, es una forma de viajar. 🚀"
  ];

  // Función para elegir una frase aleatoria
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  // Cambiar entre modos claro y oscuro
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Función para elegir una frase aleatoria
  useEffect(() => {
    getRandomQuote();
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      <header className="bg-white dark:bg-gray-800 shadow p-4 flex justify-between items-center transition-colors duration-500">
        <h1 className="text-2xl font-bold">Abrazo Virtual</h1>
        <button
          onClick={toggleDarkMode}
          className="flex items-center justify-center w-10 h-10 bg-gray-200 dark:bg-gray-600 rounded-full shadow-lg transition-transform duration-500 transform hover:scale-110"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? <FaSun className="text-yellow-400 w-6 h-6" /> : <FaMoon className="text-blue-400 w-6 h-6" />}
        </button>
      </header>

      <main className="p-8 space-y-16">
        {/* Frases Motivadoras */}
        <section className="text-center">
          <p className="text-lg italic">"{quote}"</p>
        </section>

        {/* Otras secciones aquí */}
      </main>

      <footer className="bg-gray-200 dark:bg-gray-700 text-center p-4 mt-8 transition-colors duration-500">
        <p>Hecho con ❤️ para ayudar a quienes lo necesitan.</p>
      </footer>
    </div>
  );
}

export default App;
