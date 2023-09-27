<?php

namespace Database\Seeders;

use App\Models\Note;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class NoteSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 1; $i <= 10; $i++) {
            $title = "Sample Note $i";
            $slug = Str::slug($title, '-') . '-' . Str::random(5);
            $description = "This is a sample note number $i.";

            Note::create([
                'title' => $title,
                'slug' => $slug,
                'description' => $description,
            ]);
        }
    }
}
