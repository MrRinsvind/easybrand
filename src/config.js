export const __DEV__ = process.env.NODE_ENV === 'development';

export const BASE_URL = process.env.REACT_APP_BACKEND_URL;

const config = {
  BASE_URL: BASE_URL,
  THREADS: 3,
  DEFAULT_MAPPING_KEY: 'k1_2018_default',
  api: {
    login: {
      url: '/accounts/login/',
      method: 'POST'
    },
    registrationByLink: {
      url: '/accounts/registration/',
      method: 'POST'
    },
    document: {
      fetch: {
        url: '/documents/:documentId/',
        method: 'GET',
      },
      create: {
        url: '/documents/entities/:entityId/docs/',
        method: 'POST',
      },
      process: {
        url: '/documents/:documentId/process/',
        method: 'POST',
      },
      update: {
        url: '/documents/:documentId/',
        method: 'PATCH',
      },
      remove: {
        url: '/documents/:documentId/',
        method: 'DELETE',
      },
      confirm: {
        url: '/documents/:documentId/confirm/',
        method: 'POST'
      },
      revoke: {
        url: '/documents/:documentId/revoke/',
        method: 'POST'
      },
      assign: {
        url: '/documents/:documentId/assign/',
        method: 'POST'
      },
      split: {
        url: '/documents/:documentId/split/',
        method: 'POST'
      },
      handle: {
        url: '/documents/:documentId/set-handled/',
        method: 'POST'
      },
    },
    k1: {
      fetch: {
        url: '/entities/k1/:k1DataId/',
        method: 'GET',
      },
      update: {
        url: '/entities/k1/:k1DataId/',
        method: 'PATCH',
      },
    },
    mapping: {
      url: '/ocr/mapping/',
      method: 'GET'
    },
    metadata: {
      url: '/ocr/metadata/',
      method: 'GET'
    },
    k1OcrSave: {
      url: '/entities/k1/:k1DataId/ocr-update/',
      method: 'PATCH'
    },
    entities: {
      url: '/entities/all/',
      method: 'GET'
    },
    entity: {
      url: '/entities/',
      method: 'GET'
    },
    entityItem: {
      get: {
        url: '/entities/:entityId/',
        method: 'GET',
      },
      update: {
        url: '/entities/:entityId/',
        method: 'PUT',
      },
    },
    k1List: {
      url: '/entities/k1/all/',
      method: 'GET'
    },
    partnerships: {
      url: '/entities/:entityId/partnerships/',
      method: 'GET',
    },
    partners: {
      url: '/entities/:entityId/partners/',
      method: 'GET',
    },
    invitePartner: {
      url: '/entities/invite-existed-partner/',
      method: 'POST',
    },
    users: {
      url: '/entities/:entityId/users/',
      method: 'GET',
    },
    user: {
      url: '/entities/:entityId/users/:userId/',
      method: 'GET',
    },
    createEntityForUser: {
      url: '/entities/:entityId/create-related/',
      method: 'POST',
    },
    entitySearch: {
      url: '/entities/search-by-tin/',
      method: 'POST',
    },
    consoleByYear: {
      url: '/reports/entities/:entityId/console-by-year/',
      method: 'POST',
    },
    consoleByCompany: {
      url: '/reports/entities/:entityId/console-by-company/',
      method: 'POST',
    },
    investments: {
      url: '/reports/entities/:entityId/:ein/investments/',
      method: 'GET',
    },
    documents: {
      url: '/documents/entities/:entityId/docs/list/',
      method: 'GET',
    },
  }
};

export default config;
