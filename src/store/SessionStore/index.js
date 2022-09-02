import { createContext } from 'react';

import SessionStore from './SessionStore';

const session = new SessionStore();
const SessionStoreContext = createContext(session);

export { session, SessionStoreContext };
