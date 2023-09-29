<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\HomeController;
use App\Http\Controllers\LoginController;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\MainController;

Route::controller(MainController::class)->group(function () {
    Route::get("/", "home")->name("home");
});

Route::controller(LoginController::class)->group(function () {
    Route::get("/login", "login")->name("auth.login");
    Route::get("/register", "register")->name("auth.register");
})->prefix("auth");

Route::controller(AdminController::class)->group(function () {
    Route::get("admin/dashboard", "dashboard")->name("admin.dashboard");
});

// Home Module
Route::controller(HomeController::class)->group(function () {
    Route::get("admin/home", "index")->name("admin.home");
    Route::get("admin/home/add", "add")->name("admin.home.add");

    Route::post("admn/home/store", "store")->name("admin.home.store");
});