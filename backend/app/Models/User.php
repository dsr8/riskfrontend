<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $table = 'users';
    protected $fillable = [
        'id', 'name', 'email', 'email_verified_at', 'password', 'remember_token', 'created_at', 'updated_at' 
        
    ];

}



