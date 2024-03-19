import { CardWrapper } from "./card-wrapper";

export default function LoginForm() {
  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonHref="/register"
      backButtonLabel="Dont have a account ? "
      showSocial
    >
      Login Form !
    </CardWrapper>
  );
}
