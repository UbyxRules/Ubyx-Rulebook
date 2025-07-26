---
Rule ID: UBYX-00000
Title: Transfer and Presentment Warranties
Category: Receiving Institution Obligations
Status: draft
Version: 1.0
Created: 2025-07-26
Last Modified: 2025-07-26
Author: Tony McLaughlin
Description: Establishes the warranties made by Receiving Institutions upon the transfer and presentment of stablecoins within the Ubyx clearing system.
---

### Rule Overview
This rule codifies the warranties that Receiving Institutions provide when submitting stablecoins for redemption through the Ubyx Platform. These warranties are modeled on the Uniform Commercial Code (UCC) warranties applicable to checks and are adapted to reflect the nature of stablecoins as electronic instruments.

### Obligations
1. **Obligation 1: Transfer Warranties**
   - By transferring a stablecoin into the Ubyx clearing system, the Receiving Institution warrants that:
     - It is entitled to enforce the stablecoin on behalf of the originator or its customer;
     - All digital signatures, hashes, and message authentication codes are valid, authorized, and not forged;
     - The stablecoin has not been materially altered (e.g., double-spent, frozen, or redirected);
     - It has no knowledge that the Issuer is insolvent or subject to a known moratorium at the time of transfer.

2. **Obligation 2: Presentment Warranties**
   - Upon presenting a stablecoin for redemption, the Receiving Institution warrants that:
     - It is legally entitled to enforce the stablecoin or obtain payment;
     - The instrument is not subject to any known defense, claim, or dispute by the Issuer;
     - The transaction complies with all applicable regulatory obligations, including full and accurate Travel Rule information;
     - The payer and payee are not subject to applicable sanctions, and due diligence has been completed;
     - No stablecoin submitted for presentment has previously been dishonored or returned for final failure.

3. **Obligation 3: Encoding and Metadata Accuracy**
   - The Receiving Institution warrants that:
     - All data included in the structured Ubyx presentment message—including blockchain transaction hash, wallet addresses, timestamps, and KYC identifiers—is accurate and complete;
     - Any error in metadata encoding, whether intentional or negligent, shall give rise to liability for resulting loss or operational disruption.

### Non-Compliance Penalties
Non-compliance with these obligations may result in:
- Mandatory indemnification of the Issuer, Settlement Agent, or Ubyx for any resulting losses;
- Temporary or permanent suspension from the Ubyx network;
- Disclosure to regulators or supervisory bodies for breach of legal warranties or AML obligations;
- Reclassification as a non-trusted Participant pending remediation or third-party audit.
