export function input(event) {
  const newText = event.target.value;
  const charCount = newText.length;
  const wordCount = countWords(newText);
  document.getElementById("charct").textContent = charCount;
  document.getElementById("wordct").textContent = wordCount;
  }
  
export function uppercase() {
    const inptext = document.getElementById("inptext");
    inptext.value = inptext.value.toUpperCase();
  }
  
export function lowercase() {
    const inptext = document.getElementById("inptext");
    inptext.value = inptext.value.toLowerCase();
  }
  
export function removespaces() {
    const inptext = document.getElementById("inptext");
    inptext.value = inptext.value.replace(/\s+/g, ' ').trim();
  }
  
export function removelines() {
    const inptext = document.getElementById("inptext");
    inptext.value = inptext.value.replace(/\n+/g, '\n').trim();
  }
  function countWords(text) {
    return text.trim().split(/\s+/).filter(Boolean).length;
  }