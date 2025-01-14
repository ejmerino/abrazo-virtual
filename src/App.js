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
    "La felicidad no es un destino, es una forma de viajar. 🚀",
    "Aunque hoy sea difícil, el mañana puede traer algo hermoso. 🌈",
    "La paz comienza con una sonrisa. 😊",
    "El amor propio es el primer paso hacia la sanación. 💖",
    "Recuerda que no estás solo, siempre hay alguien dispuesto a escuchar. 🫶",
    "Cada pequeño paso cuenta, no subestimes tus logros. 🦶",
    "El dolor es real, pero también lo es la fuerza que tienes para superarlo. 🌻",
    "Es válido tener días difíciles, pero no olvides que eres capaz de salir adelante. ✨",
    "No tienes que ser perfecto, solo tienes que ser tú. 🌷",
    "El sol siempre vuelve a brillar, aunque a veces no lo veamos. ☀️",
    "La oscuridad no dura para siempre, siempre llega la luz. 🌅",
    "No importa lo lento que vayas, lo importante es no detenerse. 🐢",
    "Cada día es una oportunidad para sanar y ser mejor. 🌼",
    "Tú eres importante, y el mundo necesita tu luz. 🌟",
    "Los momentos difíciles son solo capítulos temporales en tu vida. 📖",
    "Hoy es un buen día para empezar a cuidar de ti mismo. 🛀",
    "Confía en el proceso de la vida. El tiempo tiene su propio ritmo. ⏰",
    "Eres suficiente tal y como eres. 💫",
    "Permítete descansar, no eres una máquina. 🛏️",
    "La vida te da lo que necesitas, aunque a veces no lo entiendas. 🌸",
    "Recuerda que los días grises también pasan, y llega la calma. 🌤️"
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
  <header className="bg-white dark:bg-gray-800 shadow p-4 flex justify-center items-center transition-colors duration-500">
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold italic text-center">{quote}</h1>
  </header>

  <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
    <button
      onClick={toggleDarkMode}
      className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 dark:bg-gray-600 rounded-full shadow-lg transition-transform duration-500 transform hover:scale-110"
      aria-label="Toggle Dark Mode"
    >
      {darkMode ? <FaSun className="text-yellow-400 w-6 h-6 sm:w-7 sm:h-7" /> : <FaMoon className="text-blue-400 w-6 h-6 sm:w-7 sm:h-7" />}
    </button>
  </div>

      <main className="p-8 space-y-16">
        {/* Frases Motivadoras */}
        {/* <section className="text-center">
          <p className="text-lg italic">"{quote}"</p>
        </section> */}

        {/* Otras secciones aquí */}
      </main>

      <footer className="bg-gray-200 dark:bg-gray-700 text-center p-4 mt-8 transition-colors duration-500">
        <p>Hecho con ❤️ para ayudar a quienes lo necesitan.</p>
      </footer>
    </div>
  );
}

export default App;
