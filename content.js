(function() {
    const observer = new MutationObserver((mutations, obs) => {
        let noteArea = document.getElementById('custom-message');
        let nameElement = document.querySelector('.text-heading-xlarge.inline.t-24.v-align-middle.break-words');
        let companyElements = document.querySelectorAll('.artdeco-list__item'); // Selector to grab all list items in the experience section

        if (noteArea && noteArea.value === '' && nameElement && companyElements.length) {
            let firstName = nameElement.textContent.trim().split(' ')[0];
            let companyName = extractCurrentCompany(companyElements);

            if (companyName) {
                let myName = 'Prayag'; // Your first name
                noteArea.value = `Hey ${firstName}! ${myName} here. I wanted to reach out to you regarding opportunities at ${companyChess}. I am a 2-year Data Scientist/Analyst, recently graduated with MS in Information Systems from CSULB. Was wondering if you are hiring or could direct me to opportunities that might suit me. \n\nThank you,\n${myName}`;
                obs.disconnect(); // Optionally disconnect the observer after successful operation
            }
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    function extractCurrentCompany(listItems) {
        let currentCompanyName = '';
        listItems.forEach(item => {
            const dateText = item.querySelector('.t-14.t-normal.t-black--light').textContent; // Selector to find the date text
            if (dateText.includes('Present')) {
                const companyDetails = item.querySelector('.t-14.t-normal').textContent.trim();
                currentCompanyName = companyDetails.split(' · ')[0]; // Assumes company name is before '·'
            }
        });
        return currentCompanyName;
    }
})();
