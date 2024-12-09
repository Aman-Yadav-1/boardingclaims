import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-b from-sky-900 to-slate-900 text-white py-8 relative">
            {/* Decorative Edge */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 via-emerald-500 to-sky-400"></div>
            
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between items-start gap-8 mb-6">
                    {/* Brand Section */}
                    <div className="flex-shrink-0 w-full sm:w-auto mb-4 sm:mb-0">
                        <h3 className="text-lg font-bold mb-2 text-sky-400">
                            BoardingClaims
                            <span className="ml-2 text-emerald-400">✈</span>
                        </h3>
                        <p className="text-sm text-gray-300 max-w-xs">
                            Securing your flight compensation rights with expertise and dedication.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-wrap gap-x-12 gap-y-6">
                        {/* Quick Links */}
                        <div className="min-w-[140px]">
                            <h4 className="text-sm font-semibold mb-3 text-emerald-400">Quick Links</h4>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <Link href="/your-rights" 
                                        className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center gap-2">
                                        <span>→</span> Your Rights
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/how-it-works" 
                                        className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center gap-2">
                                        <span>→</span> How It Works
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about" 
                                        className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center gap-2">
                                        <span>→</span> About Us
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Legal */}
                        <div className="min-w-[140px]">
                            <h4 className="text-sm font-semibold mb-3 text-emerald-400">Legal</h4>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <Link href="/privacy-policy" 
                                        className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center gap-2">
                                        <span>→</span> Privacy
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/terms" 
                                        className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center gap-2">
                                        <span>→</span> Terms
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="min-w-[140px]">
                            <h4 className="text-sm font-semibold mb-3 text-emerald-400">Contact</h4>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li className="flex items-center gap-2">
                                    <span>✉</span> support@boardingclaims.com
                                </li>
                                <li className="flex items-center gap-2">
                                    <span>☎</span> +1 (555) 123-4567
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center text-xs text-gray-400 pt-6 border-t border-sky-800/30">
                    <p>&copy; {new Date().getFullYear()} BoardingClaims. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
