<?php

namespace App\Http\Controllers;

use App\Models\TechnicianFeedback;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class TechnicianFeedbackController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validated = $request->validate([


            'message' => 'required'
        ]);

        return TechnicianFeedback::create([
            'technician_account_id' => $request->technician_account_id,
            'message' => $validated['message'],
            'email_verified_at' => now(),
            // 'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'remember_token' => Str::random(10),
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\TechnicianFeedback  $technicianFeedback
     * @return \Illuminate\Http\Response
     */
    public function show(TechnicianFeedback $technicianFeedback)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\TechnicianFeedback  $technicianFeedback
     * @return \Illuminate\Http\Response
     */
    public function edit(TechnicianFeedback $technicianFeedback)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\TechnicianFeedback  $technicianFeedback
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, TechnicianFeedback $technicianFeedback)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\TechnicianFeedback  $technicianFeedback
     * @return \Illuminate\Http\Response
     */
    public function destroy(TechnicianFeedback $technicianFeedback)
    {
        //
    }
}
