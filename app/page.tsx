export default function Home() {
  const services = [
    {
      title: "Corporate Uniforms",
      desc: "Professional uniforms for schools, hotels, NGOs, security companies, and institutions.",
    },
    {
      title: "T-Shirt Printing",
      desc: "Custom branded t-shirts for campaigns, events, teams, staff, and promotions.",
    },
    {
      title: "Promotional Materials",
      desc: "Branded mugs, caps, banners, flyers, stickers, and marketing merchandise.",
    },
    {
      title: "Bulk Printing",
      desc: "Reliable high-volume printing services with quality control and fast turnaround.",
    },
  ];

  return (
    <main className="bg-white text-gray-900">

      {/* HERO */}
      <section className="min-h-screen bg-gradient-to-br from-[#071421] via-[#0A2540] to-[#102F4E] text-white">
        <div className="mx-auto max-w-7xl px-6 py-28">

          <div className="max-w-4xl">
            <span className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm">
              Trusted Corporate Branding Partner
            </span>

            <h1 className="mt-8 text-6xl font-black leading-tight">
              Bring Your Brand To Life
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-300">
              Lub Run Enterprises delivers professional printing,
              uniforms, branding, and promotional materials for
              businesses, schools, NGOs, hotels, and organizations
              across Tanzania.
            </p>

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
      <section className="mx-auto max-w-7xl px-6 py-24">
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
      <section className="bg-gray-100 py-24">
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
                className="rounded-[2rem] bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <h3 className="text-2xl font-black text-[#0A2540]">
                  {service.title}
                </h3>

                <p className="mt-5 leading-7 text-gray-600">
                  {service.desc}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A2540] py-24 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2 className="text-5xl font-black leading-tight">
            Ready To Elevate Your Brand?
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300">
            Whether you need uniforms, t-shirt printing,
            promotional products, or large-scale corporate
            branding, Lub Run Enterprises is ready to support
            your organization.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <a
              href="https://wa.me/255689824682"
              className="rounded-2xl bg-[#D4AF37] px-8 py-4 font-bold text-black shadow-xl"
            >
              Chat on WhatsApp
            </a>

            <a
              href={"mailto:lubrun.enterprises@gmail.com"}
              className="rounded-2xl border border-white/20 px-8 py-4 font-bold"
            >
              Send Email
            </a>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-100 border-t">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-10 md:flex-row md:items-center md:justify-between">

          <div>
            <h3 className="text-2xl font-black text-[#0A2540]">
              LUB RUN ENTERPRISES
            </h3>

            <p className="mt-2 text-gray-600">
              Bring Your Brand To Life
            </p>
          </div>

          <div className="text-sm text-gray-500">
            © 2026 Lub Run Enterprises. All rights reserved.
          </div>

        </div>
      </footer>

    </main>
  );
}
