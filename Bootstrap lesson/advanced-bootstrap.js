// ✅ Quiz Logic
document.querySelectorAll('.quiz-btn').forEach(button => {
  button.addEventListener('click', () => {
    const result = document.getElementById('quiz-result');
    if (button.dataset.correct === "true") {
      result.textContent = "✅ Yay! You’re becoming a Bootstrap pro!";
      result.style.color = "green";
    } else {
      result.textContent = "❌ Oops! Try again.";
      result.style.color = "red";
    }
  });
});

document.getElementById('resetQuiz').addEventListener('click', () => {
  document.getElementById('quiz-result').textContent = "";
});
