import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryDispatchContext } from "../App";
import { getStringDate } from "../util/date";
import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";

const Diary = () => {

  const { id } = useParams();
  const diaryList = useContext(DiaryDispatchContext);
  const navigate = useNavigate();
  const [data, setDate] = useState();

  useEffect(() => {
    if (diaryList >= 1) {
      const targetDiary = diaryList.find((it) => parseInt(it.id) === parseInt(id));

      if (targetDiary) {
        setDate(targetDiary);
      }
      else {
        alert("없는 일기입니다.");
        navigate('/', {replace:true});
      }
    }
  }, [id, diaryList]);

  if (!data) {
    return <div className="DiaryPage">로딩중입니다,,,</div>;
  }
  else {
    return (
      <div className="DiaryPage">
        <MyHeader headText={`${getStringDate(new Date(data.date))} 기록`}
        leftChild={<MyButton text={"< 뒤로가기"} onClick={()=>navigate(-1)} />}
        rightChild={<MyButton text={"수정"} onClick={() => navigate(`/edit/${data.id}`)}/>}
        >
        </MyHeader>
      </div>
    )
  }
};

export default Diary;
