---
Rule ID: UBYX-00000
Title: Instruction Authentication and Integrity
Category: Ubyx Platform
Status: draft
Version: 1.0
Created: 2025-07-26
Last Modified: 2025-07-26
Author: Tony McLaughlin
Description: Establishes the binding effect, authentication requirements, and evidentiary integrity of instructions transmitted via the Ubyx Platform between Participants and Settlement Agents.
---

### Rule Overview
This rule defines the legal validity and operational enforceability of instructions passed through the Ubyx Platform. All parties rely on Ubyx to authenticate senders, preserve message integrity, and timestamp instructions. This ensures trust in system communications and supports legal finality and non-repudiation.

### Obligations

1. **Obligation 1: Authenticated Channels**
   - All instructions between Issuers, Receiving Institutions, and Settlement Agents must be transmitted via secure, authenticated channels integrated with the Ubyx Platform, including:
     - Public-key encryption or mutually authenticated APIs;
     - Use of digital signatures or HMAC-based message authentication codes;
     - Compliance with platform messaging standards as published by Ubyx.

2. **Obligation 2: Structured and Immutable Format**
   - Instructions must conform to structured message formats approved by Ubyx (e.g. JSON, ISO 20022 variant, or equivalent schema).
   - Once received and timestamped by the Ubyx Platform, an instruction is deemed immutable and non-revocable unless expressly rejected by the recipient within the timeframe allowed by rule.

3. **Obligation 3: Binding Legal Effect**
   - A message that is:
     - received by the Ubyx Platform via an authenticated channel,
     - conforms to the required structure,
     - and is associated with a recognized Participant ID,
   shall be considered valid and binding on the sender as a legally enforceable instruction.

4. **Obligation 4: Logging and Auditability**
   - All instructions are logged by the Ubyx Platform with:
     - Participant identifiers (originator and recipient),
     - cryptographic hash of the message content,
     - exact UTC timestamp of receipt,
     - digital signature or proof of origin.
   - Logs must be tamper-evident and auditable by authorized regulators or dispute resolution panels.

### Non-Compliance Penalties
Non-compliance with these obligations may result in:
- Suspension of messaging privileges via the Ubyx Platform;
- Legal unenforceability of improperly sent instructions;
- Dispute liability assigned to the non-compliant sender;
- Requirement to undergo remediation or third-party messaging audit prior to reinstatement.
