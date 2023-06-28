const mapping: Record<string, string> = {
  attendances: 'attendance',
  schools: 'school',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
