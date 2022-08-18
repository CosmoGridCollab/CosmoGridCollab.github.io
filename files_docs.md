---
layout: page
title: "Data documentation"
permalink: /data_docs/
---

# Available data products

For each simulation, we store:

- raw simulation lightcone particle count maps stored at Healpix nside=2048 up to z<3.5 (69 shells per simulation),
- halo catalog snapshots created using the friends-of-friends halo finder, with halo mass of M = 10^12 M⊙, at every time step,
- projected full sky weak lensing, galaxy density, and intrinsic alignments maps for a Stage-III forecast, including baryonification, at the nside=512,
- projected KiDS-1000 lensing and intrinsic alignment maps with grid extended with baryonic feedback parameters, from Fluri et al. 2022.


# Simulation files structure

The CosmoGrid directory tree follows this structure:

`CosmoGrid/dataset_type/simulation_set/cosmology/realization/`

where:

- `dataset_type` are the availabe datasets, and currently contain `raw`, `Stage3_forecast` or `KiDS1000_data_products`. the `raw` dataset contains the raw data used to create other sets.

- `simulation_set`:  there are three simulation sets `grid`, `fiducial` and `benchmarks`

- `cosmology`: each directory contains simulations for a given cosmological parameter set

- `realization`: each independent or quasi-independent realization for the given cosmology. This can be from a single, replicated N-body run, or using the shell permutation scheme


# Raw lightcone shells

The raw lightcone shells are stored in `CosmoGrid/raw` and contain: raw shells with nside=2048, snapshot halo catalogs, full sky shells at nside=512 with and without baryonification

| file name     | file content  | comments      |
| ------------- | ------------- | ------------- |
| Content Cell  | Content Cell  | aa            |
| Content Cell  | Content Cell  | aa            |



# Stage-III forecast probe maps 

Probe maps that can be used for making forecasts for Stage-3 large scale structure surveys are stored in `CosmoGrid/stage3_forecast` and condain: full sky projected weak lensing, intrinsic alignment, and galaxy clustering maps at nside=512 for a Stage-III survey forecast. 
This data is described in [Kacprzak et al. 2022](www.arxiv.org/???).

| file name     | file content  | comments      |
| ------------- | ------------- | ------------- |
| Content Cell  | Content Cell  | aa            |
| Content Cell  | Content Cell  | aa            |



# KiDS-1000 weak lensing analysis data

The data used by Fluri et al. 2022 for the KiDS-1000 analysis with deep learning is stored in `CosmoGrid/KiDS1000_data_products`, and contains:  KiDS-1000 lensing maps at nside=512, with and without baryonification, pre-processed noise maps.
This data is described in [Fluri et al. 2022](www.arxiv.org/abs/2201.07771).

| file name     | file content  | comments      |
| ------------- | ------------- | ------------- |
| Content Cell  | Content Cell  | aa            |
| Content Cell  | Content Cell  | aa            |

