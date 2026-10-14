# Codex handoff: Care Momentum portfolio evidence

Paste the prompt below into Codex on the Mac that has the Care Momentum checkout and Xcode. This handoff continues the existing portfolio branch; it does not start another redesign.

```text
Use Superpowers and GitHub to finish my portfolio content update.

Portfolio repository: https://github.com/manishsoni-dev/portfolio
Working branch: codex/portfolio-care-momentum-evidence
Production URL: https://manishsoni-dev.vercel.app/
Care Momentum repository: https://github.com/manishsoni-dev/Care-Momentum (private)

Goal: give recruiters and agencies inspectable evidence of my work, including Care Momentum's actual iOS screens and a concise walkthrough. Preserve the existing design, fonts, colors, backgrounds, animations, component styling, and responsive layout. Routine content/asset edits are authorized. Consult me before any major design, navigation, infrastructure, or positioning change.

1. Read AGENTS.md wherever applicable. Fetch the latest portfolio branch and inspect its diff against main. Continue the existing work without duplicating the Care Momentum project. Check for local changes before switching branches. Identify the current Care Momentum development checkout from actual source and git history; do not assume its default branch is current or overwrite its work.

2. Review the prepared changes in src/content/projects/care-momentum.md, src/data/profile.ts, src/data/site.ts, src/components/ProofOfWorkSection.astro, src/components/RecruiterQuickScanSection.astro, src/pages/hire-me.astro, and the optional unavailable-link labels in the project schema/card/detail template. Keep ArchGuard, Care Momentum, and Aidssist in the existing three-card quick scan. Retain the other projects and AI/backend role focus.

3. Capture actual Care Momentum screens on this Mac using Xcode Simulator or an authorized device. Use a separate simulator/test dataset and synthetic patient information. Inspect existing launch/test fixtures first. Capture Today, medication management, appointments/care plan, and health-record views. If a flow is absent or broken, do not present it as working. Do not generate mockups, fabricate app screens, change app features, manipulate production data, or expose personal health records, credentials, account identifiers, signing material, or test logs containing secrets. If Xcode or the app checkout is unavailable, stop only the capture-dependent work and ask me for actual PNG captures.

4. Visually inspect the captures, remove unrelated desktop chrome by capturing the app screen directly, and optimize files without changing the depicted interface. Add them under public/images/projects/care-momentum/. Populate screenshotUrls in care-momentum.md with real filenames, descriptive alt text, and factual captions. The existing detail template currently uses aspect-video/object-cover, which would crop portrait iPhone screenshots. Add a minimal project-specific portrait containment treatment using existing styles; preserve other projects' image presentation and the surrounding page design.

5. If feasible, record a 45–90 second real walkthrough: open Today, complete a medication/care action, inspect its state, then show an appointment or record. Publish only to a destination I authorize, or use a modest local video asset if the deployment limits allow it. Wire a verified public link into demoVideoUrl; never use a nonexistent URL. The public case study is /projects/care-momentum/. Do not call the web page a runnable iOS app. Add an App Store or TestFlight link only if it actually exists, works for external visitors, and matches the current release status.

6. Replace the case study's screenshot-unavailable paragraph only once real assets are present. State my independent-project contribution accurately, including AI-assisted development and human verification. Preserve “In development / pre-beta” until a release is verified. Historical test counts must retain their date/snapshot qualification; update them only from fresh evidence. Describe Supabase as optional patient-profile sync, not synchronization of all health data. Keep the source private and do not add an inaccessible public GitHub button. Do not advertise paid Apple Developer membership as an achievement. Do not invent employment, users, business impact, certifications, seniority, medical outcomes, compliance, or launch readiness. Verify education and resume facts before adding or repeating graduation/completion claims; if unverified, use neutral truthful wording. Do not overwrite the PDF resume as part of this update.

7. Run npm ci and PUBLIC_SITE_URL=https://manishsoni-dev.vercel.app npm run verify. Check the generated homepage, /hire-me/, /projects/, and /projects/care-momentum/, including keyboard navigation, image readability, 390px mobile and desktop layouts, resume/email links, and all new destinations. Compare the design with the base branch and repair regressions. Check git diff --check. Review the final patch and address material findings.

8. Push to the existing branch and update its PR. Show me the preview, concise change summary, and any remaining limitations, then request my final approval to publish. Once I approve, merge the exact verified PR into the confirmed Vercel production branch using the repository's normal workflow. If approval already explicitly covers the exact final reviewed diff, do not ask again. Confirm the new commit's Vercel deployment succeeds and that the production URL displays it; do not assume a successful GitHub push means the website is live. Never force-push main or disable branch protection. If deployment fails, report the failure and repair it or revert the portfolio change without touching the Care Momentum app.

Return: PR/preview URL, changed files, verification results, production URL and deployed commit if published, and specific remaining blockers. Continue authorized routine work without repeated permission questions.
```

## Prepared-work boundary

The initial update adds a factual pre-beta case study, public case-study links, iOS skills, recruiter-facing project evidence, and accurate private-repository labels. No usable Care Momentum screen captures were available during preparation. App screenshots, video evidence, visual QA with those captures, owner publication approval, and production verification remain for this handoff.
