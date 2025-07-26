---
Rule ID: UBYX-00000
Title: Permitted Operations in the Ubyx Clearing System
Category: Transaction Processing Standards
Status: draft
Version: 1.0
Created: 2025-07-26
Last Modified: 2025-07-26
Author: Tony McLaughlin
Description: Specifies the types of permitted operations that participants may submit for clearing and settlement via the Ubyx system.
---

### Rule Overview
This rule defines the scope of permitted operations that may be conducted by or on behalf of participants using the Ubyx clearing system. The permitted operations represent the set of stablecoin and fiat currency conversions that are eligible for processing, settlement, and reporting under the Rulebook.

### Obligations
1. **Permitted Operation Types:**
   - The following transactions are permitted under the Ubyx Clearing System:
     1. **Stablecoin-to-Fiat (Same Currency):** Redemption of a stablecoin into fiat currency of the same denomination. 
     2. **Stablecoin-to-Fiat (Cross Currency):** Redemption of a stablecoin into fiat currency of a different denomination. 
     3. **Fiat-to-Stablecoin (Same Currency):** Minting of a stablecoin from fiat currency of the same denomination.
     4. **Fiat-to-Stablecoin (Cross Currency):** Minting of a stablecoin from fiat currency of a different denomination. 
     5. **Stablecoin-to-Stablecoin (Same Currency):** Conversion of one participating stablecoin into another of the same currency. 
     6. **Stablecoin-to-Stablecoin (Cross Currency):** Conversion of one participating stablecoin into another of a different currency. 

2. **Routing and Instruction:**
   - All permitted operations must be initiated through the Ubyx Platform by a participant authorized under the Rulebook.
   - Each transaction must specify the operation type and comply with applicable messaging and validation standards.

3. **Currency Support:**
   - Only transactions involving fiat currencies and stablecoins pre-approved by Ubyx and listed in the Schedule of Supported Instruments may be submitted for processing.

4. **Settlement Modality:**
   - All transactions must be settled through pre-funded accounts in accordance with the rulebook.
   - For cross-currency transactions, the applicable FX rate and spread must be disclosed prior to execution and documented in the transaction record.

5. **Recordkeeping:**
   - Participants must retain comprehensive records for each transaction, including time of submission, confirmation, and settlement, and provide such records to Ubyx upon request.

### Non-Compliance Penalties
Non-compliance with these obligations may result in:
- Immediate rejection of non-conforming transaction submissions.
- Temporary or permanent suspension of the participant’s transaction privileges.
- Expulsion from the Ubyx network in the event of persistent or deliberate violation.
