(function() {
    let observer = new MutationObserver((mutations, obs) => {
        let noteArea = document.getElementById('custom-message');
        let nameElement = document.querySelector('.text-heading-xlarge.inline.t-24.v-align-middle.break-words');
        let companyElement = document.querySelector('span[aria-hidden="true"]');

        if (noteArea && noteArea.value === '' && nameElement && companyElement && companyElement.textContent.trim() !== '') {
            let firstName = nameElement.textContent.trim().split(' ')[0];
            let companyName = companyElement.textContent.trim();  // Extract company name
            let myName = 'Prayou';  // Using your first name

            noteArea.value = `Hey ${firstName}! ${myName} here. I wanted to reach out to you regarding opportunities at ${companyName}. I am a 2 year Data Scientist/Analyst, recently graduated with MS in Information Systems from CSULB. Was wondering if you are hiring or could direct me to opportunities that might suit me. \n\nThank you,\n${myName}`;
            obs.disconnect();  // Stop observing after setting the value
        } else if (!companyElement || companyElement.textContent.trim() === '') {
            setTimeout(() => {
                observer.observe(document.body, {
                    childList: true,
                    subtree: true
                });
            }, 1000);  // Retry after 1 second if company name not found
        }
    });

    observer.observe(document is.body, {
        childList: true,
        subtree: true
    });
})();
