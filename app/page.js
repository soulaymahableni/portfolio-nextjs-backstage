'use client';
import { useEffect, useState } from 'react';

const profile = {
  fullName: 'Soulayma Hableni',
  jobTitle: 'Étudiante DevOps & Cloud',
  email: 'ton.email@example.com',
  about: "Passionnée par l'automatisation, le Platform Engineering et le Cloud.",
};
const skills = ['Docker', 'Kubernetes', 'GitHub Actions', 'Backstage', 'Ansible', 'Terraform', 'Next.js', 'Linux'];
const certifications = [
  { name: 'AWS Certified Cloud Practitioner', org: 'Amazon Web Services', year: '2026' },
  { name: 'Docker Foundations', org: 'Docker', year: '2026' },
  { name: 'Kubernetes Fundamentals', org: 'CNCF', year: '2026' },
];
const projects = [
  { title: 'Platform Engineering avec Backstage', desc: 'Portail développeur : génération de projet, CI/CD, Docker Hub et déploiement automatisé.', stack: ['Backstage', 'GitHub Actions', 'Docker'] },
  { title: 'Ansible + Semaphore', desc: 'Déploiement automatisé avec des rôles Ansible idempotents.', stack: ['Ansible', 'Nginx', 'PM2'] },
  { title: 'Registry Harbor + Trivy', desc: 'Registre privé avec scan de vulnérabilités des images.', stack: ['Harbor', 'Trivy'] },
];

export default function Home() {
  const [dark, setDark] = useState(false);
  useEffect(() => { document.documentElement.dataset.theme = dark ? 'dark' : 'light'; }, [dark]);

  return (
    <main>
      <button className="theme-toggle" onClick={() => setDark(!dark)}>
        {dark ? '☀️ Mode clair' : '🌙 Mode sombre'}
      </button>
      <header>
        <h1>{profile.fullName}</h1>
        <p className="muted">{profile.jobTitle} · {profile.email}</p>
      </header>
      <section className="card"><h2>À propos</h2><p>{profile.about}</p></section>
      <section className="card">
        <h2>Compétences</h2>
        <div className="tags">{skills.map((s) => <span key={s} className="tag">{s}</span>)}</div>
      </section>
      <section className="card">
        <h2>Certifications</h2>
        <ul className="list">
          {certifications.map((c) => <li key={c.name}><strong>{c.name}</strong><span className="muted"> — {c.org}, {c.year}</span></li>)}
        </ul>
      </section>
      <section className="card">
        <h2>Projets DevOps &amp; Cloud</h2>
        <div className="grid">
          {projects.map((p) => (
            <article key={p.title} className="project">
              <h3>{p.title}</h3>
              <p className="muted">{p.desc}</p>
              <div className="tags">{p.stack.map((t) => <span key={t} className="tag small">{t}</span>)}</div>
            </article>
          ))}
        </div>
      </section>
      <footer>Version 2 · Déployé via Backstage</footer>
    </main>
  );
}
