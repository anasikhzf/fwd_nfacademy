<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Form Penilaian Ujian</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">
    <div class="container py-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card shadow-sm">
                    <div class="card-body">
                        <h3 class="card-title text-center mb-4">Form Penilaian Ujian</h3>

                        <!-- FORM -->
                        <form method="POST" action="">
                            <div class="mb-3">
                                <label for="nama" class="form-label">Nama</label>
                                <input type="text" class="form-control" id="nama" name="nama" required>
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" class="form-control" id="email" name="email" required>
                            </div>
                            <div class="mb-3">
                                <label for="nilai" class="form-label">Nilai Ujian</label>
                                <input type="number" class="form-control" id="nilai" name="nilai" required>
                            </div>
                            <button type="submit" class="btn btn-primary w-100">Kirim</button>
                        </form>

                        <!-- HASIL -->
                        <?php
                        if ($_SERVER["REQUEST_METHOD"] == "POST") {
                            $nama = htmlspecialchars($_POST['nama']);
                            $email = htmlspecialchars($_POST['email']);
                            $nilai = (int) $_POST['nilai'];
                            $status = $nilai > 70 ? 
                                "<span class='badge bg-success'>Lulus</span>" : 
                                "<span class='badge bg-danger'>Remedial</span>";
                            echo "<hr>";
                            echo "<h5 class='mt-3'>Hasil Penilaian</h5>";
                            echo "<ul class='list-group'>";
                            echo "<li class='list-group-item'><strong>Nama:</strong> {$nama}</li>";
                            echo "<li class='list-group-item'><strong>Email:</strong> {$email}</li>";
                            echo "<li class='list-group-item'><strong>Nilai:</strong> {$nilai}</li>";
                            echo "<li class='list-group-item'><strong>Status:</strong> {$status}</li>";
                            echo "</ul>";
                        }
                        ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <footer class="bg-dark text-white text-center py-3 fixed-bottom">
        <small>
            &copy; 2025 Form Penilaian Ujian - All Right Reserved
            <br>
            A. Nasikh Zainal Fanani | Universitas Trunojoyo Madura
        </small>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>