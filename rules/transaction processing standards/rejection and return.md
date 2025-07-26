---
Rule ID: UBYX-00000
Title: Redemption Rejection and Return Procedure
Category: Core Clearing
Status: draft
Version: 1.0
Created: 2025-07-26
Last Modified: 2025-07-26
Author: Tony McLaughlin
Description: Defines the procedure and legal effect when a stablecoin redemption is rejected by the Issuer. Establishes timelines and obligations for notification and return, mirroring the treatment of a dishonored or bounced check.
---

### Rule Overview
If an Issuer rejects a redemption request submitted through the Ubyx clearing system, the stablecoin shall be deemed dishonored and must be returned to the Receiving Institution. This rule ensures that redemption failures are handled with legal clarity, audit transparency, and operational finality, consistent with the principles of dishonor and return in traditional cheque clearing systems.

### Obligations
1. **Obligation 1: Issuer Rejection and Justification**
   - If the Issuer rejects a redemption request, it must communicate the rejection to the Ubyx Platform, including:
     - a rejection code,
     - the reason for refusal (e.g. sanctions match, invalid message, etc.), and
     - timestamp of decision.

2. **Obligation 2: Return of Stablecoin**
   - The Settlement Agent, upon receiving a valid rejection instruction, shall return the stablecoin to the Receiving Institution’s wallet from which it originated.
   - Return must be executed no later than one Business Day following the rejection instruction.

3. **Obligation 3: Provisional Credit Reversal**
   - If any provisional credit had been extended to the Receiving Institution or end-customer in anticipation of redemption, it must be reversed promptly upon notice of dishonor, in accordance with that institution’s own risk policy and legal obligations.

4. **Obligation 4: Logging and Transparency**
   - The Ubyx Platform shall log the rejection event and associated metadata (hash, issuer, reason, timestamps) in a tamper-evident ledger.
   - Repeat or unexplained rejection patterns shall trigger compliance review under Ubyx monitoring procedures.

### Non-Compliance Penalties
Non-compliance with these obligations may result in:
- Temporary suspension of redemption privileges for unjustified or delayed rejections;
- Loss of dispute rights by Receiving Institutions that fail to reverse credit or handle returned tokens appropriately;
- Audit or review of the Participant’s rejection handling process.
