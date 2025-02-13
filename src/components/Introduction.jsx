import "../layout_css/Introduction_layout.css";

const Introduction = () => {
    return (
      <div className="introduction-container">
        <h1>What is the Pomodoro Technique?</h1>
        <p>
        The Pomodoro Technique is a popular time management method developed by Francesco Cirillo in the late 1980s. 
        The technique is designed to improve focus, productivity, and efficiency by breaking work into structured intervals, traditionally lasting 25 minutes, called "Pomodoros", followed by short breaks of about 5 minutes. After completing four Pomodoros, a longer break of 15 to 30 minutes is taken to allow for better mental recovery.
        </p>
        <p>
        The method is based on the idea that working in short bursts with scheduled breaks helps maintain concentration and prevent burnout. It leverages the principle of timeboxing, which encourages individuals to dedicate full attention to a task for a set period before taking a rest.
        </p>
        <p>
        Cirillo originally developed this system using a tomato-shaped kitchen timer, which inspired the name "Pomodoro" (Italian for "tomato"). While the traditional 25-minute work / 5-minute break cycle is commonly used, individuals often adjust the time intervals based on their personal productivity rhythms and the nature of their tasks.
        </p>
        <p>
        The Pomodoro Technique is widely used by students, professionals, and creatives who struggle with procrastination, distractions, or task overload. By promoting deep work, minimizing interruptions, and encouraging a sense of urgency, the method helps users stay engaged, track progress, and enhance efficiency throughout the day.
        </p>
        <p>
        In modern applications, the Pomodoro Technique is often integrated into productivity tools and time-tracking apps, making it easier for users to implement and customize the approach in their daily routines.
        </p>
        <h2>How it works:</h2>
        <ul>
          <li>Choose a task you want to work on.</li>
          <li>Set a timer for 25 minutes (Pomodoro).</li>
          <li>Work on the task until the timer rings.</li>
          <li>Take a 5-minute break (Short Break).</li>
          <li>Repeat the process.</li>
          <li>After 4 Pomodoros, take a longer break (15-30 minutes).</li>
        </ul>
        <h2>Benefits of Pomodoro:</h2>
        <ul>
          <li>Boosts focus and concentration.</li>
          <li>Helps manage time effectively.</li>
          <li>Prevents burnout by ensuring regular breaks.</li>
        </ul>
      </div>
    );
  };
  
  export default Introduction;
  