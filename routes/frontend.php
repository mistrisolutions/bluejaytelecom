<?php
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;


Route::get('/',function(){
    return Inertia::render('Frontend/Welcome');
});

Route::get('/about',function(){
    return Inertia::render('Frontend/About');
});

Route::get('/service',function(){
    return Inertia::render('Frontend/Service');
});

Route::get('/features',function(){
    return Inertia::render('Frontend/Features');
});

Route::get('/contact',function(){
    return Inertia::render('Frontend/Contact');
});

Route::post('/contact/send',[ContactController::class,'store'])->name('contact.store');

Route::get('/licenses',function(){
    return Inertia::render('Frontend/Licenses');
});

Route::get('/privecy',function(){
    return Inertia::render('Frontend/Privecy');
});

Route::get('/terms',function(){
    return Inertia::render('Frontend/Terms');
});
