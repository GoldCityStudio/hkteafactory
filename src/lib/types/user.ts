export type UserRole = 'customer' | 'admin';

export type Address = {
  id: string;
  name: string;
  phone: string;
  address: string;
  city: string;
  district: string;
  isDefault: boolean;
};

export type User = {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  addresses: Address[];
  createdAt: Date;
  updatedAt: Date;
};

export type UserProfile = {
  id: string;
  userId: string;
  phone?: string;
  dateOfBirth?: Date;
  gender?: 'male' | 'female' | 'other';
  preferences?: {
    language: 'zh' | 'en';
    newsletter: boolean;
    marketing: boolean;
  };
};

export type AuthResponse = {
  user: User;
  token: string;
}; 