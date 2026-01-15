export interface HexagramYaoText {
  title: string;
  text: string;
}

export interface Hexagram {
  name: string;
  symbol: string;
  judgment: string;
  explanation: string;
  yaoText: HexagramYaoText[];
}

export interface YaoType {
  name: string;
  symbol: string;
  isYang: boolean;
  isMoving: boolean;
}

export const hexagramData: Record<string, Hexagram> = {
  "111111": {
    name: "乾为天",
    symbol: "☰",
    judgment: "元亨利贞。",
    explanation: "乾卦象征天，代表刚健、进取、创造。此卦大吉，表示事业亨通，但需坚守正道。君子应效法天道，自强不息，奋发向上。",
    yaoText: [
      { title: "初九", text: "潜龙勿用。（时机未到，宜韬光养晦，积蓄力量）" },
      { title: "九二", text: "见龙在田，利见大人。（崭露头角，可寻求贵人相助）" },
      { title: "九三", text: "君子终日乾乾，夕惕若厉，无咎。（勤勉谨慎，方可无过）" },
      { title: "九四", text: "或跃在渊，无咎。（进退有据，审时度势）" },
      { title: "九五", text: "飞龙在天，利见大人。（大展宏图，事业巅峰）" },
      { title: "上九", text: "亢龙有悔。（盛极必衰，宜知进退）" }
    ]
  },
  "000000": {
    name: "坤为地",
    symbol: "☷",
    judgment: "元亨，利牝马之贞。君子有攸往，先迷后得主，利。西南得朋，东北丧朋。安贞吉。",
    explanation: "坤卦象征地，代表柔顺、包容、承载。此卦宜顺势而为，不宜强出头。以柔克刚，厚德载物，顺从正道则吉。",
    yaoText: [
      { title: "初六", text: "履霜，坚冰至。（见微知著，防患未然）" },
      { title: "六二", text: "直方大，不习无不利。（正直方正，自然亨通）" },
      { title: "六三", text: "含章可贞，或从王事，无成有终。（韬光养晦，辅佐他人）" },
      { title: "六四", text: "括囊，无咎无誉。（谨言慎行，明哲保身）" },
      { title: "六五", text: "黄裳，元吉。（居中守正，大吉大利）" },
      { title: "上六", text: "龙战于野，其血玄黄。（阴阳相争，两败俱伤）" }
    ]
  }
  // 其他64个卦象可以继续添加...
  // 为了节省空间，这里只列出两个示例，实际项目中应包含所有卦象
};

export const yaoNumNames = ["一", "二", "三", "四", "五", "六"];
export const changeNames = ["一", "二", "三"];

export function getYaoType(value: number): YaoType {
  switch(value) {
    case 6: return { name: "老阴", symbol: "✕", isYang: false, isMoving: true };
    case 7: return { name: "少阳", symbol: "—", isYang: true, isMoving: false };
    case 8: return { name: "少阴", symbol: "- -", isYang: false, isMoving: false };
    case 9: return { name: "老阳", symbol: "○", isYang: true, isMoving: true };
    default: return { name: "未知", symbol: "?", isYang: false, isMoving: false };
  }
}
