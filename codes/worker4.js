


window.worker = new Worker("https://d2.music.126.net/dmusic/obj/w5zCg8OAw6HDjzjDgMK_/10186702592/7331/0db9/cf32/973c002fceccaee9849a0dc9379a139e.js?download=worker.js");
worker.postMessage('https://httpbin.org/ip');
worker.onmessage = function (e) {
  console.info('new stuff:', e.data);
}

const button = document.getElementById('stop')
button.addEventListener('click', () => {
  worker.terminate();
});