import { LandingPage } from './LandingPage';
import { props } from '@webflow/data-types';
import { declareComponent } from '@webflow/react';

const LandingPageWebflow = declareComponent(LandingPage, {
    name: 'Landing Page',
    description: 'A beautiful, modern landing page inspired by INSIA.ai with hero, features, comparison, stats, and more sections',
    group: 'Layout',
    props: {
        companyName: props.Text({
            name: 'Company Name',
            defaultValue: 'INSIA',
        }),
        heroTagline: props.Text({
            name: 'Hero Tagline',
            defaultValue: 'Decision Engine for Businesses',
        }),
        heroTitle: props.Text({
            name: 'Hero Title',
            defaultValue: 'INSIA: Decision Engine for Businesses',
        }),
        heroSubtitle: props.Text({
            name: 'Hero Subtitle',
            defaultValue: 'From raw data to governed, explainable actions. No code, one platform. INSIA doesn\'t just report the past. It helps you shape the future.',
        }),
        ctaText: props.Text({
            name: 'CTA Button Text',
            defaultValue: 'Get Demo',
        }),
        ctaLink: props.Text({
            name: 'CTA Link',
            defaultValue: '#',
        }),
        primaryColor: props.Text({
            name: 'Primary Color',
            defaultValue: '#000000',
        }),
        secondaryColor: props.Text({
            name: 'Secondary Color',
            defaultValue: '#f0f0f0',
        }),
    },
});

export default LandingPageWebflow;
