export default function Home() {
 const services = [
  {
    title: "T-Shirt Printing",
    description:
      "High-quality branded t-shirts for businesses, events, schools, and organizations.",
    icon: "👕",
  },

  {
    title: "Corporate Uniforms",
    description:
      "Professional uniforms designed for strong brand identity and workplace presentation.",
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
  return (
    <main className="scroll-smooth bg-white text-gray-900">
      {/* HEADER */}
<header className="sticky top-0 z-50 border-b border-white/10 bg-[#071421]/95 backdrop-blur">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

    {/* LOGO */}
    <div className="flex items-center gap-3">

  <img
    src="/logo.png"
    alt="Lub Run Enterprises"
    className="h-14 w-auto"
  />

  <div>
    <h1 className="text-lg font-black tracking-wide text-white">
      LUB RUN
    </h1>

    <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
      ENTERPRISES
    </p>
  </div>

</div>

    {/* NAVIGATION */}
    <nav className="hidden items-center gap-8 text-sm font-semibold text-white lg:flex">
      <a href="#" className="transition hover:text-[#D4AF37]">
        Home
      </a>

      <a href="#services" className="transition hover:text-[#D4AF37]">
        Services
      </a>

      <a href="#about"className="transition hover:text-[#D4AF37]">
        About
      </a>

      <a href="#contact" className="transition hover:text-[#D4AF37]">
        Contact
      </a>

      <button className="rounded-full border border-white/20 px-4 py-2 text-xs">
        EN | SW
      </button>

      <a
        href="https://wa.me/255689824682"
        className="rounded-full bg-[#D4AF37] px-5 py-3 text-black transition hover:scale-105"
      >
        WhatsApp
      </a>
    </nav>
     <button className="rounded-xl border border-white/20 p-3 text-white lg:hidden">
      ☰
     </button>
  </div>
</header>

      {/* HERO */}
      <section className="min-h-screen bg-gradient-to-br from-[#071421] via-[#0A2540] to-[#102F4E] text-white">
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-32">

        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#D4AF37]/20 blur-3xl"></div>

        <div className="absolute right-0 top-0 h-[30rem] w-[30rem] rounded-full bg-blue-500/10 blur-3xl"></div>
         
          <div className="max-w-4xl">
            <span className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm">
              Trusted Corporate Branding Partner
            </span>

            <h1 className="max-w-5xl text-6xl font-black leading-tight tracking-tight text-white md:text-7xl">
              Premium Printing,
              Branding & Corporate
              Identity Solutions
          </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-300">
              Lub Run Enterprises delivers high-quality t-shirt printing,
              uniforms, promotional products, branding solutions,
              and large-scale corporate printing services tailored
              for businesses, institutions, and organizations.
          </p>

              <div className="mt-10 flex flex-wrap gap-4 text-sm font-semibold text-white">

  <div className="rounded-full border border-white/20 px-5 py-3">
    Corporate Branding
  </div>

  <div className="rounded-full border border-white/20 px-5 py-3">
    Bulk Printing
  </div>

  <div className="rounded-full border border-white/20 px-5 py-3">
    Promotional Products
  </div>

  <div className="rounded-full border border-white/20 px-5 py-3">
    Uniform Solutions
  </div>
  <div className="mt-16 grid gap-8 md:grid-cols-4">

  <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
    <h3 className="text-4xl font-black text-[#D4AF37]">
      500+
    </h3>

    <p className="mt-3 text-sm uppercase tracking-[0.2em] text-gray-300">
      Projects Completed
    </p>
  </div>

  <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
    <h3 className="text-4xl font-black text-[#D4AF37]">
      120+
    </h3>

    <p className="mt-3 text-sm uppercase tracking-[0.2em] text-gray-300">
      Corporate Clients
    </p>
  </div>

  <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
    <h3 className="text-4xl font-black text-[#D4AF37]">
      5+
    </h3>

    <p className="mt-3 text-sm uppercase tracking-[0.2em] text-gray-300">
      Years Experience
    </p>
  </div>

  <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
    <h3 className="text-4xl font-black text-[#D4AF37]">
      24/7
    </h3>

    <p className="mt-3 text-sm uppercase tracking-[0.2em] text-gray-300">
      Customer Support
    </p>
  </div>

</div>

</div>

            <div className="mt-10 flex flex-wrap gap-5">
              <a
                href="https://wa.me/255689824682"
                className="rounded-2xl bg-[#D4AF37] px-8 py-4 font-bold text-black shadow-xl"
              >
                WhatsApp Us
              </a>

              <a
                href={"mailto:lubrun.enterprises@gmail.com"}
                className="rounded-2xl border border-white/20 px-8 py-4 font-bold"
              >
                Email Us
              </a>
            </div>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-4">
            <div className="rounded-3xl bg-white/10 p-8 backdrop-blur">
              <h3 className="text-3xl font-black text-[#D4AF37]">
                Bulk
              </h3>
              <p className="mt-2 text-gray-300">
                Orders & Production
              </p>
            </div>

            <div className="rounded-3xl bg-white/10 p-8 backdrop-blur">
              <h3 className="text-3xl font-black text-[#D4AF37]">
                Fast
              </h3>
              <p className="mt-2 text-gray-300">
                Turnaround Time
              </p>
            </div>

            <div className="rounded-3xl bg-white/10 p-8 backdrop-blur">
              <h3 className="text-3xl font-black text-[#D4AF37]">
                Trusted
              </h3>
              <p className="mt-2 text-gray-300">
                Corporate Service
              </p>
            </div>

            <div className="rounded-3xl bg-white/10 p-8 backdrop-blur">
              <h3 className="text-3xl font-black text-[#D4AF37]">
                Tanzania
              </h3>
              <p className="mt-2 text-gray-300">
                Nationwide Coverage
              </p>
            </div>
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

            <h2 className="mt-5 text-5xl font-black leading-tight text-[#0A2540]">
              Professional Branding Built For Modern Businesses
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              Lub Run Enterprises specializes in professional
              printing, uniforms, promotional materials,
              and branding solutions designed for organizations
              that value quality, professionalism, and reliability.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              We help businesses and institutions create
              a strong visual identity through high-quality
              branded apparel and promotional products.
            </p>
          </div>

          <div className="rounded-[2rem] bg-[#0A2540] p-10 text-white shadow-2xl">
            <h3 className="text-3xl font-black">
              Why Businesses Choose Us
            </h3>

            <div className="mt-10 space-y-7">

              <div>
                <h4 className="text-xl font-bold text-[#D4AF37]">
                  Quality Assurance
                </h4>

                <p className="mt-2 leading-7 text-gray-300">
                  Every project is handled with strict
                  attention to detail and production standards.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-[#D4AF37]">
                  Bulk Order Capability
                </h4>

                <p className="mt-2 leading-7 text-gray-300">
                  Structured systems for handling large
                  institutional and corporate orders.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-[#D4AF37]">
                  Reliable Delivery
                </h4>

                <p className="mt-2 leading-7 text-gray-300">
                  Efficient timelines and dependable
                  communication from start to finish.
                </p>
              </div>

            </div>
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

            <h2 className="mt-5 text-5xl font-black text-[#0A2540]">
              Complete Printing & Branding Services
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            {services.map((service) => (
  <div
    key={service.title}
    className="rounded-[2rem] bg-white p-10 shadow-xl transition hover:-translate-y-3 hover:shadow-2xl"
  >

    <div className="text-5xl">
      {service.icon}
    </div>

    <h3 className="mt-8 text-2xl font-black text-[#0A2540]">
      {service.title}
    </h3>

    <p className="mt-5 leading-7 text-gray-600">
      {service.description}
    </p>

  </div>
))}

          </div>

        </div>
      </section>

      {/* PORTFOLIO */}
<section className="bg-white py-24">
  <div className="mx-auto max-w-7xl px-6">

    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
        Our Work
      </p>

      <h2 className="mt-5 text-5xl font-black text-[#0A2540]">
        Professional Branding & Printing Solutions
      </h2>

      <p className="mt-6 text-lg leading-8 text-gray-600">
        We provide high-quality branding solutions tailored
        for businesses, institutions, schools, NGOs,
        hospitality brands, and corporate organizations.
      </p>
    </div>

    <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

  {/* ITEM 1 */}
  <div className="overflow-hidden rounded-[2rem] bg-white shadow-xl">

    <div className="h-64 bg-[#0A2540]"></div>

    <div className="p-8">

      <h3 className="text-2xl font-black text-[#0A2540]">
        Corporate Uniforms
      </h3>

      <p className="mt-4 leading-7 text-gray-600">
        Premium branded uniforms designed for professional businesses and institutions.
      </p>

    </div>

  </div>

  {/* ITEM 2 */}
  <div className="overflow-hidden rounded-[2rem] bg-white shadow-xl">

    <div className="h-64 bg-[#D4AF37]"></div>

    <div className="p-8">

      <h3 className="text-2xl font-black text-[#0A2540]">
        Promotional Branding
      </h3>

      <p className="mt-4 leading-7 text-gray-600">
        Branded promotional products including mugs, banners, and merchandise.
      </p>

    </div>

  </div>

  {/* ITEM 3 */}
  <div className="overflow-hidden rounded-[2rem] bg-white shadow-xl">

    <div className="h-64 bg-gray-300"></div>

    <div className="p-8">

      <h3 className="text-2xl font-black text-[#0A2540]">
        Bulk Printing
      </h3>

      <p className="mt-4 leading-7 text-gray-600">
        Large-scale printing solutions tailored for organizations and corporate clients.
      </p>

    </div>

  </div>

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

      <h2 className="mt-5 text-5xl font-black leading-tight">
        Trusted Branding &
        Printing Partner
      </h2>

      <p className="mt-8 text-lg leading-8 text-gray-300">
        We combine premium quality, reliable turnaround,
        and professional service to help businesses,
        institutions, and organizations strengthen their brand identity.
      </p>

    </div>

    <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 backdrop-blur">

        <div className="text-5xl">
          ⚡
        </div>

        <h3 className="mt-8 text-2xl font-black text-[#D4AF37]">
          Fast Delivery
        </h3>

        <p className="mt-5 leading-7 text-gray-300">
          Reliable project turnaround for urgent and large-scale orders.
        </p>

      </div>

      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 backdrop-blur">

        <div className="text-5xl">
          🏆
        </div>

        <h3 className="mt-8 text-2xl font-black text-[#D4AF37]">
          Premium Quality
        </h3>

        <p className="mt-5 leading-7 text-gray-300">
          High-standard printing and branding solutions tailored for professionals.
        </p>

      </div>

      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 backdrop-blur">

        <div className="text-5xl">
          🤝
        </div>

        <h3 className="mt-8 text-2xl font-black text-[#D4AF37]">
          Corporate Focus
        </h3>

        <p className="mt-5 leading-7 text-gray-300">
          Specialized solutions for institutions, NGOs, schools, and companies.
        </p>

      </div>

      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 backdrop-blur">

        <div className="text-5xl">
          🎯
        </div>

        <h3 className="mt-8 text-2xl font-black text-[#D4AF37]">
          Brand Excellence
        </h3>

        <p className="mt-5 leading-7 text-gray-300">
          Helping businesses create strong, professional, and memorable branding.
        </p>

      </div>

    </div>

  </div>

</section>

      {/* CTA */}

      {/* CONTACT */}
<section id="contact" className="bg-[#0A2540] py-24 text-white">
  <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
        Contact Us
      </p>

      <h2 className="mt-5 text-5xl font-black leading-tight">
        Request A Quote
      </h2>

      <p className="mt-8 text-lg leading-8 text-gray-300">
        Tell us about your branding, uniforms,
        printing, or promotional material needs.
      </p>

      <div className="mt-10 space-y-5">

        <div>
          <h4 className="font-bold text-[#D4AF37]">
            Phone
          </h4>

          <p className="mt-2 text-gray-300">
            +255 689 824 682
          </p>
        </div>

        <div>
          <h4 className="font-bold text-[#D4AF37]">
            Email
          </h4>

          <p className="mt-2 text-gray-300">
            lubrun.enterprises@gmail.com
          </p>
        </div>

      </div>
    </div>

    <div className="rounded-[2rem] bg-white p-10 text-black shadow-2xl">

      <form className="space-y-6">

        <input
          type="text"
          placeholder="Full Name"
          className="w-full rounded-2xl border border-gray-200 px-5 py-4"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full rounded-2xl border border-gray-200 px-5 py-4"
        />

        <input
          type="text"
          placeholder="Phone Number"
          className="w-full rounded-2xl border border-gray-200 px-5 py-4"
        />

        <textarea
          rows={5}
          placeholder="Tell us about your project..."
          className="w-full rounded-2xl border border-gray-200 px-5 py-4"
        ></textarea>

        <button
          type="submit"
         className="w-full cursor-pointer rounded-2xl bg-[#0A2540] px-6 py-4 font-bold text-white transition hover:bg-[#071421]"
        
        >
          Submit Inquiry
        </button>

      </form>

    </div>

  </div>
</section>

      {/* FOOTER */}
     <footer className="bg-black py-20 text-white">
  <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-4">

    {/* BRAND */}
    <div>

      <div className="flex items-center gap-3">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D4AF37] text-xl font-black text-black">
          LR
        </div>

        <div>
          <h3 className="text-xl font-black">
            LUB RUN ENTERPRISES
          </h3>

          <p className="text-sm text-gray-400">
            Bring Your Brand To Life
          </p>
        </div>

      </div>

      <p className="mt-6 leading-7 text-gray-400">
        Premium branding, printing, uniforms,
        promotional materials, and corporate identity solutions.
      </p>

    </div>

    {/* SERVICES */}
    <div>

      <h4 className="text-lg font-bold text-[#D4AF37]">
        Services
      </h4>

      <ul className="mt-6 space-y-4 text-gray-400">

        <li>T-Shirt Printing</li>

        <li>Corporate Uniforms</li>

        <li>Promotional Products</li>

        <li>Bulk Printing</li>

        <li>Branding Solutions</li>

      </ul>

    </div>

    {/* QUICK LINKS */}
    <div>

      <h4 className="text-lg font-bold text-[#D4AF37]">
        Quick Links
      </h4>

      <ul className="mt-6 space-y-4 text-gray-400">

        <li>
          <a href="#">
            Home
          </a>
        </li>

        <li>
          <a href="#about">
            About
          </a>
        </li>

        <li>
          <a href="#services">
            Services
          </a>
        </li>

        <li>
          <a href="#contact">
            Contact
          </a>
        </li>

      </ul>

    </div>

    {/* CONTACT */}
    <div>

      <h4 className="text-lg font-bold text-[#D4AF37]">
        Contact
      </h4>

      <div className="mt-6 space-y-5 text-gray-400">

        <p>
          +255 689 824 682
        </p>

        <p>
          lubrun.enterprises@gmail.com
        </p>

        <p>
          Dar es Salaam, Tanzania
        </p>

      </div>

    </div>

  </div>

  {/* BOTTOM */}
  <div className="mx-auto mt-16 max-w-7xl border-t border-white/10 px-6 pt-8 text-center text-sm text-gray-500">

    © 2026 Lub Run Enterprises. All rights reserved.

  </div>
</footer>

     <a
  href="https://wa.me/255689824682"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-3xl text-white shadow-2xl transition hover:scale-110"
>
  💬
</a>
     
    </main>
  );
}
