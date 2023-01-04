# Installation / Usage

Read and follow instruction to run this app in your system.

## Prerequisite

* Must have mysql running in your system
    * You can use XAMPP or Docker to run mysql
* Must have python installed properly
    * During the installation remember to select "Install for all users"
    * Link to download: https://www.python.org/downloads/windows/
    * Link with installation instructions: https://docs.python.org/3/using/windows.html#the-full-installer
* Download the Pycharm https://download.jetbrains.com/python/pycharm-professional-2020.2.3.exe
    * Evaluate for free, pycharm will give you a month of trial

## Start API

1. Clone app `git clone https://github.com/paneru-rajan/rr-crud-app.git` or you can download
2. Open the app using pycharm
3. Configure virtual env, usually pycharm ask when you open the project for the first time
4. Make sure the `venv` is all set, if you open a terminal `(venv)` will be shown on the left
5. Configure database in [db.py](db.py) file
6. Install requirement files `pip install -r requirements.txt`
7. Right-click on the app folder, then under "Mark Directory as" select "Source Root". This will allow pycharm to
   recognize the app properly.
8. Run app: ` flask --app api run` or configure using pycharm
9. Click run or use command to run the app

## Start frontend

* Open [home.html](src/home.html) file in pycharm
* In the top right corner, you will see browser icon, click it to run the html

# Folder Structure of the application

```shell
.
├── app  # Main folder for the app
│   ├── __init__.py  # added to make app as module
│   ├── api.py  # Main file where we have flask code
│   ├── db.py  # Model that handles CRUD operation for student table
│   ├── readme.md  # Contains steps to run and folder structure of the app
│   ├── src  # This and inside this are all Front-End Related files, this serves a html page with table on it for API driven CRUD operation from front-end
│   │   ├── home.html  
│   │   └── static  
│   │       ├── css  
│   │       │   ├── external  
│   │       │   │   ├── bootstrap.min.css  
│   │       │   │   └── font-awesome.min.css  
│   │       │   └── style.css  
│   │       ├── fonts  
│   │       │   └── fontawesome-webfont.woff2  
│   │       └── js  
│   │           ├── api.js  
│   │           ├── external  
│   │           │   ├── bootstrap.min.js  
│   │           │   ├── jquery-3.3.1.min.js  
│   │           │   └── popper.min.js  
│   │           └── table.js  
│   └── test  
│       ├── api.http  # has example showing http request from pycharm 
│       └── http-client.env.json  
├── .gitignore  # hides files/folder names not needed, this will make sure they don't get pushed to the repo   
├── classes.md  # has what we covered in every classes
├── readme.md  # has brief introduction to what we cover in the class
├── requirements.txt  # has all package and it's version installed
└── requirements_clean.txt  # has exact name of package we installed
```
