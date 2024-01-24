export enum RouterPercentEnum {
  NavigationStart = 0,
  RouteConfigLoadStart = 5,
  RouteConfigLoadEnd = 10,
  RoutesRecognized = 20,
  GuardsCheckStart = 25,
  GuardsCheckEnd = 60,
  ResolveStart = 70,
  ResolveEnd = 80,
  NavigationEnd = 100,
  // eslint-disable-next-line @typescript-eslint/no-duplicate-enum-values
  NavigationCancel = 100,
  // eslint-disable-next-line @typescript-eslint/no-duplicate-enum-values
  NavigationError = 100
}
