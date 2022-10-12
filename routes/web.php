<?php

use App\Http\Controllers\ProductController;
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
})->middleware('guest');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth', 'verified'])->group(function () {
    //Product Category
    Route::get('/product_category', [CategoryController::class, 'index'])->name('category.index');
    Route::get('/product_category/create', [CategoryController::class, 'create'])->name('category.create.form');
    Route::post('/product_category/create', [CategoryController::class, 'store'])->name('category.create.store');
    Route::get('/product_category/{category}/update', [CategoryController::class, 'edit'])->name('category.edit.form');
    Route::patch('/product_category/{category}/patch', [CategoryController::class, 'update'])->name('category.edit.post');
    Route::delete('/product_category/{category}/delete', [CategoryController::class, 'destroy'])->name('category.delete');

    //Product 
    Route::get('/product', [ProductController::class, 'index'])->name('product.index');
    Route::get('/product/create', [ProductController::class, 'create'])->name('product.create.form');
    Route::post('/product/create', [ProductController::class, 'store'])->name('product.create.store');
    Route::get('/product/{product}/update', [ProductController::class, 'edit'])->name('product.edit.form');
    Route::patch('/product/{product}/patch', [ProductController::class, 'update'])->name('product.edit.post');
    Route::delete('/product/{product}/delete', [ProductController::class, 'destroy'])->name('product.delete');

    
});


require __DIR__.'/auth.php';
