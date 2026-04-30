---
layout: page
title: GTA
description: A hierarchical benchmark for General Tool Agents — from atomic tool-use to open-ended workflows
img: assets/img/projects/gta-hero.png
importance: 2
category: work
visible: true
---

[GTA](https://github.com/open-compass/GTA) is an open-source benchmark and evaluation framework for **General Tool Agents**, developed as part of the [OpenCompass](https://github.com/open-compass) ecosystem. It bridges two complementary views of tool-using LLM agents in a single repository: short-horizon **atomic tool-use** evaluation and long-horizon **open-ended workflow** evaluation. The original GTA was accepted at **NeurIPS 2024 (Datasets & Benchmarks Track)**, and its successor GTA-2 extends the benchmark to realistic, deliverable-centric agent workflows.

I am a co-author on both [GTA](https://proceedings.neurips.cc/paper_files/paper/2024/file/8a75ee6d4b2eb0b777f549a32a5a5c28-Paper-Datasets_and_Benchmarks_Track.pdf) and [GTA-2](https://arxiv.org/pdf/2604.15715), contributing to the design of the benchmark and its evaluation pipeline alongside collaborators from Shanghai AI Laboratory and Shanghai Jiao Tong University.

<div class="row mt-3">
    <div class="col-sm-12 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/gta-hero.png" title="GTA — a workflow-style task example" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    A sample task from GTA: an agent decomposes a real-world request into a sequence of tool calls and produces a deliverable end-to-end.
</div>

## Highlights

- **Hierarchical benchmark.** Pairs **GTA-Atomic** (short-horizon, atomic tool-use) with **GTA-Workflow** (long-horizon, open-ended workflows) under one evaluation repo.
- **Deliverable-centric scoring.** GTA-Workflow grades agents on what they finally accomplish in a complete workflow, not just whether the next tool call is correct.
- **Both LLMs and agent harnesses.** Designed to evaluate the underlying LLM (GPT, Gemini, Claude, Llama, Qwen, Deepseek, …) **and** the execution harness around it (OpenClaw, Manus, Kortix, …).
- **Multiple evaluation modes.** Default OpenCompass + Lagent pipeline, custom agent / custom LLM integration, and end-to-end result evaluation for closed agent products.
- **Real-world data sourcing.** Tasks rewritten from real agent platforms (Manus, Kortix, Flowith, Minimax Agent, CrewAI) and real user requests on Reddit and Stack Exchange.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/gta-statistics.png" title="GTA-Workflow dataset statistics" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/gta-leaderboard.png" title="GTA-2 leaderboard" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: dataset composition of GTA-Workflow across productivity scenarios. Right: GTA-2 leaderboard (Apr. 2026) covering frontier LLMs and agent execution harnesses.
</div>

---

## GTA-Atomic — Atomic Tool-Use Benchmark (NeurIPS 2024 D&B)

[Paper](https://proceedings.neurips.cc/paper_files/paper/2024/file/8a75ee6d4b2eb0b777f549a32a5a5c28-Paper-Datasets_and_Benchmarks_Track.pdf) ·
[arXiv](https://arxiv.org/abs/2407.08713) ·
[Dataset](https://github.com/open-compass/GTA/releases/download/v0.1.0/gta_dataset.zip) ·
[README](https://github.com/open-compass/GTA/blob/main/README_GTA-1.md)

The original **GTA** benchmark targets _atomic_ tool-use: given a real-world user query, an agent must decide which tool(s) to call, with which arguments, in what order, and use the returned outputs to answer correctly. It contains **229 real-world tasks** with executable tool chains, covering tools across **perception, operation, logic, and creativity** categories.

GTA-Atomic emphasizes:

- **Real user queries** — human-written queries with simple objectives but _implicit_ tool use, requiring the LLM to infer which tools to call.
- **Real deployed tools** — an evaluation platform where tools actually execute, rather than dummy tool stubs.
- **Real multimodal inputs** — authentic images such as scenes, screenshots, tables, code snippets, and printed/handwritten materials embedded in the queries.
- **Strict, automatic scoring** of intermediate tool calls and final answers, fully reproducible via the OpenCompass + Lagent pipeline.

The original paper found that real-world user queries remain hard for current LLMs: **GPT-4 completes fewer than 50%** of GTA tasks, and most other LLMs score below 25% — exposing concrete bottlenecks in tool-use capabilities.

<div class="row justify-content-sm-center">
    <div class="col-sm-12 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/gta-statistics-table.png" title="GTA-2 dataset statistics breakdown" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Detailed statistics of the GTA-2 release across task categories, modalities, and tool counts — significantly expanded over GTA-Atomic.
</div>

## GTA-2 — Open-Ended Workflow Evaluation (arXiv 2026)

[Paper (arXiv:2604.15715)](https://arxiv.org/pdf/2604.15715) ·
[Dataset](https://github.com/open-compass/GTA/releases/download/v0.2.0/gta_workflow_dataset.zip)

**GTA-2** extends the original benchmark with **GTA-Workflow**, a new evaluation suite for long-horizon, open-ended agent tasks where the goal is a real _deliverable_ rather than a single correct tool call. Tasks are sourced and rewritten from real agent platforms (Manus, Kortix, Flowith, Minimax Agent, CrewAI) and real user threads on Reddit and Stack Exchange, then verified through a human-in-the-loop pipeline.

GTA-Workflow covers six broad productivity scenarios:

- **Data Analysis**
- **Education & Instruction**
- **Planning & Decision**
- **Creative Design**
- **Marketing Strategy**
- **Retrieval & QA**

It supports three evaluation modes so that almost any agent system can be benchmarked:

- **Default OpenCompass-based evaluation.** Standard pipeline using **OpenCompass + Lagent**, suitable for any agent that can be invoked as a callable framework.
- **Custom agent / custom LLM integration.** A wrapper interface lets you plug in your own agent framework or LLM backend (see [`docs/ADDING_NEW_AGENT_OR_LLM.md`](https://github.com/open-compass/GTA/blob/main/docs/ADDING_NEW_AGENT_OR_LLM.md)).
- **End-to-end evaluation without OpenCompass.** For closed agent products such as Manus, Kortix, or OpenClaw, GTA-2 can score final execution results directly (see [`agent_app_eval/README.md`](https://github.com/open-compass/GTA/blob/main/agent_app_eval/README.md)).

The leaderboard tracks frontier LLMs (GPT-5, Gemini-2.5, Claude-4.5, Kimi-K2, Grok-4, Llama-4, Deepseek-V3.2, Qwen3-235B-A22B, …) as well as the agent execution harnesses around them, making GTA-2 one of the few benchmarks that explicitly disentangles _model capability_ from _harness quality_.

---

## Resources

- **Code:** [github.com/open-compass/GTA](https://github.com/open-compass/GTA)
- **GTA paper (NeurIPS 2024 D&B):** [proceedings.neurips.cc/...](https://proceedings.neurips.cc/paper_files/paper/2024/file/8a75ee6d4b2eb0b777f549a32a5a5c28-Paper-Datasets_and_Benchmarks_Track.pdf)
- **GTA-2 paper (arXiv 2026):** [arxiv.org/pdf/2604.15715](https://arxiv.org/pdf/2604.15715)
- **GTA-Atomic dataset:** [v0.1.0 release](https://github.com/open-compass/GTA/releases/download/v0.1.0/gta_dataset.zip)
- **GTA-Workflow dataset:** [v0.2.0 release](https://github.com/open-compass/GTA/releases/download/v0.2.0/gta_workflow_dataset.zip)
- **Organization:** [OpenCompass on GitHub](https://github.com/open-compass)

_Figures are reproduced from the official GTA repository (Apache-2.0)._
