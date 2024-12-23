<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Stancl\Tenancy\Database\Models\Tenant as BaseTenant;
use Stancl\Tenancy\Contracts\TenantWithDatabase;
use Stancl\Tenancy\Database\Concerns\HasDatabase;
use Stancl\Tenancy\Database\Concerns\HasDomains;

class Tenant extends BaseTenant implements TenantWithDatabase
{
    use HasDatabase, HasDomains;

    protected $fillable = [
        'name',
        // 'domain',
        'service_id',
        'country',
        'state',
        'city',
        'lga',
        'address',
        'zip',
        'phone',
        'admin_email',
        'supervisor_email',
        'password',
        'active',
        'encrypt_data',
        'verified',
        'verified_at',
        'data'
    ];

    public static function getCustomColumns(): array
    {
        return [
            'id',
            'name',
            'service_id',
            'country',
            'state',
            'city',
            'lga',
            'address',
            'zip',
            'phone',
            'admin_email',
            'supervisor_email',
            'password',
            'active',
            'encrypt_data',
            'verified',
            'verified_at',
        ];
    }
}