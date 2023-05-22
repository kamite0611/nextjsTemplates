import { ReactNode, createContext, useEffect, useReducer } from 'react';

import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';

import { FirebaseAuth } from './config';

const initialAuthState = {
  isAuthenticated: false,
  isInitialized: false,
  currentUser: null,
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'AUTH_STATE_CHANGED': {
      const { isAuthenticated, currentUser } = action.payload;
      return {
        ...state,
        isAuthenticated,
        isInitialized: true,
        currentUser,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export const AuthContext = createContext({
  ...initialAuthState,
  method: 'FirebaseAuth',
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialAuthState);

  const login = async () => {
    try {
      await signInWithPopup(FirebaseAuth, new GoogleAuthProvider());
    } catch {
      // TODO add error msg
    }
  };

  const logout = () => {
    signOut(FirebaseAuth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FirebaseAuth, async (user) => {
      try {
        if (!user) throw 'user not found';
        dispatch({
          type: 'AUTH_STATE_CHANGED',
          payload: {
            isAuthenticated: true,
            currentUser: {
              id: user.uid,
              email: user.email,
              name: user.displayName || user.email,
              photoUrl: user.photoURL || '',
              phoneNumber: user.phoneNumber || '',
            },
          },
        });
      } catch (error) {
        dispatch({
          type: 'AUTH_STATE_CHANGED',
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: 'FirebaseAuth',
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
