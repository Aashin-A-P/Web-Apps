<html>
<head>
<title>PHP Variables and Functions</title>
<link rel="stylesheet" href='7.css'>
</head>
<body>
<center><h1>Welcome to PHP</h1></center>
<h1>Email Generator:</h1>
<form action="file.php" method="post" enctype="multipart/form-data">
<div class='parent'>
<div class='a'>
<label for="add"><h4>Enter Receiver Address:</h4></label>
<input type="email" name="add" id="add" placeholder="apaashin@gmail.com">
<label for="sub"><h4>Enter Subject of Email:</h4></label>
<input type="text" name="sub" id="sub" placeholder="Regarding...">
<label for="content"><h4>Select the Content File:</h4></label>
<input type="file" name="cont" id="content" placeholder="Body of the email">
</div>
<div class='b'>
<label for="name"><h4>Enter your name:</h4></label>
<input type="text" name="name" id="name" placeholder="A P Aashin">
<label for="addr"><h4>Enter your Address:</h4></label>
<textarea name="addr" id="addr" cols="30" rows="10"></textarea>
<label for="dist"><h4>Enter your District:</h4></label>
<input type="text" name="dist" id="dist">
</div>
<div class='c'>
<label for="state"><h4>Enter your State:</h4></label>
<input type="text" name="state" id="state">
<label for="pin"><h4>Enter Pincode:</h4></label>
<input type="number" name="pin" id="pin">
 
<label for="formal">Enter type of Email:</label>
<select name="formal" id="formal">
<option value="f">Formal</option>
<option value="if">Informal</option>
</select>
<input type="submit" value="Compose Email">
</div>
</div>
</form>
</body>
</html>
