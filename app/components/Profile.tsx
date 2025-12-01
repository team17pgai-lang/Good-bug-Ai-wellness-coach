'use client';

import { useState } from 'react';

const Toggle = ({
  label,
  description,
  value,
  onChange,
}: {
  label: string;
  description: string;
  value: boolean;
  onChange: (value: boolean) => void;
}) => (
  <div className="flex items-center justify-between rounded-2xl border border-[color:var(--border-light)] bg-white px-4 py-3 shadow-sm">
    <div>
      <p className="text-sm font-semibold text-primary">{label}</p>
      <p className="text-xs text-secondary">{description}</p>
    </div>
    <button
      type="button"
      onClick={() => onChange(!value)}
      className={`h-6 w-12 rounded-full p-1 transition ${
        value
          ? 'bg-[color:var(--status-excellent)]'
          : 'bg-[color:var(--border-medium)]'
      }`}
    >
      <span
        className={`block h-4 w-4 rounded-full bg-white transition ${
          value ? 'translate-x-6' : 'translate-x-0'
        }`}
      />
    </button>
  </div>
);

const Profile = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [emailFrequency, setEmailFrequency] = useState('weekly');
  const [language, setLanguage] = useState('english');

  return (
    <div className="space-y-5 px-4 py-6">
      <section className="rounded-3xl bg-gradient-to-r from-[#A29BFE] to-[#1DD1A1] p-5 text-white shadow-md">
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 rounded-full bg-white/20" />
          <div>
            <p className="text-lg font-semibold">Rahul Kumar</p>
            <p className="text-sm text-white/80">Gut Score: 75/100 ● Teal</p>
            <p className="text-xs text-white/70">Member since November 2025</p>
          </div>
          <button className="ml-auto rounded-full bg-white/20 px-4 py-1 text-sm font-semibold text-white">
            Edit Profile
          </button>
        </div>
      </section>

      <section>
        <h2 className="pb-2 text-sm font-semibold text-primary">Health Summary</h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            {
              icon: '✓',
              value: '21 days',
              label: 'Days Logged',
              progress: 70,
              color: 'var(--status-excellent)',
              helper: '21/30 goal',
            },
            {
              icon: '🔥',
              value: '7 days',
              label: 'Current Streak',
              progress: 50,
              color: 'var(--status-fair)',
              helper: '14 days 🏆',
            },
            {
              icon: '↑',
              value: '+18 pts',
              label: 'Total Improvement',
              progress: 60,
              color: 'var(--status-good)',
              helper: 'vs. 30 days ago',
            },
            {
              icon: '📊',
              value: '68/100',
              label: '30-Day Average',
              progress: 68,
              color: 'var(--status-excellent)',
              helper: 'Good',
            },
          ].map((card) => (
            <div
              key={card.label}
              className="rounded-2xl border border-[color:var(--border-light)] bg-white p-3 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span>{card.icon}</span>
                {card.helper && (
                  <span className="text-xs text-secondary">{card.helper}</span>
                )}
              </div>
              <p className="text-xl font-bold text-primary">{card.value}</p>
              <p className="text-xs text-secondary">{card.label}</p>
              <div className="mt-2 h-1.5 rounded-full bg-[color:var(--border-light)]">
                <div
                  className="h-full rounded-full"
                  style={{ width: `${card.progress}%`, backgroundColor: card.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-[color:var(--border-light)] bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between pb-2">
          <h3 className="text-sm font-semibold text-primary">Medical Profile</h3>
          <button className="text-xs font-semibold text-[color:var(--status-excellent)]">
            Edit Medical Info
          </button>
        </div>
        <dl className="space-y-2 text-sm text-secondary">
          <div className="flex justify-between">
            <dt>Primary Condition</dt>
            <dd className="font-semibold text-primary">IBS - Irritable Bowel Syndrome</dd>
          </div>
          <div className="flex justify-between">
            <dt>Allergies</dt>
            <dd className="font-semibold text-primary">Lactose, Gluten</dd>
          </div>
          <div className="flex justify-between">
            <dt>Medications</dt>
            <dd className="font-semibold text-primary">Antacid (as needed)</dd>
          </div>
          <div className="flex justify-between">
            <dt>Surgery History</dt>
            <dd className="font-semibold text-primary">None</dd>
          </div>
          <div className="flex justify-between">
            <dt>Dietary</dt>
            <dd className="font-semibold text-primary">Vegetarian</dd>
          </div>
        </dl>
      </section>

      <section className="space-y-3">
        <h3 className="text-sm font-semibold text-primary">Account Settings</h3>
        <Toggle
          label="🔔 Notifications"
          description="Daily check-ins & reminders"
          value={notifications}
          onChange={setNotifications}
        />
        <Toggle
          label="🌙 Dark Mode"
          description="Easier on eyes at night"
          value={darkMode}
          onChange={setDarkMode}
        />
        <div className="flex gap-3">
          <div className="flex-1 rounded-2xl border border-[color:var(--border-light)] bg-white p-3 shadow-sm">
            <p className="text-sm font-semibold text-primary">📧 Email Digest</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {['off', 'daily', 'weekly', 'monthly'].map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setEmailFrequency(option)}
                  className={`rounded-full px-3 py-1 text-xs font-semibold capitalize ${
                    emailFrequency === option
                      ? 'bg-[color:var(--bg-teal)] text-[color:var(--status-excellent)]'
                      : 'bg-cream text-secondary'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          <div className="flex-1 rounded-2xl border border-[color:var(--border-light)] bg-white p-3 shadow-sm">
            <p className="text-sm font-semibold text-primary">🌐 Language</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {[
                { id: 'english', label: 'English' },
                { id: 'hindi', label: 'हिंदी' },
                { id: 'more', label: 'More' },
              ].map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setLanguage(option.id)}
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    language === option.id
                      ? 'bg-[color:var(--bg-teal)] text-[color:var(--status-excellent)]'
                      : 'bg-cream text-secondary'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-2 rounded-2xl border border-[color:var(--border-light)] bg-white p-4 shadow-sm">
        {[
          { icon: '🔐', label: 'Change Password', tone: 'text-[color:var(--status-excellent)]' },
          { icon: '📥', label: 'Download My Data', tone: 'text-[color:var(--status-excellent)]' },
          { icon: '🗑️', label: 'Delete Account', tone: 'text-[color:var(--status-poor)]' },
        ].map((action) => (
          <button
            key={action.label}
            type="button"
            className="flex w-full items-center justify-between rounded-2xl border border-transparent bg-cream px-4 py-3 text-sm font-semibold text-primary transition hover:border-[color:var(--border-medium)]"
          >
            <span>
              {action.icon} {action.label}
            </span>
            <span className={`text-xs ${action.tone}`}>Manage</span>
          </button>
        ))}
      </section>

      <footer className="space-y-2 pb-10 text-xs text-secondary">
        <div className="flex flex-wrap gap-3">
          {[
            'About The Good Bug',
            'Privacy Policy',
            'Terms of Service',
            'Contact Support',
          ].map((link) => (
            <button key={link} type="button" className="text-[color:var(--status-neutral)]">
              {link}
            </button>
          ))}
        </div>
        <p className="text-right text-[color:var(--text-tertiary)]">Version 1.0.0</p>
      </footer>
    </div>
  );
};

export default Profile;

