<?php
// app/Http/Controllers/UserController.php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;

class UserController extends Controller
{
   
    public function login(Request $request)
    {

        // echo "inside login";
        // exit();
        
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

       
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

        
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
           
            $user = Auth::user(); 
            
           
            return response()->json([
                'status' => 'success',
                'message' => 'Login successful!',
                'user' => $user, // Return user data
            ], 200);
        } else {
            
            return response()->json([
                'status' => 'error',
                'message' => 'Invalid credentials. Please try again.',
            ], 401);
        }
    }

   
    public function register(Request $request)
    {
        // echo "inside register";
        // exit();
        
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:8|confirmed',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

       
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

      
        return response()->json([
            'status' => 'success',
            'message' => 'Registration successful!',
            'user' => $user,
        ], 201);
    }

    // Logout function
    public function logout()
    {
        Auth::logout(); // Log out the user
        return response()->json([
            'status' => 'success',
            'message' => 'Logged out successfully.',
        ]);
    }
}
