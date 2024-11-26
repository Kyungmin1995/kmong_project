import { dataType } from "@/app/lib/data";
import DataComponent from "./DataComponent";

//인덱스에서 더미데이터 Props 로 주는걸 컴포넌트에 전달
export default function NomalScreen({ data }: { data: dataType[] }) {
  // data 는 더미 데이터입니다
  return <DataComponent data={data} />;
}
