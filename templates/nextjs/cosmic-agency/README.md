# Agency Template, powered by Blocks

![desktop.png](https://imgix.cosmicjs.com/69313380-b156-11ee-9844-f9a09795e2a3-desktop.png)

### UPDATED

🛒 Now includes product management and checkout using Stripe.

A website template built using Cosmic's React components, [Blocks](https://blocks.cosmicjs.com). Use this template to get familiar with Blocks and how they can be used to build common content-powered features for your websites and apps, or simply use it as a starting point for your next project. Save development time and learn content modeling best practices.

## Links

[Install this template](https://www.cosmicjs.com/marketplace/templates/agency)

## Features

🛒 Product management and checkout using Stripe

⚡️ Performance optimized

👁 Draft preview ready

📱 Mobile responsive

🌎 Localization ready

🌓 Dark mode ready

🔧 Customizable

♿️ Accessible

🦺 Type safe

![blocks.png](https://imgix.cosmicjs.com/271670f0-b156-11ee-9844-f9a09795e2a3-blocks.png)
![blocks.png](https://imgix.cosmicjs.com/0bf19f40-b16d-11ee-9844-f9a09795e2a3-blocks.png)

## Getting started

1. [Install this template in Cosmic](https://www.cosmicjs.com/marketplace/templates/agency).

2. Download this code repository and install the dependencies.

```bash
git clone https://github.com/cosmicjs/agency-template
cd agency-template
bun install
```

3. Create a `.env.local` file with your Cosmic API keys. Find these after logging in to the Cosmic dashboard in [Project > API keys](https://app.cosmicjs.com/?redirect_to=?highlight=api-keys).

```
cp .env.example .env.local
```

It will look like this:

```
# .env.local
AGENCY_COSMIC_BUCKET_SLUG=change_to_your_bucket_slug
AGENCY_COSMIC_READ_KEY=change_to_your_bucket_read_key
AGENCY_COSMIC_WRITE_KEY=change_to_your_bucket_write_key
AGENCY_STRIPE_PUBLISHABLE_KEY=change_to_your_stripe_public_key
AGENCY_STRIPE_SECRET_KEY=change_to_your_AGENCY_STRIPE_SECRET_KEY
```

4. Run the template.

```
bun dev
```

Open [http://localhost:3000](http://localhost:3000).
