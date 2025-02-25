<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


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