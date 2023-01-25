<?php

namespace App\Http\Controllers;
use App\Models\CustomerAccount;
use App\Models\TechnicianAccount;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function loginTechnicianAcc(Request $request){
        dd($request->all());
        $validateData = $request->validate([
            'email' => 'required|email',
            'password'=> 'required'
        ]);

        $customer = TechnicianAccount::where('email', $validateData['email'])->first();

        if($customer && Hash::check($validateData['password'],$customer->password)){
            $token = $customer->createToken('api',['create']);

            return[
                'token' => $token->plainTextToken
            ];
        }else{
            return[
                'error'=> "Invalid Credentials"
            ];
        }

    }


    // public function loginOwnerAcc(Request $request){

    //     $validateData = $request->validate([
    //         'email' => 'required|email',
    //         'password'=> 'required'
    //     ]);

    //     $owner = OwnerAccount::where('email', $validateData['email'])->first();

    //     if($owner && Hash::check($validateData['password'],$owner->password)){
    //         $token = $owner->createToken('api',['create']);

    //         return[
    //             'token' => $token->plainTextToken
    //         ];
    //     }else{
    //         return[
    //             'error'=> "Invalid Credentials"
    //         ];
    //     }
    // }

    public function logoutCustomerAcc(Request $request){
        $request->user()->currentAccessToken()->delete();
    }
    // public function logoutOwnerAcc(Request $request){
    //     $request->user()->currentAccessToken()->delete();
    // }
}
