document.addEventListener('DOMContentLoaded', function() {
    const iframe = document.getElementById('AirPrompt-Iframe-Embed');

    // Update iframe height dynamically after the content is fully loaded
    window.addEventListener('message', function(event) {

        const message = event.data;
        if (message.type=='AirPrompt-Height')
        iframe.style.height = message.value + 'px'; // Set the iframe height
    });

});
