var eleman = document.getElementById('hareketliEleman');

document.addEventListener('mousemove', function(event) {
    eleman.style.left = event.clientX + 'px';
    eleman.style.top = event.clientY + 'px';
});
