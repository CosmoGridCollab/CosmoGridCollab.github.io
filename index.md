---
layout: page
title: "Home"
nav_order: 1
---

# CosmoGridV1 public release

CosmoGridV1 is a large lightcone simulation set for map-level, simulation-based cosmological inference with probes of large scale structure.
It is designed for practical parameter measurement with the Stage-III survey data, for example with KiDS, DES, and HSC.
It was created in [Fluri et al. 2022](https://www.arxiv.org/abs/2201.07771) at the Swiss Supercomputing Center (CSCS).
The paper describing the dataset: [Kacprzak and Fluri et al. 2022](https://arxiv.org/abs/2209.04662).

The example shell maps for different cosmological models are show in the video below. It shows the evolution of structures throughout cosmic history, from high to low redshift. Best viewed in fullscreen UHD.

{% include youtube.html %} 

## News

Check the [News](/news.md) page for information about data availability (including outages), new data releases, code packages, papers and events.


## Credits

CosmoGridV1 was created by Janis Fluri, Tomasz Kacprzak, Aurel Schneider, Alexandre Refregier, and Joachim Stadel at the ETH Zurich and the University of Zurich.
The simulations were run at the Swiss Supercomputing Center (CSCS) as a part of the large production project "Measuring Dark Energy with Deep Learning".
It is hosted at ETH Zurich by the IT Services Group of the Department of Physics.

<p align="center">
       <img src="/figures/ETH_Zürich_Logo_black.svg" width="150" />
       &nbsp; &nbsp; &nbsp; &nbsp;
       <img src="/figures/university-of-zurich-logo.png" width="150" />
       &nbsp; &nbsp; &nbsp; &nbsp;
       <img src="/figures/CSCS_logo.png" width="150" />
</p>


## What is included in CosmoGridV1?

The CosmoGridV1 dataset consists of a total of 20928 simulations divided into three main parts: 
- **grid**: a set of 2500 cosmologies, each with 7 simulations from unique initial conditions (a total of 17500 N-body runs), 
- **fiducial**: simulations and the fiducial cosmology and its ±∆ derivatives, with 200 unique initial conditions (2800 runs),
- **benchmark**: simulation benchmarks used for systematics testing of features chosen for parameter inference (28 runs).

The data is hosted by ETH Zurich and is available via the Globus transfer. For each simulation, we store:

- raw simulation lightcone particle count maps stored at Healpix nside=2048 up to z<3.5 (69 shells per simulation),
- halo catalog snapshots created using the friends-of-friends halo finder, with halo mass of M ~ 10^13 M⊙, at every time step,
- projected full sky weak lensing, galaxy density, and intrinsic alignments maps for a Stage-III forecast, including baryonification, at the nside=512,
- projected KiDS-1000 lensing and intrinsic alignment maps with grid extended with baryonic feedback parameters, from Fluri et al. 2022.

Additional features include:
- shell baryonification with Baryon Correction Model by Scheider et al. 2019,
- NLA intrinsic alignments can be added in post-processing,
- linear and non-linear galaxy biasing models based on the matter density constrast maps can also be added in post-processing,
- ability to create many quasi random projected maps at each grid point using shell permutation scheme.

## Full grid points

The full grid spans 6 cosmological models covered with a Sobol sequence with 2500 points.

<img src="/figures/cosmogrid_points.png"/>

Pink points show the "narrow" grid, while blue points show the "wide" grid.
Additional 200 independent simulations are created at the fiducial cosmology marked with a red star.

## Citing CosmoGridV1

If you use this dataset for any publication, please cite the following papers [Kacprzak and Fluri et al. 2022](https://arxiv.org/abs/2209.04662) and [Fluri et al. 2022](https://arxiv.org/abs/2201.07771). See page [Citing and licence](/credits.md) for details.

## Software used in this project

This project used the [UFalcon](https://cosmology.ethz.ch/research/software-lab/UFalcon.html) lightcone projection method by [Sgier et al. 2019](https://iopscience.iop.org/article/10.1088/1475-7516/2019/01/044) and [Sgier et al. 2020](https://arxiv.org/abs/2007.05735).
CosmoGridV1 was validated on the power spectrum level against the theoretical prediction with [PyCosmo](https://cosmology.ethz.ch/research/software-lab/PyCosmo.html), which was desrcibed in [Tartsitano et al. 2020](https://arxiv.org/abs/2005.00543).
The simulations were run using the [PkdGrav3](https://bitbucket.org/dpotter/pkdgrav3/src/master/) N-body code developed at the University of Zurich, described in [Potter et al. 2016](https://arxiv.org/abs/1609.08621). 
For more on these codes see the [Useful tools](/tools.md) page.


## Licence

This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />

