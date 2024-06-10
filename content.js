(function() {
    let observer = new MutationObserver((mutations) => {
        for (let mutation of mutations) {
            if (mutation.addedNodes.length) {
                let noteArea = document.getElementById('custom-message');
                // Use the selector found from the HTML inspection
                let nameElement = document.querySelector('.text-heading-xlarge.inline.t-24.v-align-middle.break-words');
                if (noteArea && noteArea.value === '' && nameElement) {
                    let name = nameElement.textContent.trim();
                    noteArea.value = `Hey ${name}! It would be great to connect with you!`;
                    observer.disconnect(); // Stop observing after setting the value
                }
            }
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();
