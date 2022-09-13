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
- projected KiDS-1000 lensing and intrinsic alignment maps with grid extended with baryonic feedback parameters, in the TFRecords format, from Fluri et al. 2022.


## Simulation files structure

The CosmoGrid directory tree follows this structure:

`CosmoGrid/dataset_type/simulation_set/cosmology/realization/`

where:

- `dataset_type` are the availabe datasets, and currently contain `raw`, `stage3_forecast`. The `raw` dataset contains the raw data used to create other sets.

- `simulation_set`:  there are three simulation sets `grid`, `fiducial` and `benchmarks`

- `cosmology`: each directory contains simulations for a given cosmological parameter set

- `realization`: each independent or quasi-independent realization for the given cosmology. This can be from a single, replicated N-body run, or using the shell permutation scheme


## Simulation metadata

File `CosmoGridV1_metainfo.h5` contains metadata useful for working with the simulaitons: cosmological parameters, random seeds, file paths, boundaries of shells, etc.


#### Simulations and input parameters

Dataset `simulations` contains a list of all unique simulation runs, divided by `simulation_set`. 
Dataset `parameters` contains a list of all unique cosmology input parameters. 
The colums in these datasets are as follows, with `parameters` containing only a relevant sub-set of them:

| column                                                | data type | content       |
| -------------                                         | ----------| ------------- |
| As, H0, O_cdm, O_nu, Ob, Ol, Om, m_nu, ns, w0, wa, s8 |  f8       | cosmological parameters                                                                            |        
| bary_Mc, bary_nu                                      |  f8       | baryonification parameters                                                                         |      
| pkd_seed                                              |  f8       | seed for initial conditions                                                                        |       
| sobol_seed                                            |  i8       | sobol index (for the grid)                                                                         |      
| seed_index                                            |  i4       | index of the initial conditions seed                                                               |                
| delta                                                 |  S128     | type of the delta run (for the fiducial)                                                           |                    
| sobol_index                                           |  i4       | index of the sobol sequence (for the grid)                                                         |                      
| benchmark_type                                        |  S128     | benchmark type (for benchmarks: particle_count, box_size, fiducial_bench, redshift_resolution)   |                                                                            
| id_sim                                                |  i4       | index of the unique simulation                                                                     |          
| id_param                                              |  i4       | index of the unique parameter set                                                                  |              
| path_sim                                              |  S128     | path to the simulation directory in the CosmoGrid dirs structure                                   |                                            
| path_par                                              |  S128     | path to the parameters directory in the CosmoGrid dirs structure                                   |                                            
| box_size_Mpc_over_h                                   |  f8       | box size of the simulation                                                                         |      
| n_particles                                           |  i8       | number of particles of the simulation                                                              |                 
| n_shells                                              |  i4       | number of shells generated                                                                         |      
| n_steps                                               |  i4       | number of PkdGrav3 steps                                                                           |    


#### Shell information

The dataset `shell_info` contains information about shell boundaries for each simulation. Inside this dataset one should follow the CosmoGridV1 file structure, for example `shell_info/CosmoGrid/raw/grid/cosmo_203124`. These dataset names contain the `raw` key, but it can be replaced by the relevant other set. These entries contain tables with the following fields:

| column                                                | data type | content       |
| -------------                                         | ----------| ------------- |
| shell_id    |   i4  |  index of the shell, lowest redshift first   |
| lower_z     |   f4  |  redshift of the lower edge                  |
| upper_z     |   f4  |  redshift of the upper edge                  |
| lower_com   |   f4  |  comoving distance to the lower edge         |
| upper_com   |   f4  |  comoving distance to the upper edge         |
| shell_com   |   f4  |  comoving distance to the center             |


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

