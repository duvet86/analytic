interface ITimeZoneCodeInfo {
  Code: string;
  Description: string;
}

interface ILanguageInfo {
  Language: string;
  Description: string;
}

interface ISomInfo {
  Som: string;
  Description: string;
}

interface IApplication {
  UniqueKey: string;
  Label: string;
  NeutralLabel: string;
  ShortLabel: string;
  NeutralShortLabel: string;
  Description: string;
  Order: number;
  ShowDescription: boolean;
  ShowNavigation: boolean;
  ShowMyItems: boolean;
  ShowMenuCustomisationBtn: boolean;
  SectionType: number;
  ShowHorizontalMenu: boolean;
  VerticalMenuShowForCurrentTopLevelItem: boolean;
  VerticalMenuShowAll: boolean;
  VerticalMenuShowTopLevelOnly: boolean;
  StartItemPath: string;
}

export interface IUserInfo {
  Applications: IApplication[];
  Languages: ILanguageInfo[];
  Soms: ISomInfo[];
  TimeZoneCodes: ITimeZoneCodeInfo[];
  DaylightSavingCodes: ITimeZoneCodeInfo[];
  DefaultLanguage: ILanguageInfo;
  DefaultSom: ISomInfo;
  TranslatorMode: boolean;
  Profile: {
    UserName: string;
    FirstName?: string;
    LastName?: string;
    EmailAddress?: string;
    TranslationMode: boolean;
    DefaultApp: string;
    OverrideLanguage?: string;
    OverrideSom?: string;
    EmailOptOut?: boolean;
    TimeZoneCode: string;
    DaylightSavingCode?: string;
    UserThumbUrl?: string;
  };
}
