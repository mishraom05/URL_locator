const url = 'https://github.com/mishraom05/URL_locator/blob/url01/urls.ini'; // Replace with your raw INI file URL

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        const ini = require('ini'); // You need to include a library to parse INI in the browser
        const config = ini.parse(data);

        // Fetch URLs from the parsed INI data
        const urls = config.Entertainment;

        // Get the element by ID
        const urlLocatorElement = document.getElementById('url_locator');

        // Create a string to hold the URLs
        let urlList = '<ul>'; // Start an unordered list
        for (const key in urls) {
            urlList += `<li>${key}: ${urls[key]}</li>`; // Add each URL as a list item
        }
        urlList += '</ul>'; // Close the unordered list

        // Set the inner HTML of the element
        urlLocatorElement.innerHTML = urlList;
    })
    .catch(error => {
        console.error('Error fetching the INI file:', error);
        document.getElementById('url_locator').innerText = 'Error loading URLs.';
    });
