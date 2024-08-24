import { Metadata } from 'next'
import ResetPasswordForm from '../../features/components/reset-password-form';

// export const metadata: Metadata = {
//   title: 'Reset Password',
//   description: 'Reset your forgotten password',
// }

export default function ResetPasswordPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">Reset Password</h1>
      <ResetPasswordForm />
    </div>
  )
}