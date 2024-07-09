# Dollar Rate Assignment

## Overview

This task was divided into three parts:

### Part A - Database

*create a database containing the average monthly dollar exchange rate starting from January 2023 (month + average)
The database will be updated every 01 of the month for the previous month
The real information must be entered*

### Part B - Server and Client Side, Database Views

*create a computerized information system that displays the data in the following views:*

- *Average graph by months*
- *a table with a color rating (red = the lowest average gate, green = the highest average gate)*
- *search options and marking a specific month*
- *add an approximate forecast for the next month with reference to the average of the previous 3 months*
- *display options sorted by months and/or by average rates in ascending order*

### Part C - Advanced use of data

*based on the forecast matrix (in which each cell consists of the average of the previous 3 months) create another matrix containing the difference between the monthly average exchange rate that was actually determined and the forecast exchange rate
add a row in the matrix containing the average difference between each 3 months
create another matrix that is a product of the matrix from part b by the matrix from part c (= multiplication of matrices)
by clicking the 'show' button, the updated matrix will be displayed in a neat table graph*

## Who It Works?

For the purpose of running the assignment, we will build 2 Docker images, one for the server and one for the client, and we will run them both

First we will run the server

```cmd
docker build -t <SERVER_IMAGE_NAME> .
```

```cmd
docker run -d -p 8000:8000 <SERVER_IMAGE_NAME>
```

And then the client

```cmd
docker build -t <CLIENT_IMAGE_NAME> .
```

```cmd
docker run -d -p 3000:3000 <CLIENT_IMAGE_NAME>
```

> **NOTES:**
>
> - Don't run the 2 images with hte same name
> - Pay attention before running the image that the navigation corresponds to the desired image

After everything runs as it should, a navigation bar will appear on the screen, and each time you click on one of the tabs in the bar a different part of the task will be displayed on the screen  

&nbsp;  

For any question or problem I am here to explain

Successfully!
