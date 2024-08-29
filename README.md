![Logo](https://viraxpress.com/web/image/website/1/logo/Viraxpress?unique=8139c25)

## Welcome to ViraXpress (VX)

Energize your E-commerce with ViraXpress's blazing fast Magento New Front End + Elegant Theme + >95% SEO score + Open Source.

**Demo Link:** https://demo.viraxpress.com/

**🚀 Contributions are always welcome! 🙌**


## Theme Requirements

- Magento >= 2.4.5 (CE)
- Node Version >= 20.x
- Redis
- Varnish


## Theme Installation

Before applying our theme package, we strongly recommend implementing it on a development server. Please ensure you back up your Magento files and database. We cannot be held responsible for any data loss.


#### Install the theme package using the composer command given below:

```bash
  composer require viraxpress/frontend=1.0.0
  php bin/magento setup:upgrade
  php bin/magento setup:di:compile
  php bin/magento setup:static-content:deploy -f
  php bin/magento c:c
  php bin/magento c:f
```

#### Install the theme package using zip file

- Download all the zip files from the required repositories, extract it contents, and upload them into the app/code directory of your Magento 2 installation.

- Run the following commands in the Magento 2 root folder:

```bash
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
- **MagestyApps:** https://github.com/MagestyApps/module-web-images
- **GLightbox:** https://github.com/biati-digital/glightbox


### Explore VX Frontend Today
Join us at ViraXpress and experience the future of Magento themes with VX Frontend. For consulting, development, and support services, contact us at vira@viraxpress.com. Let’s build something extraordinary together.


### Important Notes:

- The images provided with this theme's frontend are for display purposes only and should not be used on the website for any commercial purposes.
- To maintain the performance score, use web-optimized images.
- Avoid using smaller-dimension images. Ensure the image dimensions are approximately 100-125% of the actual image container.
- Back up the website before installation.

### Google PageSpeed Score
<p><img src="https://demo.viraxpress.com/vx/ViraXpress/frontend/web/wysiwyg/VX-PageSpeed.png"></p>

https://pagespeed.web.dev/analysis/https-demo-viraxpress-com/pcuz6zgnaw?form_factor=mobile

https://pagespeed.web.dev/analysis/https-demo-viraxpress-com-women-html/3sx9prxazm?form_factor=mobile

https://pagespeed.web.dev/analysis/https-demo-viraxpress-com-ajax-full-zip-sweatshirt-html/x26kphqptt?form_factor=mobile

### Demo Server Specs
- High performance is achieved on the shared 2GB RAM AWS Lightsail instance &#x1F4AF;, but this configuration is not advisable for a production environment to handle traffic.
<p><img src="https://demo.viraxpress.com/vx/ViraXpress/frontend/web/wysiwyg/VX-Lightsail.png"></p>
