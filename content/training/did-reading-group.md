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

| Week | Theme | Readings |
| --- | --- | --- |
| Week 1 | DID foundations, estimands, TWFE, and event-study motivation | Roth et al. (2023); Goodman-Bacon (2021); Baker, Larcker, and Wang (2022) |
| Week 2 | Group-time ATT, `csdid`, and doubly robust DID | Callaway and Sant'Anna (2021); Sant'Anna and Zhao (2020); Chen, Sant'Anna, and Xie (2025) |
| Week 3 | Lab: TWFE, event study, and `did` / `csdid` output | Readings from Weeks 1-2 |
| Week 4 | Modern event-study estimators: interaction-weighted and imputation approaches | Sun and Abraham (2021); Borusyak, Jaravel, and Spiess (2024) |
| Week 5 | Regression-friendly modern DID: two-stage DID, ETWFE, and Mundlak framing | Gardner (2022); Butts and Gardner (2022); Wooldridge (2023, 2025) |
| Week 6 | Heterogeneous effects, de Chaisemartin-D'Haultfoeuille, and stacked DID | de Chaisemartin and D'Haultfoeuille (2020, 2022); Wing, Freedman, and Hollingsworth (2024) |
| Week 7 | Parallel trends diagnostics, pretesting, and sensitivity | Roth (2022); Rambachan and Roth (2023); de Chaisemartin and D'Haultfoeuille (2020, 2022) |
| Week 8 | Equivalence, noninferiority, and power for parallel-trends assessment | Bilinski and Hatfield (2018); Shen (2026); Schochet (2022) |
| Week 9 | Covariates, conditional parallel trends, and time-varying covariates | Caetano and Callaway (2024); Caetano et al. (2022); Knaus and Pfleiderer (2026) |
| Week 10 | Inference, serial correlation, few clusters, and few treated groups | Bertrand, Duflo, and Mullainathan (2004); Conley and Taber (2011); Ferman and Pinto (2019); Gerber (2026) |
| Week 11 | Repeated cross sections, compositional change, and population targets | Sant'Anna and Xu (2023); Deb et al. (2024) |
| Week 12 | Education applications, software audit, and synthesis | Lab project materials; software documentation; selected applied education examples |

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
