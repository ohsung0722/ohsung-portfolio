import "styled-components";
import type { AppTheme } from "./theme"; // 경로 맞게 조정!

declare module "styled-components" {
  export interface DefaultTheme extends AppTheme {}
}
