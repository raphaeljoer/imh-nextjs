import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: {
        dark: string;
        light: string;
      };

      secundary: {
        dark: string;
        light: string;
      };
    };

    backgrounds: {
      primary: {
        dark: string;
        light: string;
      };

      secundary: {
        dark: string;
        light: string;
      };
    };

    fonts: {
      default: string;
      header: string;
      body: string;
    };
  }
}