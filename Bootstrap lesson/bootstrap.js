// ✅ Quiz Logic
document.querySelectorAll('.quiz-btn').forEach(button => {
  button.addEventListener('click', () => {
    const result = document.getElementById('quiz-result');
    if (button.dataset.correct === "true") {
      result.textContent = "✅ Great job! You got it right!";
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
