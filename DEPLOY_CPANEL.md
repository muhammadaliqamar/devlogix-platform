# 🚀 Deploy DevLogix Platform to cPanel (CloudLinux)

A step-by-step guide to deploy this Next.js application on cPanel hosting with CloudLinux Node.js Selector.

---

## Prerequisites

- cPanel hosting with **"Setup Node.js App"** (CloudLinux Node.js Selector)
- Node.js **18.x or higher** available on your hosting
- SSH access (recommended, but optional)

---

## Step 1: Build the Project Locally

```bash
npm run build
```

---

## Step 2: Create App Folder on cPanel

> ⚠️ **Do NOT use `public_html`** — Node.js apps should live in a **separate folder** in your home directory. cPanel's Passenger will proxy your domain to it automatically.

1. Go to **cPanel → File Manager**
2. Navigate to your **home directory** (`/home/yourusername/`)
3. Create a new folder called **`devlogix`** (or any name you prefer)

Your target structure:
```
/home/yourusername/
├── public_html/       ← Leave this alone (Apache web root)
├── devlogix/          ← YOUR APP GOES HERE
│   ├── .next/
│   ├── public/
│   ├── src/
│   ├── server.js
│   ├── package.json
│   └── ...
```

---

## Step 3: Upload Files

Upload **only** these files/folders into the `devlogix/` folder (do **NOT** include `node_modules/`):

| Upload This | Purpose |
|---|---|
| `.next/` | Build output |
| `public/` | Static assets |
| `src/` | Source code |
| `server.js` | cPanel startup file |
| `package.json` | Dependencies |
| `package-lock.json` | Lock file |
| `next.config.ts` | Next.js config |
| `tsconfig.json` | TypeScript config |
| `tailwind.config.ts` | Tailwind config |
| `postcss.config.mjs` | PostCSS config |
| `sanity.config.ts` | Sanity CMS config |
| `sanity.cli.ts` | Sanity CLI config |
| `components.json` | shadcn/ui config |
| `.htaccess` | Apache proxy fallback |

### Create the zip (PowerShell):

```powershell
Compress-Archive -Path ".next", "public", "src", "server.js", "package.json", "package-lock.json", "next.config.ts", "tsconfig.json", "tailwind.config.ts", "postcss.config.mjs", "sanity.config.ts", "sanity.cli.ts", "components.json", ".htaccess" -DestinationPath deploy.zip
```

### Upload:
1. **cPanel → File Manager** → open `devlogix/` folder
2. Click **Upload** → upload `deploy.zip`
3. Right-click `deploy.zip` → **Extract**
4. Delete `deploy.zip` after extracting

> ⚠️ Make sure files are extracted **directly** in `devlogix/`, NOT in a subfolder.

---

## Step 4: Set Up Node.js App in cPanel

1. Go to **cPanel → Software → Setup Node.js App**
2. Click **"Create Application"**
3. Fill in:

| Field | Value |
|---|---|
| **Node.js version** | `18.x` or higher |
| **Application mode** | `Production` |
| **Application root** | `devlogix` |
| **Application URL** | Your domain (e.g., `devlogix.io`) |
| **Application startup file** | `server.js` |

4. Click **Create**

> The **Application root** is relative to your home directory. So `devlogix` means `/home/yourusername/devlogix/`.

---

## Step 5: Set Environment Variables

In the Node.js App settings, click **"Add Variable"** for each:

| Variable | Value |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://ygjqclvbuimzuiklsfqn.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anon key |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | `0cwc2was` |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` |
| `SMTP_HOST` | `smtp-relay.brevo.com` |
| `SMTP_PORT` | `587` |
| `SMTP_USER` | Your Brevo SMTP user |
| `SMTP_PASSWORD` | Your Brevo SMTP password |
| `SMTP_FROM` | `DevLogix Technology <no-reply@devlogix.com>` |
| `NODE_ENV` | `production` |

> Click **Save** after adding all variables.

---

## Step 6: Install Dependencies & Start

1. Click **"Run NPM Install"** in the Node.js App page
   - CloudLinux installs deps in its virtual environment
   - A `node_modules` **symlink** is created automatically
2. Click **"Start App"**

---

## Step 7: Verify Deployment

- [ ] **Homepage** → `https://yourdomain.com`
- [ ] **Services** → `https://yourdomain.com/services/[any-slug]`
- [ ] **Industries** → `https://yourdomain.com/industries/[any-slug]`
- [ ] **Contact form** → Submit a test message
- [ ] **Sanity Studio** → `https://yourdomain.com/studio`
- [ ] **Blog** → `https://yourdomain.com/blog`

---

## Troubleshooting

### "node_modules" conflict error
- Delete any existing `node_modules` folder in your app root
- Re-click "Run NPM Install"

### App won't start / stderr.log errors
- Check **stderr.log** in File Manager → `devlogix/`
- Ensure Node.js version ≥ 18
- Verify all environment variables are set

### 502 Bad Gateway
- Restart the app from cPanel Node.js App page
- Check stderr.log for errors

### CSS/JS missing (unstyled)
- Ensure `.next/` folder was uploaded completely (including `.next/static/`)

---

## Redeployment

```bash
# 1. Build locally
npm run build

# 2. Re-upload: .next/, and any changed files to devlogix/
#    Do NOT upload node_modules/

# 3. Restart: cPanel → Node.js App → "Restart"
```
