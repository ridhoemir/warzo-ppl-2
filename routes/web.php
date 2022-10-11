<?php

use App\Http\Controllers\CategoryController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

//Product Category
Route::get('/product_category', [CategoryController::class, 'index'])->name('category.index');
Route::get('/product_category/create', [CategoryController::class, 'create'])->name('category.create.form');
Route::post('/product_category/create', [CategoryController::class, 'store'])->name('category.create.store');
Route::get('/product_category/{category}/update', [CategoryController::class, 'edit'])->name('category.edit.form');
Route::patch('/product_category/{category}/patch', [CategoryController::class, 'update'])->name('category.edit.post');
// Route::get('/product_category/{category}/update', [CategoryController::class, 'index'])->name('category.index');


require __DIR__.'/auth.php';
