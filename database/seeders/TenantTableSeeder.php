<?php

namespace Database\Seeders;

use App\Models\Tenant;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class TenantTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // $this->call(WithoutModelEvents::class);

        $tenant = new Tenant([
            'id' => 'nis',
            'name' => 'NIS',
            // 'domain' => 'nis.'.config('app.url'),
            // 'database' => 'nis',
            'service_id' => Str::random(10),
            'country' => 'Nigeria',
            // 'currency' => 'NGN',
            'state' => 'Plateau',
            'city' => 'Jos',
            'lga' => 'Jos North',
            'address' => 'No 1, NIS Road',
            'zip' => '930283',
            'phone' => '08012345678',
            'admin_email' => 'admin@nis.com',
            'supervisor_email' => 'supervisor@nis.com',
            'password' => bcrypt('password'),
            'active' => true,
            'encrypt_data' => false,
            'verified' => true,
            'verified_at' => now(),
            'data' => [
                'currency_symbol' => '₦',
                'status' => 'active',
                'logo' => 'logo.png',
                'favicon' => 'favicon.png',
                'theme' => 'default',
                'language' => 'en',
                'timezone' => 'Africa/Lagos',
                'date_format' => 'd/m/Y',
                'time_format' => 'h:i A',
                'datetime_format' => 'd/m/Y h:i A',
                'week_start' => 'monday',
                'email_driver' => 'smtp',
                'email_host' => 'smtp.mailtrap.io',
                'email_port' => '2525',
                'email_username' => 'username',
                'email_password' => 'password',
                'email_encryption' => 'tls',
                'email_from_address' => 'XXXXXXXXXXXXX',
                'email_from_name' => 'NIS',
                'sms_driver' => 'twilio',
                'sms_host' => 'twilio.com',
                'sms_port' => '2525',
                'sms_username' => 'username',
                'sms_password' => 'password',
                'sms_encryption' => 'tls',
                'sms_from' => '+1234567890',
                'sms_balance' => 0,
                'sms_balance_last_updated' => now(),
                'sms_balance_last_updated_at' => now(),
                'sms_balance_updated_at' => now(),
            ],

            'created_at' => now(),
            'updated_at' => now(),
        ]);

        // dd($tenant);

        $tenant->save();
        // dd($tenant);
        $tenant->domains()->create([
            'domain' => 'nis.localhost',
        ]);

        Tenant::all()->each(function () {
            User::factory()->create();
        });

    }
}
