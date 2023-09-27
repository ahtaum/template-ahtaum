<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

use App\Models\Note;

class HomeController extends Controller
{
    // Pages
    public function index() {
        $notes = Note::all();

        return Inertia::render("Admin/Home/Home", compact("notes"));
    }
}
