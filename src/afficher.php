<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <title>Document</title>
</head>

<body>

    <div class="container my-5">
        <div class="row">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">name</th>
                        <th scope="col">photo</th>
                        <th scope="col">position</th>
                        <th scope="col">rating</th>
                        <th scope="col">nationality</th>
                        <th scope="col">club</th>
                        <th scope="col">pace</th>
                        <th scope="col">shooting</th>
                        <th scope="col">passing</th>
                        <th scope="col">dribbling</th>
                        <th scope="col">defending</th>
                        <th scope="col">physical</th>
                        <th scope="col">update</th>
                        <th scope="col">delete</th>
                    </tr>
                </thead>
                <tbody>
                    <?php
                    require_once 'conn.php';
                    $sql = " SELECT Players.id, Players.name as name, Players.photo , Players.position_player, Players.rating, Nationalities.name as nationality , Clubs.name as club, Detail_players.pace , Detail_players.shooting , Detail_players.passing , Detail_players.dribbling , Detail_players.defending , Detail_players.physical FROM `Players` INNER JOIN Nationalities ON Players.id_nationality = Nationalities.id INNER JOIN Clubs ON Players.id_club = Clubs.id INNER JOIN Detail_players ON Players.id_detail_player = Detail_players.id;";
                    $resultat = mysqli_query($conn, $sql);
                    while ($row = mysqli_fetch_assoc($resultat)) { ?>
                        <tr>
                            <td><?php echo $row['id'] ?></td>
                            <td><?php echo $row['name'] ?></td>
                            <td><img src=<?php echo $row['photo'] ?> style="width: 20px"></td>
                            <td><?php echo $row['position_player'] ?></td>
                            <td><?php echo $row['rating'] ?></td>
                            <td><?php echo $row['nationality'] ?></td>
                            <td><?php echo $row['club'] ?></td>
                            <td><?php echo $row['pace'] ?></td>
                            <td><?php echo $row['shooting'] ?></td>
                            <td><?php echo $row['passing'] ?></td>
                            <td><?php echo $row['dribbling'] ?></td>
                            <td><?php echo $row['defending'] ?></td>
                            <td><?php echo $row['physical'] ?></td>
                            <td><a class="btn btn-primary "  href='update.php?id=<?php echo $row['id'] ?>'>Modifier</a></td>
                            <td><a class="btn btn-danger"href='delete.php?id=<?php echo $row['id'] ?>'>Supprimer</a></td>

                        </tr>
                    <?php
                    }
                    ?>
                    <!-- <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr> -->
                </tbody>
            </table>
        </div>
    </div>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>

</html>