// Define the array of messages
const messages = [
    "Today is a good day to be awesome!",
    "Don't worry, be happy!",
    "Keep calm and carry on!",
    "Be the change you want to see in the world!",
    "The only way to do great work is to love what you do!"
  ];
  
  // Generate a random number between 0 and the length of the array
  const index = Math.floor(Math.random() * messages.length);
  
  // Output the selected message to the user
  console.log(messages[index]);
  