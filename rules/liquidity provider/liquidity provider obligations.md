---
Rule ID: UBYX-00000
Title: Participation of Liquidity Providers in Redemption Processing
Category: Operational Rules
Status: draft
Version: 1.0
Created: 2025-07-26
Last Modified: 2025-07-26
Author: Tony McLaughlin
Description: Establishes the framework under which Liquidity Providers may act as redemption counterparties in the Ubyx clearing system in substitution for, or in complement to, the issuer.
---

### Rule Overview
This rule defines the rights and obligations of Liquidity Providers (“LPs”) authorized to fulfill redemption requests submitted by Receiving Institutions within the Ubyx clearing system. It permits entities other than the original stablecoin issuer to settle redemption obligations in fiat currency, subject to stringent prefunding, compliance, and transparency requirements. The rule enables increased liquidity, resilience, and optionality for participants while maintaining the integrity of issuer obligations.

### Obligations

1. **Designation and Approval:**
   - A Liquidity Provider must be explicitly approved by Ubyx Inc. and entered into the Ubyx Registry as an eligible counterparty for fiat settlement of redemption transactions.
   - A Liquidity Provider must execute a Ubyx Liquidity Provider Agreement and comply with all applicable Rulebook provisions, including those on prefunding, KYC/AML, and reporting.

2. **Prefunded Fiat Account Maintenance:**
   - Each Liquidity Provider must maintain fiat-denominated prefunded accounts at a Ubyx-nominated Settlement Agent in accordance with the rulebook.
   - Liquidity Providers may only fulfill redemptions up to the amount of available pre-funded fiat clearly designated for that purpose.

3. **Redemption Standing Instruction Mechanism:**
   - Receiving Institutions may indicate, through the Ubyx Platform, whether they will accept redemption from any authorized LP, from a designated LP, or only from the Issuer.
   - Where permitted, the Ubyx Platform will route redemption instructions to the available LP offering best price, availability, or speed, subject to system logic and participant preferences.

4. **Issuer Substitution and Standing:**
   - Fulfillment of a redemption by a Liquidity Provider shall constitute full and final discharge of the redemption obligation for the amount redeemed, regardless of whether the Issuer is the party effecting payment.
   - The Issuer shall not be deemed in default where a designated LP fulfills the redemption on its behalf or where redemptions are fulfilled under a participant’s instruction by an LP.

5. **Asset Scope:**
   - Liquidity Providers may redeem stablecoins from multiple issuers and across multiple blockchains, subject to compliance with supported instrument schedules and platform protocols.
   - LPs may offer conversion services in addition to redemption, including cross-currency and cross-stablecoin operations where permitted by separate rules.

6. **Transparency and Auditability:**
   - All redemptions fulfilled by LPs must be recorded in the Ubyx Platform as such and shall be subject to the same confirmation, reporting, and audit requirements applicable to Issuer-led redemptions.
   - LPs must report liquidity balances, transaction volumes, and compliance attestations to Ubyx Inc. on a periodic basis and upon request.

7. **Compliance and Restrictions:**
   - LPs must adhere to all applicable laws and regulations including AML, sanctions, and fraud prevention protocols.
   - Ubyx Inc. may suspend or terminate LP status at its sole discretion in the event of non-compliance, systemic risk, or reputational concern.

### Non-Compliance Penalties
Non-compliance with these obligations may result in:
- Immediate suspension from participation as a Liquidity Provider.
- Financial penalties as determined by the Ubyx Enforcement Committee.
- Mandatory unwind of positions or recall of funds.
- Permanent removal from the Ubyx Platform for repeated or material violations.
