function formatText(command) {
    document.execCommand(command, false, null);
  }

  function updateWordCount() {
    const text = document.getElementById('editor').innerText.trim();
    const words = text.split(/\s+/).filter(word => word.length > 0);
    document.getElementById('wordCount').innerText = `Words: ${words.length}`;
  }

  function toggleTheme() {
    document.body.classList.toggle('dark-theme');
  }

  function downloadText() {
    const text = document.getElementById('editor').innerText;
    const blob = new Blob([text], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'document.txt';
    link.click();
  }