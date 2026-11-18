# portfolio-nextjs

Portfolio Next.js de **Hablani Soulayma** – généré automatiquement par Backstage (`portfolio-nextjs-template`).

![CI-CD](https://github.com/soulaymahableni/portfolio-nextjs-backstage/actions/workflows/ci-cd.yml/badge.svg)

## Cycle de livraison (orchestré par Backstage)

Modification du code → Build Next.js → Image Docker → Push Docker Hub → Déploiement local → Health check

| Élément | Valeur |
|---|---|
| Image | `hablani/portfolio-nextjs:vX` |
| URL locale | http://localhost:3000 |
| Pipeline | `.github/workflows/ci-cd.yml` |

## Fichiers
- `Dockerfile` – build multi-stage (Next.js standalone)
- `.dockerignore`
- `docker-compose.yml` – déploiement local
- `catalog-info.yaml` – métadonnées Backstage

## Nouvelle version
Dans Backstage : **Create → "Livrer une nouvelle version du Portfolio"** → choisir le dépôt et la version (`v2`).
