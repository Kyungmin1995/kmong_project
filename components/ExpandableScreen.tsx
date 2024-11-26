import { dataType } from "@/app/lib/data";
import DataComponent from "./DataComponent";

export default function ExpandableScreen({ data }: { data: dataType[] }) {
  // data 는 더미 데이터입니다
  return <DataComponent data={data} />;
}
