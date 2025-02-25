<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array<int, string>
     */
    // protected $except = [
    //     'risk/store1',
    // ];
    protected $except = [
        'api/*',  // Disables CSRF for all API routes
        'risk/store1',  // Disable CSRF for this specific route
        'user/login',
          'user/register',
          'risk/getRisk',
          'risk/delrisk',
          'user/logout'
    ];
}
