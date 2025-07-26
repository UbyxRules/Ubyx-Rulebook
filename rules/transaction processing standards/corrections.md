---
Rule ID: UBYX-0015
Title: Correction of Erroneous Transactions
Category: Transaction Processing Standards
Status: draft
Version: 1.0
Created: 2025-07-26
Last Modified: 2025-07-26
Author: Tony McLaughlin
Description: Establishes procedures for identifying, correcting, and removing erroneous or invalid transactions from the Ubyx clearing process prior to final settlement. 
---

### Rule Overview
This rule ensures that transaction errors—such as duplicate redemptions, incorrect stablecoin transfers, or message misrouting—can be detected and corrected before they become final and legally binding. These correction procedures protect the integrity of the Ubyx clearing system.

### Obligations

1. **Obligation 1: Detection of Erroneous Transactions**
   - Participants must implement internal controls and automated tools to detect errors in submitted redemption instructions, including:
     - Duplicate submissions;
     - Structurally invalid messages;
     - Unmatched or misrouted stablecoin transfers;
     - Presentment of coins from ineligible chains or contracts.

2. **Obligation 2: Platform-Level Screening and Validation**
   - The Ubyx Platform shall screen all incoming presentment instructions for:
     - Format compliance;
     - Digital signature validation;
     - Wallet address matching;
     - Travel Rule completeness;
     - Unsettled duplicate detection.
   - Instructions failing validation shall be rejected with a machine-readable reason code.

3. **Obligation 3: Settlement Agent Coordination**
   - If a redemption instruction is found to be erroneous after initial acceptance but before final settlement:
     - The Settlement Agent must halt fiat movement;
     - The Issuer and Receiving Institution must be notified via the Ubyx Platform;
     - The token shall be returned to the Receiving Institution wallet if it has already moved.

4. **Obligation 4: Correction Instructions**
   - Any party (Issuer, Receiving Institution, or Ubyx itself) may submit a correction instruction to the Ubyx Platform identifying the erroneous transaction by hash or reference ID.
   - Upon confirmation, the instruction shall be removed from the active settlement queue, and logs shall reflect its cancellation with timestamp and justification.

5. **Obligation 5: Limits on Correction Window**
   - Corrections may only be made prior to settlement finality.
   - Once final settlement has occurred, corrections may only proceed via dispute resolution or bilateral remediation—not by reversal.

6. **Obligation 6: Logging and Transparency**
   - All correction events shall be:
     - Logged and timestamped;
     - Associated with the original transaction ID;
     - Auditable;
     - Disclosed to affected Participants.

### Non-Compliance Penalties
Non-compliance with these obligations may result in:
- Loss of dispute rights for unremediated erroneous submissions;
- Financial liability for downstream effects of uncaught errors;
- Suspension from the Ubyx Platform for recurring or systemic operational faults;
- Mandatory audit of the Participant’s transaction integrity controls.
