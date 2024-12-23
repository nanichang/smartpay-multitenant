<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class SuperAdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // $this->call(WithoutModelEvents::class);

        $superAdmin = new \App\Models\User([
            'name' => 'Super Admin',
            'email' => '' . env('SUPER_ADMIN_EMAIL') . '',
            'password' => bcrypt(env('SUPER_ADMIN_PASSWORD')),
            'email_verified_at' => now(),
            'is_super_admin' => true,
            'remember_token' => Str::random(10),
        ]);

        $superAdmin->save();
    }
}
