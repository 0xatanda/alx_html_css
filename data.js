async function getBoredActivity() {
  try {
    const res = await fetch('https://bored-api.appbrewery.com/api/activity');
    if (!res.ok) {
      throw new Error(`Network response was not ok (status ${res.status})`);
    }
    const data = await res.json();
    console.log('Random activity suggestion:', data.activity);
    console.log('Type:', data.type, 'Participants:', data.participants, 'Price:', data.price);
    return data; // useful if caller needs the object
  } catch (err) {
    console.error('Fetching activity failed:', err);
    throw err; // rethrow if caller needs to handle it
  }
}

getBoredActivity()