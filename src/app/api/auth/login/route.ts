import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { User } from '@/lib/types/user';

// Temporary in-memory storage for users
declare global {
  var users: (User & { password: string })[];
}

if (!global.users) {
  global.users = [];
}

// This is a temporary solution for development
// In production, you should use a proper database and secure this endpoint
const ADMIN_EMAIL = 'admin@hkteafactory.com';
const ADMIN_PASSWORD = 'admin123'; // In production, use a secure password

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // Find user
    const user = global.users.find((u) => u.email === email);

    if (!user || user.password !== password) {
      return NextResponse.json(
        { message: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // Create session token (in production, use proper JWT)
    const token = Buffer.from(JSON.stringify({
      id: user.id,
      email: user.email,
      role: user.role,
      exp: Date.now() + 24 * 60 * 60 * 1000, // 1 day
    })).toString('base64');

    // Create response with user data
    const response = NextResponse.json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });

    // Set cookie in response
    response.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24, // 1 day
    });

    return response;
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { message: 'Failed to login' },
      { status: 500 }
    );
  }
} 