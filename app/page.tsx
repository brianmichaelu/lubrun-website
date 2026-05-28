"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

export default function Home() {
  const phoneNumber = "255689824682";
  const email = "lubrun.enterprises@gmail.com";
  const whatsappBase = `https://wa.me/${phoneNumber}`;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [quoteForm, setQuoteForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    quantity: "",
    deadline: "",
    message: "",
  });

  const quickQuoteMessage = encodeURIComponent(
    "Hello Lub Run Enterprises, I would like to request a custom quote."
  );

  const services = [
    {
      title: "T-Shirt Printing",
      description:
        "High-quality branded t-shirts for businesses, schools, events, campaigns, and organizations.",
      icon: "👕",
    },
    {
      title: "Corporate Uniforms",
      description:
        "Professional branded uniforms for staff, hospitality teams, institutions, and corporate teams.",
      icon: "🏢",
    },
    {
      title: "Promotional Products",
      description:
        "Branded mugs, caps, bags, flyers, banners, giveaways, and marketing materials.",
      icon: "🎁",
    },
    {
      title: "Bulk Printing",
      description:
        "Reliable large-scale printing solutions for companies, schools, NGOs, and institutions.",
      icon: "🖨️",
    },
  ];

  const portfolioItems = [
    {
      title: "Corporate Uniform Samples",
      description:
        "Sample visuals showing professional branded uniforms for companies, hotels, schools, and institutions.",
      image: "/uniforms.png",
      alt: "Corporate uniforms branding sample",
    },
    {
      title: "Promotional Branding Samples",
      description:
        "Sample visuals showing branded promotional items such as mugs, caps, banners, and merchandise.",
      image: "/branding.png",
      alt: "Promotional branding products sample",
    },
    {
      title: "Bulk Printing Samples",
      description:
        "Sample visuals showing bulk printing solutions for organizations, corporate clients, and campaigns.",
      image: "/bulk.png",
      alt: "Bulk printing project sample",
    },
  ];

  const orderOptions = [
    "Branded T-Shirts",
    "Corporate Uniforms",
    "Caps & Hats",
    "Mugs & Gifts",
    "Banners & Signage",
    "Flyers & Posters",
    "Business Cards",
    "Event Merchandise",
    "School Uniform Branding",
    "NGO & Campaign Materials",
    "Hotel & Restaurant Uniforms",
    "Corporate Gift Packages",
  ];

  const suitableFor = [
    "Companies",
    "Schools",
    "NGOs",
    "Hotels",
    "Restaurants",
    "Events",
    "Churches & Institutions",
    "Small Businesses",
    "Corporate Teams",
    "Marketing Campaigns",
  ];

  const closeMobileMenu = () => setIsMenuOpen(false);

  const handleQuoteSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const message = encodeURIComponent(
      `Hello Lub Run Enterprises, I would like to request a quotation.

Name: ${quoteForm.name}
Phone: ${quoteForm.phone}
Email: ${quoteForm.email}
Service Needed: ${quoteForm.service}
Quantity: ${quoteForm.quantity}
Deadline: ${quoteForm.deadline}
Extra Details: ${quoteForm.message}`
    );

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
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="/" className="flex items-center gap-3" onClick={closeMobileMenu}>
            <Image
              src="/logo.png"
              alt="Lub Run Enterprises logo"
              width={56}
              height={56}
              className="h-12 w-auto object-contain"
              priority
            />

            <div>
              <h1 className="text-base font-black tracking-wide text-white">LUB RUN</h1>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37]">
                ENTERPRISES
              </p>
            </div>
          </a>

          {/* DESKTOP NAVIGATION */}
          
