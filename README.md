# LiveCurrencyConverterExtension
LiveCurrencyConverterExtension – browser extension for real-time currency conversions.



**LiveCurrencyConverter** is a browser extension designed to provide **real-time currency conversions** directly in the browser interface.  
This project serves as a **portfolio piece**.

## Key Features

- Displays live exchange rates for any selected currency pair (RON, EUR, USD, GBP, HUF).  
- Highlights increases and decreases in rates using **color coding (green/red)** and **arrows**.  
- Manual conversion: enter an amount in currency 1 and get the equivalent in currency 2.  
- Automatic updates every minute to provide the most accurate rates.  
- Completely free and does not require an API key, using the [Frankfurter API](https://www.frankfurter.app/).

## Purpose

The extension is primarily designed as a **portfolio project**, but it can also serve as a **useful tool for quick currency conversions**.

## Deployment & Hosting

- The code is publicly available on GitHub for **forking, review, and modification**.  
- The extension can be installed locally via **Load unpacked** in Chrome or Edge.  
- The extension can be viewed live at [Live Demo](https://botaandrei-public.github.io/LiveCurrencyConverterExtension/) using GitHub Pages.

## Screenshots

<!-- Replace with your own screenshots -->
### Live Rate Example
![Live Rate Example](https://raw.githubusercontent.com/BotaAndrei-public/LiveCurrencyConverterExtension/main/public/img/image.png)
 




## Installation & Running
### Option 1: Install as a Chrome/Edge Extension (Recommended)

##### 1. Clone the repository:  
   ```bash
   git clone https://github.com/BotaAndrei-public/LiveCurrencyConverterExtension.git
   ```

##### 2. Navigate into the project folder:
   ```bash
    cd LiveCurrencyConverterExtension
   ```
##### 3. Open Chrome or Edge and go to:
   ```bash
    chrome://extensions/
   ```
##### 4. Enable Developer mode.
##### 5. Click Load unpacked and select the project folder.
##### 6. The extension will appear in your browser toolbar and is ready to use.

### Option 2: Preview Locally with a Web Server (Optional)
##### To preview the HTML pages locally, you can use a local web server:
   ```bash
   npx live-server
   ```
   OR
   ```bash
   # For Python 3.x
   python -m http.server 8000
 ```

 ## Author

[**Bota Andrei Cristian**](https://github.com/BotaAndrei-public)

