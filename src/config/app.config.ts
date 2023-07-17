interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Therapist'],
  customerRoles: ['End Customer'],
  tenantRoles: ['Therapist', 'Alternative Health Specialist', 'Health Coach'],
  tenantName: 'Organization',
  applicationName: 'Chara',
  addOns: ['chat', 'notifications'],
};
