const url = 'https://raw.githubusercontent.com/mishraom05/URL_locator/main/urls.ini'; 

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        const config = parseINI(data);
        
        // Fetch all section headers
        const sectionHeaders = Object.keys(config); // Get all keys (section headers)

        const secLocatorElement = document.getElementById('sec_locator');

        let secList = '<ul>'; // Start an unordered list
        for (const key in sectionHeaders) {
            const sec = sectionHeaders[key]
            secList += `<li><a href="${sec}" class="sec-link" data-section="${sec}">${sec}</a></li>`;
        }
        secList += '</ul>'; // Close the unordered list

        // Set the inner HTML of the element
        secLocatorElement.innerHTML = secList;

        // Add click event listeners to the section links
        const sectionLinks = document.querySelectorAll('.sec-link');
        sectionLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault(); // Prevent the default anchor behavior
                const section = event.target.getAttribute('data-section'); // Get the section name
                const urls = config[section]; // Fetch URLs from the selected section

                // Get the element by ID
                const urlLocatorElement = document.getElementById('url_locator');

                // Create a string to hold the URLs
                let urlList = '<ul>'; // Start an unordered list
                for (const key in urls) {
                    const link = urls[key]
                    urlList += `<li><a href="${link}" class="search-link" data-url="${link}">${key}</a></li>`;
                }
                urlList += '</ul>'; // Close the unordered list

                // Set the inner HTML of the element
                urlLocatorElement.innerHTML = urlList;

                // Add click event listeners to the links
                const links = document.querySelectorAll('.search-link');
                links.forEach(link => {
                    link.addEventListener('click', (event) => {
                        event.preventDefault(); // Prevent the default anchor behavior
                        const targetUrl = event.target.getAttribute('data-url'); // Get the URL from the data attribute
                        // Send a message to the background script
                        chrome.runtime.sendMessage({ url: targetUrl });
                    });
                });
            });
        });
    })
    .catch(error => {
        console.error('Error fetching the INI file:', error);
        document.getElementsById('url_locator').innerText = 'Error loading URLs.';
    });