The data used by Fluri et al. 2022 for the KiDS-1000 analysis with deep learning is stored in `CosmoGrid/KiDS1000_data_products`, and contains:  KiDS-1000 lensing maps at nside=512, with and without baryonification, pre-processed noise maps that were used to train and evaluate the networks. 
This data is described in [Fluri et al. 2022](www.arxiv.org/abs/2201.07771). It is stored in the [TFRecord](https://www.tensorflow.org/tutorials/load_data/tfrecord) format and requires decoding. Additionally, only the relevant patches are stored. For the grid, we provide 250 `tfrecord` files named `grid_data_{num:03d}.tfrecord`, where `num` corresponds to the file number. Each file contains the samples from 10 cosmological parameter combinations and their labels used for the evaluations of the networks used in [Fluri et al. 2022](www.arxiv.org/abs/2201.07771). We provide these sample with or without applied baryonification. The fiducial maps are split into signal only patches with or without applied baryonification and pure noise maps that were used for training or evaluation. Furthermore, a single sample of a fiducial file contains the maps of all delta simulations with the same seed to alleviate the calculations of the derivatives. To decode the files we provide the `read_TFR.py` script that implements the following functions:

```python
def get_fidu_dset(fname, baryon=False):
    """
    Returns a dataset of a fiducial TFRecord file
    :param fname: file name to decode
    :param baryon: If baryonification was applied to this file
    :return: A tensorflow dataset where each sample is a dictionary containing either 15 (if baryon=False)
             or 19 elements (if baryon=True). Each entry is named "patch_{num}" and has the shape
             (149504, 10) where the first dimension indicates the pixels in NEST ordering and the second
             dimension the shear field with the first 5 entries corresponding to gamma_1 of the five
             redshift bins followed by gamma_2. The ordering of the patches is:
             fiducial, -delta omega_m, +delta omega_m, -delta sigma_8, +delta sigma_8
             -delta h_0, +delta h_0, -delta omega_b, +delta omega_b,
             -delta n_s, +delta n_s, -delta w_0, +delta w_0,
             -delta A_IA, +delta A_IA, -delta log10M_c, +delta log10M_c,
             -delta nu, +delta nu
             where the baryonification parameter patches (log10M_c and nu) are only included if baryon=True.
    """
    
def get_grid_dset(fname, baryon=False):
    """
    Returns a dataset of a gird TFRecord file
    :param fname: file name to decode
    :param baryon: If baryonification was applied to this file
    :return: A tensorflow dataset containing two elements. The first element has a shape of (149504, 10)
             where the first dimension indicates the pixels in NEST ordering and the second
             dimension the shear field with the first 5 entries corresponding to gamma_1 of the five
             redshift bins followed by gamma_2. The second element is the label of the cosmology having a
             length of 9 if baryon=False and 11 if baryon=True. The order of the label is:
             omega_m, sigma_8, h_0, omega_b, n_s, w_0, A_IA, log10M_c, nu, omega_nu, A_s
             where the baryonification parameters (log10M_c and nu) are only included if baryon=True.
    """
    
def get_noise_dset(fname):
    """
    Returns a dataset of a noise TFRecord file
    :param fname: file name to decode
    :return: A tensorflow dataset containing an element of a noise map with a shape of (149504, 10)
             where the first dimension indicates the pixels in NEST ordering and the second
             dimension the shear field with the first 5 entries corresponding to gamma_1 of the five
             redshift bins followed by gamma_2.
    """
```

Additionally we provide a file `pixel_indices_NEST.npy` containing the indices of the patches such that they can be maped onto full sky maps, as the following snippet illustrates:

```python
from read_TFR import get_fidu_dset
import healpy as hp
import numpy as np

# load the dataset
fname = ...
dset = get_fidu_dset(fname)

# get the first element
b = next(iter(dset))
    
# load the pixel indices
pix = np.load("pixel_indices_NEST.npy")

# create and fill the map, note that the map is in NEST ordering
m = np.zeros(hp.nside2npix(512))
m[pix] = b.numpy()[:,5] # gamma_1 of z-bin 5

# plot
hp.mollview(m, nest=True)
```

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
|`ID`             | <i8 | Unique ID number of the halo. |
|`IDhost`         | <i8 | ID of the host halo, a dummy variable set to -1. |
|`Mvir`           | <f8 | NFW profile viral mass of the halo [Msun/h]. |
|`Nvir`           | <i8 | Number of particles inside the NFW viral radius. |
|`x`              | <f8 | x-coordinate of the halo in the lightcone [kpc/h]. |
|`y`              | <f8 | y-coordinate of the halo in the lightcone [kpc/h]. |
|`z`              | <f8 | z-coordinate of the halo in the lightcone [kpc/h]. |
|`rvir`           | <f8 | NFW viral radius of the halo [kpc/h]. |
|`cvir`           | <f8 | NFW concentration of the halo. |
|`tfNFW_cvir`     | <f8 | Concentration of the truncated NFW profile, dummy variable set to -1. |
|`tfNFW_tau`      | <f8 | Tau of the truncated NFW profile, dummy variable set to -1. |
|`tfNFW_Mvir`     | <f8 | Viral mass of the truncated NFW profile, dummy variable set to -1. |
|`shell_id`       | <i4 | ID of the shell to which the halo corresponds, see `shell_info` tables in the shell files. |


### Shell permutation index

Configuration for shell permutation scheme. It can be found in `shell_permutations_index.h5` files.

| field         | data type     | content       |
| ------------- | ------------- | ------------- |
|id_sim  |    <i4 | simulation id for the shell group (0-6 for the grid and 0-199 for the fiducial |
|rot     |    <i4 | 0, 1, 2, or 3, apply the rotation by a multiple of rot * 45 deg  |
|flip_ud |    <i4 | 0 or 1, if to apply the the up-down flip |
|flip_lr |    <i4 | 0 or 1, if to apply the the left-right flip |

