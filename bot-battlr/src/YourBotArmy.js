import React from 'react';
import BotCard from './BotCard';

const YourBotArmy = ({ enlistedBots, releaseBot, dischargeBot }) => {
  return (
    <div>
      <h2>Your Bot Army</h2>
      <div>
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
    </div>
  );
};

export default YourBotArmy;
