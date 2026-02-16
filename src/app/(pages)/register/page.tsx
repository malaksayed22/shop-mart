import RegisterForm from "@/components/RegisterForm/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Create an Account</h1>
          <p className="text-gray-600">Sign up to get started</p>
        </div>
        <RegisterForm />
      </div>
    </div>
  );
}
