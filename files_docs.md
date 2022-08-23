---
layout: page
title: "Data documentation"
permalink: /data_docs/
nav_order: 3
---


# Data documentation
{:.no_toc}

* Placeholder for Table of Content (Must not be removed)
{:toc}


## Available data products

For each simulation, we store:

- raw simulation lightcone particle count maps stored at Healpix nside=2048 up to z<3.5 (69 shells per simulation),
- halo catalog snapshots created using the friends-of-friends halo finder, with halo mass of M = 10^12 M⊙, at every time step,
- projected full sky weak lensing, galaxy density, and intrinsic alignments maps for a Stage-III forecast, including baryonification, at the nside=512,
- projected KiDS-1000 lensing and intrinsic alignment maps with grid extended with baryonic feedback parameters, from Fluri et al. 2022.


## Simulation files structure

The CosmoGrid directory tree follows this structure:

`CosmoGrid/dataset_type/simulation_set/cosmology/realization/`

where:

- `dataset_type` are the availabe datasets, and currently contain `raw`, `stage3_forecast` or `KiDS1000_data_products`. the `raw` dataset contains the raw data used to create other sets.

- `simulation_set`:  there are three simulation sets `grid`, `fiducial` and `benchmarks`

- `cosmology`: each directory contains simulations for a given cosmological parameter set

- `realization`: each independent or quasi-independent realization for the given cosmology. This can be from a single, replicated N-body run, or using the shell permutation scheme

## Simulation datasets

Here we describe the available simulations datasets. The main one is the `raw` dataset. It was created during the Fluri et al. 2022 (F22) project for the KiDS-1000 analysis, but can be used for other new projects.

### Raw lightcone shells

The raw lightcone shells are stored in `CosmoGrid/raw` and contain: raw shells with nside=2048, snapshot halo catalogs, full sky shells at nside=512 with and without baryonification. The raw grid has been assigned baryon feedback parameters as in F22, but one can re-do this and apply a new different baryon feedback model, if needed.

| file name                               | file content  | comments      |
| -------------                           | ------------- | ------------- |
|`realiztation/compressed_shells.npz`     | raw shells at nside=2048 | numpy compressed store with two members: <br /> `shells`: contains the 69 shells, <br /> `shell_info`: table with information about shell boundaries (redshift, comoving distance in Mpc/h)|
|`cosmology/params.yml`                   | yaml file with cosmology parameters, baryonification parameters, random seeds | baryonification parameters are only used for the exended grid  |
|`cosmology/pkd_halos.tar.gz`             | compressed PkdGrav3 halo shapshots for each timestep | the compressed store contains files like `pkd_halos/CosmoML.XXXXX.fofstats.0`, which are the raw PkdGrav3 halo output from the friends-of-friends algorithm, `XXXXX` is the time step|
|`cosmology/Halofile_MinParts=100.npz`    | profiled halos with minimum of 100 particles, from the F22 analysis| Numpy compressed store with the following fields <br /> `shell_info` as above, `halos` catalog of halos with profile parameters obtained by NFW profile fitting in F22 (see below for catalog fields description) |
|`cosmology/param_files.tar.gz`           | compressed collection of logs and configuration files |  The files are: `baryonification_params.py`: configuration input to the shell baryonification code <br />   `baryonified_shells.npz.info`: log of the baryonification code <br />   `class_processed.hdf5`: HDF5 file with background quantities as a function of redshift from the CLASS code <br />   `concept.params`: input to the CONCEPT initial conditions code <br />   `cosmology.par`: PkdGrav3 input file <br />   `CosmoML.log`: raw PkdGrav3 log <br />    |
|`cosmology/shells_nside=512.npz`         | numpy compressed store with 69 maps at nside=512 resolution, without baryonification | contains the same fields as `ompressed_shells.npz` |
|`cosmology/baryonified_shells.npz`       | numpy compressed store with 69 maps at nside=512 resolution, with baryonification | contains the same fields as `ompressed_shells.npz` |
|`cosmology/pkd_spectra.tar.gz`           | compressed raw PkdGrav3 power spectra output | a single filer per time step, like `CosmoML.XXXXX.pk`, where `XXXXX` is the time step  |





### Stage-III forecast probe maps 

