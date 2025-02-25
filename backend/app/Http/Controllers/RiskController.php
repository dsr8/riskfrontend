<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\Request;
use App\Models\Risk;


class RiskController extends Controller
{
     // Store a new risk
     public function test1(Request $request)
     {




        $risk = Risk::create([
            'title' =>$request->input('title'),
            'description' => $request->input('description'),
            'details' =>$request->input('details'),
            'type' => $request->input('type'),
            'category' =>$request->input('category'),
            'probability' => $request->input('probability'),
            'impact' =>$request->input('impact'),
            'mitigation' => $request->input('mitigation'),
            'location' =>$request->input('location'),
            'responsible' => $request->input('responsible'),
            'status'=>$request->input('status'),
            'inherent_risk'=>$request->input('value'),
            'residual_risk'=>$request->input('value2')
        ]);
        return response()->json(['message' => 'Risk Added successfully'])
        ->header('Access-Control-Allow-Origin', 'http://localhost:3000')
        ->header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        ->header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        // Return the created risk with a 201 status
        //return response()->json(['message' => 'Risk added successfully!', 'risk' => $risk], 201);

        
//         // Create a new Risk record
//         $risk = new Risk();
//         $risk->title = $request->input('title');
//         $risk->description = $request->input('description');
        


// Risk::create([
// 'title'=>'sdfsd',
// ]);

        //return response()->json(['message' => 'Risk added successfully!'], 201);
// Return the created risk with a 201 status
     }
 
     // Show all risks
     public function test()
     {
        echo "hii";
     }

     public function getRisk()
     {
        // echo "indise get risk ";
 // Retrieve all risks from the 'risks' table
//  $risks = Risk::all();
$risks=Risk::where('status', '1')->get();
 // Return the risks as JSON response
 return response()->json([
     'message' => 'Risks fetched successfully!',
     'data' => $risks
 ])
 ->header('Access-Control-Allow-Origin', 'http://localhost:3000')  // Allow cross-origin requests from React app
 ->header('Access-Control-Allow-Methods', 'GET, OPTIONS')
 ->header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        
     }

     public function delrisk(Request $request){

        
       $riskId=$request->input('id');

       $risk= Risk::find($riskId);

       $risk->status = 0;
       $risk->save();
       return response()->json(['message' => 'Risk marked as deleted successfully!'])
       ->header('Access-Control-Allow-Origin', 'http://localhost:3000')  // Allow cross-origin requests from React app
       ->header('Access-Control-Allow-Methods', 'GET, OPTIONS')
       ->header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
       

     }
   
}