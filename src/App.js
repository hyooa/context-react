
import './App.css';
import MainPage from './Conponent/MainPage';
import { useState } from 'react';
import { ThemeContext } from './Context/ThemeContext';


function App() {
  const  [ isDark, setIsDark ] = useState(false);
  return (
   <ThemeContext.Provider value={{isDark,setIsDark}}>
      <div className="App">
        <MainPage />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
