import React, { useState, useEffect } from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import './App.css';

function App() {
  // Declared variables for rendering the bots
  const [bots, setBots] = useState([]);
  const [yourBotArmy, setYourBotArmy] = useState([]);

  // Fetching the bot data from the deployed db.json
  useEffect(() => {
    fetch('https://botdata.onrender.com/bots')
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.error('Error fetching bots:', error));
  }, []);

  // Function to add a bot to the bot army
  const handleAddBotToArmy = (bot) => {
    // Check if the bot is not already in the yourBotArmy before adding
    if (!yourBotArmy.find((b) => b.id === bot.id)) {
      setYourBotArmy([...yourBotArmy, bot]);
    }
  };

  // Function to remove a bot from the yourBotArmy
  const removeFromYourBotArmy = (bot) => {
    setYourBotArmy(yourBotArmy.filter((b) => b.id !== bot.id));
  };

  // Function to delete bot from the deployed DB
  const handleBotDeletion = (botId) => {
    fetch(`https://botdata.onrender.com/bots/${botId}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then(() => {
        setBots((prevBots) => prevBots.filter((bot) => bot.id !== botId));
      })
      .catch((error) => console.error('Error deleting bots:', error));
  };

  return (
    // Rendering bots on the web page
    <div className="App">
      <YourBotArmy yourBotArmy={yourBotArmy} removeFromArmy={removeFromYourBotArmy} botDeletion={handleBotDeletion} />
      <BotCollection bots={bots} handleAddBotToArmy={handleAddBotToArmy} />
    </div>
  );
}

export default App;
