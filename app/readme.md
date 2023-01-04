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
7. Run app: ` flask --app api run` or configure using pycharm
8. Click run or use command to run the app

## Start frontend

* Open [home.html](src/home.html) file in pycharm
* In the top right corner, you will see browser icon, click it to run the html

# Folder Structure of the application

wip
