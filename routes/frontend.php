<?php
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;


Route::get('/',function(){
    return Inertia::render('Frontend/Welcome');
});

Route::get('/about',function(){
    return Inertia::render('Frontend/About');
});

Route::get('/service',function(){
    return Inertia::render('Frontend/Service');
});