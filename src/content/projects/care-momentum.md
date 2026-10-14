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
demoVideoUrl: "/videos/projects/care-momentum/walkthrough.mp4"
screenshotUrls:
  - src: "/images/projects/care-momentum/today.webp"
    alt: "Care Momentum Today screen for synthetic patient Taylor, showing medication actions and a pending blood-pressure care task."
    caption: "Today — medication and care-task actions for synthetic patient Taylor Patient, using the existing fixed-date test fixture."
  - src: "/images/projects/care-momentum/medications.webp"
    alt: "Care Momentum medication list showing four synthetic active medications, their strengths, doses, and daily frequency."
    caption: "Medication management — four active synthetic medications with strength, dose, and frequency, reached from Care Plan."
  - src: "/images/projects/care-momentum/medication-detail.webp"
    alt: "Morning medication detail showing the dose marked Taken, its recorded status history, and the eight o'clock schedule."
    caption: "Dose detail — after choosing Taken on Today, the medication shows Taken and its original recorded status history."
  - src: "/images/projects/care-momentum/appointment.webp"
    alt: "Synthetic cardiology appointment detail showing its scheduled time, time zone, location, and disabled reminder."
    caption: "Appointment detail — scheduled time, location, and reminder state for a synthetic cardiology appointment. Reminder delivery was not tested in this capture."
  - src: "/images/projects/care-momentum/care-tasks.webp"
    alt: "Care Momentum care-task list showing pending blood-pressure and undated tasks, plus skipped and completed entries."
    caption: "Care tasks — pending and recorded tasks for the same synthetic patient, including completed and skipped states."
  - src: "/images/projects/care-momentum/health-record.webp"
    alt: "Patient-scoped health-record timeline with search and synthetic medication, care-task, and appointment entries."
    caption: "Health Record — a searchable patient-scoped timeline with synthetic medication, care-task, and appointment entries."
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

Later development notes from 12–13 October still leave dose-deletion regression checks, physical-device and connected acceptance, and final release verification open. The captured medication action does not establish that those separate gates pass.

## Screenshots and walkthrough

The evidence below was captured on 14 October 2026 from the actual SwiftUI app running in a dedicated iPhone 16 simulator on iOS 18.0. All patient, medication, provider, and appointment information comes from an existing synthetic test fixture. The fixture uses a fixed September reference date for Today; other screens also show seeded and capture-time dates.

The 90-second silent walkthrough starts on Today, records a medication as taken, inspects its resulting dose state and history, and opens an appointment. Screenshots additionally show medication management, care tasks, and the health-record timeline. The original captures are presented inside a decorative iPhone frame with no background outside the device. The app interface is unchanged; this is simulator evidence, not a physical-device recording or an interactive web version of the iOS app.

A fresh simulator build succeeded for the captured source on 14 October. This focused visual walkthrough does not replace the full automated suite, signed-device checks, notification-delivery testing, or connected sync acceptance. The source repository remains private.

## Current focus

Verifying daily-action reliability and completing the release gates before a public beta. The app remains in development / pre-beta; the captures demonstrate the observed local flows without claiming launch readiness or medical outcomes.
