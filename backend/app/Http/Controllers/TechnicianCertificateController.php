<?php

namespace App\Http\Controllers;

use App\Models\TechnicianCertificate;
use Illuminate\Http\Request;

class TechnicianCertificateController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
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
        // $validated = $request->validate([
        //     'image' => 'required'
        // ]);

        if ($request ->hasFile('image')){
$cfn = $request->file('image')->getClientOriginalName();
$fno = pathinfo($cfn, PATHINFO_FILENAME);
$e = $request->file('image')->getClientOriginalExtension();
$cp = str_replace(' ', '_',$fno).'-'.rand().'_'.time().'.'.$e;
       $path = $request->file('image')->storeAs('public/cer_images', $cp);
dd($path);

  return TechnicianCertificate::create([
            'technician_account_id' => $request->technician_account_id,
            'image' => $cp 

        ]);
    }

        
      
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\TechnicianCertificate  $technicianCertificate
     * @return \Illuminate\Http\Response
     */
    public function show(TechnicianCertificate $technicianCertificate)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\TechnicianCertificate  $technicianCertificate
     * @return \Illuminate\Http\Response
     */
    public function edit(TechnicianCertificate $technicianCertificate)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\TechnicianCertificate  $technicianCertificate
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, TechnicianCertificate $technicianCertificate)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\TechnicianCertificate  $technicianCertificate
     * @return \Illuminate\Http\Response
     */
    public function destroy(TechnicianCertificate $technicianCertificate)
    {
        //
    }
}
