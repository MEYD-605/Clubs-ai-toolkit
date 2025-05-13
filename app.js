let mode = 'note';

function setMode(selected) {
  mode = selected;
}

async function sendPrompt() {
  const input = document.getElementById("input").value;
  const prompt = mode === 'quotation'
    ? `Create a quotation based on this request (from OCR image or text): ${input}`
    : input;

  const res = await fetch("https://api.yourproxy.ai/claude", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${CLAUDE_API_KEY}`
    },
    body: JSON.stringify({ prompt })
  });

  const data = await res.json();
  document.getElementById("response").value = data.result;
}