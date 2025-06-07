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

        // Fetch URLs from the parsed INI data
        const urls = config['Social Media'];

        // Get the element by ID
        const urlLocatorElement = document.getElementById('url_locator');

        // Create a string to hold the URLs
        let urlList = '<ul>'; // Start an unordered list
        for (const key in urls) {
            const link = urls[key]
            urlList += `<li><a href="${link}" class="search-link" data-url="${link}">${link}</a></li>`;
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
    })
    .catch(error => {
        console.error('Error fetching the INI file:', error);
        document.getElementsById('url_locator').innerText = 'Error loading URLs.';
    });
