import { useState } from 'react';
import { FiArrowUpRight, FiCheck, FiCopy, FiMail } from 'react-icons/fi';
import { LuMapPin } from 'react-icons/lu';
import { socialLinks } from '../../data/socialLinks';
import SectionTitle from '../sectionTitle/SectionTitle';
import './ContactMe.css';

const EMAIL_ADDRESS = 'bhagyashreeghosh004@gmail.com';

/**
 * Contact section presenting direct email action, copy helper, and social platform cards.
 */
export default function ContactMe() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL_ADDRESS);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      const input = document.createElement('input');
      input.value = EMAIL_ADDRESS;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="contact" className="section-block">
      <SectionTitle subtitle="Let&apos;s connect">Contact</SectionTitle>

      <div className="contact-card">
        <div className="contact-intro">
          <h3 className="contact-heading">Open to Data Analyst &amp; ML Roles</h3>
          <p className="contact-desc">
            Looking for opportunities in Data Analytics, Business Intelligence, MIS Automation, and
            applied Machine Learning. Available for Remote, Hybrid, and Relocation across India.
          </p>
          <p className="contact-location">
            <LuMapPin aria-hidden="true" />
            <span>Pune, Maharashtra, India</span>
          </p>
        </div>

        <div className="contact-primary-actions">
          <a href={`mailto:${EMAIL_ADDRESS}`} className="mx-btn">
            <FiMail aria-hidden="true" />
            <span>{EMAIL_ADDRESS}</span>
          </a>
          <button type="button" className="mx-btn" onClick={handleCopy}>
            {copied ? (
              <>
                <FiCheck style={{ color: 'var(--accent-green)' }} aria-hidden="true" />
                <span>Copied</span>
              </>
            ) : (
              <>
                <FiCopy aria-hidden="true" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        <div className="contact-links-grid">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target={item.url.startsWith('mailto:') ? undefined : '_blank'}
              rel={item.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              className="contact-link-tile"
            >
              <div className="contact-tile-left">
                <span className="contact-tile-icon" style={{ color: item.color }}>
                  {item.icon}
                </span>
                <div className="contact-tile-text">
                  <span className="contact-tile-name">{item.name}</span>
                  <span className="contact-tile-handle">{item.handle}</span>
                </div>
              </div>
              <FiArrowUpRight className="contact-tile-arrow" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
