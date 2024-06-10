// This is the background script for a Chrome Extension.

try {
    // Listens for the install event
    chrome.runtime.onInstalled.addListener(() => {
        console.log('Extension successfully installed.');
        // Perform further initialization if needed
    });

    // Example of a simple messaging listener
    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse) {
            if (request.action === "getMessage") {
                sendResponse({message: "Hello from background"});
            }
        }
    );
} catch (error) {
    console.error('Failed to load background script: ', error);
}
