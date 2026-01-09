document.getElementById('copy-email-button').addEventListener('click', function() {
    const emailText = document.getElementById('text').textContent;

    navigator.clipboard.writeText(emailText).then(function() {
        //Get icon and text content
        const iconSpan = document.querySelector('.icon');
        const textSpan = document.getElementById('text');

        //Store the original ones before change
        const originalIcon = iconSpan.innerHTML;
        const originalText = textSpan.textContent;


        //Replace
        iconSpan.innerHTML = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>';
        textSpan.textContent = 'Copied';
        
        
        //Return back the icon and text after user clicked copy
        setTimeout(function() {
            iconSpan.innerHTML = originalIcon;
            textSpan.textContent = originalText;
        }, 2000);
    })
})
