<html>
<head>
<title>Form Handling in PHP</title>
<link rel="stylesheet" href="8.css">
</head>
<body>
<center><h1>Chennai Kamaraj Terminal</h1></center>
<h2>Ticket Registration Form:</h2>
<form action="print.php" method="post">
<h3>Personal Details:</h3>
<label for="fname"><h4>Enter your First Name:</h4></label>
<input type="text" name="fname" id="fname" required>
<label for="lname"><h4>Enter your Last Name:</h4></label>
<input type="text" name="lname" id="lname">
<label for="age"><h4>Enter your Age:</h4></label>
<input type="number" name="age" id="age" required>
<label for="cont"><h4>Enter Contact Number:</h4></label>
<input type="number" name="cont" id="cont" required>
<label for="gen"><h4>Gender:</h4></label>
<h5><input type="radio" name="gen" id="gen" value="Male">Male</h5>
<h5><input type="radio" name="gen" id="gen" value="Female">Female</h5>
<h5><input type="radio" name="gen" id="gen" value="Other">Other</h5>
<label for="dest"><h4>Select Your Destination:</h4></label>
<select name="dest" id="dest">
<option value="Delhi">New Delhi</option>
<option value="Mumbai">Mumbai</option>
<option value="Kolkatta">Kolkatta</option>
<option value="Trivandrum">Trivandrum</option>
</select>
<h3>Baggage Details:</h3>
<label for="hb"><h4>Hand Bag Weight:(Should Not Exceed 7 kgs)</h4></label>
<input type="number" name="hb" id="hb">
<label for="ab"><h4>Extra Baggage Weight:(Should Not Exceed 14kgs)</h4></label>
<input type="number" name="ab" id="ab">
<h3>Add-ons:</h3>
<label for="add"><h4>Select our add-ons:</h4></label>
<h5><input type="checkbox" name="add[]" id="add" value="Gourmet Cuisine<br>">Gourmet Cuisine</h5>
<h5><input type="checkbox" name="add[]" id="add" value="Cocktail,Champagne<br>">Cocktails and Champagne</h5>
<h5><input type="checkbox" name="add[]" id="add" value="Dietary<br>">Dietary Options</h5>
<input type="submit" value="Generate Ticket">
</form>
</body>
</html>
