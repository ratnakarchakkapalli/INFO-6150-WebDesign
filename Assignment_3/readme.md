This repository contains HTML, CSS, and JavaScript code for a web application that displays a table with student information and allows users to interact with the data. Below, you will find an overview of the files included in this repository and a brief description of their contents.

Files Included
1. table.html
Author: Deepak Kumar
Description: This HTML file defines the structure of the web page. It contains a table displaying student information, checkboxes for selecting rows, and buttons for submitting selected awards and adding new students. The table is initially populated with sample data.
2. table.css
Author: Deepak Kumar
Description: This CSS file contains styling rules for the table and its elements. It defines the table's appearance, including borders, colors, and layout.
3. style.css
Author: Deepak Kumar
Description: This CSS file contains additional styling rules for the web page. It includes styling for social media icons and general page formatting.
4. script.js
Author: Deepak Kumar
Description: This JavaScript file contains the logic for handling user interactions with the table. It allows users to select rows, view additional information, edit rows, delete rows, add new students, and submit selected awards.
Usage Instructions
To use this web application:

Open table.html in a web browser.

The table displays a list of students with checkboxes for selecting rows. You can click the checkboxes to select specific rows.

Clicking the "Edit Row" button allows you to edit the details of a selected student.

Clicking the "Delete Row" button removes a selected student's record from the table.

Clicking the "Add New Student" button adds a new student to the table.

The "Submit Selected Awards" button becomes active when one or more rows are selected. You can click this button to submit selected awards.

The page also displays social media icons in the footer.
# HTML (table.html)
## Tags and Attributes Used:
<!DOCTYPE html>: Specifies the document type and version of HTML.
<html>: The root element of an HTML document.
<head>: Contains meta-information about the document, such as the title and linked stylesheets.
<title>: Sets the title of the web page.
<link>: Links external stylesheets (table.css and style.css).
<body>: Contains the visible content of the web page.
<table>: Defines a table.
<tr>: Defines a table row.
<th>: Defines a table header cell.
<td>: Defines a table data cell.
<input>: Defines an input field (checkbox).
<img>: Embeds an image.
<button>: Defines a clickable button.
<div>: Defines a container for other HTML elements.
<br>: Represents a line break.

# CSS (table.css and style.css)
## Tags and Attributes Used:
- #myTable, #myTable input: Selects elements by their ID and element type.
- border, border-collapse, padding: CSS properties for styling tables.
- color, background-color, border-radius: CSS properties for styling buttons and table headers.
- .dropDownTextArea, .Hidecol: Selects elements by their class for hiding and displaying.
- ul, li, img: Styles for social media icons.
- font-family: Sets the font family for text.

# JavaScript (script.js)
## Functions and Variables:
- Title: A constructor function for creating a title object.
- socialMedia: An object containing social media links.
- t: An instance of the Title constructor.
- no_incr: A variable used for incrementing row numbers.
- displayMyInfo(): Function to display user information.
- Hide(): Function to hide elements based on checkbox selection.
- selectRow(): Function to select rows and handle checkbox events.
- rowOne(r): Function to toggle display of description rows.
- rowVal(r): Function to toggle display of description rows on image click.
- deleteRow(r): Function to delete a row and update the table.
- editRow(r): Function to edit a row.
- addRow(): Function to add a new row to the table.
- nextRow(): Function to add a new description row.
- Event listeners for handling clicks and updating the submit button.
## Author
This web application was created by Deepak Kumar.