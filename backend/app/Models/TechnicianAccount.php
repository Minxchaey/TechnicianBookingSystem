<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use App\Models\Place;
use Illuminate\Database\Eloquent\Model;

class TechnicianAccount extends Model
{
    use HasApiTokens, HasFactory, Notifiable;
    
    protected $fillable = [
        'name',
        'gender',
        'birthdate',
        'age',
        'address',
        'phone',
        'email',
        'valid_id',
        'category',
        'password'
       
    ];
    protected $hidden = [
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function place(){
        return $this->hasOne(Place::class);
    }

    /**
     * Get the user associated with the OwnerAccount
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */

}

