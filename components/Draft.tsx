const Draft = ({ children }: Children) => {
  const ENV = process.env.NEXT_PUBLIC_ENV;
  if (ENV === "production") return <></>;

  return <>{children}</>;
};

export default Draft;
