<?php

namespace App\Http\Controllers;
use Illuminate\Support\Str;
use App\Models\TechnicianAccount;
use App\Models\TechnicianSchedule;
use Illuminate\Http\Request;

class TechnicianScheduleController extends Controller
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


            'date_started' => 'required',
            'date_ended' => 'required',
            'time_started' => 'required',
            'time_ended' => 'required',
        ]);
        return TechnicianSchedule::create([
            'technician_account_id' => $request->technician_account_id,
            'description' => $request-> description,
            'date_started' => $validated['date_started'],
            'date_ended' => $validated['date_ended'],
            'time_started' => $validated['time_started'],
            'time_ended' => $validated['time_ended'],
            'status' => 'Ongoing',

            'email_verified_at' => now(),
            // 'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'remember_token' => Str::random(10),
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\TechnicianSchedule  $technicianSchedule
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return TechnicianAccount::find($id)->schedule;
        // ->sortBy("name")
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\TechnicianSchedule  $technicianSchedule
     * @return \Illuminate\Http\Response
     */
    public function edit(TechnicianSchedule $technicianSchedule)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\TechnicianSchedule  $technicianSchedule
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, TechnicianSchedule $technicianSchedule)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\TechnicianSchedule  $technicianSchedule
     * @return \Illuminate\Http\Response
     */
    public function destroy(TechnicianSchedule $technicianSchedule)
    {
        //
    }
}
