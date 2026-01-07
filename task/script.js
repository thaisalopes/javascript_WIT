const html_setup = document.getElementById('setup');
const html_punchline = document.getElementById('punchline')
const html_type = document.getElementById('type')
const html_id = document.getElementById('id')

async function getData() {
  try {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");

    if (response.ok) {
      const jsonResponse = await response.json();

      html_setup.innerHTML = jsonResponse.setup;
      html_punchline.innerHTML = jsonResponse.punchline;
      html_type.innerHTML = jsonResponse.type;
      html_id.innerHTML = jsonResponse.id;

      for (const [key, value] of Object.entries(jsonResponse)) {
        console.log(`${key}: ${value}`);
      }
    }

  } catch (e) {
    console.log(e);
  }
}

getData();