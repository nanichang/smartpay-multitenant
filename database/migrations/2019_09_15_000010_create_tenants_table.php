<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTenantsTable extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tenants', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->string('name')->nullable();
            // $table->string('domain')->unique();
            $table->string('service_id')->unique()->nullable();
            $table->string('country')->nullable();
            $table->string('state')->nullable();
            $table->string('city')->nullable();
            $table->string('lga')->nullable();
            $table->string('address')->nullable();
            $table->string('zip')->nullable();
            $table->string('phone')->nullable();
            $table->string('admin_email')->unique()->nullable();
            $table->string('supervisor_email')->unique()->nullable();
            $table->string('password')->nullable();
            // $table->string('database')->unique();
            $table->boolean('active')->default(false);
            $table->boolean('encrypt_data')->default(false);
            $table->boolean('verified')->default(false);
            $table->timestamp('verified_at')->nullable();

            // your custom columns may go here

            $table->json('data')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tenants');
    }
}
