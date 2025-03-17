<?php
header('Content-Type: application/json');  // Specify that the response is in JSON format
header('Access-Control-Allow-Origin: *');  // Allow all domains (CORS)
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS'); // Allowed HTTP methods
header('Access-Control-Allow-Headers: Content-Type, Authorization'); // Allowed headers

// Optionally, check for API key or Authorization header for access control
// if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
//     exit;  // Handle pre-flight OPTIONS requests (CORS)
// }

$db = new mysqli('localhost', 'root', '', 'react_erp');
$table = 'doctors';
// $id = isset($_GET['id']) ? $_GET['id'] : "";
// $criteria = isset($_GET['id']) ? "where id = $id" : "";
// $data = $db->query("select * from $table $criteria;");
// $data = $data->fetch_all(MYSQLI_ASSOC);


// create table if not exists doctors(
//     id int auto_increment primary key,
//     name varchar (255),
//     photo varchar (255),
//     age int(3),
//     phone varchar (20),
//     email varchar (255),
//     address varchar (255),
//     gender varchar (6)
//     )

if (isset($_POST['create'])) {
    $name = $_POST['name'];
    $photo = $_POST['photo']??"";
    $age = $_POST['age'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $address = $_POST['address'];
    $gender = $_POST['gender'];

    $db->query("insert into $table (name, photo, phone, email, address, gender, age) values ('$name','$photo','$phone', '$email', '$address', '$gender', '$age');");

    echo json_encode("Data Inserted!");
}


if (isset($_POST['read'])) {
    // $criteria = isset($_POST['id']) ? "where id ="+ $_POST['id'] : "";
    $data = $db->query("select * from $table;");
    $data = $data->fetch_all(MYSQLI_ASSOC);
    echo json_encode($data);
    // echo json_encode("Data Fetched!");
}


if (isset($_POST['update'])) {
    $update_id = $_POST['id'];
    $name = $_POST['name'];
    $photo = $_POST['photo'];
    $age = $_POST['age'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $address = $_POST['address'];
    $gender = $_POST['gender'];

    $db->query("update $table set name='$name', phone='$phone', email='$email', address='$address', photo='$photo', gender='$gender', age='$age' where id = '$update_id';");
    echo json_encode("Data Updated!");
}

if (isset($_POST['delete'])) {

    $delete_id = $_POST['id'];
    $db->query("delete from $table where id = $delete_id;");
    echo json_encode("Data Deleted!");
}

// echo '<h1 style="color:red; text-align:center; margin-top:43vh">You are trying to read data without any access!</h1>';



// if (isset($_GET['id'])) {
//     $data = $db->query("select * from $table $criteria;");
//     $data = $data->fetch_all(MYSQLI_ASSOC);
//     echo json_encode($data);

    // echo json_encode($data);
// } elseif ($_POST) {
//     echo "<h1> From Post Method!</h1>";
//     echo '<pre>';
//     print_r($data);
//     echo '</pre>';
// }
