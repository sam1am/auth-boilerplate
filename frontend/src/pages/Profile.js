import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { changePassword } from '../services/api';

export default function Profile() {
    const { user } = useAuth();
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handlePasswordChange = async (e) => {
        e.preventDefault();
        try {
            await changePassword(oldPassword, newPassword);
            setMessage('Password updated successfully');
            setError('');
            setOldPassword('');
            setNewPassword('');
        } catch (err) {
            setError('Failed to update password');
            setMessage('');
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-2xl font-bold mb-8">Profile</h1>

                <div className="bg-white shadow rounded-lg p-6">
                    <div className="mb-6">
                        <h2 className="text-lg font-medium mb-2">Account Information</h2>
                        <p className="text-gray-600">Email: {user?.email}</p>
                    </div>

                    <div className="border-t pt-6">
                        <h2 className="text-lg font-medium mb-4">Change Password</h2>
                        {message && (
                            <div className="text-green-500 mb-4">{message}</div>
                        )}
                        {error && (
                            <div className="text-red-500 mb-4">{error}</div>
                        )}
                        <form onSubmit={handlePasswordChange}>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Current Password
                                    </label>
                                    <input
                                        type="password"
                                        className="appearance-none rounded-md relative block w-full px-3 py-2 mt-1 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                        value={oldPassword}
                                        onChange={(e) => setOldPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        New Password
                                    </label>
                                    <input
                                        type="password"
                                        className="appearance-none rounded-md relative block w-full px-3 py-2 mt-1 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                    Update Password
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}