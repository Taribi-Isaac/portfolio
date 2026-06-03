const SITE_SETTINGS_ID = 'siteSettings';

export const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .id(SITE_SETTINGS_ID)
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId(SITE_SETTINGS_ID),
        ),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== 'siteSettings',
      ),
    ]);
