export default function Home() {
  const advantages = [
    {
      icon: "⚡",
      title: "Streamlined Sales Process & Faster Transactions",
      description: "Process sales quickly with intuitive touch interface, barcode scanning, and automated calculations. Reduce customer wait times and increase throughput with our efficient checkout system."
    },
    {
      icon: "📊",
      title: "Real-time Inventory Management",
      description: "Track inventory levels automatically, receive low-stock alerts, and manage products across multiple locations. Never run out of popular items or overstock slow-moving products."
    },
    {
      icon: "📈",
      title: "Comprehensive Analytics & Reporting",
      description: "Access detailed sales reports, track performance metrics, identify trends, and make data-driven decisions. Monitor daily, weekly, and monthly performance with customizable dashboards."
    },
    {
      icon: "🔒",
      title: "Secure Payment Processing",
      description: "Accept all payment types including credit cards, debit cards, mobile payments, and contactless transactions. PCI-compliant security ensures customer data protection."
    },
    {
      icon: "☁️",
      title: "Multi-location & Cloud-based Access",
      description: "Manage multiple store locations from one central dashboard. Access your business data from anywhere with cloud synchronization and real-time updates across all devices."
    }
  ];

  return (
    <div className="font-sans min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <header className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Modern POS System for Your Business
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Streamline your operations, boost sales, and grow your business with our comprehensive Point of Sale solution
        </p>
        <div className="flex gap-4 justify-center flex-col sm:flex-row">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            Get Started Today
          </button>
          <button className="bg-white hover:bg-gray-50 text-blue-600 font-semibold py-3 px-8 rounded-lg border-2 border-blue-600 transition-colors">
            Watch Demo
          </button>
        </div>
      </header>

      {/* Advantages Section */}
      <main className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            5 Key Advantages for Your Business
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our POS system delivers tangible benefits that help businesses operate more efficiently and profitably
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {advantages.map((advantage, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="text-4xl mb-4">{advantage.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {advantage.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </main>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of businesses already using our POS system to increase efficiency and profits
          </p>
          <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
            Start Free Trial
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-400">
                Get in touch to learn more about our POS solutions
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Features</h3>
              <ul className="text-gray-400 space-y-2">
                <li>Sales Management</li>
                <li>Inventory Control</li>
                <li>Reporting & Analytics</li>
                <li>Payment Processing</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="text-gray-400 space-y-2">
                <li>24/7 Customer Service</li>
                <li>Training & Setup</li>
                <li>Technical Support</li>
                <li>Documentation</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 POS System. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
