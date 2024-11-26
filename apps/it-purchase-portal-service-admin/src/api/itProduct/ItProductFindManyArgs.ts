import { ItProductWhereInput } from "./ItProductWhereInput";
import { ItProductOrderByInput } from "./ItProductOrderByInput";

export type ItProductFindManyArgs = {
  where?: ItProductWhereInput;
  orderBy?: Array<ItProductOrderByInput>;
  skip?: number;
  take?: number;
};
