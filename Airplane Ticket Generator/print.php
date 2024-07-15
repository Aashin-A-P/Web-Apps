<html>
<head>
<link rel="stylesheet" href="8(1).css">
</head>
<body>

<?php try {
$firstName = $_POST['fname'];
$lastName = $_POST['lname'];
$age = $_POST['age'];
$contactNumber = $_POST['cont'];
$gender = $_POST['gen'];
$destination = $_POST['dest'];
$handBagWeight = $_POST['hb'];
$extraBagWeight = $_POST['ab'];

try {
if (!is_numeric($handBagWeight) || $handBagWeight < 0) {
throw new Exception("Invalid hand bag weight. Please enter a non-negative numeric value.");
}
if ($handBagWeight > 7) {
throw new Exception("Hand Bag Weight Exceeded.");
}
} catch (Exception $e) {
// Handle hand bag weight exceptions echo "Error: " . $e->getMessage(); exit;
}

try {
if (!is_numeric($extraBagWeight) || $extraBagWeight < 0) {
 
throw new Exception("Invalid extra baggage weight. Please enter a non-negative numeric value.");
}
if ($extraBagWeight > 14) {
throw new Exception("Extra Baggage Weight Exceeded.");
}
} catch (Exception $e) {
// Handle extra baggage weight exceptions echo "Error: " . $e->getMessage();
exit;
}

echo "<div class='ticket'>";
echo "<center><img src='air.png' height=200px width=50%></center><hr>"; echo "<h1><center><u>Boarding Pass:</u></center></h1>";
echo "<h2><u>Personal Details:</u></h2>";
echo "<h3>Name: $firstName $lastName&nbsp;&nbsp;&nbsp;&nbsp;Age:
$age&nbsp;&nbsp;&nbsp;&nbsp;Contact Number: $contactNumber &nbsp;&nbsp;&nbsp;&nbsp;Gender: $gender </h3><hr>"; echo "<h2>Destination: $destination</h2><hr>";
echo "<h2><u>Baggage Details:</u></h2>";
echo "<h3>Hand Bag Weight: $handBagWeight&nbsp;&nbsp;&nbsp;&nbsp;Extra Baggage Weight:
$extraBagWeight<hr>";
echo "<h2><u>Selected Add-ons:</u></h2>";
echo "<h3>" . implode('<br>', $_POST['add']) . "</h3>"; echo "</div>";
} catch (Exception $e) {
echo "Error: " . $e->getMessage();
}
?>
</body>
</html>
