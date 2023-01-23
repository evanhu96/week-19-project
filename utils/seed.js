const connection = require('../config/connection');
const { User,Thought } = require('../models');
const { getRandomName, getRandomAssignments } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing courses
  await Thought.deleteMany({});

  // Drop existing users
  await User.deleteMany({});

  // Create empty array to hold the users
 var users = []
  // Loop 20 times -- add users to the users array
  for (let i = 0; i < 20; i++) {
    // Get some random assignment objects using a helper function that we imported from ./data
    const assignments = getRandomAssignments(20);

    const fullName = getRandomName();
    
    const github = `${fullName}${Math.floor(Math.random() * (99 - 18 + 1) + 18)}@email.com`;

    users.push({
      username: fullName,
      email:github,
      // assignments,
    });
  }

  // Add users to the collection and await the results
  await User.collection.insertMany(users);

  // Add courses to the collection and await the results
 
  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
