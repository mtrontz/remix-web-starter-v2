import { hydrate } from 'react-dom';
import { RemixBrowser } from '@remix-run/react';
import { register } from '~/swRegistration';

hydrate(<RemixBrowser />, document);
