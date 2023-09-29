<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

use App\Http\Requests\CreateDataRequest;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

use App\Models\Note;

class HomeController extends Controller
{
    // Pages
    public function index() {
        $notes = Note::all();

        return Inertia::render("Admin/Home/Home", compact("notes"));
    }

    public function add() {
        return Inertia::render("Admin/Home/Add");
    }

    // process
    public function store(CreateDataRequest $request) {
        $validateInput = $request->validated();
        
        Note::create([
            "title" => $validateInput["title"],
            "slug" => Str::slug($validateInput["title"]) . "-" . Str::random(5),
            "description" => $validateInput["description"],
            "publish" => $validateInput["publish"]
        ]);

        return redirect()->route('admin.home')->with("message", "Add Data Success");
    }
}
