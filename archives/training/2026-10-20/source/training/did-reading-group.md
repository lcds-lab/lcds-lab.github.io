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
| Week 1 | DID foundations, estimands, TWFE, and event-study motivation | [Roth et al. (2023)](https://www.jonathandroth.com/assets/files/DiD_Review_Paper.pdf); [Goodman-Bacon (2021)](https://www.nber.org/papers/w25018); [Baker, Larcker, and Wang (2022)](https://www.hbs.edu/ris/Publication%20Files/21-112_8a5a4ab3-b9e7-447d-a0fe-a504b3890fb9.pdf) |
| Week 2 | Group-time ATT, `csdid`, and doubly robust DID | [Callaway and Sant'Anna (2021)](https://psantanna.com/files/Callaway_SantAnna_2020.pdf); [Sant'Anna and Zhao (2020)](https://psantanna.com/files/SantAnna_Zhao_DRDID.pdf); [Chen, Sant'Anna, and Xie (2025)](https://arxiv.org/abs/2506.17729) |
| Week 3 | Lab: TWFE, event study, and `did` / `csdid` output | Readings from Weeks 1-2 |
| Week 4 | Modern event-study estimators: interaction-weighted and imputation approaches | [Sun and Abraham (2021)](https://arxiv.org/abs/1804.05785); [Borusyak, Jaravel, and Spiess (2024)](https://arxiv.org/abs/2108.12419) |
| Week 5 | Regression-friendly modern DID: two-stage DID, ETWFE, and Mundlak framing | [Gardner (2022)](https://arxiv.org/abs/2207.05943); [Butts and Gardner (2022)](https://journal.r-project.org/articles/RJ-2022-048/); [Wooldridge (2023)](https://academic.oup.com/ectj/article-pdf/26/3/C31/56245529/utad016.pdf); [Wooldridge (2025)](https://link.springer.com/article/10.1007/s00181-025-02807-z) |
| Week 6 | Heterogeneous effects, de Chaisemartin-D'Haultfoeuille, and stacked DID | [de Chaisemartin and D'Haultfoeuille (2020)](https://arxiv.org/abs/1803.08807); [de Chaisemartin and D'Haultfoeuille (2022)](https://www.nber.org/papers/w29873); [Wing, Freedman, and Hollingsworth (2024)](https://www.nber.org/papers/w32054) |
| Week 7 | Parallel trends diagnostics, pretesting, and sensitivity | [Roth (2022)](https://www.jonathandroth.com/assets/files/roth_pretrends_testing.pdf); [Rambachan and Roth (2023)](https://www.jonathandroth.com/assets/files/HonestParallelTrends_Main.pdf); [de Chaisemartin and D'Haultfoeuille (2020)](https://arxiv.org/abs/1803.08807); [de Chaisemartin and D'Haultfoeuille (2022)](https://www.nber.org/papers/w29873) |
| Week 8 | Equivalence, noninferiority, and power for parallel-trends assessment | [Bilinski and Hatfield (2018)](https://arxiv.org/abs/1805.03273); [Shen (2026)](https://journals.sagepub.com/doi/pdf/10.1177/10982140261441196?download=true); [Schochet (2022)](https://arxiv.org/abs/2102.06770) |
| Week 9 | Covariates, conditional parallel trends, and time-varying covariates | [Caetano and Callaway (2024)](https://arxiv.org/abs/2406.15288); [Caetano et al. (2022)](https://arxiv.org/abs/2202.02903); [Knaus and Pfleiderer (2026)](https://arxiv.org/abs/2604.12818) |
| Week 10 | Inference, serial correlation, few clusters, and few treated groups | [Bertrand, Duflo, and Mullainathan (2004)](https://www.nber.org/system/files/working_papers/w8841/w8841.pdf); [Conley and Taber (2011)](https://www.nber.org/system/files/working_papers/t0312/t0312.pdf); [Ferman and Pinto (2019)](https://www.fea.usp.br/sites/default/files/anexo-evento/ferman_and_pinto_-_inference_in_did_-_2016_01_25.pdf); [Gerber (2026)](https://arxiv.org/abs/2605.04124) |
| Week 11 | Repeated cross sections, compositional change, and population targets | [Sant'Anna and Xu (2023)](https://arxiv.org/abs/2304.13925); [Deb et al. (2024)](https://www.nber.org/papers/w33026) |
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
