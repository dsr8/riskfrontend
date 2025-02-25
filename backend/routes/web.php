<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RiskController;
use App\Http\Controllers\UserController;

Route::get('/', function () {
    return view('welcome');
});
Route::get('risk/store1', [RiskController::class, 'test']);
Route::post('risk/store1', [RiskController::class, 'test1']);
Route::post('user/login',[UserController::class,'login']);
Route::post('user/register',[UserController::class,'register']);
Route::get('user/logout',[UserController::class,'logout']);
Route::get('risk/getRisk', [RiskController::class, 'getRisk']);

Route::post('risk/delrisk', [RiskController::class, 'delrisk']);
// Route::post('/risk/store1', function (Request $request) {
//     return response()->json(['message' => 'POST request received!'])
//         ->header('Access-Control-Allow-Origin', '*')
//         ->header('Access-Control-Allow-Methods', 'POST, OPTIONS')
//         ->header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
// });
// Route::options('/risk/store1', function () {
//     return response()->json([], 200)
//         ->header('Access-Control-Allow-Origin', '*')
//         ->header('Access-Control-Allow-Methods', 'POST, OPTIONS')
//         ->header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
// });