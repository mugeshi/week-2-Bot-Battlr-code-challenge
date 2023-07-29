import React, { useState } from 'react';
import BotCard from './BotCard';

const BotCollection = ({ bots, enlistBot }) => {
  const [filterClass, setFilterClass] = useState('');

  const filteredBots = filterClass
    ? bots.filter((bot) => bot.bot_class === filterClass)
    : bots;

  return (
    <div>
      <h2>Available Bots</h2>
      <div>
        <label htmlFor="filter">Filter by Class: </label>
        <select id="filter" onChange={(e) => setFilterClass(e.target.value)}>
          <option value="">All</option>
          <option value="Support">Support</option>
          <option value="Medic">Medic</option>
          <option value="Assault">Assault</option>
          <option value="Defender">Defender</option>
          <option value="Captain">Captain</option>
          <option value="Witch">Witch</option>
        </select>
      </div>
      <div>
        {filteredBots.map((bot) => (
          <BotCard key={bot.id} bot={bot} handleClick={() => enlistBot(bot)} />
        ))}
      </div>
    </div>
  );
};

export default BotCollection;
