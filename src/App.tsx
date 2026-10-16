import { useState } from 'react';
import {
  ArrowRight,
  Check,
  ChevronDown,
  CircleHelp,
  Globe2,
  Heart,
  Image as ImageIcon,
  Instagram,
  Mail,
  Ruler,
  ShieldCheck,
  Sparkles,
  UploadCloud,
} from 'lucide-react';

const initialMeasurements = {
  bust: '',
  waist: '',
  hips: '',
  shoulder: '',
  sleeve: '',
  dressLength: '',
};

function App() {
  const [unit, setUnit] = useState('cm');
  const [measurements, setMeasurements] = useState(initialMeasurements);
  const [customer, setCustomer] = useState({
    name: '',
    email: '',
    country: 'United Kingdom',
    phone: '',
    reference: '',
  });
  const [garment, setGarment] = useState({
    item: '',
    colour: '',
    style: 'Made to measure dress',
    date: '',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState('');
  const [showGuide, setShowGuide] = useState(false);

  const updateCustomer = (key, value) =>
    setCustomer(current => ({ ...current, [key]: value }));
  const updateGarment = (key, value) =>
    setGarment(current => ({ ...current, [key]: value }));
  const updateMeasurement = (key, value) =>
    setMeasurements(current => ({ ...current, [key]: value }));

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="site-shell">
      <div className="announcement">
        <span>HANDCRAFTED IN MARRAKECH</span>
        <span className="announcement-dot">✦</span>
        <span>MADE FOR YOU, WHEREVER YOU ARE</span>
      </div>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Hanout Boutique home">
          <span className="brand-symbol">
            H<span>✳</span>
          </span>
          <span className="brand-name">
            HANOUT <i>BOUTIQUE</i>
          </span>
        </a>
        <nav className="main-nav">
          <a href="#story">Our approach</a>
          <a href="#measurements">How it works</a>
          <a href="#help">Need help?</a>
        </nav>
        <button className="language-button" type="button">
          <Globe2 size={15} /> EN <ChevronDown size={13} />
        </button>
      </header>

      <main id="top">
        <section className="hero" id="story">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-line" /> YOUR PERSONAL FIT, REIMAGINED
            </div>
            <h1>
              A perfect fit.
              <br />
              <em>From anywhere.</em>
            </h1>
            <p className="hero-description">
              That dress you fell in love with in Marrakech? Let’s make it yours
              again. Share your measurements from home, and our atelier will
              take care of the rest.
            </p>
            <a className="hero-cta" href="#customer-details">
              Start your fit profile <ArrowRight size={16} />
            </a>
            <div className="hero-note">
              <span className="note-icon">
                <Heart size={15} />
              </span>
              <span>Thoughtfully made. Uniquely yours.</span>
            </div>
          </div>
          <div className="hero-art photo-hero" aria-label="Editorial fashion photograph of a flowing dress">
            <img src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=85" alt="Elegant fashion editorial with a flowing dress" />
            <div className="photo-overlay" />
            <div className="art-stamp">MADE<br />FOR YOU<span>✳</span></div>
            <div className="art-caption"><span>ATELIER Nº 01</span><span>MARRAKECH, MOROCCO</span></div>
          </div>
          <div className="hero-bottom">
            <span>01 — YOUR DETAILS</span>
            <span>02 — YOUR MEASUREMENTS</span>
            <span>03 — YOUR NEXT FAVOURITE DRESS</span>
          </div>
        </section>

        <section className="editorial-gallery" aria-labelledby="gallery-title">
          <div className="gallery-heading">
            <div className="eyebrow"><span className="eyebrow-line" /> THE HANOUT EXPERIENCE</div>
            <h2 id="gallery-title">Considered details.<br /><em>A personal kind of elegance.</em></h2>
            <p>From the first choice of silhouette to the finishing touches, every piece begins with your style in mind.</p>
          </div>
          <div className="gallery-grid">
            <figure className="gallery-card gallery-large">
              <img src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85" alt="Fashion editorial showing an elegant, flowing outfit" loading="lazy" />
              <figcaption><span>01 / YOUR SILHOUETTE</span><strong>A shape that feels like you</strong></figcaption>
            </figure>
            <figure className="gallery-card gallery-tall">
              <img src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=85" alt="Elegant dress with refined lines and details" loading="lazy" />
              <figcaption><span>02 / THE FINISH</span><strong>Thought in every detail</strong></figcaption>
            </figure>
            <figure className="gallery-card gallery-wide">
              <img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1100&q=85" alt="Contemporary fashion styling inspiration" loading="lazy" />
              <figcaption><span>03 / YOUR EXPRESSION</span><strong>Personal style, made personal</strong></figcaption>
            </figure>
          </div>
          <div className="gallery-footer">
            <span className="gallery-rule" />
            <p>YOUR STORY, YOUR STYLE, YOUR FIT.</p>
            <span className="gallery-rule" />
          </div>
          <p className="gallery-footnote">Images are style inspiration only. Final designs, fabrics and required measurements are confirmed with the Hanout Boutique team.</p>
        </section>

        <section className="process-strip">
          <div className="process-item">
            <span className="process-number">01</span>
            <div>
              <strong>Tell us about you</strong>
              <p>A few details to help us find your order.</p>
            </div>
          </div>
          <div className="process-item">
            <span className="process-number">02</span>
            <div>
              <strong>Share your measurements</strong>
              <p>Use our simple guide for a better fit.</p>
            </div>
          </div>
          <div className="process-item">
            <span className="process-number">03</span>
            <div>
              <strong>We’ll be in touch</strong>
              <p>Our team will review your request.</p>
            </div>
          </div>
        </section>

        {submitted ? (
          <section className="success-panel" aria-live="polite">
            <div className="success-icon">
              <Check size={28} />
            </div>
            <div className="eyebrow">REQUEST PREPARED</div>
            <h2>Thank you, {customer.name.split(' ')[0] || 'beautiful'}.</h2>
            <p>
              Your measurement request has been completed in this demo. In a
              live version, your details would be securely sent to the Hanout
              Boutique team for review.
            </p>
            <div className="success-summary">
              <span>GARMENT</span>
              <strong>
                {garment.item || garment.style || 'Custom-made piece'}
              </strong>
              <span>MEASUREMENT UNIT</span>
              <strong>
                {unit === 'cm' ? 'Centimetres (cm)' : 'Inches (in)'}
              </strong>
            </div>
            <button
              className="hero-cta"
              onClick={() => setSubmitted(false)}
              type="button"
            >
              Review my details <ArrowRight size={16} />
            </button>
          </section>
        ) : (
          <section className="form-section" id="customer-details">
            <div className="form-intro">
              <div className="eyebrow">
                <span className="eyebrow-line" /> YOUR MADE-TO-MEASURE JOURNEY
              </div>
              <h2>
                Let’s get your
                <br />
                <em>perfect fit.</em>
              </h2>
              <p>
                Fill in what you can below. Your details help our team
                understand what you have in mind before we get in touch.
              </p>
              <div className="privacy-note">
                <ShieldCheck size={18} />
                <span>
                  <strong>Your details, treated with care.</strong>
                  <br />
                  Your information is intended for your custom order enquiry.
                </span>
              </div>
              <div className="help-card" id="help">
                <div className="help-icon">
                  <CircleHelp size={20} />
                </div>
                <div>
                  <strong>Not sure how to measure?</strong>
                  <p>
                    It’s completely normal. Use our measurement tips or ask our
                    team for guidance.
                  </p>
                  <button
                    type="button"
                    className="text-link"
                    onClick={() => setShowGuide(!showGuide)}
                  >
                    {showGuide
                      ? 'Hide measurement tips'
                      : 'View measurement tips'}{' '}
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
              {showGuide && (
                <div className="guide-panel">
                  <strong>A quick measuring guide</strong>
                  <p>
                    Use a flexible tape, keep it comfortably snug (not tight),
                    and stand naturally. Ask someone to help with shoulder and
                    back measurements. If unsure, leave a note for our atelier.
                  </p>
                </div>
              )}
            </div>

            <form className="measurement-form" onSubmit={handleSubmit}>
              <div className="form-heading">
                <span className="section-number">01</span>
                <div>
                  <h3>Your details</h3>
                  <p>How can we reach you?</p>
                </div>
                <span className="required-note">* REQUIRED</span>
              </div>
              <div className="field-grid">
                <label className="field full">
                  <span>
                    Full name <b>*</b>
                  </span>
                  <input
                    required
                    value={customer.name}
                    onChange={e => updateCustomer('name', e.target.value)}
                    placeholder="Your full name"
                    autoComplete="name"
                  />
                </label>
                <label className="field">
                  <span>
                    Email address <b>*</b>
                  </span>
                  <input
                    required
                    type="email"
                    value={customer.email}
                    onChange={e => updateCustomer('email', e.target.value)}
                    placeholder="you@example.com"
                    autoComplete="email"
                  />
                </label>
                <label className="field">
                  <span>
                    Country of residence <b>*</b>
                  </span>
                  <select
                    required
                    value={customer.country}
                    onChange={e => updateCustomer('country', e.target.value)}
                  >
                    <option>United Kingdom</option>
                    <option>United States</option>
                    <option>France</option>
                    <option>Morocco</option>
                    <option>Germany</option>
                    <option>Spain</option>
                    <option>Canada</option>
                    <option>Other</option>
                  </select>
                </label>
                <label className="field">
                  <span>
                    Phone / WhatsApp <small>OPTIONAL</small>
                  </span>
                  <input
                    value={customer.phone}
                    onChange={e => updateCustomer('phone', e.target.value)}
                    placeholder="+44 ..."
                    autoComplete="tel"
                  />
                </label>
                <label className="field">
                  <span>
                    Previous order reference <small>IF YOU HAVE ONE</small>
                  </span>
                  <input
                    value={customer.reference}
                    onChange={e => updateCustomer('reference', e.target.value)}
                    placeholder="e.g. HB-1024"
                  />
                </label>
              </div>

              <div className="form-divider" />
              <div className="form-heading">
                <span className="section-number">02</span>
                <div>
                  <h3>Your garment</h3>
                  <p>Tell us a little about the piece.</p>
                </div>
              </div>
              <div className="field-grid">
                <label className="field">
                  <span>
                    Dress / item name <b>*</b>
                  </span>
                  <input
                    required
                    value={garment.item}
                    onChange={e => updateGarment('item', e.target.value)}
                    placeholder="Name or description"
                  />
                </label>
                <label className="field">
                  <span>Preferred colour</span>
                  <input
                    value={garment.colour}
                    onChange={e => updateGarment('colour', e.target.value)}
                    placeholder="e.g. terracotta, ivory"
                  />
                </label>
                <label className="field">
                  <span>
                    Garment type <b>*</b>
                  </span>
                  <select
                    required
                    value={garment.style}
                    onChange={e => updateGarment('style', e.target.value)}
                  >
                    <option>Made to measure dress</option>
                    <option>Evening dress</option>
                    <option>Kaftan</option>
                    <option>Two-piece set</option>
                    <option>Other custom piece</option>
                  </select>
                </label>
                <label className="field">
                  <span>
                    Desired date <small>OPTIONAL</small>
                  </span>
                  <input
                    type="date"
                    value={garment.date}
                    onChange={e => updateGarment('date', e.target.value)}
                  />
                </label>
                <label className="field full">
                  <span>
                    Reference photo <small>OPTIONAL · DEMO ONLY</small>
                  </span>
                  <label className="upload-box">
                    <UploadCloud size={18} />
                    <span>
                      {fileName || 'Choose a reference image'}
                      <small>
                        Attach a photo of the style you have in mind
                      </small>
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={e =>
                        setFileName(e.target.files?.[0]?.name || '')
                      }
                    />
                  </label>
                </label>
                <label className="field full">
                  <span>
                    Anything else we should know? <small>OPTIONAL</small>
                  </span>
                  <textarea
                    rows="3"
                    value={garment.notes}
                    onChange={e => updateGarment('notes', e.target.value)}
                    placeholder="Fit preferences, style details, or questions for our team..."
                  />
                </label>
              </div>

              <div className="form-divider" />
              <div className="form-heading" id="measurements">
                <span className="section-number">03</span>
                <div>
                  <h3>Your measurements</h3>
                  <p>
                    Take your time — accuracy helps us get closer to your ideal
                    fit.
                  </p>
                </div>
              </div>
              <div className="unit-row">
                <span>Measurement unit</span>
                <div className="unit-toggle">
                  <button
                    type="button"
                    className={unit === 'cm' ? 'active' : ''}
                    onClick={() => setUnit('cm')}
                  >
                    Centimetres <small>cm</small>
                  </button>
                  <button
                    type="button"
                    className={unit === 'in' ? 'active' : ''}
                    onClick={() => setUnit('in')}
                  >
                    Inches <small>in</small>
                  </button>
                </div>
              </div>
              <div className="measure-grid">
                {[
                  ['bust', 'Bust'],
                  ['waist', 'Waist'],
                  ['hips', 'Hips'],
                  ['shoulder', 'Shoulder width'],
                  ['sleeve', 'Sleeve length'],
                  ['dressLength', 'Desired dress length'],
                ].map(([key, label], index) => (
                  <label className="field measure-field" key={key}>
                    <span>
                      <i>{String(index + 1).padStart(2, '0')}</i>
                      {label}
                    </span>
                    <div className="measure-input">
                      <input
                        type="number"
                        min="0"
                        step="any"
                        inputMode="decimal"
                        value={measurements[key]}
                        onChange={e => updateMeasurement(key, e.target.value)}
                        placeholder="0.0"
                      />
                      <span>{unit}</span>
                    </div>
                  </label>
                ))}
              </div>
              <div className="measure-disclaimer">
                <Ruler size={17} />
                <p>
                  These are starting measurements for the demo. Our atelier may
                  request additional measurements depending on your chosen
                  garment.
                </p>
              </div>
              <label className="consent-check">
                <input type="checkbox" required />
                <span>
                  I confirm these details are accurate to the best of my
                  knowledge and agree that Hanout Boutique may use them to
                  respond to my custom-order enquiry. <b>*</b>
                </span>
              </label>
              <button className="submit-button" type="submit">
                Submit my measurements <ArrowRight size={17} />
              </button>
              <p className="form-footnote">
                <ShieldCheck size={14} /> Demo only — this form does not send or
                store your information.
              </p>
            </form>
          </section>
        )}

        <section className="closing-note">
          <Sparkles size={18} />
          <p>
            <em>Made with care in Marrakech.</em> Wherever life takes you, a
            little piece of Hanout can travel with you.
          </p>
        </section>
      </main>
      <footer className="site-footer">
        <a className="footer-brand" href="#top">
          HANOUT <i>BOUTIQUE</i>
        </a>
        <span>AN ATELIER ROOTED IN MARRAKECH</span>
        <div className="footer-social">
          <a href="#help" aria-label="Email Hanout Boutique">
            <Mail size={16} />
          </a>
          <a href="#help" aria-label="Instagram">
            <Instagram size={16} />
          </a>
        </div>
        <small>© 2026 HANOUT BOUTIQUE · CONCEPT PREVIEW</small>
      </footer>
    </div>
  );
}

export default App;
