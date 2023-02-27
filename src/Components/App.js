import { React, useState, useEffect } from 'react';
import '../Styling/App.css';
import Header from './Header';
import CardGrid from './CardGrid';
import Footer from './Footer';

function App() {
  const amount = 10;
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [owens, setOwens] = useState([null]);
  const [clickedOwens, setClickedOwens] = useState([]);

  useEffect(() => {
    const load = (async () => {
      setOwens(shuffleArray(await getOwens()))
      
    })();
  }, []);

  const shuffleArray = (array) => {
    const tempArray = array;
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = tempArray[i];
      tempArray[i] = tempArray[j];
      tempArray[j] = temp;
    }
    return tempArray;
  };

  const getOwens = async () => {
    const owenUrl = `https://owen-wilson-wow-api.onrender.com/wows/random?results=${amount}`;
    const response = await fetch(owenUrl);
    const responseOwens = await response.json();
    console.log(responseOwens);

    return responseOwens;
  };

  const handleCardClick = (timestamp) => {
    console.log(timestamp);
    const currentOwen = timestamp;
    if (clickedOwens.includes(currentOwen)) {
      resetGame();
    } else {
      setClickedOwens((prevState) => [...prevState, currentOwen]);
      setCurrentScore(currentScore++);
      if (currentScore > bestScore) setBestScore(currentScore);
    }
    setOwens(shuffleArray(owens));
  };

  const resetGame = () => {
    setCurrentScore(0);
    setClickedOwens([]);
  };



  return (
    <div className="app">
      <Header
        currentScore={currentScore}
        bestScore={bestScore}/>
      <CardGrid
        owens={owens}
        onCardClick={handleCardClick} />
      <Footer/>
    </div>
  );
}

export default App;
