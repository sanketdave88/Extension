(function() {
    let observer = new MutationObserver((mutations) => {
        for (let mutation of mutations) {
            if (mutation.addedNodes.length) {
                let noteArea = document.getElementById('custom-message');
                let nameElement = document.querySelector('.text-heading-xlarge.inline.t-24.v-align-middle.break-words');
                let companyElement = document.querySelector('span[aria-hidden="true"]');  // Assuming this selector is correct

                if (noteArea && noteArea.value === '' && nameElement && companyElement) {
                    let firstName = nameElement.textContent.trim().split(' ')[0];
                    let companyNameDetails = companyElement.textContent.trim();
                    let companyName = companyNameDetails.split(' · ')[0]; // This splits the text and takes the first part, assumed to be the company name

                    let myName = 'Prayag'; // Directly using your first name as it doesn't change
                    noteArea.value = `Hey ${firstName}! ${myName} here. I wanted to reach out to you regarding opportunities at ${companyName}. I am a 2 year Data Scientist/Analyst, recently graduated with MS in Information Systems from CSULB. Was wondering if you are hiring or could direct me to opportunities that might suit me. \n\nThank you,\n${myName}`;
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
