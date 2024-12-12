import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Anecdote = ({ text, points }) => {
  return (
    <div>
      <p>{text}</p>
      <p> This anecdote has {points} votes</p>
    </div>
  );
};

const MostPoints = ({ allPoints, anecdotes }) => {
  const highestPoints = Math.max(...allPoints);
  console.log(highestPoints);

  const pointsIndex = allPoints.indexOf(highestPoints);
  console.log(pointsIndex);

  const mostVoted = anecdotes[pointsIndex];
  console.log(mostVoted);

  if (highestPoints === 0) {
    return <p>No votes yet.</p>;
  }

  return (
    <div>
      <p>{mostVoted}</p>
      <p>has {highestPoints} votes</p>
    </div>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);

  const handleNextClick = () => {
    const randomText = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomText);
  };

  const [allPoints, setAllPoints] = useState(Array(anecdotes.length).fill(0));
  console.log(allPoints);

  const handlePoints = () => {
    const totalPoints = [...allPoints];
    totalPoints[selected] += 1;
    setAllPoints(totalPoints);
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote text={anecdotes[selected]} points={allPoints[selected]} />
      <Button handleClick={handleNextClick} text={"Next anecdote"} />
      <Button handleClick={handlePoints} text={"Vote"} />
      <h1>Anecdote with the most votes</h1>
      <MostPoints allPoints={allPoints} anecdotes={anecdotes} />
    </div>
  );
};

export default App;
