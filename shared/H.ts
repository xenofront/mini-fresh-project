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
        console.log(`${yellow(`[${dateTime}] [${logType}] -`)} ${text}`);
        break;
      case 'ERROR':
        console.log(`${red(`[${dateTime}] [${logType}] -`)} ${text}`);
        break;
      default:
        console.log(`${green(`[${dateTime}] [${logType}] -`)} ${text}`);
    }
  }
}
