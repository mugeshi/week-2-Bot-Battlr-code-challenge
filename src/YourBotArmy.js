import React from 'react';
import BotCard from './BotCard';


const YourBotArmy = ({ enlistedBots, releaseBot, dischargeBot }) => {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      {enlistedBots.map((bot) => (
        <BotCard
          key={bot.id}
          bot={bot}
          handleClick={() => releaseBot(bot)}
          showDeleteButton
          handleDelete={() => dischargeBot(bot)}
        />
      ))}
    </div>
  );
};

export default YourBotArmy;



