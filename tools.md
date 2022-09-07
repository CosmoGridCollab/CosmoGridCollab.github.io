---
layout: page
title: "Useful tools"
permalink: /tools/
toc: true
nav_order: 6
---

# Useful tools for working with CosmoGridV1

This page contains non-exhaustive list of tools that can be useful at different stages of simulation-based inference with CosmoGridV1.


## UFalcon - creating probe maps from lightcone shells

To create a new set of probe maps for a given set of redshift distribution n(z), one needs to calculate the corresponding probe integration kernels. The publicly available **UFalcon** (Ultra Fast Lightcone) code allows for just that. UFalcon is described in these papers: [Sgier et al. 2019](https://iopscience.iop.org/article/10.1088/1475-7516/2019/01/044) and [Sgier et al. 2020](https://arxiv.org/abs/2007.05735). The code is available from the ETH Zurich public Gitlab repository [cosmo-gitlab.phys.ethz.ch/cosmo/UFalcon](https://cosmo-gitlab.phys.ethz.ch/cosmo/UFalcon). More information about UFalcon can be found on the [UFalcon Homepage](https://cosmology.ethz.ch/research/software-lab/UFalcon.html).

## DeepSphere - convolutional neural network for Healpix maps

While CNNs were developed mainly for natural images, we created a CNN that work on the sphere, called **DeepSphere**. It is described in this paper: [arxiv.org/abs/1810.12186](https://arxiv.org/abs/1810.12186). DeepSphere is one of the fastest available spherical convolutions, although has its limitations. The public code for Tensorflow 1/2, and PyTorch, is available from this repository: 
[github.com/deepsphere](https://github.com/deepsphere).

## PyCosmo - cosmological calculator and Boltzman solver

Cosmological background parameters, distances, and perturbations are computed analytically. The package **PyCosmo** uses a fast Boltzman solver to achieve this, including new cosmological models. It is available at [cosmo-docs.phys.ethz.ch/PyCosmo](https://cosmo-docs.phys.ethz.ch/PyCosmo). A live cosmological calculator in Jupyter notebooks is avalilable at [PyCosmoHub](https://pycosmohub.com).
The public release is described in this paper [Tartsitano et al. 2020](https://arxiv.org/abs/2005.00543).
