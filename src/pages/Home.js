import { useContext, useState } from "react";
// COMPONENTS
import MyHeader from "./../components/MyHeader";
import MyButton from "./../components/MyButton";
import { DiaryStateContext } from "../App";

const Home = () => {
  const diaryList = useContext(DiaryStateContext);
  
  const [curDate, setCurDate] = useState(new Date());
  
  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`
  // 버튼 클릭 -> 월이 바뀔 수 있도록 하는 메서드
  const increaseMonth = () => {
    setCurDate(new Date(curDate.getFullYear(), curDate.getMonth() + 1), curDate.getDate())
  }
  const decreaseMonth = () => {
    setCurDate(new Date(curDate.getFullYear(), curDate.getMonth() - 1), curDate.getDate())
  }
  return (
    <div>
      <MyHeader 
      headText={headText}
      leftChild={<MyButton text={"<"} onClick={decreaseMonth}/>}
      rightChild={<MyButton text={">"} onClick={increaseMonth}/>}
      >
      </MyHeader>
    </div>
  );
};

export default Home;
