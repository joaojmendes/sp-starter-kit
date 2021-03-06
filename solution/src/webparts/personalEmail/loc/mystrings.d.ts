declare interface IPersonalEmailWebPartStrings {
  Error: string;
  Loading: string;
  NewEmail: string;
  NoMessages: string;
  NrOfMessagesToShow: string;
  PropertyPaneDescription: string;
  ViewAll: string;
}

declare module 'PersonalEmailWebPartStrings' {
  const strings: IPersonalEmailWebPartStrings;
  export = strings;
}
