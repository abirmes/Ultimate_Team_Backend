<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>adding</title>
    <link rel="stylesheet" href="./stylePHP.css">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>

<body>

    <section class=" my-5 d-flex justify-content-center">
        <h1>add a new player :</h1>
    </section>
    <section class="row">
        <div class="col-md-2"></div>
        <div class="col-md-8">
            <form action="add.php" method="post">
                <label for="name" class="form-label" id="Lname">name</label>
                <input type="text" class="form-control" name="name" >
                <label for="photo" class="form-label">photo URL</label>
                <input type="text" class="form-control" name="photo" >
                <label for="position" class="form-label">position</label>
                <select class="form-select" name="position" >
                    <option selected disabled value="">Choose position</option>
                    <option value="LB">LB</option>
                    <option value="RB">RB</option>
                    <option value="LW">LW</option>
                    <option value="RW">RW</option>
                    <option value="ST">ST</option>
                    <option value="CM">CM</option>
                    <option value="CM">GK</option>
                </select>
                <label for="nationality" class="form-label">nationality</label>
                <input type="text" class="form-control" name="nationality" >
                <label for="flag" class="form-label">flag URL</label>
                <input type="text" class="form-control" name="flag" >
                <label for="club" class="form-label">club</label>
                <input type="text" class="form-control" name="club" >
                <label for="logo" class="form-label">logo URL</label>
                <input type="text" class="form-control" name="logo" >
                <label for="rating" class="form-label">rating</label>
                <input type="number" class="form-control" name="rating" >
                <label for="pace" class="form-label">pace</label>
                <input type="number" class="form-control" name="pace" >
                <label for="shooting" class="form-label" ">shooting</label>
            <input type=" number" class="form-control" name="shooting" >
                    <label for="passing" class="form-label">passing</label>
                    <input type="number" class="form-control" name="passing" >
                    <label for="dribbling" class="form-label">dribbling</label>
                    <input type="number" class="form-control" name="dribbling" >
                    <label for="defending" class="form-label">defending</label>
                    <input type="number" class="form-control" name="defending" >
                    <label for="physical" class="form-label">physical</label>
                    <input type="number" class="form-control" name="physical" >
                    <input type="submit" value="add" name="submit">
            </form>
        </div>
        <div class="col-md-2"></div>

    </section>
    <?php
    require_once "conn.php";
    if (isset($_POST['submit'])) {
        $name = $_POST['name'];
        $photo = $_POST['photo'];
        $position = $_POST['position'];
        $nationality = $_POST['nationality'];
        $flag = $_POST['flag'];
        $club = $_POST['club'];
        $logo = $_POST['logo'];
        $rating = $_POST['rating'];
        $pace = $_POST['pace'];
        $shooting = $_POST['shooting'];
        $passing = $_POST['passing'];
        $dribbling = $_POST['dribbling'];
        $defending = $_POST['defending'];
        $physical = $_POST['physical'];
        // $rslt = "SELECT COUNT(*) FROM Detail_players;";
        // if (mysqli_query($conn, $rslt)) {
        //     $id = $rslt;
        // }
        $sqlP = " INSERT INTO `Players` VALUES  (NULL , '$name' , '$rating' , '$position' , '$photo' , 1 , 1 , 1 , 1 ); ";
        $sqlN = " INSERT INTO `Nationalities` VALUES  (NULL , '$nationality' , '$flag'); ";
        $sqlC = " INSERT INTO `Clubs` VALUES  (NULL , '$club' , '$logo' );";
        $sqlDP = " INSERT INTO `Detail_players` VALUES  (NULL , $pace , $shooting , $passing , $dribbling , $defending , $physical); ";
        if (
            mysqli_query($conn, $sqlP)
             && mysqli_query($conn, $sqlN) &&
            mysqli_query($conn, $sqlC) && mysqli_query($conn, $sqlDP)
        ) {
            echo "player ajoutée avec succee";
        }
    }






    ?>








    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>

</html>