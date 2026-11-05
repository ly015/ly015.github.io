// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "news-we-introduce-agentlego-a-modular-tool-library-to-equip-llm-agents-with-composable-multi-modal-capabilities-through-standardized-tool-interfaces",
          title: 'We introduce AgentLego, a modular tool library to equip LLM agents with composable,...',
          description: "",
          section: "News",},{id: "news-3-papers-accepted-to-cvpr-2024-rtmo-omg-seg-and-rovi",
          title: '3 papers accepted to CVPR 2024: RTMO, OMG-Seg and ROVI.',
          description: "",
          section: "News",},{id: "news-internlm2-technical-report-is-online",
          title: 'InternLM2 technical report is online.',
          description: "",
          section: "News",},{id: "news-open-vocabulary-sam-is-accepted-to-eccv-2024",
          title: 'Open-Vocabulary SAM is accepted to ECCV 2024.',
          description: "",
          section: "News",},{id: "news-we-released-rtmw-the-newest-addition-to-rtmpose-series-which-specializes-in-predicting-whole-body-2d-and-3d-keypoints-simultaneously-in-real-time",
          title: 'We released RTMW, the newest addition to RTMPose series, which specializes in predicting...',
          description: "",
          section: "News",},{id: "news-5-papers-accepted-to-neurips-2024-3-in-the-main-track-motionbooth-adc-xcomposer2-4khd-and-2-in-the-datasets-and-benchmarks-track-gta-mmbench-video",
          title: '5 papers accepted to NeurIPS 2024, 3 in the main track (MotionBooth, ADC,...',
          description: "",
          section: "News",},{id: "news-internlm3-8b-instruct-is-released-supporting-both-a-normal-response-mode-for-general-purpose-and-a-deep-thinking-mode-for-solving-complicated-reasoning-tasks-via-long-cot",
          title: 'InternLM3-8B-Instruct is released, supporting both a normal response mode for general purpose and...',
          description: "",
          section: "News",},{id: "news-rmp-sam-is-accepted-to-iclr-2025-as-an-oral-presentation",
          title: 'RMP-SAM is accepted to ICLR 2025 as an oral presentation.',
          description: "",
          section: "News",},{id: "news-mig-is-accepted-to-acl-2025-findings",
          title: 'MIG is accepted to ACL 2025 Findings.',
          description: "",
          section: "News",},{id: "news-auto-cherry-picker-is-accepted-to-cvpr-2025",
          title: 'Auto Cherry-Picker is accepted to CVPR 2025.',
          description: "",
          section: "News",},{id: "news-mg-llava-is-accepted-to-tcsvt",
          title: 'MG-LLaVA is accepted to TCSVT.',
          description: "",
          section: "News",},{id: "news-kernel-smith-technical-report-is-online",
          title: 'Kernel-Smith technical report is online.',
          description: "",
          section: "News",},{id: "news-routemoa-is-accepted-to-acl-2026",
          title: 'RouteMoA is accepted to ACL 2026.',
          description: "",
          section: "News",},{id: "news-trex-technical-report-is-available-we-introduce-trex-a-tree-search-enhanced-agentic-system-that-automates-the-challenging-process-of-llm-fine-tuning-along-with-a-new-benchmark-ft-bench-comprising-10-fine-tuning-tasks-to-evaluate-automatic-research-systems-check-out-the-project-page-for-more-information",
          title: 'TREX technical report is available. We introduce TREX, a tree-search enhanced agentic system...',
          description: "",
          section: "News",},{id: "news-datachef-is-accepted-to-emnlp-2026-findings",
          title: 'DataChef is accepted to EMNLP 2026 Findings.',
          description: "",
          section: "News",},{id: "news-atria-dawn-preview-a-744b-parameter-agentic-foundation-model-with-advanced-capabilities-in-scientific-research-and-engineering-is-now-available-read-the-technical-report-and-visit-the-project-website",
          title: 'Atria Dawn Preview, a 744B-parameter agentic foundation model with advanced capabilities in scientific...',
          description: "",
          section: "News",},{id: "projects-agentlego",
          title: 'AgentLego',
          description: "Open-source tool API library to extend and enhance LLM-based agents",
          section: "Projects",handler: () => {
              window.location.href = "/projects/agentlego/";
            },},{id: "projects-gta",
          title: 'GTA',
          description: "A hierarchical benchmark for General Tool Agents — from atomic tool-use to open-ended workflows",
          section: "Projects",handler: () => {
              window.location.href = "/projects/gta/";
            },},{id: "projects-mmpose",
          title: 'MMPose',
          description: "OpenMMLab Pose Estimation Toolbox and Benchmark",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mmpose/";
            },},{id: "projects-trex",
          title: 'TREX',
          description: "Automating LLM fine-tuning via agent-driven tree-based exploration",
          section: "Projects",handler: () => {
              window.location.href = "/projects/trex/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/Yining_Li_Resume.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6C%69%79%69%6E%69%6E%67@%70%6A%6C%61%62.%6F%72%67.%63%6E", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=y_cp1sUAAAAJ", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/ly015", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/yiningli_", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
