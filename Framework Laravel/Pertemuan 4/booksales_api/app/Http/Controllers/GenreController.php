<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Genre;
use Illuminate\Support\Facades\Validator;

class GenreController extends Controller
{
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'descriptions' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $genre = Genre::create([
            'name' => $request->name,
            'descriptions' => $request->descriptions,
        ]);

        return response()->json(['message' => 'Genre created successfully', 'genre' => $genre],201);
    }

    public function index()
    {
        return response()->json(Genre::all());
    }
}
