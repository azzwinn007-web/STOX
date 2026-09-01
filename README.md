# STOX — AI Investment Intelligence 🚀

STOX is an AI-powered investment intelligence platform designed to help investors make clearer, more informed decisions by combining market signals, financial research, and portfolio risk analysis into one simple dashboard.

## 💡 What is STOX?

Investors often need to look at multiple sources of information before making an investment decision.

STOX brings these signals together through specialized AI agents:

- 📈 **Market Agent** — analyzes market momentum and trading activity
- 📄 **Research Agent** — evaluates financial research and company outlook
- 🛡️ **Risk Agent** — considers portfolio risk and investor risk preference
- 🧠 **STOX Synthesis** — combines the signals into a final investment view

The goal is to turn complex investment information into a simple, understandable recommendation.

---

## ✨ Features

### 👤 Personalized Investor Profile
Users can create a profile based on:

- Name
- Risk preference
- Investment goal

### 📊 Market Snapshot

The dashboard provides:

- Current stock price
- Daily price change
- 30-day momentum
- Trading volume activity
- Visual market trend

### 🤖 Multi-Agent Analysis

STOX uses three specialized analysis agents:

| Agent | Purpose |
|---|---|
| 📈 Market Agent | Market momentum and trading signals |
| 📄 Research Agent | Financial research and company outlook |
| 🛡️ Risk Agent | Risk assessment based on market and investor profile |

### 🧠 AI Investment Synthesis

The platform combines the agent results into a final decision such as:

**BUY / HOLD / WATCH**

along with the reasoning behind the result.

### 🔌 Frontend + Backend Architecture

STOX is built using a React frontend and an Express backend.

```text
                STOX
                  │
        ┌─────────┴─────────┐
        │                   │
     Frontend             Backend
      React               Express
     :5174                :5000
        │                   │
        └────── API ────────┘
                  │
           Stock Analysis
                  │
                  ↓
             JSON Response
                  │
                  ↓
             STOX Dashboard
