import { useState, useEffect } from 'react';
import data from './data';
import Articol from './Articol';

const getThemeFromLocalStorage = () => {
  if (localStorage.getItem('theme')) {
    return localStorage.getItem('theme');
  } else {
    return 'light-mode';
  }
};

function App() {
  const [theme, setTheme] = useState(getThemeFromLocalStorage());

  const changeTheme = () => {
    if (theme === 'light-mode') {
      setTheme('dark-mode');
    } else {
      setTheme('light-mode');
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <section className='section-center'>
      <div className='container'>
        <button className='btn' onClick={changeTheme}>
          Change theme
        </button>
        <section className='article-section'>
          {data.map((el) => (
            <Articol key={el.id} {...el} />
          ))}
        </section>
      </div>
    </section>
  );
}

export default App;
