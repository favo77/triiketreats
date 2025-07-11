// Fake Order Generator
    const names = ["Joy", "Samuel", "Ijeoma", "Michael", "Zainab", "Emeka"];
    const locations = ["Lagos", "Abuja", "Enugu", "Ibadan", "Port Harcourt"];
    const items = ["Cheesy Corndog", "Spicy Corndog", "Mini Bites", "Jumbo CornDog"];
    function generateFakeOrder() {
      const name = names[Math.floor(Math.random() * names.length)];
      const location = locations[Math.floor(Math.random() * locations.length)];
      const item = items[Math.floor(Math.random() * items.length)];
      return `${name} from ${location} just ordered a ${item}!`;
    }
    function updateOrders() {
      const feed = document.getElementById("orderFeed");
      if (!feed) return;
      const order = document.createElement("div");
      order.textContent = generateFakeOrder();
      order.style.opacity = 0;
      order.style.transition = "opacity 0.5s ease-in-out";
      feed.prepend(order);
      requestAnimationFrame(() => { order.style.opacity = 1; });
      if (feed.children.length > 5) feed.removeChild(feed.lastChild);
    }
    document.addEventListener("DOMContentLoaded", () => {
      updateOrders();
      setInterval(updateOrders, 4000);
    });

    // Snack Quiz
    document.getElementById("quizForm").addEventListener("submit", function(e) {
      e.preventDefault();
      const answer = document.querySelector('input[name="q1"]:checked');
      const result = document.getElementById("quizResult");
      if (!answer) {
        result.textContent = "Please select an option!";
        return;
      }
      const value = answer.value;
      if (value === "spicy") result.textContent = "You're a Spicy Corndog! Bold and daring.";
      else if (value === "cheesy") result.textContent = "You're a Cheesy Corndog! Fun and lovable.";
      else result.textContent = "You're a Classic Corndog! Calm and sweet.";
    });

    // Spin the Wheel
    const spinBtn = document.getElementById("spinBtn");
    const wheel = document.getElementById("wheel");
    const result = document.getElementById("wheelResult");
    let spinning = false;
    spinBtn.addEventListener("click", () => {
      if (spinning) return;
      spinning = true;
      const angle = Math.floor(Math.random() * 360) + 720;
      wheel.style.transition = "transform 3s ease-out";
      wheel.style.transform = `rotate(${angle}deg)`;
      setTimeout(() => {
        result.textContent = "🎉 You won 10% off your next order!";
        spinning = false;
      }, 3000);
    });
  
    // 🎉 Confetti for Snack Battle
function launchConfetti() {
  const duration = 2 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);
    confetti(Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
    }));
    confetti(Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
    }));
  }, 250);
}

// Snack Battle
    document.getElementById("battleForm").addEventListener("submit", function(e) {
      e.preventDefault();
      const selected = document.querySelector('input[name="battle"]:checked');
      const result = document.getElementById("battleResult");
      if (!selected) {
        result.textContent = "Please vote for your favorite corndog!";
        return;
      }
      result.textContent = `Thanks for voting! You chose the ${selected.value} CornDog.`;
      launchConfetti();
    });