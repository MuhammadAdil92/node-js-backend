import { ObjectId } from "mongodb";
import { REGEX } from "@/utils/constant";

export const formatDateTime = (date: Date | string): string => {
  return date.toLocaleString("en-US", {
    weekday: "long", // Tuesday
    year: "numeric", // 2025
    month: "long", // April
    day: "numeric", // 15
    hour: "numeric", // 10
    minute: "2-digit", // 42
    hour12: true, // PM
  });
};

export function isValidMongoId(id: ObjectId | string): boolean {
  return REGEX.MONOGO_OBJECT_ID_REGEX.test(id.toString());
}
