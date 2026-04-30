---
layout: page
title: TREX
description: Automating LLM fine-tuning via agent-driven tree-based exploration
img: assets/img/projects/trex-hero.png
importance: 0
category: work
visible: true
---

[TREX](https://github.com/trex-project) is a multi-agent system that automates end-to-end LLM fine-tuning by modelling iterative experiments as tree-based search over a Researcher + Executor agent loop. The system treats the fine-tuning process as a structured exploration problem, enabling autonomous hypothesis generation, experiment execution, and result-driven refinement without human intervention. The work is described in an arXiv preprint, 2026: "TREX: Automating LLM Fine-tuning via Agent-Driven Tree-based Exploration."

<div class="row mt-3">
    <div class="col-sm-12 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/trex-hero.png" title="TREX system overview" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    TREX models LLM fine-tuning as a tree-based exploration over a Researcher + Executor agent loop. Figure adapted from the TREX paper.
</div>

## Highlights

- **Tree-based exploration.** TREX formulates the fine-tuning search space as a tree, applying MCTS-style search over the history of past experiments to guide the next hypothesis — enabling systematic, non-redundant exploration.
- **Researcher + Executor agent split.** A Researcher agent proposes experimental hypotheses and configurations; an Executor agent carries them out end-to-end, returning structured results that feed back into the tree.
- **Full fine-tuning workflow automation.** The system covers the complete pipeline from data preparation and training configuration through evaluation, removing the need for manual iteration at any stage.
---

## TREX Agent System

[Paper (arXiv:2604.14116)](https://arxiv.org/abs/2604.14116) · [HF Papers](https://huggingface.co/papers/2604.14116) · [GitHub Org](https://github.com/trex-project)

The TREX agent system consists of two cooperating agents: a Researcher that reads the current experiment tree, selects a promising node to expand, and proposes a new experimental configuration; and an Executor that runs the full fine-tuning job and reports structured metrics back to the tree. This split cleanly separates scientific reasoning from computational execution, allowing each agent to be optimised independently.

The tree structure records the full history of experiments as a searchable graph, enabling the Researcher to avoid redundant configurations and to build on the most informative prior runs. The agent code is not yet open source; it will be released publicly in a future update alongside the full system documentation.

## AIDP — AI Data Processor

[Code](https://github.com/trex-project/aidp)

AIDP is a modular toolkit for LLM training-data workflows, covering data loading, format conversion, deduplication, sampling, LLM-based generation and scoring, embedding computation, and export. It is built on top of Hugging Face Datasets, making it straightforward to integrate into existing training pipelines.

AIDP is designed to be used both as a standalone data-processing library and as the data-preparation backbone inside TREX. Each processing step is implemented as a composable operator, so users can assemble custom pipelines without modifying the core library.

## FT-Bench

[Code](https://github.com/trex-project/ftbench)

FT-Bench is a benchmark of 10 real-world fine-tuning tasks spanning general capability improvement and domain adaptation scenarios. It provides a streamlined evaluation interface designed for autonomous research agents, enabling reproducible, automated assessment of fine-tuned models without manual intervention.

The benchmark covers diverse task types — instruction following, domain-specific QA, coding, and reasoning — and is designed so that evaluation can be triggered programmatically, making it suitable for integration into automated fine-tuning loops such as TREX. FT-Bench is open source and can be used independently of TREX to evaluate any fine-tuning approach.

---

## Resources

- **Code (AIDP):** [github.com/trex-project/aidp](https://github.com/trex-project/aidp)
- **Code (FT-Bench):** [github.com/trex-project/ftbench](https://github.com/trex-project/ftbench)
- **Paper (arXiv 2026):** [arxiv.org/abs/2604.14116](https://arxiv.org/abs/2604.14116)
- **Paper (HF Papers):** [huggingface.co/papers/2604.14116](https://huggingface.co/papers/2604.14116)
- **Organization:** [trex-project on GitHub](https://github.com/trex-project)

_Figure adapted from the TREX paper. Repository links point to the official trex-project organization on GitHub._
