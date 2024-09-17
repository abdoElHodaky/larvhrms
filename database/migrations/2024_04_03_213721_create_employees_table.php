<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('employees', function (Blueprint $table) {
           // $uuid = DB::raw('select UUID()');
            $table->id();
            $table->uuid('uuid')->unique()->default("6b7f4813-734f-11ef-92a3-448a5b2c2d83");
            $table->string('first_name');
            $table->string('last_name');
            $table->string('national_id');
            $table->string('nationality');
            $table->string('gender');
            $table->date('date_of_birth');
            $table->string('email');
            $table->string('phone_number');
            $table->string('address');
            $table->decimal('salary', 10, 2);
            $table->string('emergency_contact');
            $table->binary('cv')->nullable()->default(null);
            $table->binary('image')->nullable()->default(null);
            //$table->unsignedBigInteger('position_id')->nullable(); // Define foreign key column
            $table->smallInteger('training')->default(0);
            $table->date("start_date")->nullable();
            $table->softDeletes();
            $table->timestamps();
            $table->foreignId('position_id')->nullable()->constrained('positions')->onDelete('set null');
            //$table->foreign('position_id')->references('id')->on('positions')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('employees');
    }
};
