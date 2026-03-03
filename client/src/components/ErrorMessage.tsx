const Error = ({ errorMsg }: any) => {
  return (
    <p className="text-center text-xs">
      <span className="text-destructive font-bold">{errorMsg}</span>
    </p>
  );
};

export default Error;
