<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Risk extends Model
{
    use HasFactory;

    // Define the table name if it's different from the plural form of the model
    protected $table = 'risk';

    // Define the columns that can be mass assigned
    protected $fillable = [
        'id',
        'title',        // The title of the risk
        'description',
        'details',
        'type',
        'category',
        'probability',
        'impact',
        'mitigation',
        'location',
        'responsible',
        'status',
        'inherent_risk',
        'residual_risk',
        'created_at',
        'updated_at'  // The description of the risk
    ];
}



