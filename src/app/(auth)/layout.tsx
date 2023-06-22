import "@/app/globals.css";
const AuthLayout = function ({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-white">
      <body className="h-full">{children}</body>
    </html>
  );
};

export default AuthLayout;
