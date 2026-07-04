# 🛒 BMDogo E-Commerce Hub

> **BMDogo where creativity meets technology**

Welcome to the **BMDogo E-Commerce Hub** — a production-grade, highly responsive, lightning-fast digital storefront showcasing an expansive collection of **100+ premium web templates**. 

Built entirely using advanced vanilla web technologies, this layout implements absolute architectural synchronization between user interaction layers, dynamic transaction calculators, and local state engines.

---

## 🎯 Core Project Ambitions & Features

* 💻 **100+ Component Grid Matrix:** A perfectly scannable product grid displaying creative digital template assets using CSS Container Queries and Grid layouts.
* 🏷️ **Dynamic Math Promo Engine:** Live checkout verification handling custom coupon systems (e.g., code `BMDOGO20` triggers an immediate 20% discount deduction cascade across layout bills).
* 📊 **Unified Transaction Billing Desk:** Automated live calculations handling Subtotals, Promo Deductions, 7.5% VAT computation constraints, and final Total Due values on every item switch.
* 🌓 **State-Persistent Theme Engine:** Seamless integration of Light and Dark Mode UI token systems that lock into browser memory via `localStorage`.
* 🧠 **Advanced Event Delegation Architecture:** High-performance item manipulation using a single micro-interaction listener bound to the parent matrix container, ensuring instantaneous cart responses.

---

## 🏗️ Visual System Architecture Wireframe

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│  🌓 [Toggle]   🔍 [ Search Templates... ]   🏷️ Filter: [All / Layouts]    🛒 Items: (0) │
├────────────────────────────────────────────────────────────────────────────────────────┤
│  ⚡ ACTIVE PROMO FLASH: "Get 20% off using code: BMDOGO20"                             │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 📂 CATEGORY SIDEBAR  │ 💻 PRODUCT SHOWCASE MATRIX          │ 📦 LIVE SYSTEM CHECKOUT    │
│                      │                                     │                            │
│ 🔘 All Templates     │ ┌───────────────────┐ ┌───────────┐ │ 🛒 CURRENT ITEMS           │
│ 🔘 CSS Layouts       │ │ Premium Portfolio │ │ Sass Land │ │ ┌────────────────────────┐ │
│ 🔘 Vanilla Apps      │ │ $50.00   [⭐⭐⭐⭐] │ │ $75.00   │ │ │ Portfolio  $50.00 [❌] │ │
│                      │ │ [ Add to Cart ]   │ │[AddtoCart]│ │ └────────────────────────┘ │
│                      │ └───────────────────┘ └───────────┘ │ ────────────────────────── │
│                      │                                     │ 🏷️ PROMO CODE INPUT        │
│                      │                                     │ [                ] [Apply] │
│                      │                                     │ ────────────────────────── │
│                      │                                     │ 🧾 BILLING SUMMARY         │
│                      │                                     │ Subtotal:   $50.00         │
│                      │                                     │ Discount:  -$10.00 (20%)   │
│                      │                                     │ VAT (7.5%):  $3.00         │
│                      │                                     │ Total Due:  $43.00         │
└──────────────────────┴─────────────────────────────────────┴────────────────────────────┘
