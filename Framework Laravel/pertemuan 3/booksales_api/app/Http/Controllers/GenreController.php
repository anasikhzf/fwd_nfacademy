<?php

namespace App\Http\Controllers;

use App\Models\Genre;

class GenreController extends Controller
{
    public function index()
    {
        $genres = Genre::all();

        return response()->json([
            'message' => 'Data genre berhasil diambil',
            'data' => $genres
        ], 200);
    }
}