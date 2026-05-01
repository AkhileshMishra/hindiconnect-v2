import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ChevronDown, ChevronUp, CheckCircle, CreditCard, Smartphone, Shield, Clock, BookOpen, Award } from 'lucide-react';

const PAYMENT_API = 'https://5nfmwfa6kg.execute-api.ap-southeast-1.amazonaws.com/prod';

const COURSE_DETAILS = [
  '3-month structured spoken Hindi course',
  'Live 1-on-1 lessons via WhatsApp',
  'AI-powered pronunciation grading',
  'Custom worksheets & audio materials',
  'Weekly progress reports & leaderboard',
  'Certificate of completion',
];

const PLANS = [
  {
    id: 'onetime',
    title: 'One-Time Payment',
    price: '₹3,000',
    priceNote: 'Pay once, learn for 3 months',
    amount: 'Full course access',
    badge: 'Best Value',
    badgeColor: 'bg-hindi-green',
  },
  {
    id: 'monthly',
    title: 'Monthly Subscription',
    price: '₹1,000',
    priceNote: 'per month × 3 months (Inclusive of GST)',
    amount: '₹3,000 total',
    badge: 'Flexible',
    badgeColor: 'bg-saffron',
  },
];

export default function Checkout() {
  const [params] = useSearchParams();
  const phone = params.get('phone') || '';
  const ch = params.get('ch') || '1';
  const ln = params.get('ln') || '3';

  const [expanded, setExpanded] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState('');

  async function handlePay(planId) {
    setLoading(planId);
    setError('');
    try {
      const res = await fetch(`${PAYMENT_API}/api/payment/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phone,
          next_chapter: ch,
          next_lesson: ln,
          plan_type: planId,
        }),
      });
      const data = await res.json();
      if (data.redirect_url) {
        window.location.href = data.redirect_url;
      } else {
        setError(data.error || 'Payment creation failed. Please try again.');
      }
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(null);
    }
  }

  if (!phone) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-warm-gray">
        <div className="text-center p-8">
          <h1 className="text-2xl font-bold text-hindi-blue mb-2">Invalid Link</h1>
          <p className="text-gray-500">This payment link is missing required information. Please use the link sent to your WhatsApp.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-cream">
      {/* Header */}
      <div className="bg-hindi-blue text-white py-8 px-4">
        <div className="max-w-lg mx-auto text-center">
          <h1 className="font-display text-3xl font-bold mb-2">Complete Your Enrollment</h1>
          <p className="text-gray-300 text-sm">Choose a payment plan to continue your Hindi learning journey</p>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 py-8 space-y-4">
        {/* Plan Cards */}
        {PLANS.map((plan) => {
          const isExpanded = expanded === plan.id;
          return (
            <div key={plan.id} className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
              {/* Plan Header */}
              <button
                onClick={() => setExpanded(isExpanded ? null : plan.id)}
                className="w-full text-left p-6 cursor-pointer"
                aria-expanded={isExpanded}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className={`inline-block text-xs font-semibold text-white px-2.5 py-0.5 rounded-full ${plan.badgeColor} mb-2`}>
                      {plan.badge}
                    </span>
                    <h2 className="text-xl font-bold text-hindi-blue">{plan.title}</h2>
                    <div className="mt-2">
                      <span className="text-3xl font-bold text-saffron">{plan.price}</span>
                      <span className="text-sm text-gray-500 ml-1">{plan.priceNote}</span>
                    </div>
                  </div>
                  <div className="mt-2 text-gray-400">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </div>
              </button>

              {/* Collapsible Course Details */}
              {isExpanded && (
                <div className="px-6 pb-6 animate-fade-in">
                  <div className="border-t border-gray-100 pt-4">
                    <h3 className="text-sm font-semibold text-hindi-blue mb-3 flex items-center gap-2">
                      <BookOpen className="w-4 h-4" /> Course Details
                    </h3>
                    <ul className="space-y-2 mb-4">
                      {COURSE_DETAILS.map((detail) => (
                        <li key={detail} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-hindi-green shrink-0 mt-0.5" />
                          {detail}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 3-Month Course</span>
                      <span className="flex items-center gap-1"><Award className="w-3.5 h-3.5" /> Certificate Included</span>
                    </div>

                    {/* Payment Methods */}
                    <div className="bg-gray-50 rounded-xl p-4 mb-4">
                      <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">Payment Methods</h4>
                      <div className="flex gap-3">
                        <span className="flex items-center gap-1.5 text-sm text-gray-600 bg-white px-3 py-1.5 rounded-lg border border-gray-200">
                          <CreditCard className="w-4 h-4 text-hindi-blue" /> Card
                        </span>
                        <span className="flex items-center gap-1.5 text-sm text-gray-600 bg-white px-3 py-1.5 rounded-lg border border-gray-200">
                          <Smartphone className="w-4 h-4 text-hindi-blue" /> UPI
                        </span>
                      </div>
                    </div>

                    {/* Pay Button */}
                    <button
                      onClick={() => handlePay(plan.id)}
                      disabled={!!loading}
                      className="w-full bg-saffron text-white py-3.5 rounded-full font-semibold text-lg hover:bg-saffron-dark transition-colors disabled:opacity-60 cursor-pointer"
                    >
                      {loading === plan.id ? 'Processing...' : `Pay ${plan.price}${plan.id === 'monthly' ? '/month' : ''}`}
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl p-4 text-center">
            {error}
          </div>
        )}

        {/* Trust Badges */}
        <div className="flex items-center justify-center gap-2 text-xs text-gray-400 pt-4">
          <Shield className="w-4 h-4" />
          <span>Secure payment powered by PhonePe • 256-bit SSL encrypted</span>
        </div>
      </div>
    </div>
  );
}
