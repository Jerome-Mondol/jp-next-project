export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white text-black py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 leading-tight">Discover Amazing Products</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Explore our curated collection of high-quality items at unbeatable prices.</p>
          <a href="/items" className="inline-block bg-gray-200 text-black px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-300 transition duration-300 shadow-lg">
            Shop Now
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-neutral-800">About Us</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We are dedicated to providing exceptional products with outstanding customer service. Our mission is to make shopping simple, enjoyable, and affordable.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-neutral-800">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neutral-800">Quality Assurance</h3>
              <p className="text-gray-700">Every product undergoes rigorous quality checks to ensure you get the best.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neutral-800">Fast Delivery</h3>
              <p className="text-gray-700">Quick and reliable shipping to get your orders to you as soon as possible.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neutral-800">Secure Payments</h3>
              <p className="text-gray-700">Your transactions are protected with industry-standard security measures.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-neutral-800">Featured Products</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">Check out some of our top-selling items.</p>
          <a href="/items" className="inline-block bg-gray-200 text-black px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-300 transition duration-300 shadow-lg">
            View All Products
          </a>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-neutral-800">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary font-bold">JD</span>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-800">John Doe</h4>
                  <div className="flex text-yellow-400">
                    ★★★★★
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic">"Amazing quality and fast shipping. Highly recommend!"</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-secondary font-bold">JS</span>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-800">Jane Smith</h4>
                  <div className="flex text-yellow-400">
                    ★★★★★
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic">"Great customer service and excellent products."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-neutral-800">Get In Touch</h2>
          <p className="text-lg text-gray-700 mb-8">Have questions? We're here to help.</p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center">
              <svg className="w-6 h-6 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-gray-700">support@eshop.com</span>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-gray-700">(123) 456-7890</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-neutral-800">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2 text-neutral-800">How do I place an order?</h3>
              <p className="text-gray-700">Browse our products, add items to your cart, and proceed to checkout.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2 text-neutral-800">What payment methods do you accept?</h3>
              <p className="text-gray-700">We accept major credit cards, PayPal, and other secure payment options.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2 text-neutral-800">Do you offer returns?</h3>
              <p className="text-gray-700">Yes, we have a 30-day return policy for unused items in original packaging.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
