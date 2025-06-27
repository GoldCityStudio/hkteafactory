import { NextRequest, NextResponse } from 'next/server';

// This is a temporary solution for development
// In production, you should use a proper database and secure this endpoint
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@hkteafactory.com';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123'; // In production, use a secure password

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // Simple validation
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Mock authentication - replace with real authentication logic
    if (email === 'admin@hkteafactory.com' && password === 'admin123') {
      return NextResponse.json({
        success: true,
        user: {
          id: 1,
          email: email,
          name: 'Admin User',
          role: 'admin'
        }
      });
    } else {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 