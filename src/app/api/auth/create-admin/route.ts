import { NextResponse } from 'next/server';
import { User } from '@/lib/types/user';

// This is a temporary solution for development
// In production, you should use a proper database and secure this endpoint
const ADMIN_EMAIL = 'admin@hkteafactory.com';
const ADMIN_PASSWORD = 'admin123'; // In production, use a secure password

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // Check if the credentials match the admin account
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      const adminUser: User = {
        id: '1',
        email: ADMIN_EMAIL,
        name: 'Admin',
        role: 'admin',
        addresses: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      return NextResponse.json({
        user: adminUser,
        token: 'admin-token', // In production, use proper JWT token
      });
    }

    return NextResponse.json(
      { error: 'Invalid credentials' },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 