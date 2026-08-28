import { useState, FormEvent } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';

type ContactFormProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

const ContactForm = ({ open, onOpenChange }: ContactFormProps) => {
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const resetForm = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    setStatus('idle');
  };

  const handleOpenChange = (next: boolean) => {
    if (!next) resetForm();
    onOpenChange(next);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          name,
          email,
          subject,
          message,
          'bot-field': '',
        }),
      });

      if (!response.ok) throw new Error('submit failed');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="w-[calc(100%-2rem)] max-w-md border-white/20 bg-neutral-950 text-white sm:rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-white">{t.contact.formTitle}</DialogTitle>
          <DialogDescription className="text-white/70">
            {t.contact.formDescription}
          </DialogDescription>
        </DialogHeader>

        {status === 'success' ? (
          <div className="space-y-4 py-2">
            <p className="text-sm text-white/90">{t.contact.success}</p>
            <button
              type="button"
              onClick={() => handleOpenChange(false)}
              className="w-full rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm text-white transition-all hover:bg-white/20"
            >
              {t.contact.close}
            </button>
          </div>
        ) : (
          <form name="contact" onSubmit={handleSubmit} className="space-y-4" data-netlify="true">
            <p className="hidden" aria-hidden="true">
              <label>
                Don’t fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
              </label>
            </p>

            <div className="space-y-2">
              <label htmlFor="contact-name" className="text-sm text-white/80">
                {t.contact.name}
              </label>
              <input
                id="contact-name"
                name="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2.5 text-sm text-white outline-none placeholder:text-white/40 focus:border-white/40"
                placeholder={t.contact.namePlaceholder}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="contact-email" className="text-sm text-white/80">
                {t.contact.email}
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2.5 text-sm text-white outline-none placeholder:text-white/40 focus:border-white/40"
                placeholder={t.contact.emailPlaceholder}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="contact-subject" className="text-sm text-white/80">
                {t.contact.subject}
              </label>
              <input
                id="contact-subject"
                name="subject"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2.5 text-sm text-white outline-none placeholder:text-white/40 focus:border-white/40"
                placeholder={t.contact.subjectPlaceholder}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="contact-message" className="text-sm text-white/80">
                {t.contact.message}
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full resize-none rounded-lg border border-white/20 bg-white/5 px-3 py-2.5 text-sm text-white outline-none placeholder:text-white/40 focus:border-white/40"
                placeholder={t.contact.messagePlaceholder}
              />
            </div>

            {status === 'error' && (
              <p className="text-sm text-red-300">{t.contact.error}</p>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm text-white transition-all hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === 'loading' ? t.contact.sending : t.contact.send}
            </button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ContactForm;
