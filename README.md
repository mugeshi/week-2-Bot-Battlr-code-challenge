Bot Battlr
Welcome to Bot Battlr, the one and only spot in the known universe where you can custom build your own Bot Army!

Introduction
Bot Battlr is a React application that allows users to browse through a list of robots, view a robot's details, enlist bots into their army, release bots from their army, and even discharge bots forever.

Getting Started
To get started with the project, follow these steps:

Clone the repository from GitHub.
Navigate to the project directory.
Install the dependencies by running: npm install
Create a db.json file in the project directory with the data provided in the project guidelines.
Run the JSON DB server by executing: json-server --watch db.json
Test the server by visiting this route in the browser: http://localhost:8001/bots
Usage
As a user, you can perform the following actions in the application:

View profiles of all bots rendered in BotCollection.
Add an individual bot to your army by clicking on it. The selected bot will render in the YourBotArmy component. A bot can be enlisted only once.
Release a bot from your army by clicking on it. The bot will disappear from the YourBotArmy component.
Discharge a bot from your service forever by clicking the red button marked "x," which will delete the bot both from the backend and from the YourBotArmy on the frontend.
Advanced Deliverables (Optional)
If you have extra time or want to challenge yourself further, consider implementing the following additional features:

Display a show view (BotSpecs) for a bot when clicking on the card in BotCollection. The show view should have buttons to go back to the list view and to enlist that bot.
Sort bots by their health, damage, or armor using a new component, SortBar.
Filter bots by their class, allowing multiple filters at the same time.
Enlist only one bot from each bot_class (classes: ["Support", "Medic", "Assault", "Defender", "Captain", "Witch"]).

License
This project is licensed under the MIT License. Feel free to use, modify, and distribute the code as per the terms of the MIT License.

Author
Nicole Mugeshi
