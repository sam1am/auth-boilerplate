import React from 'react';
import { useAuth } from '../contexts/AuthContext';

export default function Home() {
    const { user } = useAuth();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md text-center">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome to MyApp</h1>
                {user ? (
                    <p className="text-gray-600">
                        You are logged in as <span className="font-semibold">{user.email}</span>
                    </p>
                ) : (
                    <p className="text-gray-600">
                        Please <a href="/login" className="text-blue-600 hover:text-blue-500">login</a> or{' '}
                        <a href="/register" className="text-blue-600 hover:text-blue-500">register</a> to access your account.
                    </p>
                )}
            </div>
        </div>
    );
}