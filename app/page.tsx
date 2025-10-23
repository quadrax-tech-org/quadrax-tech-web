export default function Home() {
  // In production, basePath is set to /quadrax-tech-web
  const basePathValue =
    process.env.NODE_ENV === "production" ? "/quadrax-tech-web" : "";

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-black text-white py-6 px-8">
        <h1 className="text-3xl font-bold tracking-wider">QUADRAX</h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-white text-gray-800">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="flex justify-center mb-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${basePathValue}/quadrax-logo.png`}
              alt="Quadrax logo"
              width={200}
              height={200}
            />
          </div>
          <div className="text-center space-y-6">
            <h2 className="text-5xl font-bold text-gray-900">
              Welcome to Quadrax
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Innovation meets excellence. We&apos;re dedicated to delivering
              cutting-edge solutions that transform people lives.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
              <p className="text-gray-300 text-sm">
                Email: quadraxtech@gmail.com
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Location</h3>
              <p className="text-gray-300 text-sm">Bellandur</p>
              <p className="text-gray-300 text-sm">Bangalore, India</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
              <p className="text-gray-300 text-sm">
                LinkedIn | Twitter | Facebook
              </p>
              <p className="text-gray-300 text-sm">
                © 2025 Quadrex Tech Pvt. Ltd. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
