import { React, useState, useEffect } from 'react';
import '../Styling/App.css';
import Header from './Header';
import CardGrid from './CardGrid';
import Footer from './Footer';

function App() {
  const [amount, setAmount] = useState(10);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [owens, setOwens] = useState([]);
  const [clickedOwens, setClickedOwens] = useState([]);
  const [difficulty, setDifficulty] = useState("easy")

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
    const currentOwen = timestamp;
    if (clickedOwens.includes(currentOwen)) {
      resetGame();
    } else {
      setClickedOwens((prevState) => [...prevState, currentOwen]);
      const newScore = currentScore + 1;
      setCurrentScore(newScore);
      if (newScore > bestScore) setBestScore(newScore);
    }
    setOwens(shuffleArray(owens));
  };

  const resetGame = () => {
    setCurrentScore(0);
    setClickedOwens([]);
  };

  const handleDifficulty = (event) => {
    resetGame();
    setBestScore(0);
    setDifficulty(event.target.value);
  }

  const handleSliderChange = (event) => {
    setAmount(event.target.value);
  }

  const handleSliderClick = (event) => {
    resetGame();
    setBestScore(0);
    const load = (async () => {
      setOwens(shuffleArray(await getOwens()))
    })();
  }

  return (
    <div className="app">
      <Header
        currentScore={currentScore}
        bestScore={bestScore}
        onDifficultyChange={handleDifficulty}
        difficulty={difficulty}
        onSliderChange={handleSliderChange}
        amount={amount}
        onSliderClick={handleSliderClick}/>
      <CardGrid
        owens={owens}
        onCardClick={handleCardClick}
        difficulty={difficulty} />
      <Footer/>
    </div>
  );
}

export default App;
