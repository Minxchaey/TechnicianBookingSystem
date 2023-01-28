<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\TechnicianAccount;

class TechnicianSchedule extends Model
{
    use HasFactory;

    protected $fillable = [
        'technician_account_id',
        'description',
        'date_started',
        'date_ended',
        'time_started',
        'time_ended',
        'status',
    ];

    public function technician(){
        return $this->belongsToMany(TechnicianAccount::class, 'technician_account_id', 'id');
    }
}
