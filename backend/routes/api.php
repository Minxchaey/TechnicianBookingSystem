<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CustomerAccountController;
use App\Http\Controllers\TechnicianAccountController;
use App\Http\Controllers\TechnicianFeedbackController;
use App\Http\Controllers\TechnicianScheduleController;
use App\Http\Controllers\TechnicianCertificateController;
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
Route::post('/login/technician', [AuthController::class, "loginTechnicianAcc"]);
Route::post('/login/customer', [AuthController::class, "loginCustomerAcc"]);

Route::get("customer", [CustomerAccountController::class, 'index']);

Route::middleware('auth:sanctum')->group(function () {

    Route::get("customer/{id}", [CustomerAccountController::class, 'show']);
    Route::put("customer/{id}", [CustomerAccountController::class, 'update']);
    Route::patch("customer/{id}", [CustomerAccountController::class, 'update']);
    Route::delete("customer/{id}", [CustomerAccountController::class, 'destroy']);

    Route::get("schedule/{id}", [TechnicianScheduleController::class, 'show']);
    Route::post("schedule", [TechnicianScheduleController::class, 'store']);

    Route::post("feedback", [TechnicianFeedbackController::class, 'store']);
 

    Route::post('customer/logout', [AuthController::class, "logoutCustomerAcc"]);
    Route::post('technician/logout', [AuthController::class, "logoutTechnicianAcc"]);

});
Route::apiResource("certificate", TechnicianCertificateController::class);

Route::middleware(['auth:sanctum', 'email_verified'])->get('/user', function (Request $request) {
    return $request->user();
});
