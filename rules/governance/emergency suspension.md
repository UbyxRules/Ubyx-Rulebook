---
Rule ID: UBYX-00000
Title: Emergency Suspension and Contingency Procedures
Category: Governance
Status: draft
Version: 1.0
Created: 2025-07-26
Last Modified: 2025-07-26
Author: Tony McLaughlin
Description: Establishes procedures for emergency suspension of the Ubyx clearing system or specific Participants, and defines contingency operations to safeguard stability and regulatory compliance during systemic incidents. 
---

### Rule Overview
This rule provides the Ubyx system with defined powers to suspend processing in the event of a serious operational, regulatory, legal, or technical incident. It also requires Ubyx and its Participants to implement contingency measures to ensure continuity of service or controlled fallback. The rule is designed to prevent systemic disruption and regulatory breaches during high-impact events.

### Obligations

1. **Obligation 1: Emergency Suspension Triggers**
   - Ubyx Inc. may impose a full or partial suspension of the clearing system where:
     - There is a confirmed or suspected cyber security incident, smart contract failure, network attack, or exploit;
     - A critical Settlement Agent, blockchain network, or fiat infrastructure becomes unavailable;
     - Regulatory or court intervention mandates suspension of activity;
     - Participant misbehavior or malware threatens the integrity of the platform.

2. **Obligation 2: Notice and Immediate Effect**
   - Suspension may be imposed:
     - Without prior notice if urgent;
     - With retroactive effect if critical compromise is identified after transaction receipt;
     - Via authenticated platform-wide message from Ubyx Inc.;
     - With clearly stated scope (e.g. all redemptions, a specific currency, a Participant, or a settlement path).

3. **Obligation 3: Participant Cooperation**
   - During any suspension event:
     - All Participants must freeze pending instructions;
     - Settlement Agents must halt fiat transfers unless otherwise instructed;
     - Affected Issuers must mark their prefunding status as frozen;
     - Participants must report anomalies to Ubyx within 2 hours of identification.

4. **Obligation 4: Contingency Procedures**
   - Ubyx shall maintain and periodically test contingency measures, including:
     - Fallback communications (email, SFTP, secure web forms);
     - Cold-path submission for redemptions held for manual review;
     - Emergency recovery of system state using tamper-evident logs;
     - Coordination protocols with regulatory bodies and Settlement Agents.

5. **Obligation 5: System Restart and Notification**
   - Before restarting suspended services:
     - Ubyx must notify all Participants with a minimum of 2 hours’ advance warning (unless urgency dictates otherwise);
     - A restart instruction must specify which services are resuming and under what risk controls;
     - A post-incident report must be provided within 3 business days.

### Non-Compliance Penalties
Non-compliance with emergency instructions or failure to implement required contingency measures may result in:
- Immediate Participant suspension;
- Regulatory escalation by Ubyx;
- Financial liability for damage caused by non-cooperation;
- Requirement to undergo a third-party continuity audit prior to reinstatement.
