const toast = document.getElementById('copy-toast');

document.getElementById('copy-email-button').addEventListener('click', function() {
    const emailText = document.getElementById('text').textContent;

    navigator.clipboard.writeText(emailText).then(function() {
        const iconSpan = document.querySelector('.icon');
        const originalIcon = iconSpan.innerHTML;

        iconSpan.innerHTML = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>';
        toast.toast();
        
        setTimeout(function() {
            iconSpan.innerHTML = originalIcon;
        }, 2000);
    })
})
