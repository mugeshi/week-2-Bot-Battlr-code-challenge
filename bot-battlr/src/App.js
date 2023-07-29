import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import SortBar from './SortBar';
import './index.css';

const App = () => {
  const [bots, setBots] = useState([]);
  const [enlistedBots, setEnlistedBots] = useState([]);
  const [sortKey, setSortKey] = useState('health'); // Default sort key

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8001/bots');
      setBots(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSort = (key) => {
    setSortKey(key);
  };

  // Function to enlist a bot into the army
  const enlistBot = (bot) => {
    if (!enlistedBots.some((enlistedBot) => enlistedBot.bot_class === bot.bot_class)) {
      setEnlistedBots([...enlistedBots, bot]);
    }
  };

  // Function to release a bot from the army
  const releaseBot = (bot) => {
    const updatedEnlistedBots = enlistedBots.filter((b) => b.id !== bot.id);
    setEnlistedBots(updatedEnlistedBots);
  };

  // Function to discharge a bot from service (delete from backend and from enlistedBots)
  const dischargeBot = async (bot) => {
    try {
      await axios.delete(`http://localhost:8001/bots/${bot.id}`);
      releaseBot(bot);
    } catch (error) {
      console.error('Error discharging bot:', error);
    }
  };

  // Sort the bots array based on the selected sortKey
  const sortedBots = bots.slice().sort((a, b) => b[sortKey] - a[sortKey]);

  return (
    <div>
      <h1>Welcome to Bot Battlr</h1>
      <SortBar handleSort={handleSort} />
      <BotCollection bots={sortedBots} enlistBot={enlistBot} />
      <YourBotArmy enlistedBots={enlistedBots} releaseBot={releaseBot} dischargeBot={dischargeBot} />
    </div>
  );
};

export default App;
