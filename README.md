# URL Locator Chrome Extension

## Overview

The **URL Locator** Chrome Extension allows users to fetch and display URLs from an INI file hosted online. Users can navigate through different sections of URLs and click on them to open in new tabs. This extension is designed to provide a simple and efficient way to manage and access frequently used links.

## Features

- Fetches URLs from a remote INI file.
- Displays section headers dynamically.
- Allows users to click on section headers to view associated URLs.
- Opens selected URLs in new tabs.

## Technologies Used

- HTML
- CSS
- JavaScript
- Chrome Extension APIs

## Installation

1. **Clone the repository**:
   ```
   bash
   git clone https://github.com/yourusername/URL_locator.git
   cd URL_locator
   ```

2. **Load the extension in Chrome**:
   Open Chrome and navigate to chrome://extensions/.
   Enable "Developer mode" in the top right corner.
   Click on "Load unpacked" and select the folder where the extension files are located.

3. **Usage**
   Click on the URL Locator extension icon in the Chrome toolbar.
   The extension will load and display the section headers fetched from the INI file.
   Click on a section header to view the associated URLs.
   Click on any URL to open it in a new tab.

## INI File Format

The extension expects the INI file to be structured as follows:

```
[Section Name]
Key1 = https://example.com/link1
Key2 = https://example.com/link2

[Another Section]
Key1 = https://example.com/link3
Key2 = https://example.com/link4
```
4. **Example INI File**
   You can find an example INI file ([here](https://raw.githubusercontent.com/mishraom05/URL_locator/main/urls.ini)).
