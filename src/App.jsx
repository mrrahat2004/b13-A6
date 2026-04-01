import { useState } from "react";
import './App.css';
import banner from "./assets/banner.png";
import shoppingCart from "./assets/shopping-cart.png";


function DigiToolsUI() {
  const products = [
    {
      id: 1,
      name: 'Resume Builder Pro',
      description: 'Create modern professional resumes easily.',
      price: 29,
      period: 'monthly',
      tag: 'popular',
      tagType: 'Popular', 
      features: ['100+ templates', 'ATS optimization', 'Export to PDF'],
      icon: '📄'
    },
    {
      id: 2,
      name: 'Portfolio Website Kit',
      description: 'Build a stunning personal portfolio website.',
      price: 49,
      period: 'one-time',
      tag: 'new',
      tagType: 'New',
      features: ['Responsive design', 'SEO friendly', 'Fast performance'],
      icon: '🌐'
    },
    {
      id: 3,
      name: 'Invoice Generator',
      description: 'Generate invoices for clients in seconds.',
      price: 19,
      period: 'monthly',
      tag: 'best seller',
      tagType: 'Best Seller',
      features: ['Auto calculation', 'PDF download', 'Brand logo'],
      icon: '🧾'
    },
    {
      id: 4,
      name: 'AI Content Writer',
      description: 'Generate blogs and marketing content quickly.',
      price: 59,
      period: 'monthly',
      tag: 'popular',
      tagType: 'Popular',
      features: ['SEO optimized', 'Multiple tones', 'Fast generation'],
      icon: '✍️'
    },
    {
      id: 5,
      name: 'Social Media Kit',
      description: 'Ready templates for all social platforms.',
      price: 39,
      period: 'yearly',
      tag: 'new',
      tagType: 'New',
      features: ['Instagram posts', 'Story templates', 'Banners'],
      icon: '📱'
    },
    {
      id: 6,
      name: 'UI Design Pack',
      description: 'Premium UI kits for designers.',
      price: 79,
      period: 'one-time',
      tag: 'best seller',
      tagType: 'Best Seller',
      features: ['Figma ready', '50+ sections', 'Easy edit'],
      icon: '🎨'
    }
  ];


  const [cart, setCart] = useState([]);
  const [activeTab, setActiveTab] = useState("products");
  const [selectedPlan, setSelectedPlan] = useState(null);

   const addToCart = (product) => setCart([...cart, product]);
  const removeFromCart = (id) => setCart(cart.filter(item => item.id !== id));
  const checkout = () => setCart([]);

    return (

    <div class="min-h-screen bg[#101727" text-white>

      <nav class="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200 px-6 py-4
      ">

        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-3xl font-extrabold text-violet-600 tracking-tight">
             DigiTools
          </h1>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            <a href="#" className="hover:text-violet-600 transition">Products</a>
            <a href="#" className="hover:text-violet-600 transition">Features</a>
            <a href="#" className="hover:text-violet-600 transition">Pricing</a>
            <a href="#" className="hover:text-violet-600 transition">Testimonials</a>
            <a href="#" className="hover:text-violet-600 transition">FAQ</a>
          </div>

          <div className="flex items-center gap-3">
            <button className="flex items-center gap-3"><img src={shoppingCart} alt="" />
              Login
            </button>
            <button className="px-4 py-2 rounded-full bg-violet-600 hover:bg-violet-700 transition text-white font-semibold shadow-md">
              Get Started
            </button>
          </div>

        </div>

      </nav>


      <section className="grid md:grid-cols-2 gap-8 px-6 py-16 items-center bg-white text-gray-900">
        <div>
          <p className="inline-block text-violet-600 text-sm font-semibold mb-4 bg-violet-100 px-4 py-1 rounded-full"> New: AI-Powered Tools Available</p>
          <h2 className="text-5xl font-bold leading-tight text-gray-800">Supercharge Your <br /> Digital Workflow</h2>
          <p className="mt-4 text-gray-600 max-w-lg">Access premium AI tools, design assets, templates, and productivity software — all in one place. Start creating faster today.</p>
          <div className="mt-6 flex gap-4">
            <button className="px-5 py-3 rounded-xl bg-violet-600 text-white font-semibold">Explore Products</button>
            <button className="px-5 py-3 rounded-xl border border-violet-600 text-violet-600 font-semibold"> Watch Demo</button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-80 h-80 rounded-lg bg-gray-100 shadow-lg flex items-center justify-center text-7xl"><img src={banner} alt="banner" /></div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 text-center bg-gradient-to-r from-violet-700 to-fuchsia-600 py-10 px-4 shadow-xl">
        <div className="border-r border-white/20 last:border-r-0"><h3 className="text-4xl font-extrabold">50K+</h3><p className="text-sm text-white/80 mt-1">Active Users</p></div>
        <div className="border-r border-white/20 last:border-r-0"><h3 className="text-4xl font-extrabold">200+</h3><p className="text-sm text-white/80 mt-1">Premium Tools</p></div>
        <div><h3 className="text-4xl font-extrabold">4.9</h3><p className="text-sm text-white/80 mt-1">Rating</p></div>
      </section>

       <section className="px-6 py-16 bg-white text-gray-900">
        <h2 className="text-3xl font-bold text-center mb-6">Premium Digital Tools</h2>

        {/* Tab buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab("products")}
            className={`px-6 py-3 rounded-xl font-semibold transition ${activeTab === "products" ? "bg-violet-600 text-white" : "bg-gray-100 text-gray-700"}`}
          >
            Products
          </button>
          <button
            onClick={() => setActiveTab("cart")}
            className={`px-6 py-3 rounded-xl font-semibold transition ${activeTab === "cart" ? "bg-violet-600 text-white" : "bg-gray-100 text-gray-700"}`}
          >
            Cart ({cart.length})
          </button>
        </div>

        {activeTab === "products" ? (
          <div className="grid md:grid-cols-3 gap-6">
            {products.map((p) => (
              <div key={p.id} className="rounded-2xl shadow-lg border p-6 hover:shadow-2xl transition">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold">{p.icon} {p.name}</h3>
                  <span className="text-sm bg-violet-100 text-violet-600 px-3 py-1 rounded-full">{p.tagType}</span>
                </div>
                <p className="text-gray-500 mt-3">{p.description}</p>
                <p className="text-3xl font-bold mt-4">${p.price} <span className="text-sm text-gray-500">/ {p.period}</span></p>
                <ul className="mt-3 text-sm text-gray-600 space-y-1">
                  {p.features.map((f,i)=>(<li key={i}>✔ {f}</li>))}
                </ul>
                <button
                  onClick={() => addToCart(p)}
                  className="w-full mt-5 py-3 rounded-xl bg-violet-600 text-white"
                >
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Cart Items</h2>
            {cart.length === 0 ? (
              <p className="text-gray-500">Your cart is empty</p>
            ) : (
              <>
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center bg-gray-50 p-4 rounded-xl mb-3 border">
                    <div>{item.icon} {item.name}</div>
                    <div className="flex items-center gap-4">
                      <span>${item.price}</span>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}

                <button
                  onClick={checkout}
                  className="mt-4 px-5 py-3 bg-green-500 rounded-xl font-semibold text-white"
                >
                  Proceed to Checkout
                </button>
              </>
            )}
          </div>
        )}
      </section>

      <section className="px-6 py-16 bg-white text-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-3">Simple, Transparent Pricing</h2>
            <p className="text-gray-500">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className={`relative border border-gray-200 rounded-2xl p-8 bg-white shadow-sm flex flex-col ${selectedPlan === 'starter' ? 'ring-2 ring-violet-600' : ''}`}>
              <h3 className="text-2xl font-bold mb-1">Starter</h3>
              <p className="text-sm text-gray-400 mb-6">Perfect for getting started</p>
              <p className="text-5xl font-bold mb-8">$0<span className="text-lg text-gray-400 font-medium">/Month</span></p>
              
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-center gap-3 text-gray-600"><span className="text-green-500">✔</span> Access to 10 free tools</li>
                <li className="flex items-center gap-3 text-gray-600"><span className="text-green-500">✔</span> Basic templates</li>
                <li className="flex items-center gap-3 text-gray-600"><span className="text-green-500">✔</span> Community support</li>
                <li className="flex items-center gap-3 text-gray-600"><span className="text-green-500">✔</span> 1 project per month</li>
              </ul>

              <button 
                onClick={() => setSelectedPlan('starter')}
                className="w-full py-4 rounded-full bg-violet-600 hover:bg-violet-700 text-white font-bold transition">
                {selectedPlan === 'starter' ? 'Selected' : 'Get Started Free'}
              </button>
            </div>


            <div className="relative rounded-2xl p-8 bg-violet-600 text-white shadow-xl flex flex-col scale-105 z-10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-100 text-yellow-700 text-xs font-bold px-4 py-1 rounded-full shadow-md">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-1">Pro</h3>
              <p className="text-white/80 text-sm mb-6">Best for professionals</p>
              <p className="text-5xl font-bold mb-8">$29<span className="text-lg text-white/70 font-medium">/Month</span></p>
              
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-center gap-3"><span className="text-white">✔</span> Access to all premium tools</li>
                <li className="flex items-center gap-3"><span className="text-white">✔</span> Unlimited templates</li>
                <li className="flex items-center gap-3"><span className="text-white">✔</span> Priority support</li>
                <li className="flex items-center gap-3"><span className="text-white">✔</span> Unlimited projects</li>
                <li className="flex items-center gap-3"><span className="text-white">✔</span> Cloud sync</li>
                <li className="flex items-center gap-3"><span className="text-white">✔</span> Advanced analytics</li>
              </ul>

              <button 
                onClick={() => setSelectedPlan('pro')}
                className="w-full py-4 rounded-full bg-white text-violet-600 font-bold hover:bg-gray-100 transition">
                {selectedPlan === 'pro' ? 'Selected' : 'Start Pro Trial'}
              </button>
            </div>

            <div className={`relative border border-gray-200 rounded-2xl p-8 bg-white shadow-sm flex flex-col ${selectedPlan === 'enterprise' ? 'ring-2 ring-violet-600' : ''}`}>
              <h3 className="text-2xl font-bold mb-1">Enterprise</h3>
              <p className="text-sm text-gray-400 mb-6">For teams and businesses</p>
              <p className="text-5xl font-bold mb-8">$99<span className="text-lg text-gray-400 font-medium">/Month</span></p>
              
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-center gap-3 text-gray-600"><span className="text-green-500">✔</span> Everything in Pro</li>
                <li className="flex items-center gap-3 text-gray-600"><span className="text-green-500">✔</span> Team collaboration</li>
                <li className="flex items-center gap-3 text-gray-600"><span className="text-green-500">✔</span> Custom integrations</li>
                <li className="flex items-center gap-3 text-gray-600"><span className="text-green-500">✔</span> Dedicated support</li>
                <li className="flex items-center gap-3 text-gray-600"><span className="text-green-500">✔</span> SLA guarantee</li>
                <li className="flex items-center gap-3 text-gray-600"><span className="text-green-500">✔</span> Custom branding</li>
              </ul>

              <button 
                onClick={() => setSelectedPlan('enterprise')}
                className="w-full py-4 rounded-full bg-violet-600 hover:bg-violet-700 text-white font-bold transition">
                {selectedPlan === 'enterprise' ? 'Selected' : 'Contact Sales'}
              </button>
            </div>
          </div>
        </div>
      </section>






            <section className="bg-gradient-to-r from-indigo-700 via-purple-600 to-fuchsia-600 py-20 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">
          Ready To Transform Your Workflow?
        </h2>

        <p className="text-white/80 text-sm mb-8">
          Join thousands of professionals who are already using DigiTools to
          work smarter.
          <br />
          Start your free trial today.
        </p>

        <div className="flex justify-center gap-4 mb-6">
          <button className="px-6 py-3 rounded-full bg-white text-violet-700 font-semibold shadow-md">
            Explore Products
          </button>

          <button className="px-6 py-3 rounded-full border border-white text-white font-semibold">
            View Pricing
          </button>
        </div>

        <p className="text-xs text-white/70">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </section>


           <footer className="bg-[#0b1324] text-white px-8 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-8">
          
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold mb-4">DigiTools</h2>
            <p className="text-sm text-gray-400 leading-6">
              Premium digital tools for creators,
              professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>


          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Features</li>
              <li>Pricing</li>
              <li>Templates</li>
              <li>Integrations</li>
            </ul>
          </div>


          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>


          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Documentation</li>
              <li>Help Center</li>
              <li>Community</li>
              <li>Contact</li>
            </ul>
          </div>


          <div>
            <h3 className="font-semibold mb-4">Social Links</h3>
            <div className="flex gap-3 text-lg">
              <span className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center">
                f
              </span>
              <span className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center">
                in
              </span>
              <span className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center">
                x
              </span>
            </div>
          </div>
        </div>
      </footer>

    </div>

  )





}

function App() {
  return <DigiToolsUI />;
}

export default App;


