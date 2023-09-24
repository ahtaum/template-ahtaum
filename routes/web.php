<?php

use App\Http\Controllers\LoginController;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\MainController;

Route::controller(MainController::class)->group(function () {
    Route::get("/", "home")->name("home");
});

Route::controller(LoginController::class)->group(function () {
    Route::get("/login", "login")->name("auth.login");
})->prefix("auth");