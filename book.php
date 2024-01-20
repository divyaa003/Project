<?php
$connection = mysqli_connect('localhost', 'root', '','book_db');
if(isset($_POST['submit'])){
     $name = $_POST['name'];
     $email = $_POST['email'];
     $phone = $_POST['phone'];
     $address = $_POST['address'];
     $location = $_POST['location'];
     $members = $_POST['members'];
     $arrivals = $_POST['arrivals'];
     $leaving = $_POST['leaving'];

     $request = "insert into book(name,email,phone,address,location,members,arrivals,leaving) values('$name','$email','$phone','$address','$location','$members','$arrivals','$leaving')";

     mysqli_query($connection, $request);

     header('location:index.html');
}
else{
    echo 'Something went wrong, Try Again.';
}
?>