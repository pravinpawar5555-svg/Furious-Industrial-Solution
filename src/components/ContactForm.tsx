import React, { useEffect, useState } from 'react';
import { CheckCircle2, AlertCircle, Phone, Send } from 'lucide-react';
import { COMPANY, SERVICE_FORM_OPTIONS, getWhatsAppUrl } from '../data/siteData';
import { useRouter } from '../lib/router';
import { WhatsAppIcon } from './Icons';

interface ContactFormProps {
  defaultService?: (typeof SERVICE_FORM_OPTIONS)[number];
  heading?: string;
  subheading?: string;
}

interface FormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  machineType: string;
  serviceRequired: string;
  message: string;
}

interface SubmissionResult {
  referenceId: string;
  receivedAt: string;
  summary: {
    name: string;
    company: string;
    machineType: string;
    serviceRequired: string;
  };
}

export function ContactForm({
  defaultService = 'Vibration Analysis',
  heading = 'Request Condition Monitoring or Reliability Support',
  subheading = 'Share your machinery details and operating symptoms. Your inquiry is recorded directly for technical review by Ajit Patil.',
}: ContactFormProps) {
  const { inquiryPreset, clearInquiryPreset } = useRouter();

  const [form, setForm] = useState<FormState>({
    name: '',
    company: '',
    email: '',
    phone: '',
    machineType: '',
    serviceRequired: defaultService,
    message: '',
  });

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState<string>('');
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<SubmissionResult | null>(null);

  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      serviceRequired: defaultService,
    }));
  }, [defaultService]);

  useEffect(() => {
    if (!inquiryPreset) return;
    setSubmitted(null);
    setForm((prev) => ({
      ...prev,
      serviceRequired: inquiryPreset.service || prev.serviceRequired,
      machineType: inquiryPreset.machineType || prev.machineType,
      message: inquiryPreset.message || prev.message,
    }));
    clearInquiryPreset();
  }, [inquiryPreset, clearInquiryPreset]);

  const validateClient = (state: FormState): Record<string, string> => {
    const errors: Record<string, string> = {};
    if (state.name.trim().length < 2) errors.name = 'Please enter your name.';
    if (state.company.trim().length < 2) errors.company = 'Please enter your company or plant name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(state.email.trim())) {
      errors.email = 'Please enter a valid work email address.';
    }
    const digits = state.phone.replace(/\D/g, '');
    if (digits.length < 8 || digits.length > 15) {
      errors.phone = 'Please enter a valid contact phone number.';
    }
    if (state.machineType.trim().length < 2) {
      errors.machineType = 'Please specify the machine or rotating asset type.';
    }
    if (!SERVICE_FORM_OPTIONS.includes(state.serviceRequired as (typeof SERVICE_FORM_OPTIONS)[number])) {
      errors.serviceRequired = 'Please select a service.';
    }
    if (state.message.trim().length < 10) {
      errors.message = 'Please describe the machine issue or requirement (minimum 10 characters).';
    }
    return errors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
    if (formError) setFormError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const clientErrors = validateClient(form);
    if (Object.keys(clientErrors).length > 0) {
      setFieldErrors(clientErrors);
      setFormError('Please review the highlighted fields before submitting.');
      return;
    }

    setSubmitting(true);
    setFormError('');
    setFieldErrors({});

    try {
      const response = await fetch('/api/service-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok || !data.ok) {
        if (data.fieldErrors && typeof data.fieldErrors === 'object') {
          setFieldErrors(data.fieldErrors);
        }
        setFormError(
          data.error ||
            'Unable to submit the service request right now. Please call or WhatsApp +91 98322227557.'
        );
        return;
      }

      setSubmitted({
        referenceId: data.referenceId,
        receivedAt: data.receivedAt,
        summary: data.summary,
      });
    } catch {
      setFormError(
        'Network error while connecting to the server. Please call Ajit Patil at +91 98322227557 or reach out on WhatsApp.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(null);
    setForm({
      name: '',
      company: '',
      email: '',
      phone: '',
      machineType: '',
      serviceRequired: defaultService,
      message: '',
    });
    setFieldErrors({});
    setFormError('');
  };

  return (
    <section id="contact-section" className="py-16 lg:py-24 bg-[#F4F7F9] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left column: Direct contact panel */}
          <div className="lg:col-span-5">
            <p className="text-sm font-medium text-[#0F6B7D] mb-2">
              Service Inquiry &amp; Technical Discussion
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0B1F33] tracking-tight">
              {heading}
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              {subheading}
            </p>

            <div className="mt-8 bg-white border border-[#D8E1E8] rounded-lg p-6 space-y-5">
              <div>
                <p className="text-xs text-slate-500">Company</p>
                <p className="font-display text-base font-bold text-[#0B1F33] mt-0.5">
                  {COMPANY.fullName}
                </p>
                <p className="text-sm text-[#0F6B7D] font-medium mt-0.5">
                  {COMPANY.positioning}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <p className="text-xs text-slate-500">Primary Technical Contact</p>
                <p className="text-base font-semibold text-[#0B1F33] mt-0.5">
                  {COMPANY.owner}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <p className="text-xs text-slate-500">Phone &amp; WhatsApp</p>
                <a
                  href={COMPANY.phoneHref}
                  className="inline-flex items-center gap-2 font-mono text-lg font-medium text-[#0B1F33] hover:text-[#0F6B7D] mt-1 tabular-nums"
                >
                  <Phone className="w-4 h-4 text-[#0F6B7D]" aria-hidden="true" />
                  <span>{COMPANY.phoneDisplay}</span>
                </a>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                <a
                  href={COMPANY.phoneHref}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#0B1F33] hover:bg-[#122E4A] text-white text-sm font-semibold rounded-md transition-colors whitespace-nowrap"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  <span>Call Now</span>
                </a>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#0F6B7D] hover:bg-[#0C5868] text-white text-sm font-semibold rounded-md transition-colors whitespace-nowrap"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>

            <div className="mt-6 text-xs text-slate-500 leading-relaxed">
              <p className="font-medium text-[#0B1F33] mb-1">Helpful details to share:</p>
              <p>
                Equipment type, approximate RPM or power rating, observed symptoms (high vibration, bearing noise, recurring seal or coupling wear), and preferred inspection window.
              </p>
            </div>
          </div>

          {/* Right column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#D8E1E8] rounded-lg p-6 sm:p-8">
              {submitted ? (
                <div role="status" aria-live="polite" className="py-4">
                  <div className="w-12 h-12 rounded-md bg-[#EEF7F9] text-[#0F6B7D] flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#0B1F33]">
                    Service Request Recorded
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
                    Thank you, <strong className="text-[#0B1F33]">{submitted.summary.name}</strong>. Your service request for{' '}
                    <strong className="text-[#0B1F33]">{submitted.summary.serviceRequired}</strong> ({submitted.summary.machineType}) has been logged on our server for technical follow-up.
                  </p>

                  <div className="mt-6 p-4 bg-[#F4F7F9] border border-[#D8E1E8] rounded-md grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="block text-xs text-slate-500">Reference ID</span>
                      <span className="font-mono font-medium text-[#0B1F33] tabular-nums">
                        {submitted.referenceId}
                      </span>
                    </div>
                    <div>
                      <span className="block text-xs text-slate-500">Company</span>
                      <span className="font-medium text-[#0B1F33]">{submitted.summary.company}</span>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <a
                      href={getWhatsAppUrl(
                        `Hello Ajit Patil, I just submitted service request ${submitted.referenceId} for ${submitted.summary.serviceRequired} (${submitted.summary.machineType}) from ${submitted.summary.company}.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#0F6B7D] hover:bg-[#0C5868] text-white text-sm font-semibold rounded-md transition-colors whitespace-nowrap"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      <span>Share Reference on WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center justify-center px-5 py-3 border border-[#D8E1E8] hover:border-[#0B1F33] text-[#0B1F33] text-sm font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="border-b border-slate-100 pb-4">
                    <h3 className="font-display text-lg font-semibold text-[#0B1F33]">
                      Technical Service Request Form
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      All fields marked with * are required so we can evaluate your machine requirement accurately.
                    </p>
                  </div>

                  {formError && (
                    <div
                      role="alert"
                      className="flex items-start gap-2.5 p-3.5 bg-red-50 border border-red-200 rounded-md text-sm text-red-800"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-700" aria-hidden="true" />
                      <span>{formError}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fis-name" className="block text-sm font-medium text-[#0B1F33] mb-1.5">
                        Name *
                      </label>
                      <input
                        id="fis-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="e.g., Rajesh Sharma"
                        aria-invalid={Boolean(fieldErrors.name)}
                        className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-md text-[#0B1F33] placeholder:text-slate-400 focus:outline-none focus:border-[#0F6B7D] ${
                          fieldErrors.name ? 'border-red-400' : 'border-[#CBD5E1]'
                        }`}
                      />
                      {fieldErrors.name && (
                        <p className="mt-1 text-xs text-red-700">{fieldErrors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="fis-company" className="block text-sm font-medium text-[#0B1F33] mb-1.5">
                        Company *
                      </label>
                      <input
                        id="fis-company"
                        name="company"
                        type="text"
                        required
                        autoComplete="organization"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Plant / Company Name"
                        aria-invalid={Boolean(fieldErrors.company)}
                        className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-md text-[#0B1F33] placeholder:text-slate-400 focus:outline-none focus:border-[#0F6B7D] ${
                          fieldErrors.company ? 'border-red-400' : 'border-[#CBD5E1]'
                        }`}
                      />
                      {fieldErrors.company && (
                        <p className="mt-1 text-xs text-red-700">{fieldErrors.company}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fis-email" className="block text-sm font-medium text-[#0B1F33] mb-1.5">
                        Email *
                      </label>
                      <input
                        id="fis-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="engineer@company.com"
                        aria-invalid={Boolean(fieldErrors.email)}
                        className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-md text-[#0B1F33] placeholder:text-slate-400 focus:outline-none focus:border-[#0F6B7D] ${
                          fieldErrors.email ? 'border-red-400' : 'border-[#CBD5E1]'
                        }`}
                      />
                      {fieldErrors.email && (
                        <p className="mt-1 text-xs text-red-700">{fieldErrors.email}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="fis-phone" className="block text-sm font-medium text-[#0B1F33] mb-1.5">
                        Phone *
                      </label>
                      <input
                        id="fis-phone"
                        name="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 98XXXXXXXX"
                        aria-invalid={Boolean(fieldErrors.phone)}
                        className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-md text-[#0B1F33] placeholder:text-slate-400 focus:outline-none focus:border-[#0F6B7D] font-mono tabular-nums ${
                          fieldErrors.phone ? 'border-red-400' : 'border-[#CBD5E1]'
                        }`}
                      />
                      {fieldErrors.phone && (
                        <p className="mt-1 text-xs text-red-700">{fieldErrors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fis-machineType" className="block text-sm font-medium text-[#0B1F33] mb-1.5">
                        Machine Type *
                      </label>
                      <input
                        id="fis-machineType"
                        name="machineType"
                        type="text"
                        required
                        value={form.machineType}
                        onChange={handleChange}
                        placeholder="e.g., ID Fan, Boiler Feed Pump, Helical Gearbox"
                        aria-invalid={Boolean(fieldErrors.machineType)}
                        className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-md text-[#0B1F33] placeholder:text-slate-400 focus:outline-none focus:border-[#0F6B7D] ${
                          fieldErrors.machineType ? 'border-red-400' : 'border-[#CBD5E1]'
                        }`}
                      />
                      {fieldErrors.machineType && (
                        <p className="mt-1 text-xs text-red-700">{fieldErrors.machineType}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="fis-serviceRequired" className="block text-sm font-medium text-[#0B1F33] mb-1.5">
                        Service Required *
                      </label>
                      <select
                        id="fis-serviceRequired"
                        name="serviceRequired"
                        required
                        value={form.serviceRequired}
                        onChange={handleChange}
                        aria-invalid={Boolean(fieldErrors.serviceRequired)}
                        className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-md text-[#0B1F33] focus:outline-none focus:border-[#0F6B7D] ${
                          fieldErrors.serviceRequired ? 'border-red-400' : 'border-[#CBD5E1]'
                        }`}
                      >
                        {SERVICE_FORM_OPTIONS.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      {fieldErrors.serviceRequired && (
                        <p className="mt-1 text-xs text-red-700">{fieldErrors.serviceRequired}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="fis-message" className="block text-sm font-medium text-[#0B1F33] mb-1.5">
                      Message / Machine Problem *
                    </label>
                    <textarea
                      id="fis-message"
                      name="message"
                      rows={4}
                      required
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Describe observed vibration symptoms, repeated bearing or seal issues, alignment requirement, or shutdown timing..."
                      aria-invalid={Boolean(fieldErrors.message)}
                      className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-md text-[#0B1F33] placeholder:text-slate-400 focus:outline-none focus:border-[#0F6B7D] resize-y ${
                        fieldErrors.message ? 'border-red-400' : 'border-[#CBD5E1]'
                      }`}
                    />
                    {fieldErrors.message && (
                      <p className="mt-1 text-xs text-red-700">{fieldErrors.message}</p>
                    )}
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#DF6C12] hover:bg-[#BF5709] disabled:opacity-60 text-white text-sm font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer"
                    >
                      <Send className="w-4 h-4" aria-hidden="true" />
                      <span>{submitting ? 'Submitting Request...' : 'Submit Service Request'}</span>
                    </button>

                    <p className="text-xs text-slate-500">
                      Urgent plant issue? Call{' '}
                      <a
                        href={COMPANY.phoneHref}
                        className="font-mono font-medium text-[#0B1F33] hover:text-[#0F6B7D] tabular-nums"
                      >
                        {COMPANY.phoneDisplay}
                      </a>
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
