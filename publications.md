---
layout: page
title: "Publications"
permalink: /publications/
---


## Towards a full wCDM map-based analysis for weak lensing surveys

Dominik Zürcher, Janis Fluri, Virginia Ajani, Silvan Fischbacher, Alexandre Refregier, Tomasz Kacprzak

[https://arxiv.org/abs/2206.01450](https://arxiv.org/abs/2206.01450)

<img src="/figures/zuercher2022.png" height="100" />

> The next generation of weak lensing surveys will measure the matter distribution of the local Universe with unprecedented precision. This encourages the use of higher-order mass-map statistics for cosmological parameter inference. However, the increased quality of the data poses new challenges for map-based analyses. We extend the methodology introduced in arXiv:2006.12506 to match these requirements. Using this pipeline, we provide forecasts for the wCDM parameter constraints for stage 3 and stage 4 weak lensing surveys. We consider different survey setups, summary statistics and mass map filters including Starlets. The impact of baryons on the summary statistics is investigated and the necessary scale cuts are applied in the forecast. We compare the traditional angular power spectrum analysis to two extrema count statistics (peak and minima counts) as well as Minkowski functionals and the Starlet ℓ1-norm of the mass maps. In terms of map filters we find a preference for Starlet over Gaussian filters. Our results further suggest that using a survey setup with 10 instead of 5 tomographic redshift bins is beneficial. The addition of cross-tomographic information is found to improve the constraints on cosmology and especially on galaxy intrinsic alignment for all statistics. In terms of constraining power, we find the angular power spectrum and the peak counts to be equally matched for stage 4 surveys, followed by minima counts, the Minkowski functionals and then the Starlet ℓ1-norm. Combining different summary statistics significantly improves the constraints and compensates for the constraining power that is lost due to the stringent scale cuts. We identify the most cost-effective combination to be the angular power spectrum, peak counts and Minkowski functionals following Starlet filtering. 



## A Full wCDM Analysis of KiDS-1000 Weak Lensing Maps using Deep Learning

Janis Fluri, Tomasz Kacprzak, Aurelien Lucchi, Aurel Schneider, Alexandre Refregier, and Thomas Hofmann

[arxiv.org/abs/2201.07771](https://arxiv.org/abs/2201.07771)

<img src="/figures/fluri2022.png" height="100" />

> We present a full forward-modeled wCDM analysis of the KiDS-1000 weak lensing maps using graph-convolutional neural networks (GCNN). Utilizing the CosmoGrid, a novel massive simulation suite spanning six different cosmological parameters, we generate almost one million tomographic mock surveys on the sphere. Due to the large data set size and survey area, we perform a spherical analysis while limiting our map resolution to HEALPix nside = 512. We marginalize over systematics such as photometric redshift errors, multiplicative calibration and additive shear bias. Furthermore, we use a map-level implementation of the non-linear intrinsic alignment model along with a novel treatment of baryonic feedback to incorporate additional astrophysical nuisance parameters. We also  perform a spherical power spectrum analysis for comparison. The constraints of the cosmological parameters are generated using a likelihood-free inference method called Gaussian Process Approximate Bayesian Computation (GPABC). Finally, we check that our pipeline is robust against choices of the simulation parameters. We find constraints on the degeneracy parameter of S8 ≡ σ8 (ΩM /0.3)^0.5 = 0.78+/-0.06 for our power spectrum analysis and S8 = 0.79+/-0.05 for our GCNN analysis, improving the former by 16%. This is consistent with earlier analyses of the 2-point function, albeit slightly higher.  Baryonic corrections generally broaden the constraints on the degeneracy parameter by about 10%. These results offer great prospects for full machine learning based analyses of on-going and future weak lensing surveys.



## Dark Energy Survey Year 3 results: Cosmology with peaks using an emulator approach

Dominik Zürcher, Janis Fluri, Raphael Sgier, Tomasz Kacprzak, Marco Gatti, Cyrille Doux, Lorne Whiteway, Alexandre Refregier, and the DES Collaboration

[arxiv.org/abs/2110.10135](https://arxiv.org/abs/2110.10135)

<img src="/figures/zuercher2021.png" height="100" />

> We constrain the matter density Ωm and the amplitude of density fluctuations σ8 within the ΛCDM cosmological model with shear peak statistics and angular convergence power spectra using mass maps constructed from the first three years of data of the Dark Energy Survey (DES Y3). We use tomographic shear peak statistics, including cross-peaks: peak counts calculated on maps created by taking a harmonic space product of the convergence of two tomographic redshift bins. Our analysis follows a forward-modelling scheme to create a likelihood of these statistics using N-body simulations, using a Gaussian process emulator. We include the following lensing systematics: multiplicative shear bias, photometric redshift uncertainty, and galaxy intrinsic alignment. Stringent scale cuts are applied to avoid biases from unmodelled baryonic physics. We find that the additional non-Gaussian information leads to a tightening of the constraints on the structure growth parameter yielding S8 ≡ σ8 √(Ωm/0.3) = 0.797+0.015−0.013 (68% confidence limits), with a precision of 1.8%, an improvement of ~38% compared to the angular power spectra only case. The results obtained with the angular power spectra and peak counts are found to be in agreement with each other and no significant difference in S8 is recorded. We find a mild tension of 1.5σ between our study and the results from Planck 2018, with our analysis yielding a lower S8. Furthermore, we observe that the combination of angular power spectra and tomographic peak counts breaks the degeneracy between galaxy intrinsic alignment AIA and S8, improving cosmological constraints. We run a suite of tests concluding that our results are robust and consistent with the results from other studies using DES Y3 data.


## Cosmological Forecast for non-Gaussian Statistics in large-scale weak Lensing Surveys

Dominik Zürcher, Janis Fluri, Raphael Sgier, Tomasz Kacprzak, Alexandre Refregier

[arxiv.org/abs/2006.12506](https://arxiv.org/abs/2006.12506)

<img src="/figures/zuercher2020.png" height="100" />

> Cosmic shear data contains a large amount of cosmological information encapsulated in the non-Gaussian features of the weak lensing mass maps. This information can be extracted using non-Gaussian statistics. We compare the constraining power in the Ωm−σ8 plane of three map-based non-Gaussian statistics with the angular power spectrum, namely; peak/minimum counts and Minkowski functionals. We further analyze the impact of tomography and systematic effects originating from galaxy intrinsic alignments, multiplicative shear bias and photometric redshift systematics. We forecast the performance of the statistics for a stage-3-like weak lensing survey and restrict ourselves to scales ≥ 10 arcmin. We find, that in our setup, the considered non-Gaussian statistics provide tighter constraints than the angular power spectrum. The peak counts show the greatest potential, increasing the Figure-of-Merit (FoM) in the Ωm−σ8 plane by a factor of about 4. A combined analysis using all non-Gaussian statistics in addition to the power spectrum increases the FoM by a factor of 5 and reduces the error on S8 by ≈ 25\%. We find that the importance of tomography is diminished when combining non-Gaussian statistics with the angular power spectrum. The non-Gaussian statistics indeed profit less from tomography and the minimum counts and Minkowski functionals add some robustness against galaxy intrinsic alignment in a non-tomographic setting. We further find that a combination of the angular power spectrum and the non-Gaussian statistics allows us to apply conservative scale cuts in the analysis, thus helping to minimize the impact of baryonic and relativistic effects, while conserving the cosmological constraining power. We make the code that was used to conduct this analysis publicly available.

