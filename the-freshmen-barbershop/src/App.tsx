import React, { useEffect } from 'react';
import { MapPin, Star } from 'lucide-react';

export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white border-b border-zinc-200">
        <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-bold text-2xl tracking-tighter uppercase">Freshmen</div>
          <nav className="hidden md:flex items-center gap-10 text-sm font-bold uppercase tracking-widest text-zinc-500">
            <a href="#about" className="hover:text-black transition-colors">About</a>
            <a href="#services" className="hover:text-black transition-colors">Services</a>
            <a href="#barbers" className="hover:text-black transition-colors">Team</a>
            <a href="#reviews" className="hover:text-black transition-colors">Reviews</a>
            <a href="#visit" className="hover:text-black transition-colors">Visit</a>
          </nav>
          <a href="https://booksy.com/en-ca/7160_the-freshmen-barbershop_barbershop_870806_mississauga" target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex items-center justify-center bg-black text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 transition-colors">
            Book Now
          </a>
        </div>
      </header>

      <main>
        {/* Hero - Split Layout */}
        <section className="flex flex-col lg:flex-row min-h-[85vh] border-b border-zinc-200">
          <div className="flex-1 flex flex-col justify-center px-6 py-20 lg:px-16 xl:px-24 order-2 lg:order-1">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-zinc-500 mb-8">
                <Star className="w-4 h-4 fill-black text-black" />
                <span>4.7 ★ from 500+ clients</span>
              </div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95] mb-8">
                Precision Cuts.<br />Consistent Results.
              </h1>
              <p className="text-xl md:text-2xl text-zinc-600 mb-12 max-w-xl leading-relaxed tracking-tight">
                A modern barbershop in Streetsville known for detail, skill, and atmosphere.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a href="https://booksy.com/en-ca/7160_the-freshmen-barbershop_barbershop_870806_mississauga" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-black text-white px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-zinc-800 transition-colors w-full sm:w-auto">
                  Book Appointment
                </a>
                <a href="tel:9054837374" className="inline-flex items-center justify-center border border-zinc-300 text-black px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-zinc-100 transition-colors w-full sm:w-auto">
                  Call Shop
                </a>
              </div>
              <a href="https://www.google.com/maps/place/The+FRESHMEN+Barbershop/@43.5823013,-79.714563,16z/data=!3m1!5s0x882b41b0f8c2182d:0x68a20fafeafedec7!4m6!3m5!1s0x882b41b9a9fea6a1:0xe418339f4adcef70!8m2!3d43.5823631!4d-79.7144503!16s%2Fg%2F11c2lbfwlh?entry=ttu&g_ep=EgoyMDI2MDMyMi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="mt-12 flex items-center gap-3 text-sm font-medium text-zinc-500 hover:text-black transition-colors w-fit">
                <MapPin className="w-4 h-4" />
                <span>167 Queen St S, Mississauga</span>
              </a>
            </div>
          </div>
          <div className="flex-1 relative min-h-[50vh] lg:min-h-auto order-1 lg:order-2 bg-zinc-100">
            <img 
              src="/hero-image.jpg" 
              alt="Barber doing a lineup" 
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </section>

        {/* About - Editorial Layout */}
        <section id="about" className="py-24 md:py-32 px-6 max-w-[1400px] mx-auto scroll-mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            <div className="lg:col-span-4">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Built on precision.</h2>
            </div>
            <div className="lg:col-span-8 lg:col-start-5 space-y-8">
              <p className="text-2xl md:text-4xl leading-tight font-medium tracking-tight">
                The FRESHMEN Barbershop is built on precision, consistency, and attention to detail.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                <p className="text-lg text-zinc-600 leading-relaxed">
                  Every cut is approached with care — whether it’s a clean fade, a sharp lineup, or a full restyle. Our barbers take the time to understand exactly what you want and execute it properly.
                </p>
                <p className="text-lg text-zinc-600 leading-relaxed">
                  With hundreds of loyal clients and a reputation for quality, FRESHMEN has become one of the go-to spots in Streetsville.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-24 px-6 max-w-[1400px] mx-auto border-t border-zinc-200 scroll-mt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Services</h2>
            <p className="text-base text-zinc-500 max-w-xs font-medium">
              Book online to secure your time with your preferred barber.
            </p>
          </div>
          
          <div className="border-t border-black">
            {[
              "Haircuts & Fades",
              "Beard Grooming",
              "Lineups & Detailing",
              "Styling"
            ].map((service, i) => (
              <div key={i} className="py-8 border-b border-zinc-200 flex items-center justify-between">
                <span className="text-2xl md:text-3xl font-medium tracking-tight">{service}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Barbers */}
        <section id="barbers" className="py-24 px-6 max-w-[1400px] mx-auto border-t border-zinc-200 scroll-mt-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-16">The Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {[
              { name: "Moe", img: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=800" },
              { name: "Jay", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800" },
              { name: "Ali", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" },
              { name: "Sam", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800" }
            ].map((barber, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[4/5] mb-6 bg-zinc-100 overflow-hidden">
                  <img 
                    src={barber.img} 
                    alt={barber.name}
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-2xl font-bold tracking-tighter mb-2">{barber.name}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">Known for clean fades and attention to detail</p>
              </div>
            ))}
          </div>
        </section>

        {/* Reviews - Featured Layout */}
        <section id="reviews" className="py-24 px-6 max-w-[1400px] mx-auto border-t border-zinc-200 scroll-mt-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-16">What Clients Say</h2>
          
          <div className="space-y-16 lg:space-y-24">
            {/* Featured Review */}
            <div className="max-w-4xl">
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-6 h-6 fill-black text-black" />
                ))}
              </div>
              <p className="text-3xl md:text-5xl font-medium leading-[1.15] tracking-tight">
                "Moe is a true professional. He pays close attention to detail, listens to what you want, and delivers a perfect cut every time."
              </p>
            </div>

            {/* Secondary Reviews */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 pt-12 border-t border-zinc-200">
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-black text-black" />
                  ))}
                </div>
                <p className="text-xl text-zinc-600 leading-relaxed">
                  "Organized, high-quality barbershop with skilled barbers and convenient service. Always a great experience."
                </p>
              </div>
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-black text-black" />
                  ))}
                </div>
                <p className="text-xl text-zinc-600 leading-relaxed">
                  "Price is a little higher, but the quality speaks for itself. Professional, friendly, and I always leave with a clean, fresh cut."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Booking CTA */}
        <section id="booking" className="py-32 bg-black text-white scroll-mt-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">Book Your Appointment</h2>
            <p className="text-xl md:text-2xl text-zinc-400 mb-6 tracking-tight">
              Secure your spot with your preferred barber.
            </p>
            <p className="text-lg md:text-xl text-white font-medium mb-12">
              Most time slots fill up quickly — book ahead to secure your spot.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://booksy.com/en-ca/7160_the-freshmen-barbershop_barbershop_870806_mississauga" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center bg-white text-black px-12 py-6 text-sm font-bold uppercase tracking-widest hover:bg-zinc-200 transition-colors">
                Book Now
              </a>
              <a href="tel:9054837374" className="w-full sm:w-auto inline-flex items-center justify-center border border-zinc-700 text-white px-12 py-6 text-sm font-bold uppercase tracking-widest hover:bg-zinc-900 transition-colors">
                Call Shop
              </a>
            </div>
            <p className="mt-12 text-sm text-zinc-500 font-medium uppercase tracking-widest">Walk-ins welcome based on availability</p>
          </div>
        </section>

        {/* Location & Hours - Typographic Layout */}
        <section id="visit" className="py-24 md:py-32 px-6 max-w-[1400px] mx-auto scroll-mt-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-16">Visit Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-8">Location</h3>
              <a href="https://www.google.com/maps/place/The+FRESHMEN+Barbershop/@43.5823013,-79.714563,16z/data=!3m1!5s0x882b41b0f8c2182d:0x68a20fafeafedec7!4m6!3m5!1s0x882b41b9a9fea6a1:0xe418339f4adcef70!8m2!3d43.5823631!4d-79.7144503!16s%2Fg%2F11c2lbfwlh?entry=ttu&g_ep=EgoyMDI2MDMyMi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="block text-3xl md:text-4xl font-medium leading-snug tracking-tight mb-6 hover:text-zinc-600 transition-colors">
                167 Queen St S<br />
                Mississauga, ON L5M 1L2
              </a>
              <a href="https://www.google.com/maps/place/The+FRESHMEN+Barbershop/@43.5823013,-79.714563,16z/data=!3m1!5s0x882b41b0f8c2182d:0x68a20fafeafedec7!4m6!3m5!1s0x882b41b9a9fea6a1:0xe418339f4adcef70!8m2!3d43.5823631!4d-79.7144503!16s%2Fg%2F11c2lbfwlh?entry=ttu&g_ep=EgoyMDI2MDMyMi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center border border-zinc-300 text-black px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-zinc-100 transition-colors mb-8">
                Get Directions
              </a>
              <a href="tel:9054837374" className="block text-2xl text-zinc-600 hover:text-black transition-colors">
                (905) 483-7374
              </a>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-8">Hours</h3>
              <ul className="space-y-6 text-xl">
                <li className="flex justify-between items-end border-b border-zinc-200 pb-6">
                  <span className="font-medium">Mon – Fri</span>
                  <span className="text-zinc-600 text-lg">12:00 PM – 8:00 PM</span>
                </li>
                <li className="flex justify-between items-end border-b border-zinc-200 pb-6">
                  <span className="font-medium">Saturday</span>
                  <span className="text-zinc-600 text-lg">11:00 AM – 6:00 PM</span>
                </li>
                <li className="flex justify-between items-end pb-6">
                  <span className="font-medium">Sunday</span>
                  <span className="text-zinc-600 text-lg">12:00 PM – 6:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-zinc-200 py-12">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="font-bold text-2xl tracking-tighter uppercase mb-2">Freshmen</div>
            <p className="text-sm font-medium text-zinc-500">Serving Streetsville with quality and consistency</p>
          </div>
          <div className="text-sm font-medium text-zinc-500 text-left md:text-right flex flex-col gap-1">
            <a href="https://www.google.com/maps/place/The+FRESHMEN+Barbershop/@43.5823013,-79.714563,16z/data=!3m1!5s0x882b41b0f8c2182d:0x68a20fafeafedec7!4m6!3m5!1s0x882b41b9a9fea6a1:0xe418339f4adcef70!8m2!3d43.5823631!4d-79.7144503!16s%2Fg%2F11c2lbfwlh?entry=ttu&g_ep=EgoyMDI2MDMyMi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">167 Queen St S, Mississauga, ON</a>
            <a href="tel:9054837374" className="hover:text-black transition-colors">(905) 483-7374</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
