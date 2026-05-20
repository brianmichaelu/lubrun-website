"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const phoneNumber = "255689824682";
  const email = "lubrun.enterprises@gmail.com";
  const whatsappBase = `https://wa.me/${phoneNumber}`;

  const [quoteForm, setQuoteForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    quantity: "",
    deadline: "",
    message: "",
  });

  const services = [
    {
      title: "T-Shirt Printing",
      description:
        "High-quality branded t-shirts for businesses, events, schools, and organizations.",
      icon: "👕",
    },
    {
      title: "Corporate Uniforms",
      description: "Professional uniforms designed for strong brand identity.",
      icon: "🏢",
    },
    {
      title: "Promotional Products",
      description:
        "Branded merchandise including mugs, banners, caps, flyers, and giveaways.",
      icon: "🎁",
    },
    {
      title: "Bulk Printing",
      description:
        "Large-scale printing services tailored for institutions and corporate clients.",
      icon: "🖨️",
    },
  ];

  const portfolioItems = [
    {
      title: "Corporate Uniforms",
      description:
        "Premium branded uniforms designed for professional businesses and institutions.",
      image: "/uniforms.png",
      alt: "Corporate uniforms branding sample",
    },
    {
      title: "Promotional Branding",
      description:
        "Branded promotional products including mugs, banners, and merchandise.",
      image: "/branding.png",
      alt: "Promotional branding products sample",
    },
    {
      title: "Bulk Printing",
      description:
        "Large-scale printing solutions tailored for organizations and corporate clients.",
      image: "/bulk.png",
      alt: "Bulk printing project sample",
    },
  ];

  const handleQuoteSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const message = `Hello Lub Run Enterprises, I would like to request a quotation.%0A%0AName: ${quoteForm.name}%0APhone: ${quoteForm.phone}%0AEmail: ${quoteForm.email}%0AService Needed: ${quoteForm.service}%0AQuantity: ${quoteForm.quantity}%0ADeadline: ${quoteForm.deadline}%0AMessage: ${quoteForm.message}`;

    window.open(`${whatsappBase}?text=${message}`, "_blank");

    setQuoteForm({
      name: "",
      phone: "",
      email: "",
      service: "",
      quantity: "",
      deadline: "",
      message: "",
    });
  };

  return (
    <main className="scroll-smooth bg-white text-gray-900">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071421]/95 shadow-lg backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* LOGO */}
          <a href="#home" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Lub Run Enterprises logo"
              width={70}
              height={70}
              className="h-14 w-auto object-contain"
              priority
            />

            <div>
              <h1 className="text-lg font-black tracking-wide text-white">LUB RUN</h1>
              <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
                ENTERPRISES
              </p>
            </div>
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden items-center gap-8 text-sm font-semibold text-white lg:flex">
            <a href="#home" className="transition hover:text-[#D4AF37]">
              Home
            </a>
            <a href="#services" className="transition hover:text-[#D4AF37]">
              Services
            </a>
            <a href="#portfolio" className="transition hover:text-[#D4AF37]">
              Portfolio
            </a>
            <a href="#about" className="transition hover:text-[#D4AF37]">
              About
            </a>
            <a href="#contact" className="transition hover:text-[#D4AF37]">
              Contact
            </a>

            <a
              href={`${whatsappBase}?text=Hello%20Lub%20Run%20Enterprises%2C%20I%20would%20like%20to%20request%20a%20quote.`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#D4AF37] px-5 py-3 font-bold text-black transition hover:scale-105 hover:bg-[#c7a12c]"
            >
              Request Quote
            </a>
          </nav>

          {/* MOBILE MENU */}
          <details className="relative lg:hidden">
            <summary className="cursor-pointer list-none rounded-xl border border-white/20 p-3 text-white">
              ☰
            </summary>

            <div className="absolute right-0 mt-4 w-60 rounded-2xl bg-[#071421] p-5 text-white shadow-2xl">
              <a href="#home" className="block py-3 hover:text-[#D4AF37]">
                Home
              </a>
              <a href="#services" className="block py-3 hover:text-[#D4AF37]">
                Services
              </a>
              <a href="#portfolio" className="block py-3 hover:text-[#D4AF37]">
                Portfolio
              </a>
              <a href="#about" className="block py-3 hover:text-[#D4AF37]">
                About
              </a>
              <a href="#contact" className="block py-3 hover:text-[#D4AF37]">
                Contact
              </a>

              <a
                href={`${whatsappBase}?text=Hello%20Lub%20Run%20Enterprises%2C%20I%20would%20like%20to%20request%20a%20quote.`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block rounded-xl bg-[#D4AF37] px-4 py-3 text-center font-bold text-black"
              >
                Request Quote
              </a>
            </div>
          </details>
        </div>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#071421] via-[#0A2540] to-[#102F4E] text-white"
      >
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#D4AF37]/20 blur-3xl" />
        <div className="absolute right-0 top-0 h-[30rem] w-[30rem] rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 md:py-32">
          <div className="max-w-4xl">
            <span className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm">
              Trusted Corporate Branding Partner
            </span>

            <h1 className="mt-8 max-w-5xl text-5xl font-black leading-tight tracking-tight text-white md:text-7xl">
              Premium Printing, Branding & Corporate Identity Solutions
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-9 text-gray-300 md:text-xl">
              Lub Run Enterprises delivers high-quality t-shirt printing,
              uniforms, promotional products, branding solutions, and large-scale
              corporate printing services tailored for businesses, institutions,
              and organizations.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 text-sm font-semibold text-white">
              {["Corporate Branding", "Bulk Printing", "Promotional Products", "Uniform Solutions"].map(
                (item) => (
                  <div key={item} className="rounded-full border border-white/20 px-5 py-3">
                    {item}
                  </div>
                )
              )}
            </div>

            <div className="mt-10 flex flex-wrap gap-5">
              <a
                href={`${whatsappBase}?text=Hello%20Lub%20Run%20Enterprises%2C%20I%20would%20like%20to%20request%20a%20quote.`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-[#D4AF37] px-8 py-4 font-bold text-black shadow-xl transition hover:scale-105"
              >
                Request a Quote
              </a>

              <a
                href={`mailto:${email}`}
                className="rounded-2xl border border-white/20 px-8 py-4 font-bold transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
              >
                Email Us
              </a>
            </div>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-4">
            {[
              ["Bulk", "Orders & Production"],
              ["Fast", "Turnaround Time"],
              ["Trusted", "Corporate Service"],
              ["Dar", "Serving Tanzania"],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-3xl bg-white/10 p-8 backdrop-blur transition hover:-translate-y-2 hover:bg-white/15"
              >
                <h3 className="text-3xl font-black text-[#D4AF37]">{title}</h3>
                <p className="mt-2 text-gray-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
              About Us
            </p>
            <h2 className="mt-5 text-4xl font-black leading-tight text-[#0A2540] md:text-5xl">
              Professional Branding Built For Modern Businesses
            </h2>
            <p className="mt-8 text-lg leading-8 text-gray-600">
              Lub Run Enterprises specializes in professional printing, uniforms,
              promotional materials, and branding solutions designed for organizations
              that value quality, professionalism, and reliability.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We help businesses and institutions create a strong visual identity
              through high-quality branded apparel and promotional products.
            </p>
          </div>

          <div className="rounded-[2rem] bg-[#0A2540] p-10 text-white shadow-2xl">
            <h3 className="text-3xl font-black">Why Businesses Choose Us</h3>
            <div className="mt-10 space-y-7">
              {[
                ["Quality Assurance", "Every project is handled with strict attention to detail and production standards."],
                ["Bulk Order Capability", "Structured systems for handling large institutional and corporate orders."],
                ["Reliable Delivery", "Efficient timelines and dependable communication from start to finish."],
              ].map(([title, text]) => (
                <div key={title}>
                  <h4 className="text-xl font-bold text-[#D4AF37]">{title}</h4>
                  <p className="mt-2 leading-7 text-gray-300">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BILINGUAL INTRO */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-gray-200 p-10 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
              English
            </p>
            <h2 className="mt-5 text-3xl font-black text-[#0A2540]">
              Corporate Printing & Branding Solutions
            </h2>
            <p className="mt-5 leading-8 text-gray-600">
              We provide professional uniforms, t-shirt printing, promotional
              products, and branding services for businesses, schools, NGOs,
              hotels, and institutions.
            </p>
          </div>

          <div className="rounded-[2rem] bg-[#0A2540] p-10 text-white shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
              Kiswahili
            </p>
            <h2 className="mt-5 text-3xl font-black">Huduma za Uchapishaji na Branding</h2>
            <p className="mt-5 leading-8 text-gray-300">
              Tunatoa huduma za sare, uchapishaji wa t-shirt, vifaa vya matangazo,
              na branding kwa makampuni, shule, NGO, hoteli, na taasisi mbalimbali.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-gray-100 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
              Our Services
            </p>
            <h2 className="mt-5 text-4xl font-black text-[#0A2540] md:text-5xl">
              Complete Printing & Branding Services
            </h2>
            <p className="mt-5 text-gray-600">
              Pricing depends on quantity, material, design, and delivery timeline.
              Request a quote for accurate pricing.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-[2rem] bg-white p-10 shadow-xl transition hover:-translate-y-3 hover:shadow-2xl"
              >
                <div className="text-5xl">{service.icon}</div>
                <h3 className="mt-8 text-2xl font-black text-[#0A2540]">{service.title}</h3>
                <p className="mt-5 leading-7 text-gray-600">{service.description}</p>
                <a
                  href="#contact"
                  className="mt-7 inline-flex rounded-full bg-[#0A2540] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#071421]"
                >
                  Request Quote
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
              Our Work
            </p>
            <h2 className="mt-5 text-4xl font-black text-[#0A2540] md:text-5xl">
              Professional Branding & Printing Solutions
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We provide high-quality branding solutions tailored for businesses,
              institutions, schools, NGOs, hospitality brands, and corporate organizations.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {portfolioItems.map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-[2rem] bg-white shadow-xl transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={900}
                  height={650}
                  className="h-56 w-full object-cover sm:h-64"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-black text-[#0A2540]">{item.title}</h3>
                  <p className="mt-4 leading-7 text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-gray-100 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
              How It Works
            </p>
            <h2 className="mt-5 text-4xl font-black text-[#0A2540] md:text-5xl">
              Simple Process From Idea To Delivery
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-5">
            {[
              "Send your design or idea",
              "Choose product and quantity",
              "Receive a quotation",
              "Confirm order and production",
              "Delivery or pickup",
            ].map((step, index) => (
              <div key={step} className="rounded-[2rem] bg-white p-6 shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D4AF37] font-black text-black">
                  {index + 1}
                </div>
                <p className="mt-5 font-bold text-[#0A2540]">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-[#071421] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
              Why Choose Us
            </p>
            <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
              Trusted Branding & Printing Partner
            </h2>
            <p className="mt-8 text-lg leading-8 text-gray-300">
              We combine premium quality, reliable turnaround, and professional service
              to help businesses, institutions, and organizations strengthen their brand identity.
            </p>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {[
              ["⚡", "Fast Delivery", "Reliable project turnaround for urgent and large-scale orders."],
              ["🏆", "Premium Quality", "High-standard printing and branding solutions tailored for professionals."],
              ["🤝", "Corporate Focus", "Specialized solutions for institutions, NGOs, schools, and companies."],
              ["🎯", "Brand Excellence", "Helping businesses create strong, professional, and memorable branding."],
            ].map(([icon, title, text]) => (
              <div key={title} className="rounded-[2rem] border border-white/10 bg-white/5 p-10 backdrop-blur">
                <div className="text-5xl">{icon}</div>
                <h3 className="mt-8 text-2xl font-black text-[#D4AF37]">{title}</h3>
                <p className="mt-5 leading-7 text-gray-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-[#0A2540] py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
              Contact Us
            </p>
            <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
              Request A Quote
            </h2>
            <p className="mt-8 text-lg leading-8 text-gray-300">
              Tell us about your branding, uniforms, printing, or promotional material needs.
              We will respond with pricing guidance based on quantity, material, and deadline.
            </p>

            <div className="mt-10 space-y-5">
              <div>
                <h4 className="font-bold text-[#D4AF37]">Phone / WhatsApp</h4>
                <p className="mt-2 text-gray-300">+255 689 824 682</p>
              </div>
              <div>
                <h4 className="font-bold text-[#D4AF37]">Email</h4>
                <p className="mt-2 text-gray-300">{email}</p>
              </div>
              <div>
                <h4 className="font-bold text-[#D4AF37]">Location</h4>
                <p className="mt-2 text-gray-300">Dar es Salaam, Tanzania</p>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleQuoteSubmit}
            className="rounded-[2rem] bg-white p-8 text-black shadow-2xl md:p-10"
          >
            <h3 className="text-2xl font-black text-[#0A2540]">Get a Custom Quote</h3>
            <p className="mt-2 text-sm text-gray-500">
              Fill in your order details and continue through WhatsApp for quick confirmation.
            </p>

            <div className="mt-8 grid gap-5">
              <input
                type="text"
                value={quoteForm.name}
                onChange={(e) => setQuoteForm({ ...quoteForm, name: e.target.value })}
                placeholder="Full Name"
                className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none focus:border-[#D4AF37]"
              />

              <input
                type="tel"
                value={quoteForm.phone}
                onChange={(e) => setQuoteForm({ ...quoteForm, phone: e.target.value })}
                placeholder="Phone Number"
                className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none focus:border-[#D4AF37]"
              />

              <input
                type="email"
                value={quoteForm.email}
                onChange={(e) => setQuoteForm({ ...quoteForm, email: e.target.value })}
                placeholder="Email Address"
                className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none focus:border-[#D4AF37]"
              />

              <div className="grid gap-5 md:grid-cols-2">
                <select
                  value={quoteForm.service}
                  onChange={(e) => setQuoteForm({ ...quoteForm, service: e.target.value })}
                  className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none focus:border-[#D4AF37]"
                >
                  <option value="">Service Needed</option>
                  <option value="T-Shirt Printing">T-Shirt Printing</option>
                  <option value="Corporate Uniforms">Corporate Uniforms</option>
                  <option value="Promotional Products">Promotional Products</option>
                  <option value="Bulk Printing">Bulk Printing</option>
                  <option value="Banners and Signage">Banners and Signage</option>
                </select>

                <input
                  type="text"
                  value={quoteForm.quantity}
                  onChange={(e) => setQuoteForm({ ...quoteForm, quantity: e.target.value })}
                  placeholder="Quantity, e.g. 50 pcs"
                  className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none focus:border-[#D4AF37]"
                />
              </div>

              <input
                type="text"
                value={quoteForm.deadline}
                onChange={(e) => setQuoteForm({ ...quoteForm, deadline: e.target.value })}
                placeholder="Deadline, e.g. Friday / Next week"
                className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none focus:border-[#D4AF37]"
              />

              <textarea
                value={quoteForm.message}
                onChange={(e) => setQuoteForm({ ...quoteForm, message: e.target.value })}
                rows={5}
                placeholder="Tell us about your project..."
                className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none focus:border-[#D4AF37]"
              />

              <button
                type="submit"
                className="w-full cursor-pointer rounded-2xl bg-[#0A2540] px-6 py-4 font-bold text-white transition hover:scale-[1.02] hover:bg-[#071421]"
              >
                Send Quote Request
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D4AF37] text-xl font-black text-black">
                LR
              </div>
              <div>
                <h3 className="text-xl font-black">LUB RUN ENTERPRISES</h3>
                <p className="text-sm text-gray-400">Bring Your Brand To Life</p>
              </div>
            </div>
            <p className="mt-6 leading-7 text-gray-400">
              Premium branding, printing, uniforms, promotional materials, and corporate identity solutions.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-[#D4AF37]">Services</h4>
            <ul className="mt-6 space-y-4 text-gray-400">
              <li>T-Shirt Printing</li>
              <li>Corporate Uniforms</li>
              <li>Promotional Products</li>
              <li>Bulk Printing</li>
              <li>Branding Solutions</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-[#D4AF37]">Quick Links</h4>
            <ul className="mt-6 space-y-4 text-gray-400">
              <li><a href="#home" className="hover:text-[#D4AF37]">Home</a></li>
              <li><a href="#about" className="hover:text-[#D4AF37]">About</a></li>
              <li><a href="#services" className="hover:text-[#D4AF37]">Services</a></li>
              <li><a href="#portfolio" className="hover:text-[#D4AF37]">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-[#D4AF37]">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-[#D4AF37]">Contact</h4>
            <div className="mt-6 space-y-5 text-gray-400">
              <p>+255 689 824 682</p>
              <p>{email}</p>
              <p>Dar es Salaam, Tanzania</p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-7xl border-t border-white/10 px-6 pt-8 text-center text-sm text-gray-500">
          © 2026 Lub Run Enterprises. All rights reserved.
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href={`${whatsappBase}?text=Hello%20Lub%20Run%20Enterprises%2C%20I%20would%20like%20to%20request%20a%20quote.`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-3xl text-white shadow-2xl transition hover:scale-110"
        aria-label="Chat with Lub Run Enterprises on WhatsApp"
      >
        💬
      </a>
    </main>
  );
}
