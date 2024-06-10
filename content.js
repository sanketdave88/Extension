(function() {
    let observer = new MutationObserver((mutations) => {
        for (let mutation of mutations) {
            if (mutation.addedNodes.length) {
                let noteArea = document.getElementById('custom-message');
                if (noteArea && noteArea.value === '') {
                    noteArea.value = 'Hey! It would be great to connect with you!';
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
