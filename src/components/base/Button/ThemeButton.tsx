import React, { useEffect, useState } from 'react';
import { SunIcon } from '../Icon/SunIcon';
import { MoonIcon } from '../Icon/MoonIcon';

type Props = {
  onClick?: () => void;
};

export const ThemeButton: React.FC<Props> = ({ onClick }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const handleThemeToggle = () => {
    setIsDark(!isDark);
    onClick?.();
  };

  return (
    <button
      onClick={handleThemeToggle}
      aria-label="Toggle theme"
      className="flex items-center"
    >
      <div className="relative w-6 h-6">
        <SunIcon
          className={`
                    absolute inset-0 transition-all duration-300 ease-in-out
                    ${isDark ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`}
        />
        <MoonIcon
          className={`
                    absolute inset-0 transition-all duration-300 ease-in-out
                    ${isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-50'}`}
        />
      </div>
    </button>
  );
};
