import { Shield, Zap, Star, Settings } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Fast by default',
    desc: 'Optimized assets and responsive design for blazing performance on any device.',
  },
  {
    icon: Shield,
    title: 'Secure & reliable',
    desc: 'Best practices baked in for privacy, security, and uptime you can trust.',
  },
  {
    icon: Settings,
    title: 'Easy to customize',
    desc: 'Well-structured components and tokens make brand tailoring simple.',
  },
  {
    icon: Star,
    title: 'Delightful UX',
    desc: 'Tasteful motion and interactions that enhance, never distract.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2 className="text-3xl font-semibold text-neutral-900 md:text-4xl">Everything you need to launch</h2>
        <p className="mt-3 text-neutral-700">A focused toolkit to ship beautiful landing pages quickly, without sacrificing quality.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <div key={i} className="group rounded-xl border border-neutral-200 bg-white p-6 transition hover:shadow-md">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-red-600">
              <f.icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-medium text-neutral-900">{f.title}</h3>
            <p className="mt-2 text-sm text-neutral-700">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
