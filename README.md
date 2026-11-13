# ROSYBELLE-Cosmetics-

RosyBelle Beauty Fast Service is a responsive, customer-facing beauty product
search and price-calculation experience for Ghana. Customers can find products,
select multiple items, and see an up-to-date total in Ghana cedis.

## Run locally

Install dependencies and start the Vite development server:

```powershell
npm.cmd install
npm.cmd run dev
```

In Command Prompt or a shell that allows npm's PowerShell shim, use `npm`
instead of `npm.cmd`.

## Available checks

```powershell
npm.cmd run lint
npm.cmd run build
```

## Current scope

- Product search, individual selection/removal, and GHS total calculation.
- Customer name and Ghanaian phone number validation.
- MTN Mobile Money and Telecel Cash payment-method previews only.
- Demonstration products in `src/data/demoProducts.js`.

The product data is temporary and can be replaced with Supabase data later.
There is no database connection, order submission, or payment processing.
