---
Rule ID: UBYX-00000
Title: Presentment of Stablecoin
Category: Core Clearing
Status: draft
Version: 1.0
Created: 2025-07-26
Last Modified: 2025-07-26
Author: Tony McLaughlin
Description: Defines the legal and procedural moment at which a stablecoin is deemed presented for redemption within the Ubyx clearing system, including the mandatory inclusion of Travel Rule information.
---

### Rule Overview
A stablecoin submitted for redemption by a Receiving Institution shall be deemed "presented" when an authenticated instruction, including all required Travel Rule information, is received via the Ubyx Platform into the appropriate Settlement Agent wallet designated by the Issuer. This rule provides the digital equivalent of the presentment of a paper check under UCC Article 3.

### Obligations
1. **Obligation 1: Structured Presentment by Receiving Institution**
   - The Receiving Institution must submit a redemption instruction via the Ubyx Platform using the standard structured message format, which must include:
     - Amount and currency
     - Stablecoin type and blockchain
     - Originator and beneficiary names
     - Originator and beneficiary wallet addresses
     - Any required government-issued identifiers
     - Timestamp of transaction
     - Compliance flags (e.g. KYC/AML/sanctions screening)
     - All Travel Rule data as required by applicable law

2. **Obligation 2: Confirmation by Settlement Agent**
   - The Settlement Agent must verify receipt of the redemption instruction and the associated stablecoin transfer into the designated wallet. The Platform shall log the moment of confirmed receipt as the time of legal presentment.

3. **Obligation 3: Compliance with Messaging Standards**
   - The submission must conform to Ubyx-specified messaging protocols (e.g. encrypted ISO 20022 variants or other approved schemas), and any missing or invalid Travel Rule data shall result in automatic rejection.

### Non-Compliance Penalties
Non-compliance with these obligations may result in:
- Rejection of the redemption instruction
- Temporary suspension of the Receiving Institution’s access to the Ubyx Platform
- Notification to relevant supervisory authorities for persistent Travel Rule violations
