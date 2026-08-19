
export const DEFAULT_COUNTRIES = [
    {
        countryName: "United Arab Emirates",
        phoneNumberCodes: ["+97150", "+97155", "+97152", "+97156", "+97158"],
        currency: "AED",
        maxPhoneNumberDigits: 7,
        timezone: "+04:00",
    }
]
export const DEFAULT_TAX_DETAILS = [
    {
        countryId: 1,
        taxName: "Value Added Tax",
        taxPercentage: "5",
        taxNickname: "VAT",
        isTaxOnInvoice: true,
        isRegistrationOptional: true
    },
    {
        countryId: 1,
        taxName: "Corporate Tax",
        taxPercentage: "9",
        taxNickname: "CT",
        isTaxOnInvoice: false,
        isRegistrationOptional: false
    }
]
export const PLATFORM_FEATURES = [
  { featureId: 1, featureName: 'ADD_FEATURE', isEnabled: true, isSystemAdminFeature: true, dependentFeatureId: null },
  { featureId: 2, featureName: 'UPDATE_FEATURE', isEnabled: true, isSystemAdminFeature: true, dependentFeatureId: null },
  { featureId: 3, featureName: 'ADD_COUNTRY', isEnabled: true, isSystemAdminFeature: true, dependentFeatureId: null },
  { featureId: 4, featureName: 'UPDATE_COUNTRY', isEnabled: true, isSystemAdminFeature: true, dependentFeatureId: null },
  { featureId: 5, featureName: 'ADD_TAXDETAIL', isEnabled: true, isSystemAdminFeature: true, dependentFeatureId: null },
  { featureId: 6, featureName: 'UPDATE_TAXDETAIL', isEnabled: true, isSystemAdminFeature: true, dependentFeatureId: null },
  { featureId: 7, featureName: 'GET_ITEMS', isEnabled: true, isSystemAdminFeature: false, dependentFeatureId: null },
  { featureId: 8, featureName: 'ADD_UPTATE_ITEM', isEnabled: true, isSystemAdminFeature: false, dependentFeatureId: 8 },
  { featureId: 9, featureName: 'ADJUST_ITEM', isEnabled: true, isSystemAdminFeature: false, dependentFeatureId: 8 },
  { featureId: 10, featureName: 'GET_PARTIES', isEnabled: true, isSystemAdminFeature: false, dependentFeatureId: null },
  { featureId: 11, featureName: 'ADD_UPDATE_PARTY', isEnabled: true, isSystemAdminFeature: false, dependentFeatureId: 10 },
  { featureId: 12, featureName: 'GET_PURCHASES', isEnabled: true, isSystemAdminFeature: false, dependentFeatureId: null },
  { featureId: 13, featureName: 'ADD_UPDATE_PURCHASE', isEnabled: true, isSystemAdminFeature: false, dependentFeatureId: 12 },
  { featureId: 14, featureName: 'GET_SALES', isEnabled: true, isSystemAdminFeature: false, dependentFeatureId: null },
  { featureId: 15, featureName: 'ADD_UPDATE_SALE', isEnabled: true, isSystemAdminFeature: false, dependentFeatureId: 14 },
  { featureId: 16, featureName: 'GET_QUOTATIONS', isEnabled: true, isSystemAdminFeature: false, dependentFeatureId: null },
  { featureId: 17, featureName: 'ADD_UPDATE_QUOTATION', isEnabled: true, isSystemAdminFeature: false, dependentFeatureId: 16 },
  { featureId: 18, featureName: 'GET_CASHFLOW_SUMMARY', isEnabled: true, isSystemAdminFeature: false, dependentFeatureId: null },
  { featureId: 19, featureName: 'GET_TOPSELLING_ITEMS', isEnabled: true, isSystemAdminFeature: false, dependentFeatureId: null },
  { featureId: 20, featureName: 'GET_LOWSTOCK_ITEMS', isEnabled: true, isSystemAdminFeature: false, dependentFeatureId: null },
  { featureId: 21, featureName: 'GET_COMPANY', isEnabled: true, isSystemAdminFeature: false, dependentFeatureId: null },
  { featureId: 22, featureName: 'UPDATE_COMPANY', isEnabled: true, isSystemAdminFeature: false, dependentFeatureId: 21 },
  { featureId: 23, featureName: 'GET_ROLES', isEnabled: true, isSystemAdminFeature: false, dependentFeatureId: null },
  { featureId: 24, featureName: 'ADD_UPDATE_ROLE', isEnabled: true, isSystemAdminFeature: false, dependentFeatureId: 23 },
  { featureId: 25, featureName: 'GET_USERS', isEnabled: true, isSystemAdminFeature: false, dependentFeatureId: null },
  { featureId: 26, featureName: 'ADD_UPDATE_USER', isEnabled: true, isSystemAdminFeature: false, dependentFeatureId: 25 },
  { featureId: 27, featureName: 'GET_TRANSFERS', isEnabled: true, isSystemAdminFeature: false, dependentFeatureId: null },
  { featureId: 28, featureName: 'ADD_TRANSFER', isEnabled: true, isSystemAdminFeature: false, dependentFeatureId: 28 },
  { featureId: 29, featureName: 'GET_SALE_RETURNS', isEnabled: true, isSystemAdminFeature: false, dependentFeatureId: null },
  { featureId: 30, featureName: 'ADD_SALE_RETURN', isEnabled: true, isSystemAdminFeature: false, dependentFeatureId: 29 },
  { featureId: 31, featureName: 'GET_PURCHASE_RETURNS', isEnabled: true, isSystemAdminFeature: false, dependentFeatureId: null },
  { featureId: 32, featureName: 'ADD_PURCHASE_RETURN', isEnabled: true, isSystemAdminFeature: false, dependentFeatureId: 32 },
  { featureId: 33, featureName: 'GENERATE_REPORTS', isEnabled: true, isSystemAdminFeature: false, dependentFeatureId: null },
  { featureId: 34, featureName: 'DAY_END_SUMMARY_REPORT', isEnabled: true, isSystemAdminFeature: false, dependentFeatureId: 33 },
  { featureId: 35, featureName: 'DAY_END_DETAILED_REPORT', isEnabled: true, isSystemAdminFeature: false, dependentFeatureId: 33 },
  { featureId: 36, featureName: 'SALE_REPORT', isEnabled: true, isSystemAdminFeature: false, dependentFeatureId: 33 },
  { featureId: 37, featureName: 'PURCHASE_REPORT', isEnabled: true, isSystemAdminFeature: false, dependentFeatureId: 33 },
  { featureId: 38, featureName: 'SALE_RETURN_REPORT', isEnabled: true, isSystemAdminFeature: false, dependentFeatureId: 33 },
  { featureId: 39, featureName: 'PURCHASE_RETURN_REPORT', isEnabled: true, isSystemAdminFeature: false, dependentFeatureId: 33 },
]

export const DEFAULT_FEATURES: {userType: "DEFAULT_ADMIN_USER", acl: Array<number>} = {
    userType: 'DEFAULT_ADMIN_USER',
   acl: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39]
}