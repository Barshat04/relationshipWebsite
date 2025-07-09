const config = {
  /* 
  ████████████████████████████████████████
  🔧 BASIC SETTINGS (EDIT FREELY)
  ████████████████████████████████████████
  */

  // 🔐 Passcode Page
  correctPasscode: "0320", // Change this to any 4-digit code (the passcode for access)
  passcodeTitle: "Enter Passcode", // Title displayed on the passcode entry page
  successMessage: "Yayy!! :)", // Message shown upon successful passcode entry
  redirectMessage: "Redirecting...", // Message displayed while redirecting after success
  incorrectPasscodeMessage: "Incorrect passcode, hint: our anniversary date!", // Message shown for incorrect passcode
  cancelButtonText: "Cancel", // Text for the cancel button

  // 🔍 Question Page
  searchPlaceholder: "Search Google or type a URL", // Placeholder text in the search input
  trendingTitle: "Trending searches", // Title for the trending searches section
  trendingSearches: [
    "Why is my bf so cute?", // Example trending search query
    "Why does Monika love him more?", // Another example query
    `Monika's birthdate (coz her bf forgets everything)`, // A personalized trending search
  ],
  proTip: 'Pro tip: try searching "How long have we been together?" ;)', // Helpful tip for users

  // ⏳ Timer Page
  anniversaryDate: "2020-03-20", // 📅 Set your anniversary date here (used for the timer)
  timerTitle: "We've been together for:", // Title displayed on the timer page
  timerMessage: "... and still counting <3", // Message shown alongside the timer
  timeUnits: {
    days: "Days", // Label for days in the timer
    hours: "Hours", // Label for hours in the timer
    minutes: "Minutes", // Label for minutes in the timer
    seconds: "Seconds", // Label for seconds in the timer
  },

  // 📸 Recap Page
  recapTitle: "Let's recap our time together", // Title for the recap page
  clickMeText: "Click me!", // Text prompting users to interact

  recapSections: [
    { label: "Messages", path: "/recap/message", icon: "Message" }, // Section for messages
    { label: "Pictures", path: "/recap/pictures", icon: "Image" }, // Section for pictures
    { label: "Music", path: "/recap/music", icon: "Music" }, // Section for music
  ],

  // 🎵 Music Page
  musicTitle: "Songs that remind me of you", // Title for the music page
  musicGallery: [
    {
      title: "Heavenly", // Title of the song
      artist: "Cigarettes After Sex", // Artist of the song
      left: "5%", // Positioning on the page
      top: "5%", // Positioning on the page
    },
    {
      title: "THe Night we met",
      artist: "Lord Huron",
      left: "40%",
      top: "15%",
    },
    {
      title: "Say you won't let go",
      artist: "James Arthur",
      left: "15%",
      top: "40%",
    },
    {
      title: "Chhithi Bhitra",
      artist: "Sajjan Raj Vaidya",
      left: "30%",
      top: "75%",
    },
    {
      title: "Kabhi Kabhi Mere Dil Mein",
      artist: "Mukesh",
      left: "5%",
      top: "65%",
    },
    {
      title: "Pehla Pyar",
      artist: "Armaan Malik",
      left: "25%",
      top: "90%",
    },
    {
      title: "Maya Ma",
      artist: "Sushant KC",
      left: "35%",
      top: "50%",
    },
    {
      title: "Apocalypse",
      artist: "Cigarettes After Sex",
      left: "10%",
      top: "25%",
    },
  ],

  // 📝 Message Recap Page
  messageTitle: "Your first wish", // Title for the messages recap page
  messageGallery: [
    {
      title: "Your first new year wish",
      description:
        "I still remember this nightt. it felt like heaven reading your wish. I had imagined my life with you already ❤️❤️",
    },
  ],

  // 📸 Picture Recap Page
  pictureTitle: "My Memories in 3 frames📸", // Title for the pictures recap page
  pictureGallery: [
    {
      title: "December 2020",
      description: "The gorgeous cutie I fell in love with❤️❤️",
    }, // Picture entry
    {
      title: "May, 2022",
      description: "The picture that got me through high school 💕",
    },
    {
      title: "December, 2024",
      description: "Seeing you evolve from cutest to hottest. Don Monika😎",
    },
  ],

  // 💌 Love Letter Page
  loveLetterMessage: "Hi mero mutu, I love you so soooo much💖", // Message displayed on the love letter page

  // 🎇 Closing Page
  closingMessage:
    "Thank you for being in my life, baby! 80% bata 100% vayo ta?😝", // Closing message displayed

  /* 
  ████████████████████████████████████████
  ⚠️ ADVANCED SETTINGS (DO NOT TOUCH UNLESS YOU KNOW WHAT YOU'RE DOING)
  ████████████████████████████████████████
  */

  // 📌 Paths (Only change if you are a developer or modifying routes)
  redirectPath: "/question", // Path to redirect after passcode entry
  timerRedirectPath: "/timer", // Path to redirect to the timer page
  questionRedirectPath: "/question", // Path to redirect to the question page
  recapRedirectPath: "/recap", // Path to redirect to the recap page
  recapPreviousPage: "/timer", // Path to the previous page in the recap
  recapNextPage: "/letter", // Path to the next page in the recap
  letterNextPage: "/closing", // Path to the next page after the letter
  letterPreviousPage: "/letter", // Path to the previous page before the letter
  previousPageText: "Previous page", // Text for the previous page button
  nextPageText: "Next page", // Text for the next page button

  // 🔍 Search Queries (Only change if modifying search functionality)
  correctSearchQueries: [
    "How long have we been together?", // Example of a correct search query
    "how long have we been together", // Another example of a correct search query
  ],
};

export default config;
