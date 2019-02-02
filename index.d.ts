interface Logger {
  error(msg: string, meta: any): any
}
interface LoggerWarn extends Logger {
  warn(msg: string, meta: any): any
}
interface LoggerWarning extends Logger {
  warning(msg: string, meta: any): any
}

interface StatsD {
  histogram(stat: string, value: any): any
}

export default function blockedStats(logger: LoggerWarn | LoggerWarning, stats: StatsD): void
