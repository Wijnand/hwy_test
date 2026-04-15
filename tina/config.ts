import { defineConfig } from "tinacms";

// TODO: Create a project at app.tina.io, then set TINA_CLIENT_ID and TINA_TOKEN
//       as repository secrets in GitHub (Settings → Secrets and variables → Actions).
//       Also add them to a local .env file for running the CMS locally (see .env.example).
export default defineConfig({
  clientId: process.env.TINA_CLIENT_ID ?? "",
  token: process.env.TINA_TOKEN ?? "",
  branch:
    process.env.GITHUB_BRANCH ??
    process.env.VERCEL_GIT_COMMIT_REF ??
    process.env.HEAD ??
    "main",
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      // ─── Home page ───────────────────────────────────────────────
      {
        name: "home",
        label: "Homepagina",
        path: "content/home",
        format: "json",
        ui: {
          allowedActions: { create: false, delete: false },
          global: true,
        },
        fields: [
          {
            type: "string",
            name: "name",
            label: "Bedrijfsnaam",
            required: true,
          },
          {
            type: "string",
            name: "subtitle",
            label: "Subtitel (onder bedrijfsnaam)",
          },
          {
            type: "string",
            name: "tagline",
            label: "Tagline / hero tekst",
            ui: { component: "textarea" },
          },
          {
            type: "image",
            name: "photo",
            label: "Achtergrond- of portretfoto",
          },
          {
            type: "string",
            name: "bookingUrl",
            label: "Boekings-URL (extern)",
            required: true,
          },
          {
            type: "string",
            name: "ctaLabel",
            label: "Tekst boekingsknop",
            required: true,
          },
        ],
      },

      // ─── About page ──────────────────────────────────────────────
      {
        name: "about",
        label: "Over mij",
        path: "content/about",
        format: "json",
        ui: {
          allowedActions: { create: false, delete: false },
          global: true,
        },
        fields: [
          {
            type: "string",
            name: "eyebrow",
            label: "Kleine tekst boven de titel",
          },
          {
            type: "string",
            name: "heading",
            label: "Paginatitel",
          },
          {
            type: "image",
            name: "photo",
            label: "Foto",
          },
          {
            type: "string",
            name: "bio",
            label: "Biografie",
            ui: { component: "textarea" },
          },
        ],
      },

      // ─── Behandelingen page settings ─────────────────────────────
      {
        name: "behandelingenPage",
        label: "Behandelingen — pagina-instellingen",
        path: "content/behandelingen-pagina",
        format: "json",
        ui: {
          allowedActions: { create: false, delete: false },
          global: true,
        },
        fields: [
          {
            type: "string",
            name: "eyebrow",
            label: "Kleine tekst boven de titel",
          },
          {
            type: "string",
            name: "heading",
            label: "Paginatitel",
          },
          {
            type: "string",
            name: "intro",
            label: "Intro tekst",
            ui: { component: "textarea" },
          },
        ],
      },

      // ─── Treatments (repeatable collection) ──────────────────────
      {
        name: "treatment",
        label: "Behandelingen",
        path: "content/behandelingen",
        format: "json",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Naam behandeling",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Omschrijving",
            ui: { component: "textarea" },
          },
          {
            type: "string",
            name: "duration",
            label: "Duur",
          },
          {
            type: "string",
            name: "price",
            label: "Prijs",
          },
        ],
      },

      // ─── Contact page ────────────────────────────────────────────
      {
        name: "contact",
        label: "Contact",
        path: "content/contact",
        format: "json",
        ui: {
          allowedActions: { create: false, delete: false },
          global: true,
        },
        fields: [
          {
            type: "string",
            name: "eyebrow",
            label: "Kleine tekst boven de titel",
          },
          {
            type: "string",
            name: "heading",
            label: "Paginatitel",
          },
          {
            type: "string",
            name: "intro",
            label: "Intro tekst",
          },
          {
            type: "string",
            name: "bookingUrl",
            label: "Boekings-URL (extern)",
            required: true,
          },
          {
            type: "string",
            name: "ctaLabel",
            label: "Tekst boekingsknop",
            required: true,
          },
          {
            type: "string",
            name: "phone",
            label: "Telefoonnummer",
          },
          {
            type: "string",
            name: "email",
            label: "E-mailadres",
          },
          {
            type: "string",
            name: "location",
            label: "Locatie",
            ui: { component: "textarea" },
          },
          {
            type: "string",
            name: "note",
            label: "Notitie (bijv. openingstijden)",
          },
        ],
      },
    ],
  },
});
