import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: 'The interactive hero immediately boosted our conversion rate. It feels premium and effortless.',
    author: 'Ava Thompson',
    role: 'Head of Marketing, Northline',
  },
  {
    quote: 'Set up in a day, refined over a week. The structure is clean and easy for our team to iterate on.',
    author: 'Daniel Park',
    role: 'Product Lead, Heliotrope',
  },
  {
    quote: 'Performance and polish, without compromise. Exactly what we needed for our launch.',
    author: 'Maya Chen',
    role: 'Founder, Flux Labs',
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-0.5 text-yellow-500">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-yellow-500" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-neutral-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-neutral-900 md:text-4xl">Loved by modern teams</h2>
          <p className="mt-3 text-neutral-700">Feedback from teams who value minimalist design and interactive moments.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div key={i} className="flex h-full flex-col justify-between rounded-xl border border-neutral-200 bg-white p-6">
              <div>
                <Stars />
                <p className="mt-3 text-neutral-800">“{t.quote}”</p>
              </div>
              <div className="mt-6 text-sm">
                <p className="font-medium text-neutral-900">{t.author}</p>
                <p className="text-neutral-600">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
