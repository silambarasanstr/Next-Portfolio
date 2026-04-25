"use client";

import React, { useState, useEffect } from "react";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  useEffect(() => {
    setMounted(true);

    // ✅ If already logged in → redirect
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/admin");
    }
  }, [router]);

  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ Simple demo auth (replace with API later)
    if (
      formData.email === "admin@gmail.com" &&
      formData.password === "123456"
    ) {
      localStorage.setItem("token", "admin-token"); // 🔐 fake token
      

      router.push("/admin"); // ✅ redirect to admin
    } else {
      alert("Invalid credentials ❌");
    }
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#0d61fd] flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-5 border border-[#e5e7eb] shadow rounded-xl">
        <div className="text-center p-6">
          <h2 className="text-2xl font-semibold">Sign In</h2>
          <p className="text-[#847062] mt-3">
            Enter your credentials to access your account
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            label="Email Address"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />

          <Input
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />

          <Button type="submit" className="w-full text-white">
            Login
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-blue-700 font-bold">
              Create one here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
