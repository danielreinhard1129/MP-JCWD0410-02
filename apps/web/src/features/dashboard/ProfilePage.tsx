import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

// export const metadata: Metadata = {
//   title: 'Profile',
//   description: 'Edit your profile information',
// }

interface ProfileSummaryItemProps {
  title: string;
  value: string | number;
  bgColor: string;
}

const ProfileSummaryItem: React.FC<ProfileSummaryItemProps> = ({ title, value, bgColor }) => (
  <div className={`${bgColor} p-4 rounded-lg`}>
    <h3 className="font-semibold">{title}</h3>
    <p className="text-2xl">{value}</p>
  </div>
);

interface FormInputProps {
  id: string;
  label: string;
  type: string;
}

const FormInput: React.FC<FormInputProps> = ({ id, label, type }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input type={type} id={id} name={id} className="w-full px-3 py-2 border border-gray-300 rounded-md" />
  </div>
);

const ProfilePage: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Handle file change logic here
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Edit Profile</h1>

      {/* Profile Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <ProfileSummaryItem title="Total Events Attended" value={12} bgColor="bg-blue-100" />
        <ProfileSummaryItem title="Events Organized" value={5} bgColor="bg-green-100" />
        <ProfileSummaryItem title="Account Status" value="Active" bgColor="bg-yellow-100" />
      </div>

      {/* Profile Form */}
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex flex-col md:flex-row items-center mb-6">
          <div className="w-32 h-32 relative mb-4 md:mb-0 md:mr-6">
            <Image 
              src="/images/default-avatar.png"
              alt="Profile Picture" 
              width={128}
              height={128}
              className="rounded-full"
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">John Doe</h2>
            <label htmlFor="avatar" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer">
              Change Avatar
            </label>
            <input 
              id="avatar" 
              type="file" 
              className="hidden" 
              accept="image/png, image/jpeg, image/jpg" 
              onChange={handleFileChange}
            />
          </div>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <FormInput id="name" label="Full Name" type="text" />
          <FormInput id="email" label="Email Address" type="email" />
          <FormInput id="password" label="New Password" type="password" />
          <FormInput id="confirmPassword" label="Confirm New Password" type="password" />
          
          <div className="flex justify-between items-center">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Save Changes
            </button>
            <Link href="/reset-password" className="text-blue-600 hover:underline">
              Forgot Password?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;