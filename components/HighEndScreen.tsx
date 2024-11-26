import { dataType } from "@/app/lib/data";
import DataComponent from "./DataComponent";

//인덱스에서 더미데이터 Props 로 주는걸 컴포넌트에 전달
export default function HighEndScreen({ data }: { data: dataType[] }) {
  return <DataComponent data={data} />;
}
