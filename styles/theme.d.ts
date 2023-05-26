import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      textDesc: string;
      textDescEmph: string;
    };
  }
}
