const mapping: Record<string, string> = {
  availabilities: 'availability',
  bookings: 'booking',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
