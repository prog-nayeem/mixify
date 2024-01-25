// declare module "public/svgs/*.svg" {
//   import React from "react";
//   const Component: React.FC<React.SVGProps<SVGSVGElement>>;

//   export default Component;
// }

declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}
