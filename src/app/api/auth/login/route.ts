import { NextResponse } from 'next/server';
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
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@hkteafactory.com';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123'; // In production, use a secure password

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      return NextResponse.json({ success: true });
    }

    // Find user
    const user = global.users.find((u: User & { password: string }) => u.email === email);

    if (!user || user.password !== password) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
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
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 