const UnauthenticatedRoutes = {
  signIn: '/auth/signIn',
  signUp: '/auth/signUp',
  onboarding: '/onboarding',
  forgotPassword: '/auth/forgotPassword',
};

const AuthenticatedRoutes = {
  home: '/',
  profile: '/profile',
  post: '/post',
};

export { UnauthenticatedRoutes, AuthenticatedRoutes };
