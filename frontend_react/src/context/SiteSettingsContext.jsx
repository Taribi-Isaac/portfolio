import React, { createContext, useContext, useEffect, useState } from 'react';
import { client, urlFor } from '../client';
import { images } from '../constants';

const SITE_SETTINGS_QUERY = `*[_type == "siteSettings" && _id == "siteSettings"][0]{
  profileImage,
  greeting,
  name,
  roles,
  contactEmail,
  contactPhone,
  contactPhoneTel,
  copyrightLine1,
  copyrightLine2
}`;

export const defaultSiteSettings = {
  profileImageUrl: images.image,
  greeting: 'Hello, I am',
  name: 'Isaac',
  roles: ['Software Developer', 'Product Manager', 'Digital Marketing Strategist'],
  contactEmail: 'taribiforyou@gmail.com',
  contactPhone: '+234 906-7322344',
  contactPhoneTel: '+2349067322344',
  copyright: {
    line1: '@2026 ISAAC TARIBI',
    line2: 'All rights reserved',
  },
};

const SiteSettingsContext = createContext(defaultSiteSettings);

function mapSiteSettings(data) {
  if (!data) return defaultSiteSettings;

  const phoneTel = data.contactPhoneTel
    || (data.contactPhone || defaultSiteSettings.contactPhone).replace(/[^\d+]/g, '');

  return {
    profileImageUrl: data.profileImage
      ? urlFor(data.profileImage).url()
      : defaultSiteSettings.profileImageUrl,
    greeting: data.greeting || defaultSiteSettings.greeting,
    name: data.name || defaultSiteSettings.name,
    roles: data.roles?.length ? data.roles : defaultSiteSettings.roles,
    contactEmail: data.contactEmail || defaultSiteSettings.contactEmail,
    contactPhone: data.contactPhone || defaultSiteSettings.contactPhone,
    contactPhoneTel: phoneTel || defaultSiteSettings.contactPhoneTel,
    copyright: {
      line1: data.copyrightLine1 || defaultSiteSettings.copyright.line1,
      line2: data.copyrightLine2 || defaultSiteSettings.copyright.line2,
    },
  };
}

export function SiteSettingsProvider({ children }) {
  const [settings, setSettings] = useState(defaultSiteSettings);

  useEffect(() => {
    client.fetch(SITE_SETTINGS_QUERY).then((data) => {
      setSettings(mapSiteSettings(data));
    });
  }, []);

  return (
    <SiteSettingsContext.Provider value={settings}>
      {children}
    </SiteSettingsContext.Provider>
  );
}

export function useSiteSettings() {
  return useContext(SiteSettingsContext);
}
