# 케이셰프 (KChef) - in a process of developing

## Quick Start
### 1. Basic Setup
* Following list of programs are needed in order to run this demo
    * Neo4j (Server or Desktop)
    * Node.js
    * MariaDB

### 2. Neo4j
* Start Neo4j ([Download & Install](http://neo4j.com/download)) locally and open the [Neo4j Browser](http://localhost:7474).
* Default ID is 'neo4j' and you need to set password as 'admin'.

### 3. MariaDB

[***3.1 Install MariaDB***](https://downloads.mariadb.org/mariadb/10.3.8/)

* If you are using __Windows__, then download .zip package file and unzip the package in the desired directory.
* If you are using __Mac__ and have Homebrew installed on your computer, then you can install using following command:

```
brew install mariadb
```
* If your computer does not have Homebrew installed, then try to follow the steps in this [***link***](https://mariadb.com/kb/en/library/installing-mariadb-server-pkg-packages-on-macos/)

***3.2 Run MariaDB server***

* For __Windows__ users, go to directory where mysqld.exe is located and execute following command

```
mysqld.exe --console
```

* For __Mac__ users, execute following command

```
mysql.server start
```

***3.3 Begin using MariaDB***

* For __Windows__ users, go to directory where mysql.exe is located to execute following command

```
mysql -u root
```

***3.4 Change the root password***
* root password need to be changed to 'admin'

```sql
mysql> FLUSH PRIVILEGES;
mysql> ALTER USER 'root'@'localhost' IDENTIFIED BY 'admin';
```
***3.5 Creating Database***
```sql
mysql> CREATE DATABASE IF NOT EXISTS UserInfo;
```

***3.4 Creating a Table***
```sql
mysql> USE UserInfo
mysql> CREATE TABLE IF NOT EXISTS Users (id INT AUTO_INCREMENT PRIMARY KEY, profileid VARCHAR(30), token VARCHAR(200), email VARCHAR(30), password VARCHAR(100))
```

### 4. Node.js
* Clone this project from GitHub, and install necessary modules by running the following command in the project directory.
```
$ npm install
```
* Go to the project path and run 'npm start' on the terminal.

```
$ npm start
```
