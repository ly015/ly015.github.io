---
layout: page
title: AgentLego
description: Open-source tool API library to extend and enhance LLM-based agents
img: assets/img/projects/agentlego-banner.png
importance: 2
category: work
visible: true
---

[AgentLego](https://github.com/InternLM/agentlego) is an open-source tool API library designed to extend the capabilities of LLM-based agents. As part of the [InternLM](https://github.com/InternLM) ecosystem, it provides a versatile collection of multimodal tools — covering visual perception, image generation, speech processing, and visual-language reasoning — that can be integrated into popular agent frameworks including LangChain, Transformers Agents, and Lagent. Released under the Apache-2.0 license, AgentLego is designed to be both powerful and easy to adopt, with a lightweight tool-wrapping interface and optional remote tool serving for GPU-heavy models.

I led the development of AgentLego at InternLM, designing the tool API and its integrations with major agent frameworks. My work focused on creating a standard interface that allows different models to be plugged in as tools regardless of their underlying implementation or hosting location, and on building the core integration layers that let researchers adopt the library with minimal overhead.

<div class="row mt-3">
    <div class="col-sm-12 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/agentlego-hero.png" title="AgentLego — versatile tools for LLM agents" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    AgentLego provides a rich, multimodal tool library that LLM-based agents can plug into.
</div>

## Highlights

- **Multimodal tool library** — visual perception, image generation/editing, speech processing, visual-language reasoning.
- **Flexible custom-tool interface** — users can wrap their own functions as tools with arbitrary arguments and outputs.
- **Plug-and-play framework integration** — works with LangChain, Transformers Agents, and Lagent out of the box.
- **Tool serving** — heavy/GPU models can run on a separate machine and be called remotely by a lightweight agent.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/agentlego-logo.png" title="AgentLego logo" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/agentlego-demo.png" title="Tool-use example output" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: AgentLego project logo. Right: an example of an agent invoking AgentLego tools to produce a multimodal answer.
</div>

---

## Multimodal Tool Library

AgentLego offers an extensive set of tools that empower agents with multimodal intelligence. These tools are categorized to address different sensory and creative tasks, providing a comprehensive toolkit for building capable AI assistants. Each category is populated with state-of-the-art models that have been pre-wrapped for immediate use:

- **Visual perception and detection** — object detection, image captioning, and OCR. These tools allow agents to understand the content and layout of images and documents.
- **Image generation and editing** — text-to-image creation and sophisticated image editing. Agents can create new visuals or modify existing ones based on user instructions.
- **Speech processing** — text-to-speech (TTS) and automatic speech recognition (ASR). This enables voice-based interaction and audio content understanding.
- **Visual-language reasoning** — visual question answering (VQA) and multimodal dialog. These advanced tools allow for nuanced discussions about visual content.

The integration of these various tools into a unified API is what sets AgentLego apart from other tool collections. By standardizing the way that agents interact with multimodal models, the library reduces the complexity of building sophisticated AI applications. Developers can focus on the high-level logic of their agents, knowing that the underlying tool interactions are handled by a robust and efficient library. This approach also facilitates the sharing and reuse of tools across different projects and frameworks, fostering a more collaborative ecosystem for agent development.

Detailed documentation and a full list of available tools can be found at [agentlego.readthedocs.io](https://agentlego.readthedocs.io/en/latest/).

## Framework Integration

A key strength of AgentLego is its seamless compatibility with popular agent frameworks. It provides native support for LangChain, Transformers Agents, and Lagent, allowing developers to enhance their existing agents with minimal effort. The tool wrapping process is intentionally lightweight, employing a simple decorator pattern that makes it easy to convert any Python function into a tool. This flexibility ensures that AgentLego can adapt to diverse research and production environments.

The library also supports tool serving, which is particularly useful when working with heavy GPU models. By separating the model execution from the agent logic, developers can run resource-intensive tools on dedicated servers while maintaining a lightweight agent interface. This architecture simplifies deployment and improves the scalability of agentic systems. We have optimized the communication protocol between the agent and the tool server to ensure low latency and high reliability, even when transmitting large multimodal data like high-resolution images or audio files.

The framework integration layer is also designed to be extensible. Adding support for a new agent framework requires only a thin adapter layer, and community contributions to expand framework coverage are welcome. Supported frameworks and integration guides are maintained in the official documentation.

- **LangChain** — wrap any AgentLego tool as a LangChain `Tool` with a single call.
- **Transformers Agents** — register tools directly with Hugging Face's agent interface.
- **Lagent** — native support for the InternLM Lagent framework with zero boilerplate.

[Code](https://github.com/InternLM/agentlego)

---

## Resources

- **Code:** [github.com/InternLM/agentlego](https://github.com/InternLM/agentlego)
- **Documentation:** [agentlego.readthedocs.io](https://agentlego.readthedocs.io/en/latest/)
- **Live demo:** [OpenXLab AgentLego app](https://openxlab.org.cn/apps/detail/mzr1996/AgentLego)
- **Organization:** [InternLM on GitHub](https://github.com/InternLM)

_Logo and demo image are reproduced from the official AgentLego repository (Apache-2.0)._
