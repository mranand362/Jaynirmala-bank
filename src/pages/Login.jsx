import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, LogIn, Shield, ArrowLeft, Sparkles } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Data:', formData);
    // Add your login logic here
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Branding */}
        <div className="hidden lg:block space-y-6">
          <div className="bg-[#0B2A4A] rounded-3xl p-8 text-white shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#FDB813] rounded-xl flex items-center justify-center">
                <span className="text-[#0B2A4A] font-bold text-xl">JN</span>
              </div>
              <div>
                <h3 className="font-bold text-xl">JAYNIRMALA</h3>
                <p className="text-[#FDB813] text-sm">Mutual Benefit Nidhi Limited</p>
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
            <p className="text-gray-300 mb-6">Access your account to manage your finances, track deposits, and avail member benefits.</p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#FDB813]/20 rounded-full flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-[#FDB813]" />
                </div>
                <span className="text-sm">Secure member portal</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#FDB813]/20 rounded-full flex items-center justify-center">
                  <Shield className="w-4 h-4 text-[#FDB813]" />
                </div>
                <span className="text-sm">100% safe & regulated</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <p className="text-sm text-gray-600">New to JAYNIRMALA?</p>
            <Link to="/register" className="text-[#FDB813] font-semibold hover:text-[#0B2A4A] transition-colors">
              Create an account → 
            </Link>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10">
          {/* Back Button */}
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-gray-500 hover:text-[#0B2A4A] transition-colors mb-6 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back</span>
          </button>

          {/* Mobile Brand (visible on small screens) */}
          <div className="lg:hidden text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0B2A4A] rounded-2xl mb-4 shadow-lg">
              <span className="text-[#FDB813] font-bold text-2xl">JN</span>
            </div>
            <h2 className="text-2xl font-bold text-[#0B2A4A]">Member Login</h2>
            <p className="text-gray-500 text-sm mt-1">JAYNIRMALA MUTUAL BENEFIT NIDHI LIMITED</p>
          </div>

          <h3 className="text-2xl font-bold text-[#0B2A4A] mb-2 hidden lg:block">Sign in to your account</h3>
          <p className="text-gray-500 text-sm mb-8 hidden lg:block">Welcome back! Please enter your details.</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FDB813] focus:border-transparent transition-shadow"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FDB813] focus:border-transparent transition-shadow"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="w-4 h-4 text-[#FDB813] border-gray-300 rounded focus:ring-[#FDB813]"
                />
                Remember me
              </label>
              <a href="#" className="text-sm text-[#FDB813] hover:text-[#0B2A4A] font-medium transition-colors">
                Forgot password?
              </a>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#0B2A4A] text-white py-3 px-4 rounded-xl hover:bg-[#1a3a5a] transition-colors font-semibold flex items-center justify-center gap-2 shadow-lg shadow-[#0B2A4A]/20"
            >
              <LogIn className="w-5 h-5" />
              Sign In
            </button>

            {/* Mobile Register Link */}
            <div className="lg:hidden text-center text-sm text-gray-600 mt-4">
              Don't have an account?{' '}
              <Link to="/register" className="text-[#FDB813] font-semibold hover:text-[#0B2A4A] transition-colors">
                Register
              </Link>
            </div>
          </form>

          {/* Security Badge */}
          <div className="mt-8 pt-6 border-t border-gray-200 flex items-center justify-center gap-2 text-sm text-gray-500">
            <Shield className="w-4 h-4 text-[#FDB813]" />
            <span>Secured by 256-bit encryption</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;