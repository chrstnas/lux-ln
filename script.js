// Sends the join form to Formspree without leaving the page.
// Without JavaScript the form still posts normally to Formspree.
(function () {
    var form = document.getElementById('join-form');
    if (!form || !window.fetch) return;
    var status = form.querySelector('.form-status');
    var button = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        status.className = 'form-status';
        status.textContent = 'Sending…';
        button.disabled = true;

        fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: { 'Accept': 'application/json' }
        }).then(function (res) {
            if (res.ok) {
                form.reset();
                status.className = 'form-status ok';
                status.textContent = 'Thank you! You’re on the list, and we’ll be in touch soon.';
                return;
            }
            return res.json().then(function (data) {
                var msg = data && data.errors ? data.errors.map(function (x) { return x.message; }).join(', ') : '';
                throw new Error(msg);
            });
        }).catch(function (err) {
            status.className = 'form-status err';
            status.textContent = 'Something went wrong' + (err && err.message ? ' (' + err.message + ')' : '') + '. Please try again, or email tina@lux-ln.com.';
        }).finally(function () {
            button.disabled = false;
        });
    });
})();
