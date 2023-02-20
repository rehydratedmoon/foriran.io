import { GetAttributesValues } from "@strapi/strapi";

declare global {
  type Attrs<T> = React.ComponentPropsWithoutRef<T>;
  export type Children = { children?: React.ReactNode };
  type ClassName = { className?: string };
  type Stl = { style?: React.CSSProperties };
  type AnyProps = { [key: string]: any };

  interface Window {
    workbox: any;
  }

  // type B = keyof Strapi.Schemas;

  type StrapiResponse<T> = {
    data: DataItem<T>[];
    meta: any;
  };

  type DataItem<T> = {
    attributes: GetAttributesValues<T>;
    [key: string]: any;
  };
}