<nav className="hidden items-center gap-8 text-sm font-semibold text-white lg:flex">
  <a href="/" className="transition hover:text-[#D4AF37]">
    Home
  </a>

  <a href="#services" className="transition hover:text-[#D4AF37]">
    Services
  </a>

  <a href="#portfolio" className="transition hover:text-[#D4AF37]">
    Samples
  </a>

  <a href="#about" className="transition hover:text-[#D4AF37]">
    About
  </a>

  <a href="#contact" className="transition hover:text-[#D4AF37]">
    Contact
  </a>

  <a
    href={`${whatsappBase}?text=${quickQuoteMessage}`}
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full bg-[#D4AF37] px-5 py-3 font-bold text-black transition hover:scale-105 hover:bg-[#c7a12c]"
  >
    Request Quote
  </a>
</nav>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 text-2xl text-white lg:hidden"
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? "×" : "☰"}
          </button>
        </div>

        {/* MOBILE NAVIGATION */}
        {isMenuOpen && (
          <div className="border-t border-white/10 bg-[#071421] px-6 py-5 text-white lg:hidden">
            <nav className="mx-auto grid max-w-7xl gap-2">
              <a
                  href="/"
                  onClick={closeMobileMenu}
                  className="rounded-xl px-4 py-3 hover:bg-white/10"
              >
                  Home
            </a>
              <a
                href="#services"
                onClick={closeMobileMenu}
                className="rounded-xl px-4 py-3 hover:bg-white/10"
              >
                Services
              </a>
              <a
                href="#portfolio"
                onClick={closeMobileMenu}
                className="rounded-xl px-4 py-3 hover:bg-white/10"
              >
                Samples
              </a>
              <a
                href="#about"
                onClick={closeMobileMenu}
                className="rounded-xl px-4 py-3 hover:bg-white/10"
              >
                About
              </a>
              <a
                href="#contact"
                onClick={closeMobileMenu}
                className="rounded-xl px-4 py-3 hover:bg-white/10"
              >
                Contact
              </a>

              <a
                href={`${whatsappBase}?text=${quickQuoteMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 rounded-xl bg-[#D4AF37] px-4 py-3 text-center font-bold text-black"
              >
                Request Quote
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
            id="home"
            className="relative min-h-[calc(100vh-88px)] overflow-hidden bg-gradient-to-br from-[#071421] via-[#0A2540] to-[#102F4E] text-white"
      >
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#D4AF37]/20 blur-3xl" />
        <div className="absolute right-0 top-0 h-[30rem] w-[30rem] rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="max-w-4xl">
            <span className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm">
              Printing • Branding • Uniforms • Promotional Products
            </span>

            <h1 className="mt-8 max-w-5xl text-4xl font-black leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
              Premium Printing, Branding & Corporate Identity Solutions
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-9 text-gray-300 md:text-xl">
              Lub Run Enterprises helps businesses, schools, NGOs, hotels, events,
              and organizations create professional branded products including
              t-shirts, uniforms, promotional items, banners, and bulk printing
              solutions.
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
                href={`${whatsappBase}?text=${quickQuoteMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-[#D4AF37] px-8 py-4 font-bold text-black shadow-xl transition hover:scale-105"
              >
                Request a Custom Quote
              </a>

              <a
                href="#services"
                className="rounded-2xl border border-white/20 px-8 py-4 font-bold transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
              >
                View Services
              </a>
            </div>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-4">
            {[
              ["Bulk", "Orders & Production"],
              ["Fast", "Turnaround Support"],
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
      <section id="about" className="scroll-mt-28 mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
              About Us
            </p>
            <h2 className="mt-5 text-4xl font-black leading-tight text-[#0A2540] md:text-5xl">
              Professional Branding Built For Modern Businesses
            </h2>
            <p className="mt-8 text-lg leading-8 text-gray-600">
              Lub Run Enterprises provides printing, uniforms, promotional products,
              and branding solutions for organizations that value quality,
              professionalism, and reliable communication.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Whether you need branded t-shirts, staff uniforms, event merchandise,
              banners, or corporate promotional items, we help bring your brand to
              life with practical and professional solutions.
            </p>
          </div>

          <div className="rounded-[2rem] bg-[#0A2540] p-10 text-white shadow-2xl">
            <h3 className="text-3xl font-black">Why Businesses Choose Us</h3>
            <div className="mt-10 space-y-7">
              {[
                [
                  "Quality-Focused Service",
                  "Every project is handled with attention to detail, design presentation, and production requirements.",
                ],
                [
                  "Bulk Order Support",
                  "We support larger orders for companies, schools, campaigns, institutions, and corporate teams.",
                ],
                [
                  "Clear Communication",
                  "Clients can request quotes directly through WhatsApp with order details, quantity, and deadlines.",
                ],
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
              hotels, restaurants, and institutions.
            </p>
          </div>

          <div className="rounded-[2rem] bg-[#0A2540] p-10 text-white shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
              Kiswahili
            </p>
            <h2 className="mt-5 text-3xl font-black">Huduma za Uchapishaji na Branding</h2>
            <p className="mt-5 leading-8 text-gray-300">
              Tunatoa huduma za sare, uchapishaji wa t-shirt, vifaa vya matangazo,
              mabango, na branding kwa makampuni, shule, NGO, hoteli, migahawa,
              na taasisi mbalimbali.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="scroll-mt-28 bg-gray-100 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
              Our Services
            </p>
            <h2 className="mt-5 text-4xl font-black text-[#0A2540] md:text-5xl">
              Complete Printing & Branding Services
            </h2>
            <p className="mt-5 leading-8 text-gray-600">
              Pricing depends on product type, quantity, material quality, print
              method, design complexity, and delivery timeline. Request a custom
              quote for accurate pricing.
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

      {/* WHAT YOU CAN ORDER */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
                What You Can Order
              </p>
              <h2 className="mt-5 text-4xl font-black text-[#0A2540] md:text-5xl">
                Products For Business, Events & Institutions
              </h2>
              <p className="mt-6 leading-8 text-gray-600">
                From small branded items to bulk corporate orders, Lub Run Enterprises
                can support different printing and branding needs.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {orderOptions.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 font-semibold text-[#0A2540]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="scroll-mt-28 bg-gray-100 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
              Branding & Printing Samples
            </p>
            <h2 className="mt-5 text-4xl font-black text-[#0A2540] md:text-5xl">
              Sample Visuals For Presentation
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              These sample visuals show the type of branding, printing, uniforms,
              and promotional products Lub Run Enterprises can provide. Real client
              work can be added as projects are completed.
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

          <div className="mt-10 rounded-3xl border border-[#D4AF37]/40 bg-[#D4AF37]/10 p-6 text-sm leading-7 text-gray-700">
            <strong className="text-[#0A2540]">Note:</strong> Sample images are for
            presentation purposes. Final product appearance depends on material,
            design, print method, product availability, and order specifications.
          </div>
        </div>
      </section>

      {/* SUITABLE FOR */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
              Suitable For
            </p>
            <h2 className="mt-5 text-4xl font-black text-[#0A2540] md:text-5xl">
              Branding Support For Different Clients
            </h2>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {suitableFor.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-[#0A2540] px-5 py-5 text-center font-bold text-white shadow-lg"
              >
                {item}
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
              We combine quality-focused service, clear communication, and practical
              branding solutions to help businesses, institutions, and organizations
              strengthen their brand identity.
            </p>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {[
              ["⚡", "Fast Communication", "Quick WhatsApp quote requests with clear order details."],
              ["🏆", "Quality Focus", "Professional printing and branding solutions tailored for real business use."],
              ["🤝", "Corporate Support", "Suitable for companies, schools, NGOs, hotels, and institutions."],
              ["🎯", "Brand Presentation", "Helping clients create clean, professional, and memorable branded products."],
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
      <section id="contact" className="scroll-mt-28 bg-[#0A2540] py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
              Contact Us
            </p>
            <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
              Request A Quote
            </h2>
            <p className="mt-8 text-lg leading-8 text-gray-300">
              Tell us about your branding, uniforms, printing, or promotional
              material needs. We will respond with pricing guidance based on
              quantity, material, product type, and deadline.
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
                required
                type="text"
                value={quoteForm.name}
                onChange={(e) => setQuoteForm({ ...quoteForm, name: e.target.value })}
                placeholder="Full Name"
                className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none focus:border-[#D4AF37]"
              />

              <input
                required
                type="tel"
                value={quoteForm.phone}
                onChange={(e) => setQuoteForm({ ...quoteForm, phone: e.target.value })}
                placeholder="Phone / WhatsApp Number"
                className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none focus:border-[#D4AF37]"
              />

              <input
                type="email"
                value={quoteForm.email}
                onChange={(e) => setQuoteForm({ ...quoteForm, email: e.target.value })}
                placeholder="Email Address, optional"
                className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none focus:border-[#D4AF37]"
              />

              <div className="grid gap-5 md:grid-cols-2">
                <select
                  required
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
                  <option value="Other Branding Service">Other Branding Service</option>
                </select>

                <input
                  required
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
                placeholder="Tell us about your design, colors, sizes, delivery location, or extra details..."
                className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none focus:border-[#D4AF37]"
              />

              <button
                type="submit"
                className="w-full cursor-pointer rounded-2xl bg-[#0A2540] px-6 py-4 font-bold text-white transition hover:scale-[1.02] hover:bg-[#071421]"
              >
                Send Quote Request on WhatsApp
              </button>

              <p className="text-center text-xs leading-6 text-gray-500">
                Final pricing depends on quantity, material, design complexity,
                print method, and delivery timeline.
              </p>
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
              Premium branding, printing, uniforms, promotional materials, and
              corporate identity solutions in Dar es Salaam, Tanzania.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-[#D4AF37]">Services</h4>
            <ul className="mt-6 space-y-4 text-gray-400">
              <li>T-Shirt Printing</li>
              <li>Corporate Uniforms</li>
              <li>Promotional Products</li>
              <li>Bulk Printing</li>
              <li>Banners & Signage</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-[#D4AF37]">Quick Links</h4>
            <ul className="mt-6 space-y-4 text-gray-400">
              <li>
                <a href="#home" className="hover:text-[#D4AF37]">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#D4AF37]">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D4AF37]">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[#D4AF37]">
                  Samples
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#D4AF37]">
                  Contact
                </a>
              </li>
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

        <div className="mx-auto mt-16 max-w-7xl border-t border-white/10 px-6 pt-8 text-center text-sm leading-7 text-gray-500">
          <p>© 2026 Lub Run Enterprises. All rights reserved.</p>
          <p className="mt-3">
            Sample images are for presentation purposes. Real client work can be
            added as completed projects become available.
          </p>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href={`${whatsappBase}?text=${quickQuoteMessage}`}
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
