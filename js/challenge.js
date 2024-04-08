document.addEventListener("DOMContentLoaded", function() {
    const counterDisplay = document.getElementById('counter');
    let counterValue = 0;
    let counterInterval = setInterval(() => {
      counterDisplay.textContent = counterValue++;
    }, 1000);
  
    document.getElementById('minus').addEventListener('click', () => counterValue--);
    document.getElementById('plus').addEventListener('click', () => counterValue++);
    document.getElementById('pause').addEventListener('click', () => {
      clearInterval(counterInterval);
      document.querySelectorAll('button:not(#pause)').forEach(button => button.disabled = true);
      document.getElementById('pause').textContent = 'resume';
    });
    document.getElementById('pause').addEventListener('click', () => {
      if (document.getElementById('pause').textContent === 'resume') {
        counterInterval = setInterval(() => {
          counterDisplay.textContent = counterValue++;
        }, 1000);
        document.querySelectorAll('button:not(#pause)').forEach(button => button.disabled = false);
        document.getElementById('pause').textContent = 'pause';
      } else {
        clearInterval(counterInterval);
      }
    });
  
    document.getElementById('heart').addEventListener('click', () => {
      const li = document.createElement('li');
      li.textContent = `${counterValue} likes`;
      document.querySelector('.likes').appendChild(li);
    });
  
    document.getElementById('comment-form').addEventListener('submit', function(event) {
      event.preventDefault();
      const commentInput = document.getElementById('comment-input');
      const commentText = commentInput.value.trim();
      if (commentText !== '') {
        const commentDiv = document.createElement('div');
        commentDiv.textContent = commentText;
        document.getElementById('list').appendChild(commentDiv);
        commentInput.value = '';
      }
    });
  });
  