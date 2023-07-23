interface ILogo {
  path: string;
  alt: string;
  classes?: string;
}

export default function Image({path, alt, classes}: ILogo) {
  return <img src={path} alt={alt} class={classes}/>;
}
