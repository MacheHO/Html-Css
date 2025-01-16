<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ajax</title>
    <link rel="stylesheet" href="https://bootswatch.com/4/materia/bootstrap.min.css">
    <!--匯入bootswatch-->
</head>
<body>
    <div class="container">
    <div class="row">
    <div class="col-md-5 mx-auto mt-5">
    <div class="card">
    <div class="card-header">
    <h3>Signup User</h3>
    </div>
    <div class="card-bpdy">
    <form>
    <div class="form-group">
    <input type="text" id="name" class="form-control name" placeholder="Name">
    <div class="invalid-feedback" style="font-size: 16px;">Name is required</div>
    </div>
    <!--Close form-group-->
    <div class="form-group">
    <input type="email" id="email" class="form-control email" placeholder="Email">
    <div class="invalid-feedback emilError" style="font-size:16px;">Email is rwequired</div>
    </div>
    <!--Closs form-group-->
    <div class="form-group">
    <input type="password" id="password" class="form-control password" placeholder="Password">
    <div class="invalid-feedback" style="font-size: 16px;">Password is required</div>
    </div>
    <!--Closs form-group-->
    <div class="form-group">
    <button type="button" id="signup" class="btn btn-info">Signup &rarr;</button>
    <a href="login.php" style="float:right;margin-top:10px;">Alread have an account ?</a>
    </div>
    <!--Closs form-group-->
</form>
    </div>
    <!--Closs card-body-->
    </div>
    <!--Closs card-->
    </div>
    <!--Closs col-md-5-->
    </div>
    <!--Closs row-->
    </div>
    <!--Closs container-->

    <script src="https://code.jquery.com/jquery-3.3.1.min.js"
    integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
    crossorigin="anonymous"></script>
    <script src="app.js"></script>
</body>
</html>