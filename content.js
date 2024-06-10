function extractCompanyName() {
    const companyElements = document.querySelectorAll('button');
    for (let element of companyElements) {
        if (element.ariaLabel && element.ariaLabel.includes('Current company:')) {
            const companyInfo = element.querySelector('.VOdUWsohRKXqgjeZcWuqWYxqMBcazajgl');
            if (companyInfo) {
                return companyInfo.innerText.trim(); // Extract and return the company name
            }
        }
    }
    return 'Company not found'; // Return a default message if the company name isn't found
}

(function() {
    const observer = new MutationObserver((mutations, obs) => {
        let noteArea = document.getElementById('custom-message');
        let nameElement = document.querySelector('.text-heading-xlarge.inline.t-24.v-align-middle.break-words');
        if (noteArea && noteArea.value === '' && nameElement) {
            let firstName = nameElement.textContent.trim().split(' ')[0];
            let companyName = extractCompanyName(); // Call the function to get the company name
            if (companyName !== 'Company not found') {
                let myName = 'Prayag'; // Your first name
                noteArea.value = `Hey ${firstName}! ${myName} here. I wanted to reach out to you regarding opportunities at ${companyName}. I am a 2-year Data Scientist/Analyst, recently graduated with MS in Information Systems from CSULB. Was wondering if you are hiring or could direct me to opportunities that might suit me. \n\nThank you,\n${myName}`;
                obs.disconnect(); // Disconnect after successful operation
            }
        }
    });
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();

// comment by: Sanket
