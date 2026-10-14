---
title: "Care Momentum — iOS Care Management App"
summary: "A native iOS app in development that brings daily care tasks, medication tracking, appointments, and health records into one patient-scoped workflow."
category: "iOS / Healthcare"
problem: "After a medical visit, patients need a clear way to organize care instructions and follow through on daily tasks."
built: "Developing a SwiftUI application with SwiftData persistence, daily care actions, medication workflows, health records, and optional patient-profile sync."
features:
  - Daily care tasks and medication actions
  - Medication schedules and local reminders
  - Appointments and preparation workflows
  - Health-record timeline and search
  - Patient-scoped local persistence
  - Optional patient-profile sync
outcome: "Native iOS engineering across care workflows, local persistence, automated testing, and release preparation. In development / pre-beta."
role: "Independent developer — product workflow design, SwiftUI implementation, persistence, backend integration, and verification with AI-assisted development tools."
stack:
  - Swift
  - SwiftUI
  - SwiftData
  - Supabase
  - PostgreSQL
  - XCTest
  - XCUITest
  - Xcode
labels:
  - Featured
  - iOS
  - Local-first
  - In Development
statusLabels:
  - In Development / Pre-beta
  - Private Repository
  - Case Study
demoUnavailableLabel: "Public demo not available"
repoUnavailableLabel: "Private repository"
status: "in-progress"
featured: true
order: 1.5
---

## What the app does

Care Momentum is a native iOS application being developed to help patients follow through on care after a medical visit. It organizes medication actions, care tasks, appointments, and health records around the selected patient.

The app is in development / pre-beta. It is not currently presented here as an App Store release or a publicly available TestFlight beta.

## My contribution

I am developing the application independently, using AI-assisted development tools alongside source review, automated tests, and simulator verification. My work includes SwiftUI screens, SwiftData-backed workflows, patient-scoped state, Supabase integration, and release preparation. This is an independent project, not employment or a client engagement.

## Implemented engineering work

- Built a Today workflow that brings medication actions, appointments, and care tasks into a daily view.
- Implemented medication management, schedules, dose-event tracking, and local notification workflows.
- Added appointment preparation, care-plan scheduling, and health-record timeline, detail, and search flows.
- Used SwiftData for local persistence and explicit patient selection to scope the care experience.
- Implemented an optional Supabase patient-profile sync path with explicit opt-in, conflict handling, access controls, and account-deletion handling.
- Added Swift/SwiftData tests and UI automation to verify workflows and regressions.

## Architecture and privacy decisions

The application keeps care workflows local-first. The optional profile-sync implementation is deliberately narrow: it covers patient identity and name/date-of-birth fields rather than uploading all health records, care tasks, or medication data. Account authentication and patient selection are separate decisions.

Sync conflicts require an explicit choice rather than silently overwriting local data. Account-deletion handling is designed to preserve local patient data while removing the account's cloud relationship.

## Verification evidence and its limits

A repository report dated 23 September 2026 records 676 passing Swift/SwiftData tests, 184 passing serialized UI tests, and a successful clean simulator build for its recorded source snapshot. These are historical results for that snapshot, not a fresh test run of the current app or proof of production readiness.

The same report leaves connected acceptance blocked. Signed-device verification, connected authentication/sync acceptance, and release/privacy preparation remain separate release gates. I do not treat a passing local test suite as an App Store release.

## Screenshots and walkthrough

Public screenshots and a walkthrough are not yet available on this page. The source repository is private. This case study documents the implementation and its current limits; it is not an interactive app demo.

## Current focus

Verifying daily-action reliability and completing the release gates before a public beta. The next portfolio evidence will be real app captures using synthetic patient data, followed by a short walkthrough of a complete daily-care workflow.
