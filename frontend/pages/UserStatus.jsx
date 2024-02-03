// src/components/UserStatus.js
import React from 'react';
import { useAuth } from './AuthContext';

const UserStatus = () => {
  const { currentUser } = useAuth();

  return (
    <div>
      {currentUser ? (
        <div>
          <p>Welcome, {currentUser.email}!</p>
          {/* You can add more user-specific information here */}
        </div>
      ) : (
        <p>You are not signed in.</p>
      )}
    </div>
  );
};

export default UserStatus;
