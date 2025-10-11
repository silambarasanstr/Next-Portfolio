"use client";
import React, { useState, useEffect } from "react";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import Link from "next/link";


type LoginFormType = {
  email: string;
  password: string;
};

const Login = () => {
  const [formData, setFormData] = useState<LoginFormType>({
    email: "",
    password: "",
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  if (!mounted) {
    return null; // or loading spinner
  }

  return (
    <div className="min-h-screen bg-[#0d61fd] flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-5 border border-[#e5e7eb] shadow">
        <div className="text-center p-6">
          <h2 className="text-2xl font-semibold">Sign In</h2>
          <p className="text-[#847062] mt-3">
            Enter your credentials to access your account
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input
              label="Email Address"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>
          <div>
            <Input
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </div>
          <div>
            <Button type="submit" className="w-full text-white">
              Login
            </Button>
          </div>


        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link href="/register" target="_blank" className="text-blue-700 font-bold">
              Create one here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
