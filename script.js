function user() {
    const nameInput = document.getElementById("nameInput");
    const name = nameInput.value ? nameInput.value : "user";
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
  
    let daysLeft;
    switch (currentDay) {
      case 0: // Sunday
        daysLeft = "Today is weekend! You can sleep more!";
        break;
      case 6: // Saturday
        daysLeft = "Today is weekend! You can sleep more!";
        break;
      case 5: // Friday
        daysLeft = "Only 1 day left until the weekend!";
        break;
      default:
        daysLeft = `Only ${6 - currentDay} days left until the weekend!`;
        break;
    }
  
    const greetings = `Hello ${name.charAt(0).toUpperCase() + name.slice(1)}. Today is ${getDayName(currentDay)}. ${daysLeft}`;
  
    function getDayName(dayIndex) {
      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      return days[dayIndex];
    }
  
    const userName = document.querySelector(".user-name");
    userName.innerText = greetings; 
  }
  
    document.getElementById("goButton").addEventListener("click", user);
  







































/* function user() {

    let name = document.getElementById("nameInput").value;
   
    const currentDate = new Date();

    const currentDay = days[currentDate.getDay()];

    var daysLeft;
  switch (currentDay) {
    case 0: // Sunday
      daysLeft = "Today is the weekend! Enjoy your day!";
      break;
    case 5: // Friday
      daysLeft = "Only 1 day left until the weekend!";
      break;
    case 6: // Saturday
      daysLeft = "Today is the weekend! Enjoy your day!";
      break;
    default:
      daysLeft = "Days left until the weekend: " + (6 - currentDay);
      break;
  }

  const daysLeft = 6 - currentDate.getDay();
  
   const greetings = `Hello ${name}. Today is ${currentDay}. Only ${daysLeft} left until weekend!`;

  function getDayName(dayIndex) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[dayIndex];
  }

    /* const userName = document.querySelector(".user-name");
    userName.innerText = greetings; */
  


//   document.getElementById("goButton").addEventListener("click", user);
  /* document.getElementById("goButton").addEventListener("click", user);
 */

  