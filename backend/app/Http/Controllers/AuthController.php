<?php

namespace App\Http\Controllers;
use App\Models\CustomerAccount;
use App\Models\TechnicianAccount;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function loginTechnicianAcc(Request $request){
        // dd($request->all());
        $validateData = $request->validate([
            'email' => 'required|email',
            'password'=> 'required'
        ]);

        $tech = TechnicianAccount::where('email', $validateData['email'])->first();

        if($tech && Hash::check($validateData['password'],$tech->password)){
            $token = $tech->createToken('api',['create']);

            return[
                'token' => $token->plainTextToken
            ];
        }else{
            return[
                'error'=> "Invalid Credentials"
            ];
        }

    }


    public function loginCustomerAcc(Request $request){

        $validateData = $request->validate([
            'email' => 'required|email',
            'password'=> 'required'
        ]);

        $owner = CustomerAccount::where('email', $validateData['email'])->first();

        if($owner && Hash::check($validateData['password'],$owner->password)){
            $token = $owner->createToken('api',['create']);

            return[
                'token' => $token->plainTextToken
            ];
        }else{
            return[
                'error'=> "Invalid Credentials"
            ];
        }
    }

    public function logoutCustomerAcc(Request $request){
        $request->user()->tokens()->delete();
    }
    public function logoutTechnicianAcc(Request $request){
        $request->user()->tokens()->delete();
    }
}
