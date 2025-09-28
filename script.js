const tasks = [
  "Flash Recall: pick a random topic and recall it without notes.",
  "Code Skeleton Drill: write minimal syntax for a topic.",
  "One Past Question: attempt one exam-style question.",
  "Explain Out Loud: teach the concept in 1 minute.",
  "Flashcard Round: review 5-10 cards.",
  "Cheat Sheet Update: add/refine one example.",
  "Compare & Correct: rewrite an example from memory.",
  "Quickfire Questions: make and answer 3 mini questions.",
  "Error Hunt: break and then fix a snippet.",
  "Mini-Mock: 15 mins, 2-3 short exam-style questions."
];

const wheel = document.getElementById('wheel');
let deg = 0;

function spin() {
  const spins = 5 + Math.random() * 5; // random spin cycles
  deg += spins * 360;
  wheel.style.transition = 'transform 4s cubic-bezier(0.33, 1, 0.68, 1)';
  wheel.style.transform = `rotate(${deg}deg)`;

  setTimeout(() => {
    const normalized = deg % 360;
    const index = Math.floor(((360 - normalized) % 360) / 36);
    document.getElementById('result').textContent = "→ " + tasks[index];
  }, 4200);
}
