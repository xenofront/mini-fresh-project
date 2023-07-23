interface ILogo {
  width?: string;
  isInline?: boolean;
  classes?: string;
}

export function Logo({classes, width = '100px', isInline = false}: ILogo) {
  const inlineStyles: Record<string, string> = {};
  if (isInline) {
    inlineStyles['display'] = 'inline';
  }
  return (
    <img src="/logo.svg" alt="logo" width={width} style={inlineStyles} class={classes}/>
  );
}
