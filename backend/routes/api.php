<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CustomerAccountController;
use App\Http\Controllers\TechnicianAccountController;
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

Route::post("/register/technician", [TechnicianAccountController::class, 'store']);
Route::post("/register/customer", [CustomerAccountController::class, 'store']);
Route::get("customer", [CustomerAccountController::class, 'index']);

Route::middleware('auth:sanctum')->group(function () {
// Route::apiResource('customer', CustomerAccountController::class);

    Route::get("customer/{id}", [CustomerAccountController::class, 'show']);
    Route::put("customer/{id}", [CustomerAccountController::class, 'update']);
    Route::patch("customer/{id}", [CustomerAccountController::class, 'update']);
    Route::delete("customer/{id}", [CustomerAccountController::class, 'destroy']);

    Route::post('customer/logout', [AuthController::class, "logoutCustomerAcc"]);
    Route::post('technician/logout', [AuthController::class, "logoutTechnicianAcc"]);

});

Route::middleware(['auth:sanctum', 'email_verified'])->get('/user', function (Request $request) {
    return $request->user();
});
// Route::middleware(['cors'])->post('login', [AuthController::class, "loginTechnicianAcc"]);
Route::post('/login/technician', [AuthController::class, "loginTechnicianAcc"]);
Route::post('/login/customer', [AuthController::class, "loginCustomerAcc"]);