Probe maps that can be used for making forecasts for Stage-3 large scale structure surveys are stored in `CosmoGrid/stage3_forecast` and condain: full sky projected weak lensing, intrinsic alignment, and galaxy clustering maps at nside=512 for a Stage-III survey forecast. 
This data is described in [Kacprzak et al. 2022](www.arxiv.org/???).

| file name     | file content  | comments      |
| ------------- | ------------- | ------------- |
| `realization/projected_probes_maps_baryonified512.h5`   | HDF5 store with baryonified probe maps for 4 redshift bins for lensing, clustering and intrinsic alignment probes | the HDF5 file has the following structure: `probe/sample`|                            
| `realization/projected_probes_maps_nobaryons512.h5`     | Same as above, but with no baryonification | same as above |                          
| `realization/shell_permutations_index.h5`               | HDF5 store with information about the shell selection for the shell permutation scheme | contains datsets:  <br /> `shell_groups`: list of shell groups taken from different simulations   <br /> `perms_info`: information which simulation to use for each shell group and whether to apply rotations or flips (see below for description of this table)|                
| `probe_weights_kg_ia_dg.h5`                             | HDF store with probe projection kernels, single value for shell mean redshift | datasets are organized as `probe/sample` | 



### KiDS-1000 weak lensing analysis data

The data used by Fluri et al. 2022 for the KiDS-1000 analysis with deep learning is stored in `CosmoGrid/KiDS1000_data_products`, and contains:  KiDS-1000 lensing maps at nside=512, with and without baryonification, pre-processed noise maps.
This data is described in [Fluri et al. 2022](www.arxiv.org/abs/2201.07771).

| file name     | file content  | comments      |
| ------------- | ------------- | ------------- |
| realization/CosmoML.log                         | | |
| realization/Halofile_MinParts=100.npz'          | | |
| realization/baryonification_params.py           | | |
| realization/baryonified_shells.npz              | | |
| realization/baryonified_shells.npz.info         | | |
| realization/class_processed.hdf5                | | |
| realization/concept.params                      | | |
| realization/cosmology.par                       | | |
| realization/noise_patches.npz                   | | |
| realization/params.yml                          | | |
| realization/projected_patches_baryon_euler.npz  | | |
| realization/projected_patches_euler.npz         | | |
| realization/shells_nside=512.npz'               | | |
| realization/wl_weights.npz                      | | |


## Catalog fields

In this section we describe fields in various catalogs contained by the files above.

### Shell information


Information about shells boundaries and centers. Those are different for every cosmology, but the same for all realiszations for the same cosmology. It can be found in `compressed_shells.npz` in the `shell_info` field.

| field         | data type     | content       |
| ------------- | ------------- | ------------- |
|`shell_name`      |   U512     | file name of the original shell (not needed) |    
|`shell_id`        |   i4       | id of the shell |
|`lower_z`         |   f4       | redshift of the lower boundary of the shell |
|`upper_z`         |   f4       | redshift of the upper boundary of the shell |
|`lower_com`       |   f4       | comoving distance to the lower boundary of the shell |
|`upper_com`       |   f4       | comoving distance to the upper boundary of the shell |
|`shell_com`       |   f4       | comoving distance to the center of the shell |

### Profiled halo catalogs

The halo catalog with profile paameters are condained in files like `Halofile_MinParts=100.npz` and have the following attributes for each halo:

| field         | data type     | content       |
| ------------- | ------------- | ------------- |
|`ID`             | <i8 | |
|`IDhost`         | <i8 | |
|`Mvir`           | <f8 | |
|`Nvir`           | <i8 | |
|`x`              | <f8 | |
|`y`              | <f8 | |
|`z`              | <f8 | |
|`rvir`           | <f8 | |
|`cvir`           | <f8 | |
|`tfNFW_cvir`     | <f8 | |
|`tfNFW_tau`      | <f8 | |
|`tfNFW_Mvir`     | <f8 | |
|`shell_id`       | <i4 | |


### Shell permutation index

Configuration for shell permutation scheme. It can be found in `shell_permutations_index.h5` files.

| field         | data type     | content       |
| ------------- | ------------- | ------------- |
|id_sim  |    <i4 | simulation id for the shell group (0-6 for the grid and 0-199 for the fiducial |
|rot     |    <i4 | 0, 1, 2, or 3, apply the rotation by a multiple of rot * 45 deg  |
|flip_ud |    <i4 | 0 or 1, if to apply the the up-down flip |
|flip_lr |    <i4 | 0 or 1, if to apply the the left-right flip |

