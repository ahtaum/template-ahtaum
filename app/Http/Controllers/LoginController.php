<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class LoginController extends Controller
{
    // Pages
    public function login() {
        return Inertia::render('Auth/Login');
    }

    public function register() {
        return Inertia::render('Auth/Register');
    }
}
