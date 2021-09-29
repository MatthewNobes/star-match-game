import React  from 'react';
import { useState } from 'react';
import './App.css';

const ButtonNumber = props => (
  <button 
    className="number"
    style={{backgroundColor: colors[props.status]}}
    onClick={() => props.onClick(props.number, props.status)}
    >
      {props.number}
  </button>
)

const StarElement = props => (
  utils.range(1, props.count).map(starId => 
    <div key={starId} className="star"/>
  )
)

const PlayAgain = props => (
  <div className='game-done'>
    <button onClick={props.onClick}>Play Again</button>
  </div>
)

const StarMatch = () => {
  const [stars, appendStars] = useState(utils.random(1, 9));
  const [candidateNums, appendCandidateNums] = useState([]);
  const [availableNums, appendAvailableNums] = useState(utils.range(1, 9));

  const candidatesAreWrong = utils.sum(candidateNums) > stars;

  const gameIsDone = availableNums.length === 0;

  const resetGame = () => {
    appendStars(utils.random(1, 9))
    appendAvailableNums(utils.range(1, 9))
    appendCandidateNums([])
  }

  const numberStatus = (number) => {
    if (!availableNums.includes(number)) {
      return 'used';
    } 
    if (candidateNums.includes(number)) {
      return candidatesAreWrong ? 'wrong' : 'candidate';
    }
    return 'available';
  }

  const onNumberClick = (number, currentStatus) => {
    if (currentStatus === 'used') {
      return;
    }
    
    const newCandidateNumbers = 
      currentStatus === 'available' 
        ? candidateNums.concat(number)
        : candidateNums.filter(cn => cn !== number)

    if (utils.sum(newCandidateNumbers) !== stars) {
      appendCandidateNums(newCandidateNumbers)
    } else {
      const newAvailableNums = availableNums.filter(
        n => !newCandidateNumbers.includes(n)
      )
      appendAvailableNums(newAvailableNums);
      appendCandidateNums([]);
      appendStars(utils.randomSumIn(newAvailableNums, 9))
    }

  }

  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          {gameIsDone ? (
            <PlayAgain onClick={resetGame}/>
          ) : (
            <StarElement 
              count={stars}
            />
          )}
        </div>
        <div className="right">
        {utils.range(1, 9).map(number => 
            <ButtonNumber 
              key={number} 
              status={numberStatus(number)}
              number={number} 
              onClick={onNumberClick}
            />
          )}
        </div>
      </div>
      <div className="timer">Time Remaining: 10</div>
    </div>
  );
};

// Color Theme
const colors = {
  available: 'lightgray',
  used: 'lightgreen',
  wrong: 'lightcoral',
  candidate: 'deepskyblue',
};

// Math science
const utils = {
  // Sum an array
  sum: arr => arr.reduce((acc, curr) => acc + curr, 0),

  // create an array of numbers between min and max (edges included)
  range: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i),

  // pick a random number between min and max (edges included)
  random: (min, max) => min + Math.floor(Math.random() * (max - min + 1)),

  // Given an array of numbers and a max...
  // Pick a random sum (< max) from the set of all available sums in arr
  randomSumIn: (arr, max) => {
    const sets = [[]];
    const sums = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0, len = sets.length; j < len; j++) {
        const candidateSet = sets[j].concat(arr[i]);
        const candidateSum = utils.sum(candidateSet);
        if (candidateSum <= max) {
          sets.push(candidateSet);
          sums.push(candidateSum);
        }
      }
    }
    return sums[utils.random(0, sums.length - 1)];
  },
};

export default function App() {
  return(
    <StarMatch />
  )
}
