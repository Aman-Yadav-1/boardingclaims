export default function Footer() {
    return (
      <footer className="bg-emerald-600 text-white py-6 mt-10">
        <div className="container mx-auto text-center">
          <p className="font-medium">&copy; 2024 BoardingClaims. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="text-white hover:text-emerald-200">
              Privacy Policy
            </a>
            <a href="#" className="text-white hover:text-emerald-200">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    );
  }
  