![Logo](https://viraxpress.com/web/image/website/1/logo/Viraxpress?unique=8139c25)

## Welcome to ViraXpress (VX)

Energize your E-commerce with ViraXpress's blazing fast Magento New Front End + Elegant Theme + >95% SEO score + Open Source.

**Demo Link:** https://demo.viraxpress.com/

### Google PageSpeed Score
<p><img src="https://demo.viraxpress.com/vx/ViraXpress/frontend/web/wysiwyg/VX-PageSpeed.png"></p>


## Theme Requirements

- Magento(CE) 2.4.6, 2.4.7
- Node Version >= 20.x
- Redis
- Varnish


## Theme Installation

Before applying our theme package, we strongly recommend implementing it on a development server. Please ensure you back up your Magento files and database. We cannot be held responsible for any data loss.


#### Install the theme package using the composer command given below:

### M2.4.6
```bash
  composer require viraxpress/frontend=1.0.8
```
### M2.4.7
```bash
  composer require viraxpress/frontend=2.0.5
```
### Composer Update
```bash
  composer require viraxpress/frontend=x.x.x -W
```

Manually edit the composer.json file in the Magento root directory and include the entries under the psr-4 section, as shown in the example below.
<p><img src="https://demo.viraxpress.com/vx/ViraXpress/frontend/web/wysiwyg/VX-psr-4.png"></p>

```bash
"ViraXpress\\Catalog\\": "vendor/viraxpress/catalog/",
"ViraXpress\\Cms\\": "vendor/viraxpress/cms/",
"ViraXpress\\Checkout\\": "vendor/viraxpress/checkout/",
"ViraXpress\\CheckoutOptimization\\": "vendor/viraxpress/checkoutoptimization/",
"ViraXpress\\ConfigurableProduct\\": "vendor/viraxpress/configurable-product/",
"ViraXpress\\Configuration\\": "vendor/viraxpress/configuration/",
"ViraXpress\\Customer\\": "vendor/viraxpress/customer/",
"ViraXpress\\CSP\\": "vendor/viraxpress/csp/",
"ViraXpress\\Framework\\": "vendor/viraxpress/framework/",
"ViraXpress\\Newsletter\\": "vendor/viraxpress/newsletter/",
"ViraXpress\\Sales\\": "vendor/viraxpress/sales/",
"ViraXpress\\Store\\": "vendor/viraxpress/store/",
"ViraXpress\\Swatches\\": "vendor/viraxpress/swatches/",
"ViraXpress\\Theme\\": "vendor/viraxpress/theme/",
"ViraXpress\\Widget\\": "vendor/viraxpress/widget/",
"ViraXpress\\Wishlist\\": "vendor/viraxpress/wishlist/"
```


Run the below magento commands

```bash
  composer clearcache
  composer dumpautoload
  php bin/magento setup:upgrade
  php bin/magento setup:di:compile
  php bin/magento setup:static-content:deploy -f
  php bin/magento c:c
  php bin/magento c:f
```

- Assign ViraXpress as your frontend theme for your website or store from the admin panel.



### Thanks to OpenSource Libraries:

- **Tailwind CSS:** https://github.com/tailwindlabs/tailwindcss
- **Alpine.js:** https://github.com/alpinejs/alpine
- **Splide:** https://github.com/Splidejs/splide
- **GLightbox:** https://github.com/biati-digital/glightbox
- **Vanilla JS Datepicker:** https://mymth.github.io/vanillajs-datepicker/

### Community:
Join for discussions: https://discord.gg/JKczyhWvzy

### Explore VX Frontend Today
Join us at ViraXpress and experience the future of Magento themes with VX Frontend. For consulting, development, and support services, contact us at vira@viraxpress.com. Let’s build something extraordinary together.


### Important Notes:

- We have tested our theme frontend on Magento 2.4.6-px and 2.4.7-px versions, running on both PHP 8.1 and 8.2. For other versions, any future developments or updates will be announced here as new releases.
- This package is intended for developers who are already familiar with Magento 2 development. Since it is free and open source, we do not provide support for setup-related queries, except for addressing genuine bugs.
- Ensure that your server specifications and cache settings are properly adjusted according to your requirements to achieve the desired optimization in performance and speed.
- While using third-party tracking tools, the score may gradually decrease. Please ensure that you are optimizing them as well.
- The images provided with this theme's frontend are for display purposes only and should not be used on the website for any commercial purposes.
- To maintain the performance score, use web-optimized images.
- Avoid using smaller-dimension images. Ensure the image dimensions are approximately 100-125% of the actual image container.
- Back up the website before installation.



### Demo Server Specs
- High performance is achieved on the shared 4GB RAM AWS Lightsail instance &#x1F4AF;, but this configuration is not advisable for a production environment to handle traffic.
<p><img src="https://demo.viraxpress.com/vx/ViraXpress/frontend/web/wysiwyg/VX-Lightsail-4GB.png"></p>

**🚀 Contributions are always welcome! 🙌**
