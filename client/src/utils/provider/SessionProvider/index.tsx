import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import {
  ApiResponse,
  ResponseStatus,
  SessionResponseData,
  SignInInput,
  SignUpInput,
} from '../../../@types';
import { AuthenticatedRoutes, UnauthenticatedRoutes } from '../../../constants';

type Props = {
  children: React.ReactNode;
};

export type SessionContextType = {
  resolved: boolean;
  loading: boolean;
  error?: any;
  isAuthenticated: boolean;
  signIn?: (input: SignInInput) => Promise<ApiResponse<SessionResponseData>>;
  signUp?: (input: SignUpInput) => Promise<ApiResponse<SessionResponseData>>;
  logOut?: () => void;
};

const defaultContext: SessionContextType = {
  resolved: false,
  loading: true,
  error: null,
  isAuthenticated: false,
};

export const SessionContext =
  React.createContext<SessionContextType>(defaultContext);

const SessionProvider: React.FC<Props> = (props) => {
  const { children } = props;
  const router = useRouter();
  const [isAuthenticated, setAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [resolved, setResolved] = useState<boolean>(false);
  const [error, setError] = useState<any>();
  const handleSignIn = async (
    input: SignInInput
  ): Promise<ApiResponse<SessionResponseData>> => {
    return {
      status: ResponseStatus.FAILED,
      error: {
        code: 1,
        errorMessage: 'No Error',
      },
    };
  };
  const handleSignUp = async (
    input: SignUpInput
  ): Promise<ApiResponse<SessionResponseData>> => {
    return {
      status: ResponseStatus.FAILED,
      error: {
        code: 1,
        errorMessage: 'No Error',
      },
    };
  };
  const handleLogOut = () => {
    localStorage.clear();
    router.reload();
  };
  console.log('Router ==> ', router.asPath);

  useEffect(() => {
    authCheck(router.asPath);
  }, []);

  const authCheck = async (url: string) => {
    try {
      setLoading(true);
      setAuthenticated(false);
      const routePath = url.split('?')[0];
      const publicRoutes = Object.values(UnauthenticatedRoutes);
      const privateRoutes = Object.values(AuthenticatedRoutes);
      if (privateRoutes.includes(routePath)) {
        const authResponse = true;
        setAuthenticated(authResponse);
        if (!authResponse) {
          router.replace('/auth/signIn');
        }
      } else if (!publicRoutes.includes(routePath)) {
        router.replace('/auth/signIn');
      }
      setLoading(false);
      setResolved(true);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{'error'}</div>;
  }
  return (
    <SessionContext.Provider
      value={{
        loading,
        resolved,
        isAuthenticated,
        error,
        signIn: handleSignIn,
        signUp: handleSignUp,
        logOut: handleLogOut,
      }}
    >
      {resolved ? children : null}
    </SessionContext.Provider>
  );
};

export default SessionProvider;
