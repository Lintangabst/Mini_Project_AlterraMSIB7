'use client'
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LockIcon, UserIcon } from 'lucide-react';
import { useRouter } from 'next/navigation'; // Import useRouter for redirection

export default function Component() {
  // State to manage the input values
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  
  const router = useRouter(); // Initialize router for redirection

  // Predefined credentials (static login)
  const predefinedUsername = 'adminLintang';
  const predefinedPassword = 'lintangas21';

  // Handle form submission
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if the entered credentials match the predefined ones
    if (username === predefinedUsername && password === predefinedPassword) {
      // Redirect to the admin dashboard upon successful login
      router.push('/Admin');
    } else {
      // Show an error message if the credentials are incorrect
      setError('Invalid username or password');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-white to-green-600 p-4">
      <div className="w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl">
        <div className="flex flex-col lg:flex-row">
          {/* Image Section */}
          <div className="lg:w-1/2">
            <img
              src="./img/login.png"
              alt="Admin Dashboard Illustration"
              className="h-64 w-full object-cover lg:h-full"
            />
          </div>

          {/* Form Section */}
          <div className="flex w-full items-center justify-center px-4 py-12 sm:px-6 lg:w-1/2 lg:px-8">
            <div className="w-full max-w-md space-y-8">
              <div className="text-center">
                <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Admin Login</h2>
                <p className="mt-2 text-sm text-gray-600">Sign in to your admin dashboard</p>
              </div>
              <form onSubmit={handleLogin} className="mt-8 space-y-6">
                <div className="space-y-4 rounded-md shadow-sm">
                  <div>
                    <Label htmlFor="username" className="sr-only">
                      Username
                    </Label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <UserIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      </div>
                      <Input
                        id="username"
                        name="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="block w-full rounded-md pl-10"
                        placeholder="Username"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="password" className="sr-only">
                      Password
                    </Label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <LockIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      </div>
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="block w-full rounded-md pl-10"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                </div>

                {/* Display error if credentials are incorrect */}
                {error && <div className="text-red-500 text-sm">{error}</div>}

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <Label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                      Remember me
                    </Label>
                  </div>

                  <div className="text-sm">
                    <a href="#" className="font-medium text-primary hover:text-primary/80">
                      Forgot password?
                    </a>
                  </div>
                </div>

                <div>
                  <Button type="submit" className="w-full">
                    Sign in
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
