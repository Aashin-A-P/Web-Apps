<?php
$receiverAddress = $_POST["add"];
$subject = $_POST["sub"];
$contentFile = $_FILES["cont"]["tmp_name"];
$name = $_POST["name"];
$address = $_POST["addr"];
$district = $_POST["dist"];
$state = $_POST["state"];
$pincode = $_POST["pin"];
$opt= $_POST["formal"]; move_uploaded_file($contentFile,"content.txt"); function greet($o)
{
if ($o=="f")
{
$a="Yours faithfully,";
}
else
{
$a="Yours lovingly,";
}
return $a;
}
$greet=greet($opt);
$file=fopen("content.txt","r");
$content=fread($file,filesize("content.txt")); fclose($file);
$final=fopen("final.txt","w");
fwrite($final,"To: $receiverAddress <br><hr> Subject: $subject <br><hr>"); fwrite($final,"Dear Sir/Madam,<br> $content <br><br>");
fwrite($final,"$greet <br> $name <br> $address <br> District: $district <br> State:
$state <br> Pin Code: $pincode"); fclose($final);
$final=fopen("final.txt","r");
$email=fread($final,filesize("final.txt")); fclose($final);
echo ($email);
 
?>
