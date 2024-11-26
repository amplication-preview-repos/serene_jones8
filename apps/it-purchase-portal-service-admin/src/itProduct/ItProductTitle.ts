import { ItProduct as TItProduct } from "../api/itProduct/ItProduct";

export const ITPRODUCT_TITLE_FIELD = "productName";

export const ItProductTitle = (record: TItProduct): string => {
  return record.productName?.toString() || String(record.id);
};
