import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FiDownload, FiMail } from 'react-icons/fi';
import { HiQrCode } from 'react-icons/hi2';
import { LuClock, LuMapPin, LuSettings } from 'react-icons/lu';
import { RiVerifiedBadgeFill } from 'react-icons/ri';
import { SiKaggle } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { userImages } from '../../data/images';
import Tooltip from '../tooltip/Tooltip';
import './HeroSection.css';

const EMAIL_ADDRESS = 'bhagyashreeghosh004@gmail.com';

function formatISTTime(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Kolkata',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  }).format(date);
}

/**
 * Hero section styled identically to the manixh template reference:
 * - Rounded square avatar with top-right QR badge
 * - Identity block: Name with accent emoji, username handle, status line with gear, location & live IST clock
 * - Bio bullet list with bolded highlights
 * - Two dashed social/community cards: LinkedIn card with [Connect] and GitHub/Data card with [View :)]
 * - Bottom floating toolbar bar: [Email Me] button, divider, and quick icon links
 */
export default function HeroSection() {
  const [time, setTime] = useState<string>(() => formatISTTime(new Date()));
  const [showQr, setShowQr] = useState<boolean>(false);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTime(formatISTTime(new Date()));
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        {/* Top Header: Avatar on left, Name & Info on right */}
        <div className="hero-header-row">
          <div className="hero-avatar-box">
            <img
              src={userImages.profile.avatar}
              alt="Bhagyashree Ghosh"
              className="hero-avatar-img"
            />
            <button
              type="button"
              className="hero-avatar-qr-btn"
              onClick={() => setShowQr((prev) => !prev)}
              aria-label="Toggle QR Code"
              title="Toggle QR Code"
            >
              <HiQrCode />
            </button>
            {showQr && (
              <div className="hero-qr-tooltip">
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://www.linkedin.com/in/bhagyashreeg4/`}
                  alt="LinkedIn QR"
                  className="hero-qr-img"
                />
                <span>Scan for LinkedIn</span>
              </div>
            )}
          </div>

          <div className="hero-identity-box">
            <h1 className="hero-name-row">
              <span className="hero-name-text">Bhagyashree Ghosh</span>
              <span className="hero-name-accent" aria-hidden="true">
                🎯
              </span>
            </h1>

            <div className="hero-handle-text">@bhagyashreeg4</div>

            <div className="hero-status-row">
              <span>Building Data &amp; ML Solutions</span>
              <LuSettings className="hero-status-gear" aria-hidden="true" />
            </div>

            <div className="hero-meta-row">
              <span className="hero-meta-item">
                <LuMapPin className="hero-meta-icon" aria-hidden="true" />
                <span>India</span>
              </span>
              <span className="hero-meta-sep" aria-hidden="true">
                &bull;
              </span>
              <span className="hero-meta-item">
                <LuClock className="hero-meta-icon" aria-hidden="true" />
                <span>{time}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Bio Bullets List */}
        <ul className="hero-bio-bullets">
          <li>
            <span className="bio-bullet-dot" aria-hidden="true">
              &bull;
            </span>
            <span>
              Hi, I am a <strong>Data Analyst &amp; ML Practitioner</strong>
            </span>
          </li>
          <li>
            <span className="bio-bullet-dot" aria-hidden="true">
              &bull;
            </span>
            <span>
              Blending English Honors with <strong>Post Graduate Analytics</strong> to turn noisy data
              into <strong>decisive insights</strong>.
            </span>
          </li>
          <li>
            <span className="bio-bullet-dot" aria-hidden="true">
              &bull;
            </span>
            <span>
              Always <strong>shipping</strong>, <strong>learning</strong>, and turning datasets into
              predictive models &amp; self-operating <strong>MIS workflows</strong>.
            </span>
          </li>
        </ul>

        {/* Two Dashed Cards Row */}
        <div className="hero-dashed-cards-grid">
          {/* Left: LinkedIn Profile Card */}
          <div className="hero-dashed-card">
            <div className="hero-card-left">
              <div className="hero-card-icon-box linkedin-icon-box">
                <FaLinkedinIn />
              </div>
              <div className="hero-card-info">
                <div className="hero-card-name-row">
                  <span className="hero-card-name">Bhagyashree Ghosh</span>
                  <RiVerifiedBadgeFill className="hero-card-badge" aria-label="Verified" />
                </div>
                <div className="hero-card-handle">@bhagyashreeg4</div>
              </div>
            </div>
            <a
              href="https://www.linkedin.com/in/bhagyashreeg4/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-card-btn"
            >
              Connect
            </a>
          </div>

          {/* Right: GitHub / Community Showcase Card */}
          <div className="hero-dashed-card">
            <div className="hero-card-left">
              <div className="hero-card-icon-box github-white-box">
                <FaGithub />
              </div>
              <div className="hero-card-info">
                <div className="hero-card-name-row">
                  <span className="hero-card-name">Data &amp; ML Projects</span>
                </div>
                <div className="hero-card-status-sub">
                  <span className="hero-pulsing-green-dot" aria-hidden="true" />
                  <span>Available for Roles</span>
                </div>
              </div>
            </div>
            <a
              href="https://github.com/Bhagyashreeg12"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-card-join-btn"
            >
              View :)
            </a>
          </div>
        </div>

        {/* Bottom Floating Quick Actions Toolbar */}
        <div className="hero-toolbar-wrap">
          <div className="hero-toolbar-bar">
            <a href={`mailto:${EMAIL_ADDRESS}`} className="hero-toolbar-email-btn">
              <FiMail className="toolbar-mail-icon" aria-hidden="true" />
              <span>Email Me</span>
            </a>

            <span className="hero-toolbar-divider" aria-hidden="true" />

            <Tooltip text="LinkedIn Profile" position="top">
              <a
                href="https://www.linkedin.com/in/bhagyashreeg4/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-toolbar-icon-link"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </Tooltip>

            <Tooltip text="GitHub Repositories" position="top">
              <a
                href="https://github.com/Bhagyashreeg12"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-toolbar-icon-link"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </Tooltip>

            <Tooltip text="Data Science Portfolio" position="top">
              <a
                href="https://github.com/Bhagyashreeg12"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-toolbar-icon-link"
                aria-label="Kaggle & Data Projects"
              >
                <SiKaggle />
              </a>
            </Tooltip>

            <Tooltip text="Interactive Resume" position="top">
              <Link
                to="/resume"
                className="hero-toolbar-icon-link"
                aria-label="View Resume"
              >
                <FiDownload />
              </Link>
            </Tooltip>
          </div>
        </div>
      </div>
    </section>
  );
}
