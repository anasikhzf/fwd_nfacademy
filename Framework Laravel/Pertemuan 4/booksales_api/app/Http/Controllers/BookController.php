<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Book;
use Illuminate\Support\Facades\Validator;

class BookController extends Controller
{
     public function index()
    {
        $books = Book::with(['author', 'genre'])->get();
        return response()->json($books);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string',
            'description' => 'required|string',
            'image' => 'required|image',
            'author_id' => 'required|exists:authors,id',
            'genre_id' => 'required|exists:genres,id',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $image = $request->file('image');
        $imageName = $image->hashName();
        $image->move(public_path('images'), $imageName);

        $book = Book::create([
            'title' => $request->title,
            'description' => $request->description,
            'image_name' => $imageName,
            'author_id' => $request->author_id,
            'genre_id' => $request->genre_id,
        ]);

        return response()->json(['message' => 'Book created successfully', 'book' => $book],201);
    }
}
