import { useState } from 'react';
import { Twitter, Instagram, Linkedin } from 'lucide-react';

const SERVICES = [
  'Website',
  'Mobile App',
  'Web App',
  'E-Commerce',
  'Visual Identity',
  '3D & Motion',
  'Digital Marketing',
  'Growth & Consulting',
  'Other',
];

function SocialBtn({ icon: Icon, bg, text }: { icon: React.ElementType; bg: string; text: string }) {
  return (
    <button
      className={`w-8 h-8 rounded-xl flex items-center justify-center hover:opacity-80 transition-opacity ${bg} ${text}`}
    >
      <Icon size={13} />
    </button>
  );
}

export default function Home() {
  const [selected, setSelected] = useState<string[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const toggleService = (service: string) => {
    setSelected((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSending(false);
    setSent(true);
  };

  return (
    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-8 lg:pb-0">
      {/* Headline */}
      <p className="text-white text-3xl sm:text-4xl xl:text-5xl font-medium leading-tight drop-shadow-lg lg:max-w-lg xl:max-w-2xl shrink-0">
        We craft bold ideas
        <br />
        and ship them as{' '}
        <span
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontStyle: 'italic',
            fontWeight: 400,
          }}
        >
          products
        </span>
      </p>

      {/* Contact form card */}
      <div className="w-full lg:w-[min(480px,45%)] shrink-0">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden p-4 sm:p-6 flex flex-col gap-4">
          {/* Heading */}
          <h2 className="text-xl sm:text-2xl font-semibold text-black tracking-tight">
            Say hello! 👋
          </h2>

          {/* Email + socials row */}
          <div className="flex flex-row items-center justify-between gap-3 bg-gray-50 rounded-2xl px-4 py-2.5">
            <div className="flex flex-col min-w-0">
              <span className="text-xs text-gray-500">Drop us a line</span>
              <a
                href="mailto:hello@forma.co"
                className="text-blue-600 font-semibold hover:underline truncate text-sm"
              >
                hello@forma.co
              </a>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <SocialBtn icon={Twitter} bg="bg-gray-100" text="text-gray-800" />
              <SocialBtn icon={() => <span className="text-xs font-bold">●</span>} bg="bg-pink-100" text="text-pink-500" />
              <SocialBtn icon={Instagram} bg="bg-orange-100" text="text-orange-400" />
              <SocialBtn icon={Linkedin} bg="bg-blue-100" text="text-blue-600" />
            </div>
          </div>

          {/* OR divider */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-gray-400 font-medium text-sm">OR</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Form or success state */}
          {sent ? (
            <div className="flex flex-col items-center py-6 gap-3">
              <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-xl text-green-600">
                ✓
              </div>
              <p className="text-base font-semibold text-gray-900">You&apos;re all set!</p>
              <p className="text-sm text-gray-500">Expect a reply within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <label className="text-sm font-medium text-black">
                Tell us about your vision
              </label>

              {/* Name + Email */}
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  placeholder="Full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="flex-1 min-w-0 text-sm px-3 py-2.5 rounded-xl border border-gray-200 bg-transparent placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 min-w-0 text-sm px-3 py-2.5 rounded-xl border border-gray-200 bg-transparent placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
                  required
                />
              </div>

              {/* Message */}
              <textarea
                rows={4}
                placeholder="What are you looking to build or improve..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="text-sm px-3 py-2.5 rounded-xl border border-gray-200 bg-transparent placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition resize-none"
                required
              />

              {/* Service tags */}
              <div className="flex flex-col gap-2">
                <span className="text-sm font-medium text-black">I need help with...</span>
                <div className="flex flex-wrap gap-1.5">
                  {SERVICES.map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => toggleService(service)}
                      className={`text-xs font-medium px-3 py-2 rounded-lg border transition-all ${
                        selected.includes(service)
                          ? 'bg-gray-100 text-black border-black'
                          : 'bg-white text-gray-700 border-gray-200 hover:border-gray-400'
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={sending}
                className="w-full bg-black text-white text-sm font-semibold py-3 rounded-2xl hover:bg-gray-800 transition-colors disabled:opacity-60"
              >
                {sending ? 'Sending...' : 'Send my message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
