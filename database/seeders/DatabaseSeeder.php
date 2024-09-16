<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Database\Seeders\UsersTableSeeder;
use Database\Seeders\EmployeesTableSeeder;
use Database\Seeders\EmployeeSeeder;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]
        $positions=['developer', 'manager', 'assistant'];
        foreach($positions as $key=>$value){
            \App\Models\Position::create([
                "name"=>$value,
                "salary"=>20000
            ]);
        }
      // (new EmployeesTableSeeder())->run();
       (new UsersTableSeeder())->run();
       (new EmployeeSeeder())->run();
    }
}
