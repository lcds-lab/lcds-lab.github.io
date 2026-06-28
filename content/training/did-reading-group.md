---
title: "Fall 2026 DID Reading Group"
description: "A planned reading group on recent developments in difference-in-differences, parallel trends, inference, software, and education applications."
---

The LCDS Lab plans to organize a Fall 2026 reading group on recent developments in difference-in-differences (DID). The group will connect modern DID methods to the lab's NSF CAREER longitudinal design agenda, ongoing parallel-trends DID simulation work, and applied education research using longitudinal administrative, school, district, and platform data.

The schedule below is a draft content plan. Specific dates, meeting times, presenters, and final readings will be confirmed closer to launch.

## Goals

- Build shared understanding of modern DID estimands, assumptions, estimators, and inference.
- Connect recent DID developments to longitudinal education studies and policy evaluation.
- Translate readings into practical decisions about design, software implementation, simulation, and reporting.
- Support future workshops, tutorial papers, and applied projects using staggered adoption, event-study, and conditional parallel-trends designs.

## Standing Questions

Each week will use a common discussion template:

- What is the causal estimand?
- What comparison group identifies the estimand?
- What parallel-trends or conditional parallel-trends assumptions are needed?
- How does the method handle staggered adoption, dynamic effects, covariates, heterogeneity, or inference?
- What software implements the method?
- What does this imply for education research and the lab's DID simulation work?

## Planned Weekly Content

| Week | Theme | Possible Readings | Discussion Output |
| --- | --- | --- | --- |
| Week 1 | DID foundations, estimands, TWFE, and event-study motivation | Roth, Sant'Anna, Bilinski, and Poe; Goodman-Bacon; Baker, Larcker, and Wang | Shared vocabulary and a TWFE/event-study caution note |
| Week 2 | Group-time ATT, `csdid`, and doubly robust DID | Callaway and Sant'Anna; Sant'Anna and Zhao; Chen, Sant'Anna, and Xie as an advanced optional reading | Group-time ATT and aggregation guide |
| Week 3 | Lab: TWFE, event study, and `did` / `csdid` output | Review Weeks 1-2 readings | Package-output checklist for R and Stata |
| Week 4 | Modern event-study estimators: interaction-weighted and imputation approaches | Sun and Abraham; Borusyak, Jaravel, and Spiess | Event-study estimator comparison note |
| Week 5 | Regression-friendly modern DID: two-stage DID, ETWFE, and Mundlak framing | Gardner; Wooldridge | Two-stage DID / ETWFE implementation note |
| Week 6 | Heterogeneous effects, de Chaisemartin-D'Haultfoeuille, and stacked DID | de Chaisemartin and D'Haultfoeuille; Wing, Freedman, and Hollingsworth | Stacked DID and target-parameter decision note |
| Week 7 | Parallel trends diagnostics, pretesting, and sensitivity | Roth; Rambachan and Roth; de Chaisemartin and D'Haultfoeuille optional readings on pretests | Parallel-trends diagnostics checklist |
| Week 8 | Equivalence, noninferiority, and power for parallel-trends assessment | Bilinski and Hatfield; Shen; Schochet on DID/CITS power | Parallel-trends power and design memo |
| Week 9 | Covariates, conditional parallel trends, and time-varying covariates | Caetano and Callaway; Caetano et al.; Knaus and Pfleiderer | Covariate timing and adjustment guide |
| Week 10 | Inference, serial correlation, few clusters, and few treated groups | Bertrand, Duflo, and Mullainathan; Conley and Taber; Ferman and Pinto; Gerber | Inference-method decision note |
| Week 11 | Repeated cross sections, compositional change, and population targets | Sant'Anna and Xu; Deb et al. optional reading | Panel vs. repeated-cross-section DID map |
| Week 12 | Education applications, software audit, and synthesis | Lab projects, software documentation, and selected applied examples | Fall synthesis note and workshop/tutorial agenda |

## Software and Lab Illustrations

Hands-on examples may use R and Stata implementations such as `did`, `DRDID`, `csdid`, `did2s`, event-study tools, `DIDmultiplegtDYN`, and stacked-DID workflows. The goal is not only to run commands, but also to understand default estimands, comparison groups, aggregation choices, confidence intervals, and package-specific inference behavior.

## Connections to Lab Projects

This reading group is designed to support several lab workstreams:

- The NSF CAREER project on longitudinal study design, power, and optimal sample-size planning.
- The lab's DID simulation work on estimator choice, inference, software implementation, and power analysis under parallel-trends assumptions.
- Future work on conditional parallel trends, covariates, prognostic-score preprocessing, and causal machine learning extensions.
- Applied education evaluations involving school, district, teacher professional learning, digital learning platform, or policy-adoption data.

## Notes

- The Fall 2026 DID group focuses on DID and parallel-trends methods.
- A separate Spring 2027 reading group is planned for causal machine learning.
- Readings and weekly topics may be adjusted as new papers, software tools, and project needs emerge.
