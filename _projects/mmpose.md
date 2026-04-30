---
layout: page
title: MMPose
description: OpenMMLab Pose Estimation Toolbox and Benchmark
img: assets/img/projects/mmpose-wholebody.gif
importance: 0
category: work
visible: true
---

[MMPose](https://github.com/open-mmlab/mmpose) is an open-source pose estimation toolbox built on PyTorch
and a member of the [OpenMMLab](https://github.com/open-mmlab) project. It provides a unified codebase
covering 2D / 3D body, hand, face, whole-body, and animal pose, with a fully modular design,
production-ready deployment paths, and an extensive collection of pretrained models. As of the
[1.3 release](https://github.com/open-mmlab/mmpose/releases), MMPose ships **18+ algorithms**,
**9+ training/inference techniques**, and benchmarks on **35+ datasets**.

I was a core member of OpenMMLab and led the development of MMPose &mdash; from the initial public
release through the 1.x series.

<div class="row mt-3">
    <div class="col-sm-12 mt-3 mt-md-0">
        {% include video.liquid path="https://user-images.githubusercontent.com/15977946/124654387-0fd3c500-ded1-11eb-84f6-24eeddbf4d91.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true muted=true loop=true %}
    </div>
</div>
<div class="caption">
    Whole-body pose estimation across diverse scenes &mdash; the official MMPose intro video.
</div>

## Highlights

- **Comprehensive task coverage.** Top-down and bottom-up 2D pose, 3D body / hand / whole-body,
  fashion landmark detection, animal pose, and video pose tracking &mdash; all in one toolbox.
- **State-of-the-art models.** From classics (HRNet, SimpleBaseline, Hourglass) to modern
  representations (SimCC, DSNT, RLE) and the real-time **RTMPose** series featured below.
- **Production-grade deployment.** First-class support via [MMDeploy](https://github.com/open-mmlab/mmdeploy)
  for ONNX, TensorRT, ncnn, OpenVINO, CoreML, and TorchScript, including mobile / edge backends.
- **Reproducible research.** Unified configs, model zoo, training recipes, and detailed evaluation
  scripts to reproduce published numbers.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/mmpose-pose.gif" title="2D multi-person pose demo" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/mmpose-wholebody.gif" title="Whole-body 133-keypoint demo" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: 2D multi-person pose estimation. Right: whole-body 133-keypoint estimation
    (body + face + hands + feet) running on real-world footage.
</div>

---

## The RTMPose Series

The **RTMPose** family is a line of real-time pose estimators we developed inside MMPose to close
the long-standing gap between accuracy and deployment speed. The series now includes three models
&mdash; **RTMPose** for 2D body pose, **RTMO** for one-stage multi-person pose, and **RTMW** for
real-time whole-body pose.

### RTMPose — Real-Time 2D Multi-Person Pose Estimation

[Code](https://github.com/open-mmlab/mmpose/tree/main/projects/rtmpose) ·
[Paper (arXiv:2303.07399)](https://arxiv.org/abs/2303.07399)

<div class="row justify-content-sm-center">
    <div class="col-sm-12 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/rtmpose.png" title="RTMPose architecture and benchmark" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    RTMPose investigates five key aspects of a real-time pose estimator &mdash; paradigm,
    backbone, localization, training, and deployment &mdash; and combines them into a single
    SimCC-based pipeline.
</div>

RTMPose is a top-down pose estimator with a SimCC-style coordinate-classification head, optimized
end-to-end for both accuracy and on-device latency. Headline numbers from the paper:

- **RTMPose-m**: **75.8% AP** on COCO with **90+ FPS** on an Intel i7-11700 CPU and
  **430+ FPS** on an NVIDIA GTX 1660 Ti GPU.
- **RTMPose-s**: **72.2% AP** with **70+ FPS** on a Snapdragon 865 mobile chip.
- Variants: **t / s / m / l / x**, in 256×192 and 384×288 input resolutions.
- Deployment: ONNX, TensorRT, ncnn, OpenVINO, CoreML &mdash; all bundled via MMDeploy.

### RTMO — One-Stage Real-Time Multi-Person Pose Estimation

[Code](https://github.com/open-mmlab/mmpose/tree/main/projects/rtmo) ·
[Paper (arXiv:2312.07526)](https://arxiv.org/abs/2312.07526)

<div class="row justify-content-sm-center">
    <div class="col-sm-12 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/rtmo.gif" title="RTMO one-stage multi-person pose demo" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    RTMO removes the human detector and predicts all keypoints in a single YOLO-style forward pass,
    using dual 1-D heatmaps and a dynamic coordinate classifier.
</div>

Where RTMPose is top-down (detect → crop → pose), **RTMO is one-stage** &mdash; it directly regresses
keypoints from the full image, dramatically simplifying the pipeline at competitive accuracy.

- **RTMO-l**: **74.8% AP** on COCO val2017 at **141 FPS** on a single V100, eliminating the
  detector + per-person crop overhead.
- Strong robustness on crowded scenes (CrowdPose).
- Variants: **t / s / m / l**, trained on COCO and the broader body7 mixture.

### RTMW — Real-Time Whole-Body Pose Estimation

[Code](https://github.com/open-mmlab/mmpose/tree/main/projects/rtmpose) ·
[Paper (arXiv:2407.08634)](https://arxiv.org/abs/2407.08634)

<div class="row justify-content-sm-center">
    <div class="col-sm-12 mt-3 mt-md-0">
        {% include video.liquid path="assets/video/projects/rtmw-demo.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true muted=true loop=true %}
    </div>
</div>
<div class="caption">
    RTMW extends RTMPose to <strong>133 whole-body keypoints</strong> (body + face + hands + feet),
    trained on the Cocktail14 combined-data setup for strong cross-domain generalization.
    Demo video courtesy of
    <a href="https://x.com/OpenMMLab/status/1812737835981738233">@OpenMMLab</a>.
</div>

RTMW (Real-Time Multi-person Whole-body) closes the same speed/accuracy gap for whole-body pose,
which is critical for downstream tasks like motion capture, AIGC, and sign-language understanding.

- **RTMW-x** at 384×288: **70.2% Whole AP** / **78.1% Whole AR** on COCO-WholeBody.
- **RTMW-l** also reaches **70.1% Whole AP**, with mobile-friendly variants in the m / l / x family.
- Trained on **Cocktail14**, a curated mixture of 14 public whole-body datasets covering a much
  broader appearance distribution than COCO-WholeBody alone.

---

## Resources

- **Code:** [github.com/open-mmlab/mmpose](https://github.com/open-mmlab/mmpose)
- **Documentation:** [mmpose.readthedocs.io](https://mmpose.readthedocs.io/)
- **Demos:** [mmpose.readthedocs.io/en/latest/demos.html](https://mmpose.readthedocs.io/en/latest/demos.html)
- **Model zoo:** [mmpose.readthedocs.io/en/latest/model_zoo.html](https://mmpose.readthedocs.io/en/latest/model_zoo.html)
