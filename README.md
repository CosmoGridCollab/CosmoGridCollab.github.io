### CosmoGrid public release website

CosmoGrid is large lightcone simulation set for map-level, simulation-based cosmological inference with probes of large scale structure.
It is designed to for practical parameter measurement with the Stage-III survey data, for example with KiDS, DES, and HSC.
The paper describing the dataset: [Kacprzak et al. 2022](arxiv.org/).

The CosmoGrid dataset consists of a total of 20928 simulations divided into three main parts: 
- grid:   a set of 2500 cosmologies, each with 7 simulations from unique initial conditions (a total of 17500 N-body runs), 
- fiducial: simulations and the fiducial cosmology and its ±∆ derivatives, with 200 unique initial conditions (600 runs),
- benchmark: simulation benchmarks used for systematics testing of features chosen for parameter inference (28 runs).

The data is hosted by ETH Zurich and is available via the Globus transfer. For each simulation, we store:

- raw simulation lightcone particle count maps stored at Healpix nside=2048 up to z<3.5 (69 shells per simulation),
- halo catalog snapshots created using the friends-of-friends halo finder, with halo mass of M = 10^12 M⊙, at every time step,
- projected full sky weak lensing, galaxy density, and intrinsic alignments maps for a Stage-III forecast, including baryonification, at the nside=512,
- projected KiDS-1000 lensing and intrinsic alignment maps with grid extended with baryonic feedback parameters, from Fluri et al. 2022.

### Example shell map images
The example shell maps for different cosmological models are on shown below. 
The provided maps are full sky at Healpix resolution of nside=2048.

<img src="/figures/cosmogrid_shells_shade.png" width="600" />

### Citing CosmoGrid

If you use this dataset for any publication, please cite the following papers:

```
@ARTICLE{Fluri2022kids1000,
       author = {{Fluri}, Janis and {Kacprzak}, Tomasz and {Lucchi}, Aurelien and {Schneider}, Aurel and {Refregier}, Alexandre and {Hofmann}, Thomas},
        title = "{Full w CDM analysis of KiDS-1000 weak lensing maps using deep learning}",
      journal = {Physical Review D},
         year = 2022,
        month = apr,
       volume = {105},
       number = {8},
          eid = {083518},
        pages = {083518},
          doi = {10.1103/PhysRevD.105.083518},
archivePrefix = {arXiv},
       eprint = {2201.07771},
 primaryClass = {astro-ph.CO},
}
```








You can use the [editor on GitHub](https://github.com/CosmoGridCollab/CosmoGridCollab.github.io/edit/main/README.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [Basic writing and formatting syntax](https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/CosmoGridCollab/CosmoGridCollab.github.io/settings/pages). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://docs.github.com/categories/github-pages-basics/) or [contact support](https://support.github.com/contact) and we’ll help you sort it out.
