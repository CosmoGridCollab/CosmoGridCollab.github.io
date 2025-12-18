---
layout: page
title: "Publications"
permalink: /publications/
toc: true
nav_order: 6
---

<style>
img {
  max-width: 70%;
  height: auto;
  margin: auto;
  display: block;
}
</style>


# List of publications using CosmoGridV1
{:.no_toc}
Non-exhaustive list of papers (in prep, submitted, or published) that use CosmoGridV1.

* Placeholder for Table of Content (Must not be removed)
{:toc}

## The Shear-to-Cosmology Paradigm I: Hybrid Field-Level and Simulation-Based Framework for Weak Lensing Surveys


Jiacheng Ding, Chen Su, Ji Yao, Le Zhang, Huanyuan Shan

[arxiv.org/abs/2511.22851](https://arxiv.org/abs/2511.22851)


> Precise cosmological inference from next-generation weak lensing surveys requires extracting non-Gaussian information beyond standard two-point statistics. We present a hybrid machine-learning (ML) framework that integrates field-level inference (FLI) with simulation-based inference (SBI) to map observed shear fields directly to cosmological parameters, eliminating the need for convergence reconstruction. The FLI network extracts rich non-Gaussian information from the shear field to produce informative features, which are then used by SBI to model the resulting complex posteriors. To mitigate noise from intrinsic galaxy shapes, we develop a blind, training-free, PCA-based shear denoising method. Tests on CSST-like mock catalogs reveal significant performance gains. The shear-based inference achieves approximately twice the cosmological constraining power in Figure of Merit (FoM) compared to the conventional convergence-based approach. Moreover, the combination of PCA denoising and ML compression can deliver a 36.4% improvement in FoM over standard shear two-point statistics. This work establishes a scalable and robust pathway for cosmological inference, unlocking the full potential of Stage-IV weak-lensing surveys.



## Dark Energy Survey Year 3 results: Simulation-based wCDM inference from weak lensing and galaxy clustering maps with deep learning. I. Analysis design

A. Thomsen, J. Bucko, T. Kacprzak, V. Ajani, J. Fluri, A. Refregier, DES Collaboration

[arxiv.org/abs/2511.04681](https://arxiv.org/abs/2511.04681)



> Data-driven approaches using deep learning are emerging as powerful techniques to extract non-Gaussian information from cosmological large-scale structure. This work presents the first simulation-based inference (SBI) pipeline that combines weak lensing and galaxy clustering maps in a realistic Dark Energy Survey Year 3 (DES Y3) configuration and serves as preparation for a forthcoming analysis of the survey data. We develop a scalable forward model based on the CosmoGridV1 suite of N-body simulations to generate over one million self-consistent mock realizations of DES Y3 at the map level. Leveraging this large dataset, we train deep graph convolutional neural networks on the full survey footprint in spherical geometry to learn low-dimensional features that approximately maximize mutual information with target parameters. These learned compressions enable neural density estimation of the implicit likelihood via normalizing flows in a ten-dimensional parameter space spanning cosmological wCDM, intrinsic alignment, and linear galaxy bias parameters, while marginalizing over baryonic, photometric redshift, and shear bias nuisances. To ensure robustness, we extensively validate our inference pipeline using synthetic observations derived from both systematic contaminations in our forward model and independent Buzzard galaxy catalogs. Our forecasts yield significant improvements in cosmological parameter constraints, achieving 2−3× higher figures of merit in the Ωm−S8 plane relative to our implementation of baseline two-point statistics and effectively breaking parameter degeneracies through probe combination. These results demonstrate the potential of SBI analyses powered by deep learning for upcoming Stage-IV wide-field imaging surveys.

## Dimensionality Reduction Techniques for Statistical Inference in Cosmology

Minsu Park, Marco Gatti, Bhuvnesh Jain

[arxiv.org/abs/2409.02102](https://arxiv.org/abs/2409.02102)



> We explore linear and non-linear dimensionality reduction techniques for statistical inference of parameters in cosmology. Given the importance of compressing the increasingly complex data vectors used in cosmology, we address questions that impact the constraining power achieved, such as: Are currently used methods effectively lossless? Under what conditions do nonlinear methods, typically based on neural nets, outperform linear methods? Through theoretical analysis and experiments with simulated weak lensing data vectors we compare three standard linear methods and neural network based methods. We propose two linear methods that outperform all others while using less computational resources: a variation of the MOPED algorithm we call e-MOPED and an adaptation of Canonical Correlation Analysis (CCA), which is a method new to cosmology but well known in statistics. Both e-MOPED and CCA utilize simulations spanning the full parameter space, and rely on the sensitivity of the data vector to the parameters of interest. The gains we obtain are significant compared to compression methods used in the literature: up to 30% in the Figure of Merit for $Ω_m$ and $S_8$ in a realistic simulation-based inference analysis that includes statistical and systematic errors. We also recommend two modifications that improve the performance of all methods: First, include components in the compressed data vector that may not target the key parameters but still enhance the constraints on $S_8$ due to their correlations. The gain is significant, above 20% in the Figure of Merit. Second, compress Gaussian and non-Gaussian statistics separately – we include two summary statistics of each type in our analysis.







## SBi3PCF: Simulation-based inference with the integrated 3PCF

David Gebauer, Anik Halder, Stella Seitz, Dhayaa Anbajagane

[arxiv.org/abs/2510.13805](https://arxiv.org/abs/2510.13805)

> We present SBi3PCF, a simulation-based inference (SBI) framework for analysing a higher-order weak lensing statistic, the integrated 3-point correlation function (i3PCF). Our approach forward-models the cosmic shear field using the CosmoGridV1 suite of N-body simulations, including a comprehensive set of systematic effects such as intrinsic alignment, baryonic feedback, photometric redshift uncertainty, shear calibration bias, and shape noise. Using this, we have produced a set of DES Y3-like synthetic measurements for 2-point shear correlation functions (2PCFs) and i3PCFs ζ<sub>±</sub> across 6 cosmological and 11 systematic parameters. Having validated these measurements against theoretical predictions and thoroughly examined for potential systematic biases, we have found that the impact of source galaxy clustering and reduced shear on the i3PCF is negligible for Stage-III surveys. Furthermore, we have tested the Gaussianity assumption for the likelihood of our data vector and found that while the sampling distribution of the 2PCF can be well approximated by a Gaussian, the likelihood of the combined 2PCF + i3PCF data vector (including filter sizes of 90′ and larger) can deviate from this assumption. Our SBI pipeline employs masked autoregressive flows to perform neural likelihood estimation and is validated to give statistically accurate posterior estimates. On mock data, we find that including the i3PCF yields a substantial 63.8% median improvement in the figure of merit for $Ω_m$–$σ_8$–$w_0$. These findings are consistent with previous works on the i3PCF and demonstrate that our SBI framework can achieve the accuracy and realism needed to analyse the i3PCF in wide-area weak lensing surveys.



## Generative models of astrophysical fields with scattering transforms on the sphere

Louise Mousset, Erwan Allys, Matthew A. Price, Jonathan Aumont, Jean-Marc Delouis, Ludovic Montier, Jason D. McEwen

[arxiv.org/abs/2407.07007](https://arxiv.org/abs/2407.07007)

> Scattering transforms are a new type of summary statistics recently developed for the study of highly non-Gaussian processes, which
have been shown to be very promising for astrophysical studies. In particular, they allow one to build generative models of complex
non-linear fields from a limited amount of data and have been used as the basis of new statistical component separation algorithms.
In the context of upcoming cosmological surveys, such as LiteBIRD for the cosmic microwave background polarisation or the Vera
C. Rubin Observatory and the Euclid space telescope for study of the large-scale structures of the Universe, extending these tools
to spherical data is necessary. In this work, we developed scattering transforms on the sphere and focused on the construction of
maximum-entropy generative models of several astrophysical fields. We constructed, from a single target field, generative models of
homogeneous astrophysical and cosmological fields, whose samples were quantitatively compared to the target fields using common
statistics (power spectrum, pixel probability density function, and Minkowski functionals). Our sampled fields agree well with the target
fields, both statistically and visually. We conclude, therefore, that these generative models open up a wide range of new applications
for future astrophysical and cosmological studies, particularly those for which very little simulated data is available.

## Sum-of-Parts: Self-Attributing Neural Networks with End-to-End Learning of Feature Groups

Weiqiu You, Helen Qu, Marco Gatti, Bhuvnesh Jain, Eric Wong

[arxiv.org/pdf/2310.16316](https://arxiv.org/pdf/2310.16316)


> Self-attributing neural networks (SANNs) present a potential path towards interpretable models for high-dimensional problems, but often face significant trade-offs in performance. In this work, we formally prove a lower bound on errors of perfeature SANNs, whereas group-based SANNs can achieve zero error and thus high performance. Motivated by these insights, we propose Sum-of-Parts (SOP), a framework that transforms any differentiable model into a group-based SANN, where feature groups are learned end-to-end without group supervision. SOP achieves state-of-the-art performance for SANNs on vision and language tasks, and we validate that the groups are interpretable on a range of quantitative and semantic metrics. We further validate the utility of SOP explanations in model debugging and cosmological scientific discovery.



## Cosmology from Galaxy Redshift Surveys with PointNet

Sotiris Anagnostidis, Arne Thomsen, Tomasz Kacprzak, Tilman Tröster, Luca Biggio, Alexandre Refregier, Thomas Hofmann

> In recent years, deep learning approaches have achieved state-of-the-art results in the analysis of point cloud data. In cosmology, galaxy redshift surveys resemble such a permutation invariant collection of positions in space. These surveys have so far mostly been analysed with two-point statistics, such as power spectra and correlation functions. The usage of these summary statistics is best justified on large scales, where the density field is linear and Gaussian. However, in light of the increased precision expected from upcoming surveys, the analysis of -- intrinsically non-Gaussian -- small angular separations represents an appealing avenue to better constrain cosmological parameters. In this work, we aim to improve upon two-point statistics by employing a \textit{PointNet}-like neural network to regress the values of the cosmological parameters directly from point cloud data. Our implementation of PointNets can analyse inputs of (104)−(105) galaxies at a time, which improves upon earlier work for this application by roughly two orders of magnitude. Additionally, we demonstrate the ability to analyse galaxy redshift survey data on the lightcone, as opposed to previously static simulation boxes at a given fixed redshift.

[https://arxiv.org/abs/2211.12346](https://arxiv.org/abs/2211.12346)


## Hyper Suprime-Cam Year 3 Results: Cosmology from Cosmic Shear Power Spectra

Roohi Dalal, Xiangchong Li, Andrina Nicola, Joe Zuntz, Michael A. Strauss, Sunao Sugiyama, Tianqing Zhang, Markus M. Rau, Rachel Mandelbaum, Masahiro Takada, Surhud More, Hironao Miyatake, Arun Kannawadi, Masato Shirasaki, Takanori Taniguchi, Ryuichi Takahashi, Ken Osato, Takashi Hamana, Masamune Oguri, Atsushi J. Nishizawa, Andrés A. Plazas Malagón, Tomomi Sunayama, David Alonso, Anže Slosar, Robert Armstrong, James Bosch, Yutaka Komiyama, Robert H. Lupton, Nate B. Lust, Lauren A. MacArthur, Satoshi Miyazaki, Hitoshi Murayama, Takahiro Nishimichi, Yuki Okura, Paul A. Price, Philip J. Tait, Masayuki Tanaka, Shiang-Yu Wang

[arxiv.org/abs/2304.00701](https://arxiv.org/abs/2304.00701)

> We measure weak lensing cosmic shear power spectra from the three-year galaxy shear catalog of the Hyper Suprime-Cam (HSC) Subaru Strategic Program imaging survey. The shear catalog covers 416 deg2 of the northern sky, with a mean i-band seeing of 0.59 arcsec and an effective galaxy number density of 15 arcmin−2 within our adopted redshift range. With an i-band magnitude limit of 24.5 mag, and four tomographic redshift bins spanning 0.3≤zph≤1.5 based on photometric redshifts, we obtain a high-significance measurement of the cosmic shear power spectra, with a signal-to-noise ratio of approximately 26.4 in the multipole range 300<ℓ<1800. The accuracy of our power spectrum measurement is tested against realistic mock shear catalogs, and we use these catalogs to get a reliable measurement of the covariance of the power spectrum measurements. We use a robust blinding procedure to avoid confirmation bias, and model various uncertainties and sources of bias in our analysis, including point spread function systematics, redshift distribution uncertainties, the intrinsic alignment of galaxies and the modeling of the matter power spectrum. For a flat ΛCDM model, we find S8≡σ8(Ωm/0.3)0.5=0.776+0.032−0.033, which is in excellent agreement with the constraints from the other HSC Year 3 cosmology analyses, as well as those from a number of other cosmic shear experiments. This result implies a ∼2σ-level tension with the Planck 2018 cosmology. We study the effect that various systematic errors and modeling choices could have on this value, and find that they can shift the best-fit value of S8 by no more than ∼0.5σ, indicating that our result is robust to such systematics.

## Hyper Suprime-Cam Year 3 Results: Cosmology from Cosmic Shear Two-point Correlation Functions 

Xiangchong Li, Tianqing Zhang, Sunao Sugiyama, Roohi Dalal, Ryo Terasawa, Markus M. Rau, Rachel Mandelbaum, Masahiro Takada, Surhud More, Michael A. Strauss, Hironao Miyatake, Masato Shirasaki, Takashi Hamana, Masamune Oguri, Wentao Luo, Atsushi J. Nishizawa, Ryuichi Takahashi, Andrina Nicola, Ken Osato, Arun Kannawadi, Tomomi Sunayama, Robert Armstrong, James Bosch, Yutaka Komiyama, Robert H. Lupton, Nate B. Lust, Lauren A. MacArthur, Satoshi Miyazaki, Hitoshi Murayama, Takahiro Nishimichi, Yuki Okura, Paul A. Price, Philip J. Tait, Masayuki Tanaka, Shiang-Yu Wang

[arxiv.org/abs/2304.00702](https://arxiv.org/abs/2304.00702)

> We perform a blinded cosmology analysis with cosmic shear two-point correlation functions (2PCFs) measured from more than 25 million galaxies in the HSC three-year shear catalog… The survey covers 416 deg$^2$ in four tomographic redshift bins (0.3–1.5) with an effective galaxy density of 15 arcmin$^{-2}$. Using angular scales $7.1' < \theta < 56.6'$ for $\xi_+$ and $31.2' < \theta < 248'$ for $\xi_-$ (total S/N = 26.6), and wide flat priors on photometric-redshift biases, we find $\Omega_m=0.256^{+0.056}{-0.044}$ and $S_8\equiv \sigma_8(\Omega_m/0.3)^{0.5}=0.769^{+0.031}{-0.034}$ (68% C.I.) in $\Lambda$CDM. After unblinding, our $S_8$ is consistent with Fourier-space cosmic shear and $3\times2$pt analyses on the same HSC dataset. We carefully test for astrophysical and modeling systematics using synthetic data and find no >$0.5\sigma$ biases in $S_8$. Our analysis hints that the mean redshifts of the two highest tomographic bins were initially underestimated. We conduct numerous consistency tests, and find a $\sim2\sigma$ low-$S_8$ trend compared to Planck 2018.

## CosmoGridV1: a simulated wCDM theory prediction for map-level cosmological inference

Tomasz Kacprzak, Janis Fluri, Aurel Schneider, Alexandre Refregier, and Joachim Stadel

[arxiv.org/abs/2209.04662](https://arxiv.org/abs/2209.04662)



> We present CosmoGridV1: a large set of lightcone simulations for map-level cosmological inference with probes of large scale structure. It is designed for cosmological parameter measurement based on Stage-III photometric surveys with non-Gaussian statistics and machine learning. CosmoGridV1 spans the wCDM model by varying Ωm, σ8, w0, H0, ns, Ωb, and assumes three degenerate neutrinos with ∑mν = 0.06 eV. This space is covered by 2500 grid points on a Sobol sequence. At each grid point, we run 7 simulations with PkdGrav3 and store 69 particle maps at nside=2048 up to z=3.5, as well as halo catalog snapshots. The fiducial cosmology has 200 independent simulations, along with their stencil derivatives. An important part of CosmoGridV1 is the benchmark set of 28 simulations, which include larger boxes, higher particle counts, and higher redshift resolution of shells. They allow for testing if new types of analyses are sensitive to choices made in CosmoGridV1. We add baryon feedback effects on the map level, using shell-based baryon correction model. The shells are used to create maps of weak gravitational lensing, intrinsic alignment, and galaxy clustering, using the UFalcon code. The main part of CosmoGridV1 are the raw particle count shells that can be used to create full-sky maps for a given n(z). We also release projected maps for a Stage-III forecast, as well as maps used previously in KiDS-1000 deep learning constraints with CosmoGridV1. The data is available at www.cosmogrid.ai.



## Towards a full wCDM map-based analysis for weak lensing surveys

Dominik Zürcher, Janis Fluri, Virginia Ajani, Silvan Fischbacher, Alexandre Refregier, Tomasz Kacprzak

[arxiv.org/abs/2206.01450](https://arxiv.org/abs/2206.01450)



> The next generation of weak lensing surveys will measure the matter distribution of the local Universe with unprecedented precision. This encourages the use of higher-order mass-map statistics for cosmological parameter inference. However, the increased quality of the data poses new challenges for map-based analyses. We extend the methodology introduced in arXiv:2006.12506 to match these requirements. Using this pipeline, we provide forecasts for the wCDM parameter constraints for stage 3 and stage 4 weak lensing surveys. We consider different survey setups, summary statistics and mass map filters including Starlets. The impact of baryons on the summary statistics is investigated and the necessary scale cuts are applied in the forecast. We compare the traditional angular power spectrum analysis to two extrema count statistics (peak and minima counts) as well as Minkowski functionals and the Starlet ℓ1-norm of the mass maps. In terms of map filters we find a preference for Starlet over Gaussian filters. Our results further suggest that using a survey setup with 10 instead of 5 tomographic redshift bins is beneficial. The addition of cross-tomographic information is found to improve the constraints on cosmology and especially on galaxy intrinsic alignment for all statistics. In terms of constraining power, we find the angular power spectrum and the peak counts to be equally matched for stage 4 surveys, followed by minima counts, the Minkowski functionals and then the Starlet ℓ1-norm. Combining different summary statistics significantly improves the constraints and compensates for the constraining power that is lost due to the stringent scale cuts. We identify the most cost-effective combination to be the angular power spectrum, peak counts and Minkowski functionals following Starlet filtering. 



## A Full wCDM Analysis of KiDS-1000 Weak Lensing Maps using Deep Learning

Janis Fluri, Tomasz Kacprzak, Aurelien Lucchi, Aurel Schneider, Alexandre Refregier, and Thomas Hofmann

[arxiv.org/abs/2201.07771](https://arxiv.org/abs/2201.07771)




> We present a full forward-modeled wCDM analysis of the KiDS-1000 weak lensing maps using graph-convolutional neural networks (GCNN). Utilizing the CosmoGrid, a novel massive simulation suite spanning six different cosmological parameters, we generate almost one million tomographic mock surveys on the sphere. Due to the large data set size and survey area, we perform a spherical analysis while limiting our map resolution to HEALPix nside = 512. We marginalize over systematics such as photometric redshift errors, multiplicative calibration and additive shear bias. Furthermore, we use a map-level implementation of the non-linear intrinsic alignment model along with a novel treatment of baryonic feedback to incorporate additional astrophysical nuisance parameters. We also  perform a spherical power spectrum analysis for comparison. The constraints of the cosmological parameters are generated using a likelihood-free inference method called Gaussian Process Approximate Bayesian Computation (GPABC). Finally, we check that our pipeline is robust against choices of the simulation parameters. We find constraints on the degeneracy parameter of S8 ≡ σ8 (ΩM /0.3)^0.5 = 0.78+/-0.06 for our power spectrum analysis and S8 = 0.79+/-0.05 for our GCNN analysis, improving the former by 16%. This is consistent with earlier analyses of the 2-point function, albeit slightly higher.  Baryonic corrections generally broaden the constraints on the degeneracy parameter by about 10%. These results offer great prospects for full machine learning based analyses of on-going and future weak lensing surveys.



## Dark Energy Survey Year 3 results: Cosmology with peaks using an emulator approach

Dominik Zürcher, Janis Fluri, Raphael Sgier, Tomasz Kacprzak, Marco Gatti, Cyrille Doux, Lorne Whiteway, Alexandre Refregier, and the DES Collaboration

[arxiv.org/abs/2110.10135](https://arxiv.org/abs/2110.10135)




> We constrain the matter density Ωm and the amplitude of density fluctuations σ8 within the ΛCDM cosmological model with shear peak statistics and angular convergence power spectra using mass maps constructed from the first three years of data of the Dark Energy Survey (DES Y3). We use tomographic shear peak statistics, including cross-peaks: peak counts calculated on maps created by taking a harmonic space product of the convergence of two tomographic redshift bins. Our analysis follows a forward-modelling scheme to create a likelihood of these statistics using N-body simulations, using a Gaussian process emulator. We include the following lensing systematics: multiplicative shear bias, photometric redshift uncertainty, and galaxy intrinsic alignment. Stringent scale cuts are applied to avoid biases from unmodelled baryonic physics. We find that the additional non-Gaussian information leads to a tightening of the constraints on the structure growth parameter yielding S8 ≡ σ8 √(Ωm/0.3) = 0.797+0.015−0.013 (68% confidence limits), with a precision of 1.8%, an improvement of ~38% compared to the angular power spectra only case. The results obtained with the angular power spectra and peak counts are found to be in agreement with each other and no significant difference in S8 is recorded. We find a mild tension of 1.5σ between our study and the results from Planck 2018, with our analysis yielding a lower S8. Furthermore, we observe that the combination of angular power spectra and tomographic peak counts breaks the degeneracy between galaxy intrinsic alignment AIA and S8, improving cosmological constraints. We run a suite of tests concluding that our results are robust and consistent with the results from other studies using DES Y3 data.


## Cosmological Forecast for non-Gaussian Statistics in large-scale weak Lensing Surveys

Dominik Zürcher, Janis Fluri, Raphael Sgier, Tomasz Kacprzak, Alexandre Refregier

[arxiv.org/abs/2006.12506](https://arxiv.org/abs/2006.12506)




> Cosmic shear data contains a large amount of cosmological information encapsulated in the non-Gaussian features of the weak lensing mass maps. This information can be extracted using non-Gaussian statistics. We compare the constraining power in the Ωm−σ8 plane of three map-based non-Gaussian statistics with the angular power spectrum, namely; peak/minimum counts and Minkowski functionals. We further analyze the impact of tomography and systematic effects originating from galaxy intrinsic alignments, multiplicative shear bias and photometric redshift systematics. We forecast the performance of the statistics for a stage-3-like weak lensing survey and restrict ourselves to scales ≥ 10 arcmin. We find, that in our setup, the considered non-Gaussian statistics provide tighter constraints than the angular power spectrum. The peak counts show the greatest potential, increasing the Figure-of-Merit (FoM) in the Ωm−σ8 plane by a factor of about 4. A combined analysis using all non-Gaussian statistics in addition to the power spectrum increases the FoM by a factor of 5 and reduces the error on S8 by ≈ 25\%. We find that the importance of tomography is diminished when combining non-Gaussian statistics with the angular power spectrum. The non-Gaussian statistics indeed profit less from tomography and the minimum counts and Minkowski functionals add some robustness against galaxy intrinsic alignment in a non-tomographic setting. We further find that a combination of the angular power spectrum and the non-Gaussian statistics allows us to apply conservative scale cuts in the analysis, thus helping to minimize the impact of baryonic and relativistic effects, while conserving the cosmological constraining power. We make the code that was used to conduct this analysis publicly available.

