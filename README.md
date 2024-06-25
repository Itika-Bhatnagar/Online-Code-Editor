## High Level Overview

* This project is a code editor built using React and the Monaco Editor and Vite.  
* Chakra UI is used to style our Code Editor and Piston API to execute our Code.  
* The goal of this project is to provide a powerful and customizable code editing experience.  
* It allows you to write and execute your code in the browser in various programming languages directly from their web browser, eliminating the need for local SDK installations.  



## Key Features
* React Framework: Utilizes the React library for building a responsive and interactive user interface.  
* Vite Build Tool: Employs Vite for fast, efficient, and optimized development and build processes.  
* Monaco Editor: Integrates the Monaco Editor to provide a robust coding environment with advanced features like syntax highlighting, autocompletion.
* Chakra UI: Used Chakra UI to make the UI more user friendly and easy to use.  
* Multiple Language Support: It supports multiple languages . Eg- javascript,java,python.  
* Syntax Highlighting: Supports syntax highlighting for various programming languages.  
* Customizable Themes: Allows users to switch between light and dark theme.  
* Autocompletion: Provides intelligent code suggestions and autocompletion.
* Cross-Platform Accessibility: Accessible from any device with a web browser, ensuring a consistent experience across different operating systems.  



## Project Structure.
code-editor-project 
├── public  
│ ├── vite.svg  
├── src  
│ ├── components  
│ ├── CodeEditor.jsx  
│ ├── LanguageSelector.jsx  
│ ├── Output.jsx  
│ ├── App.jsx  
│ ├── api.jsx  
│ ├── Constants.jsx  
│ ├── main.jsx  
│ ├── styles.css  
├── vite.config.js  
├── package.json  
├── package-lock.json  
├── index.html  
└── README.md  



## Technology Stack
### Vite

* Role:  
  * Vite is used as the build tool and development server.  
* features:   
  * Provides fast builds and optimizing the development workflow.  
  * Supports modern JavaScript features.  
  * Integrates seamlessly with React and other frontend libraries.  
 
### React

* Role:
  * React is the frontend JavaScript library for building user interfaces.  
* Features:  
  * Declarative and component-based architecture for building reusable UI components.  
  * Efficient state management using hooks (e.g., useState ).  
  * Rich ecosystem with a vast selection of third-party libraries and components.  



## Usage
* Open the editor and start typing your code.  
* Use the dropdown menu to select your preferred language mode (e.g., JavaScript, Python).  
* Customize the editor theme from the option in right up(Light theme /Dark Theme)  
* You can see the Output in the right box.  



# Installation 
* git clone https://github.com/Itika-Bhatnagar/Online-Code-Editor.git  
* cd Online-Code-Editor  

## Run Locally

```bash  
# install dependencies  

npm install  

# start the dev server  

npm run dev
```
The application will be available at http://localhost:5173/

or 

DIRECTLY ACCESSABLE TO USE : https://online-code-editor-lime.vercel.app/

