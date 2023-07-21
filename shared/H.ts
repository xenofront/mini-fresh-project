import { green, red, yellow } from '$std/fmt/colors.ts';

export default class H {
  public static formatDateTime(date: Date) {
    return new Intl.DateTimeFormat('el-GR', {
      timeStyle: 'long',
      hour12: false,
      dateStyle: 'short'
    }).format(date);
  }

  public static log(text: string, logType: 'INFO' | 'WARN' | 'ERROR' = 'INFO') {
    const dateTime = H.formatDateTime(new Date());

    switch (logType) {
      case 'WARN':
        console.warn(`${yellow(`[${dateTime}] [${logType}] -`)} ${text}`);
        break;
      case 'ERROR':
        console.error(`${red(`[${dateTime}] [${logType}] -`)} ${text}`);
        break;
      default:
        console.info(`${green(`[${dateTime}] [${logType}] -`)} ${text}`);
    }
  }
}
