# Detecting Web Driver

## Setup Instructions

- Install Geckodriver and Chromedriver:

  ```
  brew install geckodriver chromedriver
  ```

- Build the Docker image:
  
  ```
  docker build . -t webdriver-detection:latest
  ```

- Run the Docker container:
  
  ```
  docker run -it --rm -p 8080:80 webdriver-detection:latest
  ```

## Steps to Reproduce

- Start Geckodriver:

  ```
  geckodriver
  ```
  
- Start Chromedriver:

  ```
  chromedriver
  ```
  
- Open the webpage:

  ```
  open http://localho.st/ OR http://<PUBLIC_IP_ADDRESS>/ OR http://<SOME_IP_ADDRESS_NOT_127_0_0_1>/
  ```
  
* Observe that you should not be able to `fetch` this resource:

  ```
  fetch('http://127.0.0.1:4444/status')
  ```

  > Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at http://127.0.0.1:4444/status. (Reason: CORS header ‘Access-Control-Allow-Origin’ missing). Status code: 500.

  <img width="1603" alt="Screen Shot 2022-04-19 at 3 10 11 AM" src="https://user-images.githubusercontent.com/585059/163981640-2c857224-41f4-43ec-b515-30e82f1c2dd6.png">

* Observe, however, that browser leaks sensitive cross-origin information when the TCP port is open:

  <img width="1792" alt="screenshot" src="https://user-images.githubusercontent.com/585059/163982423-8667e32a-6d3d-4439-b95d-0b02c461cb6a.png">

* Use this information to determine if the client is running Geckodriver or Chromedriver:

  ![Geckodriver Running](https://github.com/paulcalabro/same-origin-policy-bypass-poc/blob/main/screenshots/screenshot.png?raw=true "Geckodriver Running")

