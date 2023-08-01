import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import SortBar from './SortBar';
import './App.css';

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

  const enlistBot = (bot) => {
    if (!enlistedBots.some((enlistedBot) => enlistedBot.bot_class === bot.bot_class)) {
      setEnlistedBots([...enlistedBots, bot]);
    }
  };

  const releaseBot = (bot) => {
    const updatedEnlistedBots = enlistedBots.filter((b) => b.id !== bot.id);
    setEnlistedBots(updatedEnlistedBots);
  };

  const dischargeBot = async (bot) => {
    try {
      await axios.delete(`http://localhost:8001/bots/${bot.id}`);
      releaseBot(bot);
    } catch (error) {
      console.error('Error discharging bot:', error);
    }
  };

  const sortedBots = bots.slice().sort((a, b) => b[sortKey] - a[sortKey]);

  return (
    <div className="container">
      <div className="header">
        <h1>Welcome to Bot Battlr</h1>
        <SortBar handleSort={handleSort} />
      </div>
      <BotCollection bots={sortedBots} enlistBot={enlistBot} />
      <YourBotArmy enlistedBots={enlistedBots} releaseBot={releaseBot} dischargeBot={dischargeBot} />
    </div>
  );
};

export default App;
