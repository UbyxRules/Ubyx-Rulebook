---
Rule ID: UBYX-00000
Title: Travel Rule Compliance and Data Retention
Category: Regulatory Compliance
Status: draft
Version: 1.0
Created: 2025-07-26
Last Modified: 2025-07-26
Author: Tony McLaughlin
Description: Establishes the obligation of Participants to comply with Travel Rule requirements, ensures proper inclusion of originator and beneficiary information, and mandates secure retention and availability of Travel Rule data for regulatory oversight.
---

### Rule Overview
To support global anti-money laundering (AML) and counter-terrorist financing (CTF) regulations, all stablecoin redemption requests submitted through the Ubyx Platform must include full Travel Rule data. Ubyx ensures that data is structured, retained securely, and made available to regulated entities and competent authorities upon lawful request. This rule is based on the FATF Recommendation 16 and its implementation in applicable jurisdictions.

### Obligations

1. **Obligation 1: Structured Travel Rule Data in Presentment**
   - The Receiving Institution must include, as part of every presentment instruction:
     - Full legal name of the originator (payer);
     - Wallet address or account reference of the originator;
     - Issuer-assigned or government-issued identifier (e.g. customer number, national ID);
     - Full legal name of the beneficiary (payee);
     - Wallet address or account reference of the beneficiary;
     - Originating and receiving institution identifiers (e.g. BIC, LEI, Ubyx ID);
     - Blockchain transaction hash and timestamp;
     - Jurisdictional residency and nationality indicators, where required by law.

2. **Obligation 2: Validation and Format Requirements**
   - All Travel Rule data must be:
     - submitted in the format prescribed by Ubyx (e.g. JSON schema, ISO 20022 extension, or similar),
     - validated for completeness before the Ubyx Platform accepts the instruction,
     - cryptographically bound to the message content (e.g. HMAC, signature, or hash chaining).

3. **Obligation 3: Retention and Access Controls**
   - Travel Rule data associated with each redemption must be:
     - retained by Ubyx for a minimum of 5 years from the date of redemption or rejection,
     - stored in a secure, tamper-evident log,
     - accessible only to authorized compliance personnel of Participants or law enforcement upon lawful request.

4. **Obligation 4: Disclosure to Competent Authorities**
   - Upon receipt of a lawful request from a regulator or enforcement agency with jurisdiction over a Participant, Ubyx shall disclose the relevant Travel Rule record associated with a redemption, provided:
     - the request is specific and time-bound,
     - the request is accompanied by appropriate legal authority (e.g. subpoena, regulatory mandate),
     - the affected Participant is notified where not prohibited by law.

### Non-Compliance Penalties
Non-compliance with these obligations may result in:
- Immediate rejection of the presentment by the Ubyx Platform;
- Reporting of the violation to the Participant’s primary regulator;
- Mandatory suspension from the Ubyx system for serious or repeated breaches;
- Legal liability for any resulting fines, sanctions, or regulatory action traceable to Travel Rule failure.
