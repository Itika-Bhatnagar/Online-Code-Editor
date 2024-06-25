## Overview

* This project is a code editor built using React and the Monaco Editor and Vite.  
* Chakra UI is used to style our Code Editor and Piston API to execute our Code.  
* The goal of this project is to provide a powerful and customizable code editing experience.  
* It allows you to write and execute your code in the browser.  


## Features
* Multiple Language Support: It supports multiple languages . Eg- javascript,java,python.  
* Syntax Highlighting: Supports syntax highlighting for various programming languages.  
* Customizable Themes: Allows users to switch between light and dark theme.  
* Autocompletion: Provides intelligent code suggestions and autocompletion.  


## Usage
* Open the editor and start typing your code.  
* Use the dropdown menu to select your preferred language mode (e.g., JavaScript, Python).  
* Customize the editor theme from the option in right up(Light theme /Dark Theme)  
* You can see the Output in the right box.  

## Project Structure.
code-editor-project  
'''
├── public ├── vite.svg  
├── src  
│   ├── components    
│        ├── CodeEditor.jsx  
│        ├── LanguageSelector.jsx  
│        ├── Output.jsx 
│     ├── App.jsx   
│     ├── api.jsx  
│     ├── Constants.jsx  
│     ├── main.jsx  
│     ├── styles.css  
├── vite.config.js  
├── package.json   
├── package-lock.json  
├── index.html
└── README.md 
'''

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


