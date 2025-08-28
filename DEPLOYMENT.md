# Deploying to Hostinger

## Pre-deployment Checklist

1. Ensure all HTML files are in the root directory:
   - index.html
   - about.html
   - contact.html
   - features.html
   - how-it-works.html
   - mission.html
   - problem.html
   - solution.html

2. Required External Resources:
   - Font Awesome 6.4.0 (via CDN)
   - Three.js r128 (via CDN)
   - Google Fonts: Inter (via CDN)

## Deployment Steps

1. **Log in to Hostinger Control Panel**
   - Go to hpanel.hostinger.com
   - Log in with your credentials

2. **Upload Files**
   - In hPanel, go to "File Manager"
   - Navigate to the public_html directory
   - Upload all HTML files
   - Create any necessary subdirectories

3. **Configure Domain**
   - In hPanel, go to "Domains"
   - Point your domain to the public_html directory
   - Set up SSL certificate (Free Let's Encrypt)

4. **Post-deployment Checks**
   - Verify all pages load correctly
   - Check all internal links work
   - Ensure all images and assets load
   - Test contact form functionality
   - Verify animations and Three.js background
   - Test responsive design on mobile devices

## File Structure for Upload

```
public_html/
├── index.html
├── about.html
├── contact.html
├── features.html
├── how-it-works.html
├── mission.html
├── problem.html
└── solution.html
```

## Important Notes

1. The website uses CDN resources, so ensure server has internet access
2. All internal links are relative paths
3. No server-side processing is required
4. Contact form needs to be configured with Hostinger's SMTP or a third-party service

## Troubleshooting

1. If pages don't load:
   - Check file permissions (should be 644 for files)
   - Verify file names match exactly (case-sensitive)
   - Check .htaccess if using Apache

2. If styles don't apply:
   - Clear browser cache
   - Verify CDN links are accessible
   - Check browser console for errors

3. If Three.js background doesn't work:
   - Check browser console for JavaScript errors
   - Verify Three.js CDN link is accessible
   - Check if WebGL is supported in the browser

## Support

For Hostinger-specific issues:
- Contact Hostinger support: support.hostinger.com
- Check Hostinger knowledge base: www.hostinger.com/tutorials/
