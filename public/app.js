'use strict';
document.querySelectorAll('a[href="#privacy"]').forEach(link => link.addEventListener('click', () => { document.getElementById('privacy').open = true; }));
