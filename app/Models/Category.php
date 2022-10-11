<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $table = 'categories';

    protected $fillable = [
        'category_code',
        'category_name',
    ];

    protected $dates = [
        'created_at',
        'updated_at',
    ];

    public function products()
    {
        return $this->hasMany(Product::class);
    }
}
