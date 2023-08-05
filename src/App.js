import React, { useState, useEffect } from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import SortBar from './SortBar';
import './App.css';

function App() {
  // State variables to hold the bot data, your bot army, and the sorting option
  const [bots, setBots] = useState([]);
  const [yourBotArmy, setYourBotArmy] = useState([]);
  const [sortBy, setSortBy] = useState(null);

  // Fetch bot data from the server when the component mounts
  useEffect(() => {
    fetchBotData();
  }, []);

  // Function to fetch bot data from the server
  const fetchBotData = async () => {
    try {
      const response = await fetch('https://bot-app-data.onrender.com/bots');
      const data = await response.json();
      setBots(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Function to add a bot to your bot army
  const addToYourBotArmy = (bot) => {
    if (!yourBotArmy.find((b) => b.id === bot.id)) {
      setYourBotArmy((prevArmy) => [...prevArmy, bot]);
    }
  };

  // Function to remove a bot from your bot army
  const removeFromYourBotArmy = (bot) => {
    setYourBotArmy((prevArmy) => prevArmy.filter((b) => b.id !== bot.id));
  };

  // Function to handle bot deletion from the server
  const handleBotDeletion = async (botId) => {
    try {
      await fetch(`https://bot-app-data.onrender.com/bots/${botId}`, {
        method: 'DELETE',
      });

      setBots((prevBots) => prevBots.filter((bot) => bot.id !== botId));
    } catch (error) {
      console.error('Error deleting bots:', error);
    }
  };

  // Function to handle sorting change
  const handleSortChange = (sortBy) => {
    setSortBy(sortBy);
  };

  return (
    <div className="App">
      {/* Display your bot army */}
      <YourBotArmy
        bots={bots}
        yourBotArmy={yourBotArmy}
        removeFromArmy={removeFromYourBotArmy}
        botDeletion={handleBotDeletion}
      />
      {/* Display the sorting bar */}
      <SortBar onSortChange={handleSortChange} />
      {/* Display the bot collection */}
      <BotCollection bots={bots} addToArmy={addToYourBotArmy} sortBy={sortBy} />
    </div>
  );
}

export default App;
